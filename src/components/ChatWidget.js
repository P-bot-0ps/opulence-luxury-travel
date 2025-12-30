"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const videoRef = useRef(null);
  const chatRef = useRef(null);

  // Play video with sound on hover
  const handlePlayWithSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  // Reset video after playback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.muted = true;
      });
    }
  }, []);

  // 🔥 Listen for Telegram replies via SSE
  useEffect(() => {
    const eventSource = new EventSource("/api/telegram/stream");

    eventSource.onmessage = (event) => {
      const text = event.data;

      const consultantMessage = {
        id: Date.now(),
        role: "consultant",
        content: text,
      };

      setMessages((prev) => [...prev, consultantMessage]);

      setTimeout(() => {
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, 50);
    };

    return () => eventSource.close();
  }, []);

  // Send message to Telegram
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    await fetch("/api/telegram/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-800 text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 ease-in-out z-[9999]"
      >
        🛎️ Speak to a Consultant
      </button>

      {/* Chat Box */}
      <div
        className={`fixed bottom-24 right-6 w-80 bg-white border border-gray-300 rounded-xl shadow-2xl flex flex-col z-[9999] transform transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-blue-900 text-white px-4 py-2 rounded-t-xl flex items-center gap-3">
          <video
            ref={videoRef}
            src="/chat-concierge.mp4"
            muted
            playsInline
            onMouseEnter={handlePlayWithSound}
            className="w-20 h-30 rounded-full border border-white object-cover"
          />
          <span className="font-semibold">Opulence Concierge</span>
        </div>

        <div
          ref={chatRef}
          className="p-2 space-y-2 overflow-y-auto max-h-60 text-sm text-gray-700"
        >
          <p className="text-gray-500">
            Hi there! How can we assist your journey today?
          </p>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded-md ${
                msg.role === "user"
                  ? "bg-yellow-100 text-right"
                  : "bg-gray-100 text-left"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="border-t px-8 py-4 text-lg focus:outline-none rounded-b-xl w-full"
          />
        </form>
      </div>
    </>
  );
}
