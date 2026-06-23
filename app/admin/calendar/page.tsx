"use client";

import { calendarEvents } from "@/lib/mock-data";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Plus } from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Calendario</h1>
          <p className="text-sm text-[#888888] mt-0.5">Vista de citas por día y semana</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gold text-[#0A0A0A] text-sm font-medium rounded-lg hover:bg-gold-light transition-all active:scale-[0.98]">
          <Plus className="w-4 h-4" />
          Nueva cita
        </button>
      </div>

      <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden p-4 calendar-wrapper">
        <style>{`
          .calendar-wrapper .fc {
            --fc-border-color: #2A2A2A;
            --fc-button-bg-color: #1A1A1A;
            --fc-button-border-color: #2A2A2A;
            --fc-button-text-color: #F5F5F5;
            --fc-button-hover-bg-color: #2A2A2A;
            --fc-button-hover-border-color: #3A3A3A;
            --fc-button-active-bg-color: #D4AF37;
            --fc-button-active-border-color: #D4AF37;
            --fc-today-bg-color: rgba(212,175,55,0.05);
            --fc-page-bg-color: transparent;
            --fc-neutral-bg-color: #111111;
            --fc-list-event-hover-bg-color: #1A1A1A;
            --fc-event-bg-color: #D4AF37;
            --fc-event-border-color: #D4AF37;
            --fc-event-text-color: #0A0A0A;
            font-size: 13px;
          }
          .calendar-wrapper .fc-toolbar-title {
            font-size: 1rem;
            font-weight: 600;
            color: #F5F5F5;
          }
          .calendar-wrapper .fc-col-header-cell-cushion,
          .calendar-wrapper .fc-daygrid-day-number,
          .calendar-wrapper .fc-timegrid-slot-label {
            color: #888888;
          }
          .calendar-wrapper .fc-button {
            border-radius: 8px !important;
            font-size: 12px !important;
            padding: 4px 10px !important;
          }
          .calendar-wrapper .fc-button-active {
            color: #0A0A0A !important;
          }
          .calendar-wrapper .fc-event {
            border-radius: 6px;
            font-size: 11px;
            font-weight: 500;
          }
          .calendar-wrapper .fc-timegrid-axis {
            color: #555555;
          }
          .calendar-wrapper .fc-scrollgrid {
            border-color: #2A2A2A !important;
          }
        `}</style>

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          initialDate="2025-06-23"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={calendarEvents}
          locale="es"
          slotMinTime="08:00:00"
          slotMaxTime="21:00:00"
          allDaySlot={false}
          height="auto"
          slotDuration="00:30:00"
          nowIndicator={true}
          editable={true}
          selectable={true}
          dayMaxEvents={3}
          buttonText={{
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
          }}
        />
      </div>
    </div>
  );
}
