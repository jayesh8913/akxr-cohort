import dotenv from 'dotenv';
dotenv.config()
import { GoogleGenerativeAI } from "@google/generative-ai"; // Fixed the name here

console.log("Your API Key is:", process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

let USERPROMPT = "give me a simple code for a todolist";
let promt = `You are a strict code generator; generate code based on the following request: "${USERPROMPT}"; return ONLY a single valid HTML document and nothing else; do not include explanations, markdown, comments, or backticks; the output must follow this exact structure with no deviation: <!DOCTYPE html><html><head><style>[css code]</style></head><body>[html code]<script>[js code]</script></body></html>; replace [css code] with valid CSS only, [html code] with valid HTML only, and [js code] with valid JavaScript only; if you cannot follow this format exactly, return nothing.`

async function main() {
  try {
    const result = await model.generateContent(promt);
    const response = await result.response;
    console.log(response.text());
  } catch (err) {
    console.error("DETAILED ERROR:", err);
    console.error("Initialization Error: Check if your API Key is correct in .env");
  }
}

main();