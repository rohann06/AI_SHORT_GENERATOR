import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  console.log("API endpoint hit"); // Debug log

  try {
    const { prompt, model = "gemma-3n-e2b-it" } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const contents = [{ role: "user", parts: [{ text: prompt }] }];
    const response = await ai.models.generateContent({ model, contents });

    if (!response.text) {
      return NextResponse.json(
        { error: "No content generated" },
        { status: 500 }
      );
    }

    try {
      const jsonMatch = response.text.match(/```json\n([\s\S]*?)\n```/);
      if (jsonMatch?.[1]) {
        return NextResponse.json(JSON.parse(jsonMatch[1]));
      }
      return NextResponse.json({ text: response.text });
    } catch (e) {
      return NextResponse.json({ text: response.text });
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
