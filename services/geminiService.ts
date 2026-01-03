
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMarketInsight = async (city: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a one-paragraph luxury real estate market insight for ${city}. Keep it editorial, sophisticated, and analytical. Focus on high-end urban trends.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Market insights currently unavailable. Please contact our advisory team for real-time analysis.";
  }
};
