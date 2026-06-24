"use client";

import { useEffect, useState } from "react";
import { Check, CheckCheck } from "lucide-react";

interface Msg {
  id: number;
  from: "client" | "sofia";
  text: string;
  delay: number; // ms
}

const CONVERSATION: Msg[] = [
  { id: 1, from: "client", text: "Hola 👋 ¿tienen cita mañana?",                          delay: 600 },
  { id: 2, from: "sofia",  text: "¡Hola! Soy SofIA 😊 Claro que sí. ¿A qué hora te queda mejor?\n• 10:00 AM\n• 2:30 PM\n• 5:00 PM",  delay: 1800 },
  { id: 3, from: "client", text: "2:30 perfecto",                                           delay: 3400 },
  { id: 4, from: "sofia",  text: "¡Listo! ✅ Tu cita está confirmada.\n📅 Mañana a las 2:30 PM\n✂️ Corte Clásico con Carlos\n\nTe esperamos 💈",  delay: 4800 },
];

export function ChatDemo() {
  const [visible, setVisible] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    CONVERSATION.forEach((msg, i) => {
      // Show typing indicator before sofia replies
      if (msg.from === "sofia") {
        timers.push(setTimeout(() => setTyping(true), msg.delay - 700));
      }
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setVisible((v) => [...v, msg.id]);
        }, msg.delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto bg-[#0E1117] rounded-3xl overflow-hidden shadow-2xl border border-[#1A1F2E]">
      {/* WhatsApp header */}
      <div className="bg-[#1A2333] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-sm font-bold text-gold">
          S
        </div>
        <div>
          <p className="text-sm font-semibold text-white">SofIA · BIA Barber</p>
          <p className="text-xs text-emerald-400">● En línea</p>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-2.5 min-h-[280px] bg-[#0A0F1A]">
        {CONVERSATION.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"} transition-all duration-300 ${visible.includes(msg.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                msg.from === "client"
                  ? "bg-[#2A5298] text-white rounded-tr-sm"
                  : "bg-[#1E2A3A] text-[#E8EDF2] rounded-tl-sm"
              }`}
            >
              {msg.text}
              <div className={`flex items-center gap-1 mt-1 ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
                <span className="text-[10px] opacity-50">
                  {new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", hour12: false })}
                </span>
                {msg.from === "client" && <CheckCheck className="w-3 h-3 text-blue-400 opacity-70" />}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-[#1E2A3A] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#888] animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#888] animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#888] animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
