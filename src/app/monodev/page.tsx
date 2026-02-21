"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const services = [
  {
    icon: "storefront",
    title: "Website UMKM",
    description: "Website terjangkau, cepat, dan responsif untuk membantu usaha kecil go digital. Termasuk SEO dasar dan integrasi Google Maps.",
    features: ["Responsif Mobile", "Integrasi WhatsApp", "Pengerjaan Cepat (3-5 hari)"],
  },
  {
    icon: "rocket_launch",
    title: "Landing Page Konversi Tinggi",
    description: "Halaman yang dioptimalkan untuk kampanye pemasaran. Fokus pada kecepatan, integrasi analitik, dan Call-to-Action yang jelas untuk ROI maksimal.",
    features: ["Siap A/B Testing", "Dashboard Analitik", "Implementasi Pixel"],
  },
  {
    icon: "school",
    title: "Dukungan IT Akademik",
    description: "Dukungan khusus untuk portal penelitian, proyek tesis, sistem survei, dan perangkat pendidikan. Penanganan data aman sesuai standar akademik.",
    features: ["Visualisasi Data Kustom", "Sistem Survei", "Panel Admin Aman"],
  },
]

const projects = [
  {
    title: "FinTrack Analytics",
    category: "Platform SaaS",
    description: "Dashboard pelacakan keuangan yang komprehensif untuk usaha kecil.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    year: "2023",
  },
  {
    title: "Lumina Fashion",
    category: "E-Commerce",
    description: "Toko online modern dengan integrasi gateway pembayaran.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600",
    year: "2023",
  },
  {
    title: "EduData Research",
    category: "Akademik",
    description: "Portal pengumpulan data aman untuk kelompok penelitian universitas.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
    year: "2023",
  },
]

export default function MonodevPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    serviceType: "",
    budget: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden pt-14 pb-16 sm:pb-20 lg:pb-28 bg-white dark:bg-background-dark">
          <div className="absolute inset-0 -z-10 bg-tech-grid opacity-[0.4] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 px-3 py-1 text-sm font-medium text-monodev mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-monodev mr-2 animate-pulse"></span>
                  Monodev IT Solutions
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
                  Membangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-monodev to-cyan-500">Tulang Punggung Digital</span> Bisnis Anda
                </h1>
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-8">
                  Solusi pengembangan web kustom untuk UMKM, startup, dan institusi akademik. Teknologi yang andal, skalabel, dan aman disesuaikan untuk pertumbuhan Anda.
                </p>
                <div className="flex items-center gap-x-6">
                  <Button asChild className="bg-monodev hover:bg-monodev-dark shadow-lg shadow-monodev/30">
                    <Link href="#showcase">
                      Lihat Portofolio
                      <span className="material-symbols-outlined text-sm ml-1">rocket_launch</span>
                    </Link>
                  </Button>
                  <Link className="text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-1 hover:text-monodev transition-colors" href="#services">
                    Layanan Kami <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Didukung oleh Tech Stack Modern</p>
                  <div className="flex gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-monodev">javascript</span> JS
                    </div>
                    <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-orange-500">html</span> HTML5
                    </div>
                    <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-blue-500">css</span> CSS3
                    </div>
                    <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-cyan-400">code_blocks</span> React
                    </div>
                    <div className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-indigo-500">database</span> SQL
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:h-full">
                <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 p-3 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-2xl shadow-blue-900/20">
                  <div className="flex items-center gap-2 mb-2 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 bg-slate-800 rounded px-2 py-0.5 text-xs text-slate-400 font-mono">index.tsx</div>
                  </div>
                  <img
                    alt="Developer coding on laptop"
                    className="w-full rounded-lg shadow-inner ring-1 ring-white/5 opacity-90"
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="services">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-monodev">Keahlian Kami</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Solusi Web yang Disesuaikan</p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Kami menyediakan layanan pengembangan end-to-end yang dirancang untuk membantu bisnis Anda berkembang secara online.
              </p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col rounded-2xl bg-white dark:bg-surface-dark p-8 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 hover:shadow-xl hover:shadow-blue-500/10 hover:ring-monodev/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-monodev group-hover:bg-monodev group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-monodev transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-auto">
                    <p className="text-base leading-7 text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-monodev text-lg">check_circle</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 relative overflow-hidden bg-slate-900" id="showcase">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl lg:max-w-none mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Showcase Proyek</h2>
                <p className="mt-4 text-lg text-slate-300 max-w-xl">
                  Jelajahi beberapa deployment terbaru kami. Kami membangun antarmuka yang bersih, fungsional, dan berpusat pada pengguna.
                </p>
              </div>
              <Link className="hidden md:flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors" href="#">
                Lihat Semua Proyek <span className="material-symbols-outlined ml-1">arrow_right_alt</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-monodev/50">
                  <div className="aspect-[16/10] bg-slate-900 overflow-hidden relative">
                    <img alt={project.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src={project.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                      <span className="text-white font-medium flex items-center gap-2">
                        Lihat Studi Kasus <span className="material-symbols-outlined text-sm">arrow_outward</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-800 px-2 py-1 rounded">{project.category}</span>
                      <span className="text-xs text-slate-400">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-monodev transition-colors">{project.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white relative isolate overflow-hidden" id="contact">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-monodev/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[100px]"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                  Siap memulai <span className="text-monodev">perjalanan digital</span> Anda?
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Apakah Anda membutuhkan landing page sederhana atau aplikasi web kompleks, tim kami siap membantu. Isi formulir, dan kami akan menghubungi Anda dengan konsultasi dan penawaran gratis.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-monodev/20 border border-monodev/30 flex items-center justify-center text-monodev">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">Email Kami</h3>
                      <p className="text-slate-400">hello@monodev.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-monodev/20 border border-monodev/30 flex items-center justify-center text-monodev">
                      <span className="material-symbols-outlined">chat</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">Obrolan Langsung</h3>
                      <p className="text-slate-400">Tersedia Senin-Jumat, 09.00 - 17.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Minta Penawaran</h3>
                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                    ✓ Permintaan terkirim! Kami akan menghubungi Anda segera.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="name">Nama</label>
                      <input
                        className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                        id="name"
                        placeholder="Nama Anda"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="company">Perusahaan</label>
                      <input
                        className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                        id="company"
                        placeholder="Nama perusahaan"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="email">Email</label>
                    <input
                      className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="service-type">Jenis Proyek</label>
                      <select
                        className="mt-1 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                        id="service-type"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        required
                      >
                        <option value="">Pilih jenis</option>
                        <option value="umkm">Website UMKM</option>
                        <option value="landing">Landing Page</option>
                        <option value="academic">Sistem Akademik</option>
                        <option value="custom">Pengembangan Kustom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="budget">Kisaran Anggaran</label>
                      <select
                        className="mt-1 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Pilih anggaran</option>
                        <option value="small">Kurang dari $1k</option>
                        <option value="medium">$1k - $5k</option>
                        <option value="large">$5k - $10k</option>
                        <option value="enterprise">$10k+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="message">Detail Proyek</label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                      id="message"
                      rows={4}
                      placeholder="Ceritakan tentang proyek Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-monodev hover:bg-monodev-dark shadow-lg shadow-monodev/30">
                    Kirim Permintaan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
