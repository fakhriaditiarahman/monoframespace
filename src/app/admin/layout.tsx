"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

interface AdminLayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: "dashboard", badge: null },
  { name: "Pesanan", href: "/admin/dashboard/orders", icon: "shopping_cart", badge: "12" },
  { name: "Portofolio", href: "/admin/dashboard/portfolios", icon: "image", badge: null },
  { name: "Testimoni", href: "/admin/dashboard/testimonials", icon: "chat_bubble", badge: null },
  { name: "Konten Halaman", href: "/admin/dashboard/content", icon: "article", badge: null },
]

const services = [
  { name: "Monobox", href: "#", color: "bg-blue-500" },
  { name: "Monodev", href: "#", color: "bg-purple-500" },
  { name: "Monoframe Studio", href: "#", color: "bg-pink-500" },
]

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push("/admin/login")
        return
      }

      setUserEmail(session.user.email || "")
      setLoading(false)
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Memuat...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-full">
        {/* Brand */}
        <div className="flex h-16 items-center border-b border-slate-200 dark:border-slate-800 px-6">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
              <span className="material-symbols-outlined text-xl">grid_view</span>
            </span>
            <span>Monoframe</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-3">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
                {item.badge && (
                  <span className="ml-auto rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}

            <div className="my-4 h-px bg-slate-200 dark:bg-slate-800 mx-3"></div>

            <div className="px-3 pb-2 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
              Layanan
            </div>

            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className={`h-2 w-2 rounded-full ${service.color}`}></div>
                <span className="text-sm font-medium">{service.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="border-t border-slate-200 dark:border-slate-800 p-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined text-xl">person</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Pengguna Admin</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[120px]">{userEmail}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Top Bar */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Link className="hover:text-primary" href="/">Beranda</Link>
            <span>/</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[20px] text-slate-400">search</span>
              <input
                className="h-10 w-64 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-10 pr-4 text-sm text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-slate-400"
                placeholder="Cari..."
                type="text"
              />
            </div>
            {/* Notifications */}
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            {/* Logout */}
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <span className="material-symbols-outlined mr-1">logout</span>
              Keluar
            </Button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
