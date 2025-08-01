import { GoogleGenAI } from "@google/genai";

export default async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const model = "learnlm-2.0-flash-experimental";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `Write a script to generate 30 seconds video on topic : Interesting historical story along with Al image prompt in Realistic Tformat for each scene and give me result in JSON format with imagePrompt and ContentText as field
  `,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `\`\`\`json
  [
    {
      "imagePrompt": "Realistic oil painting style of a bustling Roman marketplace in 79 AD, vibrant colors, people in togas haggling, vendors selling fruits and pottery, Mount Vesuvius looming in the background, wisps of smoke emanating from the crater, warm sunlight.",
      "contentText": "In the vibrant city of Pompeii, 79 AD, life bustled with commerce. Imagine the scent of fresh fruit, the calls of merchants, and the majestic Mount Vesuvius watching over it all."
    },
    {
      "imagePrompt": "Realistic cinematic shot of a loving Roman family in their courtyard, children playing with toys, a woman tending to a garden, a man reading a scroll, calm and peaceful atmosphere, Mount Vesuvius prominently displayed in the background, faint smoke in the sky.",
      "contentText": "Families lived peacefully, their homes filled with laughter and love, oblivious to the impending doom. But a change was in the air, faint smoke a silent warning from the mountain."
    },
    {
      "imagePrompt": "Realistic catastrophic scene of Mount Vesuvius erupting violently, black smoke and ash billowing into the sky, burning projectiles raining down on Pompeii, buildings collapsing, people running in terror, fiery orange glow illuminating the darkness.",
      "contentText": "Suddenly, Vesuvius erupted! A cataclysmic blast of fire and ash engulfed the city. The sky turned black, and terror reigned."
    },
    {
      "imagePrompt": "Realistic depiction of Pompeii buried under layers of volcanic ash and pumice, a desolate and silent landscape, the outlines of buildings barely visible, a thick blanket of gray covering everything, eerie stillness and silence.",
      "contentText": "Pompeii was buried, frozen in time, a city lost to history under a shroud of ash. Silence replaced the vibrant sounds of life."
    },
    {
      "imagePrompt": "Realistic rendering of archeologists carefully excavating the ruins of Pompeii in the 18th century, digging through ash and pumice, discovering preserved buildings and artifacts, feeling of awe and wonder, sunlight streaming into the excavated areas.",
      "contentText": "Centuries later, archaeologists unearthed the city, revealing a snapshot of Roman life. The discovery was awe-inspiring, a ghost town whispering its secrets."
    },
    {
      "imagePrompt": "Realistic recreation of the plaster casts of Pompeii victims, frozen in their final moments, contorted expressions of fear and pain, poignant and haunting imagery, soft lighting emphasizing the human tragedy, displayed in a museum setting.",
      "contentText": "The plaster casts of the victims, captured in their final moments, serve as a poignant reminder of the tragedy and the power of nature. Pompeii, a city entombed, a story forever preserved."
    }
  ]
  \`\`\`
  `,
        },
      ],
    },
  ];
}
