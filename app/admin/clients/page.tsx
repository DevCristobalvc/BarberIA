"use client";

import { clients } from "@/lib/mock-data";
import { Search, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function ClientsPage() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const filtered = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.phone.includes(query) ||
      c.notes.toLowerCase().includes(q)
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold">Clientes</h1>
          <p className="text-sm text-[#888888] mt-0.5">{clients.length} clientes registrados</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555555]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre o teléfono..."
          className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#444444] focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden">
        <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr_1fr_2fr] px-5 py-3 border-b border-[#1A1A1A] text-xs text-[#555555] font-medium uppercase tracking-wide">
          <span>Cliente</span>
          <span>Teléfono</span>
          <span>Visitas</span>
          <span>Última visita</span>
          <span>Notas</span>
        </div>

        <div className="divide-y divide-[#1A1A1A]">
          {filtered.length === 0 ? (
            <p className="text-center text-sm text-[#555555] py-10">
              No se encontraron clientes
            </p>
          ) : (
            filtered.map((client) => (
              <div
                key={client.id}
                className="px-5 py-3.5 hover:bg-[#1A1A0A]/40 transition-colors cursor-pointer"
              >
                {/* Mobile */}
                <div className="md:hidden flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-sm font-medium text-gold flex-shrink-0">
                    {client.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{client.name}</p>
                    <p className="text-xs text-[#888888] flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3" /> {client.phone}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-gold">{client.visits} visitas</span>
                      <span className="text-xs text-[#555555] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {client.lastVisit}
                      </span>
                    </div>
                    {client.notes && (
                      <p className="text-xs text-[#555555] mt-1 italic">{client.notes}</p>
                    )}
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:grid grid-cols-[2fr_1.5fr_1fr_1fr_2fr] items-center">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-xs font-medium text-gold">
                      {client.name[0]}
                    </div>
                    <span className="text-sm font-medium">{client.name}</span>
                  </div>
                  <span className="text-sm text-[#888888]">{client.phone}</span>
                  <span className="text-sm text-gold font-medium">{client.visits}</span>
                  <span className="text-sm text-[#888888]">{client.lastVisit}</span>
                  <span className="text-sm text-[#555555] italic truncate">
                    {client.notes || "—"}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
