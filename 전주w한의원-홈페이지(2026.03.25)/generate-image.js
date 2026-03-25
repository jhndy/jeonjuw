import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage() {
  try {
    console.log('Generating image...');
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A clean, modern Korean medicine clinic interior reception desk, bright and welcoming, warm wood and beige tones, no advertisements or posters, professional and calming atmosphere, high quality, photorealistic, wide angle.',
          },
        ],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        
        const filePath = path.join(publicDir, 'hero-bg.png');
        fs.writeFileSync(filePath, buffer);
        console.log(`Image saved to ${filePath}`);
        break;
      }
    }
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

generateImage();
