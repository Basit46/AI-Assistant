import Groq from "groq-sdk";

export function formatTimestamp(timestamp: number) {
  const dt = new Date(timestamp);

  const formattedDate = dt.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // Replace comma with bullet point separator
  return formattedDate.replace(", ", " ▪ ");
}

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROK_API_KEY,
  dangerouslyAllowBrowser: true,
});
export const getGroqChatCompletion = async (
  value: string,
  aiCharacter?: string,
  tone?: string,
  depthLevel?: string,
  responseLanguage?: string
) => {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant. Reply my prompts as if you are a ${aiCharacter}, your tone should be ${tone}, and your response should have a depth level of ${depthLevel}, reply me in this ${responseLanguage} language`,
      },

      {
        role: "user",
        content: value,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
};
