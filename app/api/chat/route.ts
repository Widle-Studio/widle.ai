import { streamText } from 'ai';
// Temporarily using a mock for the build to succeed if openai package isn't matching perfectly
import { createOpenAI } from '@ai-sdk/openai';

export const maxDuration = 30;

const openai = createOpenAI({
  compatibility: 'strict',
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `You are a helpful and knowledgeable AI assistant for widle.ai, an enterprise AI solutions company.
  Your primary goal is to help visitors understand how widle.ai can help their business.

  Core Services:
  - LLMs & RAG (Retrieval-Augmented Generation)
  - AI Agents (Autonomous systems)
  - MLOps (Machine Learning Operations)
  - Computer Vision
  - Predictive Analytics
  - Strategic AI Consulting

  Tone: Professional, knowledgeable, concise, and helpful.

  If someone asks about pricing or detailed technical implementations, encourage them to schedule a consultation via the /contact page.
  Keep responses relatively brief (1-3 short paragraphs max) unless explicitly asked for detailed information.`;

  const result = await streamText({
    model: openai('gpt-4o-mini') as Parameters<typeof streamText>[0]["model"], // Typecast to bypass version mismatch
    messages,
    system: systemPrompt,
  });

  return result.toAIStreamResponse();
}
