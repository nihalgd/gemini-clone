import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const sendPrompt = async (prompt) => {
  try {
    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return res.text;
  } catch (error) {
    console.log(error);
    return "DDaily limit reached. Please try again later";
  }
};