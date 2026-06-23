# Despliegue — BarberIA Frontend

## Vercel (recomendado)

```bash
npm i -g vercel
vercel deploy --prod
```

Agregar en Vercel → Project → Settings → Environment Variables:

| Variable | Valor |
|---|---|
| `OPENAI_API_KEY` | Tu API key de OpenAI |

## Docker

```dockerfile
# El Dockerfile está en la raíz del repo
docker build -t barberia-frontend .
docker run -p 3000:3000 -e OPENAI_API_KEY=sk-... barberia-frontend
```

## Variables en producción

En producción el chat demo usa directamente OpenAI. Cuando se conecte el backend real, la variable `NEXT_PUBLIC_API_URL` apuntará a `api-barberia`.

## Build local para validar antes de deployar

```bash
npm run build
# Sin errores → listo para push
```
