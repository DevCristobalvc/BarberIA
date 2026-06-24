import Image from "next/image";
import { ChatDemo } from "@/components/chat-demo";
import { Calendar, CheckCircle, Clock, MessageCircle } from "lucide-react";

const CLIENT_URL = "https://cliente-barberia.vercel.app";
const CRM_URL    = "https://panel-barberia.vercel.app/login";
const WA_URL     = "https://wa.me/573005412940?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20SofIA%20para%20mi%20barber%C3%ADa";

const H = { fontFamily: "var(--font-syne), sans-serif" };

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
            <span className="text-base font-semibold">BarberIA</span>
          </div>
          <nav className="flex items-center gap-2">
            <a href={CLIENT_URL} target="_blank" rel="noopener noreferrer"
              className="px-3 py-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors rounded-lg hover:bg-[#1A1A1A]">
              Demo
            </a>
            <a href={CRM_URL} target="_blank" rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium border border-[#2A2A2A] text-[#F5F5F5] rounded-lg hover:bg-[#1A1A1A] transition-colors">
              Panel admin
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            La secretaria con IA para tu barbería
          </div>

          <h1 style={H} className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-5">
            Mientras tú cortas,<br />
            <span className="text-gold">SofIA agenda clientes</span><br />
            por chat.
          </h1>

          <p className="text-base text-[#BBBBBB] max-w-md mb-8 leading-relaxed lg:mx-0 mx-auto">
            SofIA atiende a tus clientes automáticamente, agenda citas y responde preguntas frecuentes. Las 24 horas, sin que muevas un dedo.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:justify-start justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-gold text-[#0A0A0A] font-bold rounded-xl hover:bg-gold-light transition-all active:scale-[0.98] text-sm w-full sm:w-auto justify-center">
              <WhatsAppIcon className="w-4 h-4" />
              Agenda una demo
            </a>
            <a href={CLIENT_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 border border-[#2A2A2A] text-[#F5F5F5] font-medium rounded-xl hover:bg-[#1A1A1A] transition-all active:scale-[0.98] text-sm w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4 text-[#888888]" />
              Hablar con SofIA gratis
            </a>
          </div>
          <p className="text-xs text-[#555555] mt-3 lg:text-left text-center">Respondemos en menos de un día.</p>
        </div>
        <div className="flex-shrink-0 w-full max-w-xs">
          <ChatDemo />
        </div>
      </section>

      {/* ── SofIA: foto + 3 beneficios ─────────────────────── */}
      <section className="py-20 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Foto */}
            <div className="flex-shrink-0 text-center">
              <div className="relative w-52 h-52 rounded-2xl overflow-hidden border border-[#2A2A2A] mx-auto">
                <Image src="/sofia-web.png" alt="SofIA" fill sizes="208px" className="object-cover object-top" />
              </div>
              <p className="font-semibold mt-3 text-[#F5F5F5]">SofIA</p>
              <p className="text-xs text-[#888888]">Recepcionista virtual · BIA</p>
            </div>

            {/* Beneficios */}
            <div className="flex-1">
              <h2 style={H} className="text-2xl sm:text-3xl font-bold mb-2">Conoce a SofIA</h2>
              <p className="text-[#AAAAAA] text-sm mb-6 leading-relaxed">
                La recepcionista de tu barbería. Trabaja 24/7, nunca se cansa y atiende a cada cliente al instante.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Nunca pierdas un cliente",    desc: "SofIA responde al instante, a cualquier hora. Tus clientes siempre obtienen una respuesta." },
                  { title: "Nunca cruces horarios",       desc: "Antes de confirmar, revisa tu agenda. Cero doble-booking, cero errores." },
                  { title: "Tu agenda se llena sola",     desc: "Los clientes pueden reservar aunque estés cortando. Tu barbería trabaja aunque tú no estés." },
                ].map((b, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#F5F5F5] mb-0.5">{b.title}</p>
                      <p className="text-xs text-[#888888] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Panel: ícono + 3 features ──────────────────────── */}
      <section className="py-20 px-6 bg-[#050505] border-t border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Ícono */}
            <div className="flex-shrink-0 text-center">
              <div className="w-52 h-52 rounded-2xl border border-[#2A2A2A] bg-[#111111] flex items-center justify-center mx-auto">
                <Image src="/icon-512.png" alt="Panel BarberIA" width={100} height={100} className="rounded-xl opacity-90" />
              </div>
              <p className="font-semibold mt-3 text-[#F5F5F5]">Panel Admin</p>
              <p className="text-xs text-[#888888]">Control total desde cualquier lugar</p>
            </div>

            {/* Features */}
            <div className="flex-1">
              <h2 style={H} className="text-2xl sm:text-3xl font-bold mb-2">Un panel para que tú tengas el control</h2>
              <p className="text-[#AAAAAA] text-sm mb-6 leading-relaxed">
                Mientras SofIA trabaja, tú puedes ver tu agenda, tus clientes y todo lo que pasa en tu barbería.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Calendar className="w-4 h-4 text-gold" />,     title: "Calendario en tiempo real", desc: "Ve y mueve citas desde cualquier lugar." },
                  { icon: <Clock className="w-4 h-4 text-gold" />,         title: "Historial de clientes",     desc: "Quién vino, cuándo y qué servicio pidió." },
                  { icon: <CheckCircle className="w-4 h-4 text-gold" />,   title: "Control total",            desc: "Agrega, edita o cancela citas manualmente." },
                ].map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#F5F5F5] mb-0.5">{f.title}</p>
                      <p className="text-xs text-[#888888] leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href={CRM_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2A2A2A] text-[#888888] text-sm rounded-xl hover:bg-[#1A1A1A] hover:text-[#F5F5F5] transition-colors">
                Ver demo del panel →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final — mismo botón del hero ───────────────── */}
      <section className="py-20 px-6 border-t border-[#1A1A1A]">
        <div className="max-w-xl mx-auto text-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-[#0A0A0A] font-bold rounded-2xl hover:bg-gold-light transition-all active:scale-[0.98] text-base">
            <WhatsAppIcon className="w-5 h-5" />
            Agenda una demo
          </a>
          <p className="text-xs text-[#555555] mt-4">+57 300 541 2940 · Respondemos en menos de un día</p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[#1A1A1A] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/icon-192.png" alt="BarberIA" width={20} height={20} className="rounded-md" />
            <span className="text-sm font-medium">BarberIA</span>
          </div>
          <p className="text-xs text-[#555555]">El primer empleado digital para barberías · © 2025</p>
        </div>
      </footer>
    </div>
  );
}
