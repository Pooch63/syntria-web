import { AutoRouter } from 'itty-router';
// import OpenAI from "openai";

// async function getEmbeddings(text: string, openai: OpenAI): Promise<number[]> {
//   const embeddings = await openai.embeddings.create({
//     model: "text-embedding-3-small",
//     input: text,
//     encoding_format: "float",
//   });
//   console.log(embeddings)
//   return embeddings.data;
// }

import { GoogleGenerativeAI, Part } from '@google/generative-ai';

/**
 * Represents a single message in the conversation history.
 */
export interface ChatMessage {
  role: 'user' | 'model';
  parts: (string | Part)[]; // Can be a string for simple text or a Part object for more complex content (e.g., images)
}
export interface Env {
	GEMINI_API_KEY: string;
}

/**
 * Generates an AI response based on a conversation history using the Google Gemini API.
 *
 * @param apiKey Your Google Gemini API key.
 * @param history An array of ChatMessage objects representing the conversation history.
 * @returns A Promise that resolves to the AI's response as a string.
 * @throws An error if the API call fails.
 */
export async function getGeminiResponse(apiKey: string, history: ChatMessage[]): Promise<string> {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  // Prepare the history for the Gemini API, ensuring 'user' and 'model' roles alternate correctly.
  // The Gemini API expects roles to alternate. If the history doesn't start with 'user',
  // or has consecutive messages from the same role, you might need to adjust it.
  // For simplicity, this example assumes a well-formed alternating history.
  const apiHistory = history.map(msg => ({
    role: msg.role,
    parts: msg.parts.map(part => typeof part === 'string' ? { text: part } : part),
  }));

  const chat = model.startChat({
    history: apiHistory,
    // You can also add generation config or safety settings here
    generationConfig: {
      maxOutputTokens: 200,
    },
  });

  try {
    const result = await chat.sendMessageStream(''); // Send an empty message to get the next turn based on history
    let fullResponse = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullResponse += chunkText;
    }
    return fullResponse;
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    throw new Error('Failed to get AI response from Gemini API.');
  }
}

const router = AutoRouter();

router.post('/chat', async (request, env) => {
	const { messages }: { messages: ChatMessage[]; } = await request.json();
	console.log(messages)

	let reply: string | null = null;
	try {
		reply = await getGeminiResponse(env.GEMINI_API_KEY ?? "AIzaSyALBjn4Hxc1OX9eqmx3rBBvoSs_hYGqH3k", messages);
	} catch (error) {
		reply = `A server error occurred: ${error}`;
	}

	// For now, just return a dummy response
	return new Response(JSON.stringify({ reply }), {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		},
	});
});
router.options('*', () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
});

export default { ...router } // strips the proxy before returningw
