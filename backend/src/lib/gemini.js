import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV } from "./env.js";

const genAI = new GoogleGenerativeAI(ENV.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const getGeminiReply = async (conversationHistory) => {
  const history = conversationHistory.map((msg) => ({
    role: msg.isBot ? "model" : "user",
    parts: [{ text: msg.text }],
  }));

  const chat = model.startChat({ history: history.slice(0, -1) });
  const lastMessage = history.at(-1).parts[0].text;

  const result = await chat.sendMessage(lastMessage);
  return result.response.text();
};