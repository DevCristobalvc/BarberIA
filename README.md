# BarberIA — Frontend

Dashboard web y chat demo para la plataforma [BarberIA](https://github.com/DevCristobalvc/api-barberia).

## Stack

Next.js 15 · TypeScript · Tailwind CSS 4 · FullCalendar · OpenAI streaming

## Inicio rápido

```bash
npm install
cp .env.example .env.local   # agregar OPENAI_API_KEY
npm run dev                  # http://localhost:3001
```

## Pantallas

| Ruta | Descripción |
|---|---|
| `/` | Landing page |
| `/chat` | Chat demo con SofIA (OpenAI directo) |
| `/admin/login` | Login — `barbero@test.com` / `123` |
| `/admin/dashboard` | Resumen del día |
| `/admin/calendar` | Calendario de citas (FullCalendar) |
| `/admin/clients` | Gestión de clientes |
| `/admin/barbers` | Gestión de barberos |
| `/admin/settings` | Configuración del negocio y asistente |

## Documentación

- [Setup local](docs/setup.md)
- [Despliegue en Vercel](docs/deployment.md)
- [Arquitectura del sistema](https://github.com/DevCristobalvc/api-barberia/blob/main/docs/architecture.md)

## Repos relacionados

- **Backend + Agente**: [api-barberia](https://github.com/DevCristobalvc/api-barberia)
- **Tests del agente**: [agent-barberia](https://github.com/DevCristobalvc/agent-barberia)
