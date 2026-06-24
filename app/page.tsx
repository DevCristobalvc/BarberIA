import Image from "next/image";
import { ChatDemo } from "@/components/chat-demo";
import { Calendar, CheckCircle, Clock, MessageCircle } from "lucide-react";

const CLIENT_URL = "https://cliente-barberia.vercel.app";
const CRM_URL    = "https://panel-barberia.vercel.app/login";
const WA_URL     = "https://wa.me/573005412940?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20SofIA%20para%20mi%20barber%C3%ADa";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] overflow-x-hidden">

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A1A1A] bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/icon-192.png" alt="BarberIA" width={30} height={30} className="rounded-lg" />
            <span className="text-base font-semibold tracking-tight">BarberIA</span>
          </div>
          <nav className="flex items-center gap-2">
            <a href={CLIENT_URL} target="_blank" rel="noopener noreferrer"
              className="px-3 py-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors rounded-lg hover:bg-[#1A1A1A] hidden sm:block">
              Hablar con SofIA
            </a>
            <a href={CRM_URL} target="_blank" rel="noopener noreferrer"
              className="px-3 py-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors rounded-lg hover:bg-[#1A1A1A] hidden sm:block">
              Panel admin
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-gold text-[#0A0A0A] text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors">
              <WhatsAppIcon className="w-3.5 h-3.5" />
              Contratar
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6 pt-24 pb-16 max-w-5xl mx-auto">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            La secretaria con IA para tu barbería
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-5">
            Mientras tú cortas,<br />
            <span className="text-gold">la IA agenda clientes</span><br />
            por WhatsApp.
          </h1>

          <p className="text-base text-[#888888] max-w-md mb-8 leading-relaxed lg:mx-0 mx-auto">
            SofIA atiende clientes automáticamente, agenda citas y responde preguntas frecuentes. Las 24 horas. Sin que muevas un dedo.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:justify-start justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-gold text-[#0A0A0A] font-bold rounded-xl hover:bg-gold-light transition-all active:scale-[0.98] text-sm w-full sm:w-auto justify-center">
              <WhatsAppIcon className="w-4 h-4" />
              Contratar SofIA
            </a>
            <a href={CLIENT_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 border border-[#2A2A2A] text-[#F5F5F5] font-medium rounded-xl hover:bg-[#1A1A1A] transition-all active:scale-[0.98] text-sm w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4 text-[#888888]" />
              Hablar con SofIA gratis
            </a>
          </div>

          <p className="text-xs text-[#555555] mt-4">Sin contratos. Sin configuraciones complicadas.</p>
        </div>

        {/* Chat animado */}
        <div className="flex-shrink-0 w-full max-w-xs">
          <ChatDemo />
        </div>
      </section>

      {/* ── Conoce a SofIA ─────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gold/15 border-2 border-gold/30 flex items-center justify-center mx-auto mb-5 text-4xl">
            🤖
          </div>
          <h2 className="text-3xl font-bold mb-3">Conoce a SofIA</h2>
          <p className="text-[#888888] text-base mb-8 max-w-md mx-auto">
            La recepcionista virtual que trabaja para tu barbería 24 horas al día, 7 días a la semana.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left">
            {[
              "Responde WhatsApp en segundos",
              "Agenda, reprograma y cancela citas",
              "Recuerda las preferencias de cada cliente",
              "Funciona mientras la barbería está cerrada",
              "Nunca se cansa, nunca olvida nada",
              "Habla como una persona real",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-[#CCCCCC]">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 Beneficios ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-medium tracking-widest text-[#888888] uppercase mb-12">
            Lo que SofIA hace por ti
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "📱",
                title: "Nunca pierdas un cliente",
                desc: "SofIA responde inmediatamente, a cualquier hora. Tus clientes siempre obtienen una respuesta.",
              },
              {
                emoji: "📅",
                title: "Nunca cruces horarios",
                desc: "Antes de confirmar, SofIA revisa tu agenda. Cero doble-booking, cero errores.",
              },
              {
                emoji: "💰",
                title: "Llena tu agenda sola",
                desc: "Los clientes pueden reservar incluso a medianoche. Tu barbería trabaja aunque tú duermas.",
              },
            ].map((b, i) => (
              <div key={i} className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 hover:border-gold/25 transition-all">
                <div className="text-4xl mb-4">{b.emoji}</div>
                <h3 className="text-base font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-[#888888] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Storytelling ───────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Mientras tú haces esto...
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Barbero */}
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="text-5xl mb-4 text-center">✂️</div>
              <p className="text-center font-semibold mb-4 text-[#F5F5F5]">Tú cortas cabello</p>
              <p className="text-sm text-[#888888] text-center leading-relaxed">
                Enfocado en lo que mejor sabes hacer. Sin interrupciones, sin revisar el teléfono.
              </p>
            </div>

            {/* SofIA */}
            <div className="bg-[#111108] border border-gold/20 rounded-2xl p-6">
              <div className="text-5xl mb-4 text-center">🤖</div>
              <p className="text-center font-semibold mb-4 text-gold">SofIA trabaja para ti</p>
              <ul className="space-y-2.5">
                {[
                  "Responde WhatsApp al instante",
                  "Agenda las citas en tu calendario",
                  "Reprograma sin que te molesten",
                  "Confirma reservas automáticamente",
                  "Recuerda a quién le toca mañana",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-[#CCCCCC]">
                    <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-[#888888] text-sm mb-2">El resultado:</p>
            <p className="text-xl font-bold text-gold">Más clientes · Más citas · Más ingresos</p>
          </div>
        </div>
      </section>

      {/* ── Conversación completa ───────────────────────────── */}
      <section className="py-20 px-6 bg-[#050505] border-t border-[#1A1A1A]">
        <div className="max-w-sm mx-auto">
          <p className="text-center text-xs font-medium tracking-widest text-[#888888] uppercase mb-8">
            Así trabaja SofIA
          </p>
          <div className="bg-[#0E1117] rounded-3xl overflow-hidden border border-[#1A1F2E] shadow-2xl">
            <div className="bg-[#1A2333] px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-sm font-bold text-gold">S</div>
              <div>
                <p className="text-sm font-semibold text-white">SofIA · BIA Barber</p>
                <p className="text-xs text-emerald-400">● En línea</p>
              </div>
            </div>
            <div className="p-4 space-y-3 bg-[#0A0F1A]">
              {[
                { from: "c", text: "Hola, ¿trabajan el sábado?" },
                { from: "s", text: "¡Hola! Sí, abrimos el sábado de 9am a 8pm 💈\n¿Te gustaría agendar?" },
                { from: "c", text: "Sí, para un corte. ¿Cuánto vale?" },
                { from: "s", text: "El Corte Clásico vale $15.000 y dura 30 minutos.\n¿A qué hora te viene bien?\n• 10:00\n• 2:00\n• 4:30" },
                { from: "c", text: "4:30 perfecto" },
                { from: "s", text: "✅ Listo, quedaste agendado.\n📅 Sábado 4:30 PM · Corte Clásico\n✂️ Con Carlos\n\nTe esperamos 💈" },
              ].map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "c" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${msg.from === "c" ? "bg-[#2A5298] text-white rounded-tr-sm" : "bg-[#1E2A3A] text-[#E8EDF2] rounded-tl-sm"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-[#555555] mt-4">Esto pasa de forma automática, sin que toques el teléfono.</p>
        </div>
      </section>

      {/* ── Dashboard (secundario) ──────────────────────────── */}
      <section className="py-20 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-widest text-[#888888] uppercase mb-4">También incluye</p>
          <h2 className="text-2xl font-bold mb-3">Un panel para que tú tengas el control</h2>
          <p className="text-sm text-[#888888] mb-10 max-w-md mx-auto">
            Mientras SofIA trabaja, tú puedes ver tu agenda, tus clientes y todo lo que pasa en tu barbería.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { icon: <Calendar className="w-4 h-4 text-gold" />,      label: "Calendario en tiempo real",     desc: "Ve y mueve citas desde cualquier lugar." },
              { icon: <Clock className="w-4 h-4 text-gold" />,          label: "Historial de clientes",          desc: "Quién vino, cuándo, qué servicio pidió." },
              { icon: <CheckCircle className="w-4 h-4 text-gold" />,    label: "Notificaciones",                 desc: "Entérate de cada cita nueva al instante." },
            ].map((f, i) => (
              <div key={i} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mb-3">{f.icon}</div>
                <p className="text-sm font-semibold mb-1">{f.label}</p>
                <p className="text-xs text-[#888888]">{f.desc}</p>
              </div>
            ))}
          </div>
          <a href={CRM_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-[#2A2A2A] text-[#888888] text-sm rounded-xl hover:bg-[#1A1A1A] hover:text-[#F5F5F5] transition-colors">
            Ver demo del panel →
          </a>
        </div>
      </section>

      {/* ── CTA final ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#050505] border-t border-[#1A1A1A]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tu barbería necesita<br />
            <span className="text-gold">esta secretaria.</span>
          </h2>
          <p className="text-[#888888] text-base mb-8">
            Escríbenos por WhatsApp y configuramos todo. En menos de un día, SofIA ya está respondiendo por ti.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-[#0A0A0A] font-bold rounded-2xl hover:bg-gold-light transition-all active:scale-[0.98] text-base">
            <WhatsAppIcon className="w-5 h-5" />
            Contratar SofIA ahora
          </a>
          <p className="text-xs text-[#555555] mt-4">+57 300 541 2940 · Respuesta inmediata</p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[#1A1A1A] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/icon-192.png" alt="BarberIA" width={20} height={20} className="rounded-md" />
            <span className="text-sm font-medium">BarberIA</span>
          </div>
          <p className="text-xs text-[#555555]">
            El primer empleado digital para barberías · © 2025
          </p>
        </div>
      </footer>

    </div>
  );
}
