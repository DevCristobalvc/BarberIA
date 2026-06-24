import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "BarberIA — La secretaria con IA para tu barbería",
  description: "SofIA atiende clientes automáticamente, agenda citas y responde por chat las 24 horas.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "BarberIA — La secretaria con IA para tu barbería",
    description: "SofIA atiende clientes automáticamente, agenda citas y responde por chat las 24 horas.",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${syne.variable}`}>
      <body className="antialiased bg-[#0A0A0A] text-[#F5F5F5]" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
