import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname)));

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

app.post("/generate", async (req, res) => {
  const userPrompt = req.body.prompt;

  if (!userPrompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const prompt1 = `You are a strict code generator; generate code based on the following request: "${userPrompt}"; return ONLY a single valid HTML document and nothing else; do not include explanations, markdown, comments, or backticks; the output must follow this exact structure with no deviation: <!DOCTYPE html><html><head><style>[css code]</style></head><body>[html code]<script>[js code]</script></body></html>; replace [css code] with valid CSS only, [html code] with valid HTML only, and [js code] with valid JavaScript only; if you cannot follow this format exactly, return nothing.`;

  try {
    const result = await model.generateContent(prompt1);
    const geminiResponse = await result.response;
    const html = geminiResponse.text();

    console.log(html);        
    return res.json({ html });   
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Gemini failed" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

