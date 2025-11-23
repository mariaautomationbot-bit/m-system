// netlify/functions/ai.js

import Groq from "groq-sdk";

export default async (req, res) => {
  try {
    const { prompt } = JSON.parse(req.body);

    if (!prompt) {
      return res.status(400).json({ error: "No prompt provided" });
    }

    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const chatCompletion = await client.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const reply =
      chatCompletion.choices?.[0]?.message?.content || "No response";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("AI ERROR:", error);
    return res.status(500).json({ error: "AI Server Error" });
  }
};
