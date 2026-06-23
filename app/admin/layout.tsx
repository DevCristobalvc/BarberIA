"use client";

import {
  Calendar,
  LayoutDashboard,
  LogOut,
  Scissors,
  Settings,
  Users,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/calendar", label: "Calendario", icon: Calendar },
  { href: "/admin/clients", label: "Clientes", icon: Users },
  { href: "/admin/barbers", label: "Barberos", icon: Scissors },
  { href: "/admin/settings", label: "Configuración", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="flex h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-60 bg-[#0D0D0D] border-r border-[#1A1A1A] flex flex-col transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="h-14 flex items-center gap-2.5 px-4 border-b border-[#1A1A1A]">
          <div className="w-7 h-7 bg-gold rounded-lg flex items-center justify-center">
            <Scissors className="w-3.5 h-3.5 text-[#0A0A0A]" />
          </div>
          <span className="font-semibold text-sm tracking-tight">BarberIA</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="ml-auto lg:hidden text-[#888888] hover:text-[#F5F5F5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                  isActive
                    ? "bg-gold/10 text-gold border border-gold/20"
                    : "text-[#888888] hover:text-[#F5F5F5] hover:bg-[#1A1A1A]"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="p-3 border-t border-[#1A1A1A]">
          <div className="flex items-center gap-2.5 px-2 py-1.5 mb-1">
            <div className="w-7 h-7 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-xs font-medium text-gold">
              B
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">barbero@test.com</p>
              <p className="text-xs text-[#555555]">Administrador</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-[#888888] hover:text-red-400 hover:bg-red-900/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile top bar */}
        <div className="lg:hidden h-14 border-b border-[#1A1A1A] flex items-center px-4 gap-3 flex-shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-[#888888] hover:text-[#F5F5F5]"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gold rounded-md flex items-center justify-center">
              <Scissors className="w-3 h-3 text-[#0A0A0A]" />
            </div>
            <span className="text-sm font-semibold">BarberIA</span>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
