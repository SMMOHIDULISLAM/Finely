import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { assistantConfig } from "@/config/assistant";
import {
  assistantIdentity,
  fallbackAnswer,
  knowledgeBase,
} from "@/data/assistantKnowledge";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

/** Common words that carry no topic signal — excluded from matching. */
const STOPWORDS = new Set([
  "how", "what", "who", "why", "when", "where", "which", "you", "your",
  "yours", "are", "the", "and", "for", "with", "can", "could", "would",
  "should", "is", "are", "was", "were", "does", "do", "did", "from",
  "about", "into", "onto", "per", "via", "any", "all", "some", "this",
  "that", "these", "those", "have", "has", "had", "get", "got",
]);

/**
 * Scores a question against the knowledge base and returns the best entry.
 */
function matchKnowledge(question: string) {
  const words = question
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w));
  let best: { index: number; score: number } = { index: -1, score: 0 };
  knowledgeBase.forEach((entry, index) => {
    const score = entry.keywords.reduce((sum, keyword) => {
      const kw = keyword.toLowerCase();
      const hit =
        words.some((w) => kw.includes(w) || w.includes(kw)) ||
        question.toLowerCase().includes(kw);
      return sum + (hit ? kw.split(" ").length || 1 : 0);
    }, 0);
    if (score > best.score) best = { index, score };
  });
  return best.index >= 0 && best.score >= 1
    ? knowledgeBase[best.index].answer
    : null;
}

/** Optional free Gemini upgrade — only runs when an API key is configured. */
async function askGemini(history: ChatMessage[]): Promise<string | null> {
  const key = assistantConfig.geminiApiKey.trim();
  if (!key) return null;
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${assistantConfig.model}:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: assistantIdentity }] },
          contents: history.slice(-6).map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
          generationConfig: { maxOutputTokens: 300, temperature: 0.4 },
        }),
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
  } catch {
    return null;
  }
}

const welcomeMessage =
  "Hello — I'm the FinelyBD assistant. Ask me about our services, payments, leadership, or how to get in touch.";

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: welcomeMessage },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function send(raw?: string) {
    const text = (raw ?? input).trim();
    if (!text || busy) return;
    setInput("");
    const history: ChatMessage[] = [
      ...messages,
      { role: "user" as const, content: text },
    ];
    setMessages([...messages, { role: "user", content: text }]);
    setBusy(true);
    try {
      const local = matchKnowledge(text);
      const ai = local ? null : await askGemini(history);
      const reply = local ?? ai ?? fallbackAnswer;
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="assistant-widget">
      {open && (
        <div className="assistant-panel" role="dialog" aria-label="FinelyBD assistant">
          <div className="assistant-head">
            <div className="assistant-title">
              <Sparkles size={16} />
              <span>FinelyBD Assistant</span>
            </div>
            <button
              type="button"
              className="assistant-close"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              <X size={16} />
            </button>
          </div>
          <div className="assistant-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <p key={i} className={`assistant-msg ${m.role}`}>
                {m.content}
              </p>
            ))}
            {busy && <p className="assistant-msg assistant typing">Thinking…</p>}
          </div>
          <div className="assistant-actions">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact the team →
            </Link>
          </div>
          <form
            className="assistant-input"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, payments…"
              aria-label="Ask the FinelyBD assistant"
            />
            <button type="submit" disabled={busy} aria-label="Send message">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="assistant-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open FinelyBD assistant"}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
