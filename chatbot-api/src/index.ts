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

// Documents are so small, we don't even need OpenAI embeddings
const contextDoc =
`Use the following information about the company, Syntria, in your response.
Syntria information:
Syntria Mission: Empowering mental wellness through science-backed, engaging technology to connect people to tools that strengthen minds and improve lives.

The Product:

“Skylar’s Run” is a cognitive skills training video game designed to improve attention, impulse control, and self regulation. The adventure game utilizes Electroencephlogram (EEG) technology to train the mind of its user. Using an EEG headset, the attention levels are measured every 1/10th of a second in order to control the runner. The more the user pays attention, the faster Skylar Runs.

Throughout the 15 missions, the user is trained on 13 cognitive skills that increase cognitive function. Users will play Skylar’s Run 3-4 times per week for 6-8 weeks. The sessions last 20-30 minutes for a total of around 8 hours of gameplay to receive the results.

IMPACT OF ATTENTIONAL CHALLENGES ACROSS THE LIFESPAN
Lower graduation rates
42% increase in attentional challenges in the last 8 years
2x mortality In childhood
33% more likely to be in a car crash
2-3x greater risk for substance abuse disorder
9x chance of impairment in home life, friendships, and leisure activities
Less emotional closeness, less cooperation and more conflicts with teachers and peers
Increased rates of incarceration
Increased rates of detention and expulsion
 Poorer academic performance
$28.8B annual lost productivity6
$8.3B ADHD out of pocket costs7 
3x ↑ substance abuse disorder8
18/20 common psychiatric conditions tied to attention
3 yrs earlier dementia onset9
52% ↓ graduation rate5  
28% college grad rate (ADHD)5 
44% ↑ fall risk in elderly3 
90% ↑ risk of injury for athletes w/ depression4
36% ↑ car crash risk1  
30-50% ↑ missed appointments2 

Gameplay:
Mission 1
Calabrus: 
Move your face in several different ways to differentiate facial movements from other brain signals
Removes EEG artifacts
Runner
Use your attention to move Skylar forward
Use your fingers to make Skylar move side to side, jump or duck
Vigilock
Tap the screen when you see light
Compares brain activity in fast vs. slow responses 
Gamified Psychomotor Vigilance Test
Missions 2-15
Runner: 10-18 minutes controlling Skylar - the running character and guiding them through the planet
Fog Analysis: Essentially the “homework” portion of the game where the user learns for 6 minutes
Tips for Headset success:
No hair between sensors and skin
Headset on before logging into game
Fit is snug but not uncomfortable
Saline or water can help connectivity
Yellow=not charged and Green =charged
Takeaways:
The goal is to finish, either passing or failing.  No credit for stopping part way through the runner module or molecule module
Video games work because they challenge just above skill level  fostering engagement and motivation
Game should be played 3-4 times/week for 6-8 weeks
Harder and easier at different points depending on the individual.  E.g., Missions 7-9 are sometimes more difficult 
Make sure to play on Wi-Fi
3 attempts to pass and then you are automatically moved onto to next mission

More how it works:
Skylar’s Run offers 15 playable levels, called missions, designed to improve attention and impulse control. During the first mission, Skylar’s Run uses the headset measurements to assess the player’s current attentional abilities.
Then, as the missions progress, the player immediately undergoes the process of progressively enhancing his or her own cognitive functions, starting with sustained attention and distraction suppression while receiving encouragement through the use of inner voice monologues for the pursuit of each level’s prize.
The whole time, Skylar’s Run dynamically adjusts its own difficulty based upon real-time measurements from the AV headset. When the game is too hard, it will automatically reduce difficulty to avoid frustration. When it is too easy, the difficulty is increased to avoid boredom. The game’s difficulty then becomes an ongoing feedback loop to sustain a fun but challenging experience.
The headset continuously monitors a child’s attention level, measuring it every 1/10th of a second. This real-time data guides Skylar, the main character, through thrilling adventures. The more a child pays attention, the greater their success and rewards in the game.


Clinically Tested and Proven Effective
Skyler’s Run consists of 13 personalized cognitive skills, designed to improve attention, inhibition, and self-regulatory control. Each mission within Skylar’s Run is carefully crafted to develop and master these skills through interactive play. By repeatedly challenging and expanding these cognitive abilities, children can enhance their ability to focus, manage impulses, and regulate themselves effectively, leading to success in school, home, and social settings.
The effectiveness of Skyler’s Run is backed by extensive scientific research. We have conducted eight clinical studies involving 337 children with ADHD, with the majority being randomized controlled trials. Our treatments have demonstrated significant improvements in attention, academic achievement, and behavior, as measured by the ADHD Rating Scale.
Skylar’s Run offers a holistic learning experience by seamlessly integrating adaptive gameplay, Feed Forward Technology, and the inherent benefits of learning through play. Our video game dynamically adjusts to the player’s current ability levels, ensuring engagement and maintaining an optimal learning and improvement zone. The Thynk technology not only restores lost or impaired functions but enhances cognitive capabilities by providing real-time feedback of brain activity. Participants gain immediate insight into desired behaviors and cognitive activities taught within the game, reinforcing skills. Video games, being a powerful medium for learning, allow children to excel and master new skills without external pressure or rewards, thereby reducing frustration commonly observed in traditional learning environments.

Market targets:
Syntria was formed in June 2025 by former THYNK Co-Founder Jennifer Gentile with a goal of expanding the reach past education and into a diverse group of markets. Those markets include:

Concierge Medicine
These include private pediatric and adult practices (e.g. Crescendo MD in California). The delivery method proposed is B2B2C where the physician is referring patients to Syntria in order to receive better outcomes for their clients (see chart below for value proposition)
Mental Health Groups
These groups are mental health and substance use treatment centers that provide support for those going through mental health issues (e.g. Thresholds in Chicago). The delivery method would be B2B in this case.
Sports Performance
Youth, club and sports programs (B2B), and sports performance coaches (B2B2C) all have use for the product. 
Elder Care
Syntria plans to sell to both assisted living (B2B) and home caregiving practices (B2B2C)
Microschools (B2B)
These very small schools (typically <20 students) have a need for engaging technologies that provide support for students with difficulty learning.
The clinical unmet need or problem the technology seeks to address in 100 words
Cognitive impairments underlie a wide range of conditions including ADHD, anxiety, depression, brain injury, and age-related decline. Yet, few tools exist to directly train cognitive skills like attention and inhibition in a way that is engaging, measurable, and scalable. Skylar’s Run meets and exceeds this need by providing a validated, EEG-driven training protocol that strengthens executive functioning in diverse populations, offering clinicians and programs a low-lift way to augment treatment, reduce symptom burden, and improve functioning.  We have done multiple studies to prove the effectiveness of the product, including:
Lim et al. (2010)
Pilot study on BCI for ADHD – Psychopharm Bulletin

Lim et al. (2012)
BCI-based attention training – Conference paper

McDermott et al. (2016)
Feed-forward model improves attention & academics – J. Attention Disorders

Lim et al. (2019)
RCT of BCI training – PLOS ONE

PLOS ONE (2012)
ADHD symptom reduction via BCI – e46692

Qian et al. (2018)
BCI normalizes brain networks – Translational Psychiatry

Herman & Rose (2023)
BCI + video game pilot study – APSARD 2024

Rose & Herman (2025)
Transfer effects on ADHD & academics – APSARD 2025


What is the current state of the art or standard of care for the above market/patient population — (150 words)
Across mental health, clinical care, and aging populations, interventions targeting cognitive dysfunction typically rely on medication, therapy, compensatory behavioral strategies, or traditional neurofeedback. These methods often lack scalability, engagement, or direct cognitive skill enhancement. Medications may improve symptoms but don’t build core brain capacity, while therapy may address behavior but not cognition. Most digital tools focus on symptom tracking, not brain training. Neurofeedback is effective but costly, time-intensive, and difficult to scale. Skylar’s Run addresses these gaps with a gamified brain training solution that is fast, fun, and founded in neuroscience. By offering a structured eight-week protocol that trains 13 cognitive skills, it provides a repeatable, measurable, and scalable path to improved functioning for patients and clients across sectors.

What is the regulatory pathway for your product — (75 words)
Skylar’s Run is offered as a non-medical cognitive training tool and therefore does not have FDA clearance. It supports executive function but does not diagnose or treat disease. Future versions may pursue regulatory approval as digital therapeutics, particularly for ADHD or cognitive decline. I will monitor regulatory developments and collaborate with Thynk if therapeutic versions are developed.

Where did the technology originate? If a license to practice and/or develop is required, has it been in-licensed and from whom? — (75 words)
The technology originated at Thynk, Inc., a Massachusetts-based neurotechnology company founded by scientists and clinicians. Developed with NIH-funded research and clinical trials, our company holds a commercial license from Thynk to use and resell Skylar’s Run in mental health, clinical/healthcare, sports, and aging sectors.

Pricing: We offer a flexible pricing plan that is negotiable. We encourage you to contact us for more information.`;

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
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    // The systemInstruction field gets the context about the company..
    systemInstruction: contextDoc,
  });

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
