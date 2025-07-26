import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateSearchQueries(topic: string): Promise<string[]> {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `You are an expert teacher who suggests excellent videos based on "${topic}". Generate 5 YouTube search phrases to learn the topic from beginner to advanced. Return only a JSON array of strings.`;

  const result = await model.generateContent(prompt);
  const response = result.response;

  let text =  response.text().trim(); 
   if (text.startsWith("```")) {
    text = text.replace(/```(?:json)?\s*([\s\S]*?)\s*```/, "$1").trim();
  }
  console.log("Raw Gemini output:", text);

  try {
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    console.error("Parsing failed:", text);
    return [];
  }
}
