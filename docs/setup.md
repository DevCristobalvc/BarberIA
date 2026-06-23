# Setup local — BarberIA Frontend

## Requisitos

- Node.js 20+
- npm 10+

## Instalación

```bash
git clone https://github.com/DevCristobalvc/BarberIA
cd BarberIA
npm install
```

## Variables de entorno

```bash
cp .env.example .env.local
```

| Variable | Descripción |
|---|---|
| `OPENAI_API_KEY` | API key de OpenAI para el chat demo |

## Correr en desarrollo

```bash
npm run dev
# → http://localhost:3001
```

## Build de producción

```bash
npm run build
npm start
```

## Estructura del proyecto

```
app/
  page.tsx              # Landing
  chat/page.tsx         # Chat demo
  api/chat/route.ts     # Proxy hacia OpenAI (streaming)
  api/auth/             # Login / logout
  admin/
    login/              # Formulario de login
    dashboard/          # Stats del día
    calendar/           # FullCalendar
    clients/            # Tabla de clientes
    barbers/            # Cards de barberos
    settings/           # Tabs de configuración
components/ui/          # Button, Input, Card, Badge
lib/
  mock-data.ts          # Datos de prueba (hasta conectar API real)
  utils.ts              # cn(), formatCurrency()
middleware.ts           # Protección de rutas /admin
```

## Login de prueba

```
Email:    barbero@test.com
Password: 123
```
