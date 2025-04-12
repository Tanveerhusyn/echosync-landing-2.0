"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "How does EchoSync work?",
  "How many new reviews can I expect in a month?",
  "Is EchoSync Google compliant?",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm EchoSync's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rateLimit, setRateLimit] = useState<{
    remaining: number;
    reset: number;
  } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Auto-popup after 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || (rateLimit && rateLimit.remaining <= 0))
      return;

    const userMessage = input.trim();
    setInput("");
    setError(null);
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      console.log("Sending message to API:", userMessage);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      console.log("API response status:", response.status);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
      setRateLimit({
        remaining: data.rateLimit.remaining,
        reset: data.rateLimit.reset,
      });
    } catch (error: unknown) {
      console.error("Error in chat:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Sorry, something went wrong. Please try again later."
      );
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptClick = async (prompt: string) => {
    if (isLoading) return;

    const userMessage = prompt;
    setInput("");
    setError(null);
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      console.log("Sending message to API:", userMessage);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      console.log("API response status:", response.status);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
      setRateLimit({
        remaining: data.rateLimit.remaining,
        reset: data.rateLimit.reset,
      });
    } catch (error: unknown) {
      console.error("Error in chat:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Sorry, something went wrong. Please try again later."
      );
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:scale-110 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 ease-in-out"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-[calc(100vw-32px)] sm:w-[400px] h-[500px] sm:h-[600px] flex flex-col max-w-[96vw] border animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-primary to-blue-900 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <div className="font-semibold text-base">
                  EchoSync Assistant
                </div>
                <div className="text-xs text-white/70">Always here to help</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white/90 hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } animate-in slide-in-from-${
                  message.role === "user" ? "right" : "left"
                }-2 duration-200`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 ${
                    message.role === "user"
                      ? "bg-primary text-white ml-4"
                      : "bg-white shadow-sm border mr-4"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border rounded-2xl p-3 mr-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-150" />
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-4 bg-gray-50/50">
              <p className="text-sm text-gray-500 mb-2">Try asking me:</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_PROMPTS.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handlePromptClick(prompt)}
                    className="text-xs bg-white hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-full border shadow-sm transition-colors hover:border-primary/30 hover:text-primary"
                    disabled={isLoading}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t bg-white rounded-b-2xl">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary transition-colors"
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
            <div className="mt-3 text-center">
              <button
                onClick={() =>
                  (window.location.href = "mailto:faizan@echosync.ai")
                }
                className="text-xs text-gray-500 hover:text-primary transition-colors flex items-center justify-center gap-1"
              >
                <span>Contact us directly</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
