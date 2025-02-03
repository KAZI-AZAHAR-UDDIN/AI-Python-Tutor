import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

let apiKey = process.env.GEMINI_API_KEY; // Default API key
let genAI = new GoogleGenerativeAI(apiKey);

// Handle chat request
export const askGemini = async (req, res) => {
  try {
    const userMessage = req.body.message + " Provide a detailed, step-by-step explanation.";

    // Initialize model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(userMessage);
    const response = await result.response;

    console.log("Full AI Response:", JSON.stringify(response, null, 2));

    const text =
      response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini AI.";

    res.json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to get response from Gemini AI" });
  }
};

// Update API Key
export const updateApiKey = (req, res) => {
  const { newApiKey } = req.body;

  if (!newApiKey) {
    return res.status(400).json({ error: "API key is required" });
  }

  apiKey = newApiKey; // Update API key
  genAI = new GoogleGenerativeAI(apiKey);
  console.log("Updated API Key:", apiKey); 
  res.json({ message: "API key updated successfully!" });
};
