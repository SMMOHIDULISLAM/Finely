/**
 * Configuration for the FinelyBD visitor assistant.
 *
 * OUT OF THE BOX: the assistant answers from the built-in knowledge base in
 * `@/data/assistantKnowledge` — no key, no cost, works offline.
 *
 * AI UPGRADE (optional, free): create a free API key at
 * https://aistudio.google.com (Google AI Studio, free tier) and paste it
 * below. The assistant will then use Google's Gemini model for open-ended
 * questions, falling back to the knowledge base if the API is unreachable.
 *
 * Note: on a static website any key placed here is technically visible to
 * visitors who inspect the site code. The free tier is rate-limited, so
 * treat the key as replaceable — rotate it if you ever see abuse.
 */
export const assistantConfig = {
  geminiApiKey: "",
  model: "gemini-2.5-flash",
  /** Higher = stricter knowledge-base matching before asking the AI. */
  maxKnowledgeMatches: 1,
};
