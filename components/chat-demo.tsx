"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckCheck } from "lucide-react";

interface Msg { id: number; from: "client" | "sofia"; text: string; delay: number; }

const MSGS: Msg[] = [
  { id: 1, from: "client", text: "Hola, ¿tienen cita mañana?",                                              delay: 700 },
  { id: 2, from: "sofia",  text: "Hola 😊 Claro que sí.\n¿A qué hora te queda mejor?\n· 10:00\n· 14:30\n· 17:00", delay: 1900 },
  { id: 3, from: "client", text: "14:30 perfecto",                                                           delay: 3600 },
  { id: 4, from: "sofia",  text: "Listo, quedaste agendado.\nMañana a las 14:30 · Corte Clásico con Carlos.\nTe esperamos.", delay: 5000 },
];

export function ChatDemo() {
  const [visible, setVisible] = useState<number[]>([]);
  const [typing, setTyping]   = useState(false);
  const time = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", hour12: false });

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];
    MSGS.forEach((msg) => {
      if (msg.from === "sofia") t.push(setTimeout(() => setTyping(true), msg.delay - 800));
      t.push(setTimeout(() => { setTyping(false); setVisible((v) => [...v, msg.id]); }, msg.delay));
    });
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-xs mx-auto rounded-3xl overflow-hidden shadow-2xl" style={{ background: "#0A0A0A", border: "1px solid #2A2A2A" }}>
      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-3" style={{ background: "#111111", borderBottom: "1px solid #1A1A1A" }}>
        <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-[#2A2A2A]">
          <Image src="/icon-192.png" alt="SofIA" width={36} height={36} className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#F5F5F5]">SofIA · BIA Barber</p>
          <p className="text-xs text-emerald-400">En línea</p>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-2.5 min-h-[280px]" style={{ background: "#0D0D0D" }}>
        {MSGS.map((msg) => (
          <div key={msg.id} className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
            style={{ opacity: visible.includes(msg.id) ? 1 : 0, transform: visible.includes(msg.id) ? "none" : "translateY(6px)", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${msg.from === "client" ? "rounded-tr-sm" : "rounded-tl-sm"}`}
              style={msg.from === "client"
                ? { background: "#D4AF37", color: "#0A0A0A" }
                : { background: "#1A1A1A", color: "#F5F5F5", border: "1px solid #2A2A2A" }}>
              {msg.text}
              <div className={`flex items-center gap-1 mt-1 ${msg.from === "client" ? "justify-end" : "justify-start"}`}>
                <span className="text-[10px] opacity-50">{time}</span>
                {msg.from === "client" && <CheckCheck className="w-3 h-3 opacity-60" />}
              </div>
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5" style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}>
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
