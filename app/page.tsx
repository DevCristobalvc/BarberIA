import Image from "next/image";
import { Scissors, MessageCircle, Calendar, Zap, Users, Shield, ChevronRight } from "lucide-react";

const CLIENT_URL = "https://cliente-barberia.vercel.app";
const CRM_URL    = "https://panel-barberia.vercel.app/login";
const WA_URL     = "https://wa.me/573005412940?text=Hola%2C%20quiero%20empezar%20con%20BarberIA%20para%20mi%20negocio";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A1A1A] bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/icon-192.png" alt="BarberIA" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-semibold tracking-tight">BarberIA</span>
          </div>
          <nav className="flex items-center gap-2">
            <a href={CLIENT_URL} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors rounded-lg hover:bg-[#1A1A1A]">
              Demo
            </a>
            <a href={CRM_URL} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-gold text-[#0A0A0A] rounded-lg hover:bg-gold-light transition-colors">
              Administrar
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Agente IA para barberías
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-5 max-w-3xl leading-[1.1]">
          Tu barbería,
          <br />
          <span className="text-gold">administrada por IA.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#888888] max-w-md mb-10 leading-relaxed">
          SofIA gestiona citas por WhatsApp. Sin llamadas, sin apps, sin complicaciones.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Primario: WhatsApp gold */}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gold text-[#0A0A0A] font-semibold rounded-xl hover:bg-gold-light transition-all active:scale-[0.98] text-sm">
            <WhatsAppIcon className="w-4 h-4" />
            Contáctanos para empezar
          </a>
          {/* Secundario: Demo */}
          <a href={CLIENT_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-[#F5F5F5] font-medium rounded-xl hover:bg-[#1A1A1A] transition-all active:scale-[0.98] text-sm">
            <MessageCircle className="w-4 h-4 text-[#888888]" />
            Probar demo
          </a>
          {/* Secundario: Dashboard */}
          <a href={CRM_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-[#F5F5F5] font-medium rounded-xl hover:bg-[#1A1A1A] transition-all active:scale-[0.98] text-sm">
            Ver dashboard
            <ChevronRight className="w-4 h-4 text-[#888888]" />
          </a>
        </div>

        {/* Chat preview */}
        <div className="mt-14 w-full max-w-sm bg-[#111111] border border-[#2A2A2A] rounded-2xl p-4 text-left shadow-2xl">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1A1A1A]">
            <Image src="/icon-192.png" alt="SofIA" width={32} height={32} className="rounded-full" />
            <div>
              <p className="text-sm font-medium">SofIA · BIA Barber Studio</p>
              <p className="text-xs text-emerald-400">● En línea</p>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="bg-[#1A1A1A] rounded-xl rounded-tl-none px-3.5 py-2.5 text-sm max-w-[85%]">
              Hola 👋 Soy SofIA. ¿En qué te puedo ayudar?
            </div>
            <div className="bg-gold/15 border border-gold/20 rounded-xl rounded-tr-none px-3.5 py-2.5 text-sm max-w-[80%] ml-auto text-right">
              Quiero un corte para mañana
            </div>
            <div className="bg-[#1A1A1A] rounded-xl rounded-tl-none px-3.5 py-2.5 text-sm max-w-[90%]">
              Claro ✂️ Tenemos a Carlos (9:00, 11:30) y Miguel (10:00, 14:30). ¿Cuál prefieres?
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-center text-xs font-medium tracking-widest text-[#888888] uppercase mb-10">
          Por qué BarberIA
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: <Zap className="w-4 h-4 text-gold" />,              title: "Reservas 24/7",          desc: "SofIA atiende aunque estés durmiendo." },
            { icon: <MessageCircle className="w-4 h-4 text-gold" />,    title: "Solo WhatsApp",          desc: "Tus clientes escriben como siempre." },
            { icon: <Calendar className="w-4 h-4 text-gold" />,         title: "Calendario en vivo",     desc: "Ve, mueve y cancela citas al instante." },
            { icon: <Users className="w-4 h-4 text-gold" />,            title: "Historial de clientes",  desc: "Preferencias y visitas guardadas." },
            { icon: <Shield className="w-4 h-4 text-gold" />,           title: "Multi-barbero",          desc: "Horarios y vacaciones por barbero." },
            { icon: <Scissors className="w-4 h-4 text-gold" />,         title: "100% tuyo",             desc: "Tu nombre, servicios y precios." },
          ].map((f, i) => (
            <div key={i} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4 hover:border-gold/20 transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mb-3">{f.icon}</div>
              <h3 className="text-sm font-semibold mb-1">{f.title}</h3>
              <p className="text-xs text-[#888888] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/icon-192.png" alt="BarberIA" width={20} height={20} className="rounded-md" />
            <span className="text-sm font-medium">BarberIA</span>
          </div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#555555] hover:text-gold transition-colors">
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Contáctanos · +57 300 541 2940
          </a>
          <p className="text-xs text-[#555555]">© 2025 BarberIA</p>
        </div>
      </footer>
    </div>
  );
}
