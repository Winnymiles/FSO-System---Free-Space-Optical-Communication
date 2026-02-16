import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: API_KEY });
  }
  return client;
};

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are the AI Assistant for the Free-Space Optical Communication System Capstone Project. You are an expert in FSO, MEMS mirrors, machine vision tracking, and drone/fixed target communication. The project is developed by students from Carleton University and Algonquin College (IT - Optical Systems and Sensors program), with NRC as industry partner. Supervisor: Dr. Ross Cheriton, Advisor: Dr. Wahab Almuhtadi. The system uses Spiral Scan algorithms for rapid acquisition with sub-5 second lock-on. Keep answers technical yet accessible.",
    },
  });
};

export const sendMessageToChat = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Communication error. Signal lost.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to FSO System. Please try again.";
  }
};