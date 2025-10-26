import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateSearchQueries(topic: string): Promise<{ description: string; queries: string[] }> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are an expert teacher who suggests excellent, outstanding videos based on "${topic}".  
1. Write a short description of the topic in **10-20 words**.  
2. Suggest 5 YouTube search phrases to learn it from beginner to advanced, ensuring videos are from famous channels and not shorts.  
Return only valid JSON in this exact format:
{
  "description": "10-20 word description here",
  "queries": ["query1", "query2", "query3", "query4", "query5"]
}
`;

  const result = await model.generateContent(prompt);
  const response = result.response;

  let text = response.text().trim();
  if (text.startsWith("```")) {
    text = text.replace(/```(?:json)?\s*([\s\S]*?)\s*```/, "$1").trim();
  }

  console.log("Raw Gemini output:", text);

  try {
    const parsed = JSON.parse(text);
    if (
      parsed &&
      typeof parsed.description === "string" &&
      Array.isArray(parsed.queries)
    ) {
      return parsed;
    }
    return { description: "", queries: [] };
  } catch {
    console.error("Parsing failed:", text);
    return { description: "", queries: [] };
  }
}
