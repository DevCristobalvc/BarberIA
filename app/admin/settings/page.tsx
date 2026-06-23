"use client";

import { services, shop } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import { Save, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

type Tab = "general" | "assistant" | "services" | "schedule";

const TABS: { id: Tab; label: string }[] = [
  { id: "general", label: "General" },
  { id: "assistant", label: "Asistente IA" },
  { id: "services", label: "Servicios" },
  { id: "schedule", label: "Horarios" },
];

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("general");
  const [saved, setSaved] = useState(false);
  const [prompt, setPrompt] = useState(
    `Eres SofIA, la asistente de ${shop.name}. Eres amigable, profesional y concisa. Gestionas citas y respuestas a preguntas frecuentes. No inventes información — siempre consulta los datos disponibles.`
  );
  const [assistantName, setAssistantName] = useState(shop.assistantName);
  const [shopName, setShopName] = useState(shop.name);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Configuración</h1>
          <p className="text-sm text-[#888888] mt-0.5">Personaliza tu barbería y asistente</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-gold text-[#0A0A0A] text-sm font-medium rounded-lg hover:bg-gold-light transition-all active:scale-[0.98]"
        >
          <Save className="w-4 h-4" />
          {saved ? "¡Guardado!" : "Guardar"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-[#111111] border border-[#2A2A2A] rounded-xl p-1 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-3 text-sm rounded-lg transition-all font-medium ${
              activeTab === tab.id
                ? "bg-gold text-[#0A0A0A]"
                : "text-[#888888] hover:text-[#F5F5F5] hover:bg-[#1A1A1A]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* General */}
      {activeTab === "general" && (
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 space-y-4">
            <h2 className="text-sm font-semibold pb-3 border-b border-[#1A1A1A]">Información del negocio</h2>
            {[
              { label: "Nombre del negocio", value: shopName, onChange: setShopName },
              { label: "Teléfono", value: shop.phone, onChange: () => {} },
              { label: "Dirección", value: shop.address, onChange: () => {} },
              { label: "Zona horaria", value: shop.timezone, onChange: () => {} },
            ].map((field) => (
              <div key={field.label} className="flex flex-col gap-1.5">
                <label className="text-xs text-[#888888] font-medium">{field.label}</label>
                <input
                  defaultValue={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assistant */}
      {activeTab === "assistant" && (
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 space-y-4">
            <h2 className="text-sm font-semibold pb-3 border-b border-[#1A1A1A]">Asistente virtual</h2>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#888888] font-medium">Nombre del asistente</label>
              <input
                value={assistantName}
                onChange={(e) => setAssistantName(e.target.value)}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#888888] font-medium">Prompt del sistema</label>
              <p className="text-xs text-[#555555]">
                Define la personalidad y comportamiento del asistente. El sistema agrega automáticamente los servicios, barberos y disponibilidad.
              </p>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-gold/40 transition-colors resize-none font-mono"
              />
            </div>

            <div className="bg-gold/5 border border-gold/20 rounded-lg px-4 py-3">
              <p className="text-xs text-gold font-medium mb-1">Preview del saludo</p>
              <p className="text-sm text-[#F5F5F5]">
                &ldquo;Hola 👋 Soy {assistantName}, la asistente de {shopName}. ¿En qué te puedo ayudar?&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Services */}
      {activeTab === "services" && (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[#1A1A1A] flex items-center justify-between">
            <h2 className="text-sm font-semibold">Servicios</h2>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gold/30 text-gold text-xs rounded-lg hover:bg-gold/10 transition-colors">
              <Plus className="w-3.5 h-3.5" />
              Agregar
            </button>
          </div>
          <div className="divide-y divide-[#1A1A1A]">
            {services.map((service) => (
              <div key={service.id} className="px-5 py-3.5 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium">{service.name}</p>
                  <p className="text-xs text-[#888888] mt-0.5">{service.duration} minutos</p>
                </div>
                <p className="text-sm font-semibold text-gold">
                  {formatCurrency(service.price)}
                </p>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded-lg hover:bg-[#1A1A1A] text-[#888888] hover:text-gold transition-colors">
                    <Save className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-red-900/10 text-[#888888] hover:text-red-400 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Schedule */}
      {activeTab === "schedule" && (
        <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-[#1A1A1A]">
            <h2 className="text-sm font-semibold">Horario de atención</h2>
          </div>
          <div className="divide-y divide-[#1A1A1A]">
            {DAYS.map((day, i) => {
              const isOpen = i < 6;
              return (
                <div key={day} className="px-5 py-3.5 flex items-center gap-4">
                  <div className="w-24 flex-shrink-0">
                    <p className="text-sm font-medium">{day}</p>
                  </div>
                  {isOpen ? (
                    <div className="flex items-center gap-3">
                      <input
                        defaultValue="09:00"
                        type="time"
                        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-1.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-gold/40"
                      />
                      <span className="text-[#555555] text-sm">—</span>
                      <input
                        defaultValue="20:00"
                        type="time"
                        className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-3 py-1.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-gold/40"
                      />
                    </div>
                  ) : (
                    <span className="text-sm text-[#555555]">Cerrado</span>
                  )}
                  <div className="ml-auto">
                    <button
                      className={`w-10 h-5 rounded-full transition-all relative ${
                        isOpen ? "bg-gold" : "bg-[#2A2A2A]"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${
                          isOpen ? "left-5" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
