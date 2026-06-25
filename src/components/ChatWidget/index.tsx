"use client";

import { useState, useRef, useEffect } from "react";
import { track } from "@/lib/tracker";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Merhaba! Başkent Dil Konuşma Merkezi'ne hoş geldiniz. Size nasıl yardımcı olabilirim?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv || !chatRef.current) return;

    const update = () => {
      if (!chatRef.current) return;
      const isMobile = window.innerWidth < 640;
      if (!isMobile) return;
      chatRef.current.style.top = `${vv.offsetTop}px`;
      chatRef.current.style.height = `${vv.height}px`;
    };

    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    update();
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, [open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    track("chat_message_sent");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok || !res.body) throw new Error("API hatası");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "" },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantText,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Üzgünüm, bir hata oluştu. Lütfen bizi arayın: 0 (312) 344 93 16",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          ref={chatRef}
          className="fixed left-0 right-0 top-0 z-50 flex flex-col bg-white overflow-hidden sm:inset-auto sm:bottom-24 sm:right-6 sm:top-auto sm:left-auto sm:h-[480px] sm:w-[340px] sm:rounded-2xl sm:shadow-2xl sm:border sm:border-gray-100"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#0077b6] to-[#005f8e] px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 shrink-0">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Başkent Dil Konuşma AI</p>
              <p className="text-xs text-white/70">Yapay zeka destekli asistan</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/70 hover:text-white transition"
              aria-label="Kapat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#0077b6] text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow-sm rounded-bl-sm border border-gray-100"
                  }`}
                >
                  {msg.content || (
                    <span className="flex gap-1 items-center py-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-gray-100 bg-white px-3 py-2.5 pb-[env(safe-area-inset-bottom,8px)]">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Mesajınızı yazın..."
              disabled={loading}
              className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] disabled:opacity-50 transition"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0077b6] text-white transition hover:bg-[#005f8e] disabled:opacity-40 shrink-0"
              aria-label="Gönder"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => {
          const next = !open;
          setOpen(next);
          if (next) track("chat_opened");
        }}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0077b6] to-[#005f8e] px-4 py-3 shadow-lg transition hover:shadow-xl hover:scale-105 active:scale-95"
        aria-label="Başkent Dil Konuşma AI"
      >
        {open ? (
          <>
            <svg className="h-5 w-5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <span className="text-sm font-semibold text-white">Kapat</span>
          </>
        ) : (
          <>
            <svg className="h-5 w-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
            <div className="text-left">
              <p className="text-xs font-bold text-white leading-tight">Başkent Dil Konuşma AI</p>
              <p className="text-[10px] text-white/75 leading-tight">Soru sormak için tıklayın</p>
            </div>
            <span className="ml-1 flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
          </>
        )}
      </button>
    </>
  );
}
