import { Scissors, MessageCircle, Calendar, Zap, Users, Shield, ChevronRight } from "lucide-react";

const CLIENT_URL = "https://client-barberia.vercel.app";
const CRM_URL    = "https://crm-barberia-psi.vercel.app/login";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1A1A1A] bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
              <Scissors className="w-4 h-4 text-[#0A0A0A]" />
            </div>
            <span className="text-lg font-semibold tracking-tight">BarberIA</span>
          </div>
          <nav className="flex items-center gap-2">
            <a
              href={CLIENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-[#888888] hover:text-[#F5F5F5] transition-colors rounded-lg hover:bg-[#1A1A1A]"
            >
              Demo
            </a>
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-gold text-[#0A0A0A] rounded-lg hover:bg-gold-light transition-colors"
            >
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

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.1]">
          Tu barbería,
          <br />
          <span className="text-gold">administrada por IA.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#888888] max-w-xl mb-10 leading-relaxed">
          SofIA gestiona tus citas por WhatsApp: reserva, cancela, reprograma.
          Nunca más una llamada perdida.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gold text-[#0A0A0A] font-semibold rounded-xl hover:bg-gold-light transition-all active:scale-[0.98] text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Hablar con SofIA
          </a>
          <a
            href={CRM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-[#F5F5F5] font-medium rounded-xl hover:bg-[#1A1A1A] transition-all active:scale-[0.98] text-sm"
          >
            Ver dashboard
            <ChevronRight className="w-4 h-4 text-[#888888]" />
          </a>
        </div>

        {/* Chat preview */}
        <div className="mt-16 w-full max-w-sm bg-[#111111] border border-[#2A2A2A] rounded-2xl p-4 text-left shadow-2xl">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1A1A1A]">
            <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
              <Scissors className="w-3.5 h-3.5 text-gold" />
            </div>
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
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-center text-xs font-medium tracking-widest text-[#888888] uppercase mb-12">
          Por qué BarberIA
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: <Zap className="w-5 h-5 text-gold" />,      title: "Reservas automáticas",       desc: "SofIA atiende a tus clientes las 24 horas. Consulta disponibilidad y confirma citas sin que muevas un dedo." },
            { icon: <MessageCircle className="w-5 h-5 text-gold" />, title: "Por WhatsApp",           desc: "Tus clientes ya están ahí. Sin apps nuevas, sin formularios. Solo escriben como siempre." },
            { icon: <Calendar className="w-5 h-5 text-gold" />,  title: "Calendario en tiempo real", desc: "Panel web para ver, crear, mover y cancelar citas. Todo sincronizado al instante." },
            { icon: <Users className="w-5 h-5 text-gold" />,     title: "Gestión de clientes",       desc: "Historial completo: visitas, preferencias, barbero favorito. SofIA los recuerda a todos." },
            { icon: <Shield className="w-5 h-5 text-gold" />,    title: "Multi-barbero",             desc: "Gestiona horarios y servicios por barbero. Bloquea vacaciones sin complicaciones." },
            { icon: <Scissors className="w-5 h-5 text-gold" />,  title: "Personalizable",            desc: "Nombre del asistente, prompt, servicios, precios y horarios configurables." },
          ].map((f, i) => (
            <div key={i} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 hover:border-gold/20 hover:bg-[#111108] transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mb-4">{f.icon}</div>
              <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#888888] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-gold/20 bg-[#111108] p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Prueba la demo ahora</h2>
          <p className="text-[#888888] mb-8 max-w-md mx-auto text-sm">
            Habla con SofIA como lo haría un cliente de BIA Barber Studio. Pregunta por servicios, disponibilidad o reserva una cita.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CLIENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gold text-[#0A0A0A] font-semibold rounded-xl hover:bg-gold-light transition-all active:scale-[0.98] text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Hablar con SofIA
            </a>
            <a
              href={CRM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] text-[#F5F5F5] font-medium rounded-xl hover:bg-[#1A1A1A] transition-all active:scale-[0.98] text-sm"
            >
              Ver panel de admin
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gold rounded-md flex items-center justify-center">
              <Scissors className="w-3 h-3 text-[#0A0A0A]" />
            </div>
            <span className="text-sm font-medium">BarberIA</span>
          </div>
          <p className="text-xs text-[#555555]">© 2025 BarberIA · Potenciado por SofIA</p>
        </div>
      </footer>
    </div>
  );
}
