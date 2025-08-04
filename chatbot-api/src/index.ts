import { AutoRouter } from 'itty-router';
import OpenAI from "openai";

async function getEmbeddings(text: string, openai: OpenAI): Promise<number[]> {
  const embeddings = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
    encoding_format: "float",
  });
  console.log(embeddings)
  return embeddings.data;
}

const router = AutoRouter();

router.post('/chat', async (request, env) => {
	const { messages }: { messages: { role: 'system' | 'user' | 'assistant'; message: string; }[]; } = await request.json();
	const url = new URL(request.url);

	const openai = new OpenAI({ apiKey: env.OpenAIAPIKey });

	// For now, just return a dummy response
	return new Response(JSON.stringify({
			reply: 'Syntria\'s chatbot is still in development, but it\'s coming soon. Expect the chatbot to be finished by the end of the month!'
		}), {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});
});
router.options('/chat', () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
});

export default { ...router } // strips the proxy before returningw
