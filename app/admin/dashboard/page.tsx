import { dashboardStats, todayAppointments } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import { Calendar, CheckCircle, Clock, TrendingUp, Users } from "lucide-react";

const statusLabel: Record<string, { label: string; color: string }> = {
  confirmed: { label: "Confirmada", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  completed: { label: "Completada", color: "text-[#888888] bg-[#1A1A1A] border-[#2A2A2A]" },
  pending: { label: "Pendiente", color: "text-gold bg-gold/10 border-gold/20" },
  cancelled: { label: "Cancelada", color: "text-red-400 bg-red-900/10 border-red-900/20" },
};

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-[#888888] capitalize mt-0.5">{today}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Citas hoy",
            value: dashboardStats.appointmentsToday,
            icon: <Calendar className="w-4 h-4 text-gold" />,
            sub: `${dashboardStats.completed} completadas`,
          },
          {
            label: "Pendientes",
            value: dashboardStats.pending,
            icon: <Clock className="w-4 h-4 text-gold" />,
            sub: "por atender",
          },
          {
            label: "Clientes nuevos",
            value: dashboardStats.newClients,
            icon: <Users className="w-4 h-4 text-gold" />,
            sub: "esta semana",
          },
          {
            label: "Ingresos hoy",
            value: formatCurrency(dashboardStats.revenue),
            icon: <TrendingUp className="w-4 h-4 text-gold" />,
            sub: `${dashboardStats.occupancy}% ocupación`,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-[#888888]">{stat.label}</p>
              <div className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-xs text-[#555555] mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Today's appointments */}
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#1A1A1A] flex items-center justify-between">
          <h2 className="text-sm font-semibold">Citas de hoy</h2>
          <span className="text-xs text-[#888888]">{todayAppointments.length} citas</span>
        </div>

        <div className="divide-y divide-[#1A1A1A]">
          {todayAppointments.map((appt) => {
            const status = statusLabel[appt.status];
            return (
              <div
                key={appt.id}
                className="px-5 py-3.5 flex items-center gap-4 hover:bg-[#1A1A0A]/40 transition-colors"
              >
                {/* Time */}
                <div className="w-12 flex-shrink-0">
                  <p className="text-sm font-mono font-medium text-gold">{appt.time}</p>
                  <p className="text-xs text-[#555555]">{appt.duration}min</p>
                </div>

                {/* Client */}
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-xs font-medium text-[#888888] flex-shrink-0">
                    {appt.client[0]}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{appt.client}</p>
                    <p className="text-xs text-[#888888] truncate">{appt.service}</p>
                  </div>
                </div>

                {/* Barber */}
                <div className="hidden md:block flex-shrink-0">
                  <p className="text-xs text-[#888888]">{appt.barber.split(" ")[0]}</p>
                </div>

                {/* Status */}
                <span
                  className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium border ${status.color}`}
                >
                  {status.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick stats */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {[
          { label: "Confirmadas", count: todayAppointments.filter(a => a.status === "confirmed").length, color: "text-emerald-400" },
          { label: "Completadas", count: todayAppointments.filter(a => a.status === "completed").length, color: "text-[#888888]" },
          { label: "Pendientes", count: todayAppointments.filter(a => a.status === "pending").length, color: "text-gold" },
        ].map((s, i) => (
          <div key={i} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4 text-center">
            <CheckCircle className={`w-4 h-4 ${s.color} mx-auto mb-2`} />
            <p className={`text-xl font-semibold ${s.color}`}>{s.count}</p>
            <p className="text-xs text-[#555555] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
