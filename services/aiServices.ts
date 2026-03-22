import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function analyzeMarket(marketData: string) {
  const model = "gemini-3-flash-preview";
  const prompt = `
    Analyze the following cryptocurrency market data and provide:
    1. A summary of current trends.
    2. Three specific trade suggestions (Buy/Sell) with entry, target, and stop loss.
    3. A sentiment score (0-100).
    
    Format the response as JSON with the following structure:
    {
      "summary": "string",
      "sentiment": number,
      "suggestions": [
        {
          "token": "string",
          "type": "BUY" | "SELL",
          "confidence": number,
          "reasoning": "string",
          "entryPrice": number,
          "targetPrice": number,
          "stopLoss": number
        }
      ]
    }
    
    Market Data:
    ${marketData}
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return null;
  }
}
