import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

async function generateOGImage() {
  // Use the environment variable directly
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    console.error("Neither GEMINI_API_KEY nor API_KEY is set");
    return;
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = "A professional and warm social media sharing banner (1200x630) for '전주 효자동 전주W한의원'. The banner features a trustworthy-looking Korean male doctor in a white coat. The background is a clean, modern clinic interior with soft warm lighting. In the center or side, there is elegant Korean text: '몸의 불균형을 바로잡고, 일상을 회복하는 길을 함께합니다.' followed by '한의사 박승현'. The overall aesthetic is minimal, premium, and welcoming.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // Using the default image model
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          const buffer = Buffer.from(base64Data, 'base64');
          const outputPath = path.join(process.cwd(), 'public', 'image', 'og-banner.png');
          fs.writeFileSync(outputPath, buffer);
          console.log("SUCCESS: OG Image saved to " + outputPath);
          return;
        }
      }
    }
    console.error("No image data found in response. Response text: " + response.text);
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

generateOGImage();
