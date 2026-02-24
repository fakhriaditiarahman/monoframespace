"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { animateTextReveal } from "@/lib/animations"
import { useEffect, useRef } from "react"

export default function MonodevPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
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

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  })

  // Creative Process Simulation: Wireframe/Blur to Final Sharp Color
  const processFilter = useTransform(scrollYProgress, [0, 1], ["grayscale(100%) blur(10px) contrast(150%)", "grayscale(0%) blur(0px) contrast(100%)"])

  useEffect(() => {
    animateTextReveal('.monodev-hero-heading', { y: 30, duration: 1.2, delay: 0.5 });
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased">
      {/* Custom Monodev Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-monodev group-hover:rotate-12 transition-transform">terminal</span>
            <span className="font-extrabold tracking-tight text-xl dark:text-white group-hover:text-monodev transition-colors">MONODEV</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <Link href="#umkm" className="hover:text-monodev transition-colors">UMKM</Link>
            <Link href="#company" className="hover:text-monodev transition-colors">Perusahaan</Link>
            <Link href="#student" className="hover:text-monodev transition-colors">Mahasiswa</Link>
            <Link href="#showcase" className="hover:text-monodev transition-colors">Portofolio</Link>
          </nav>
          <Button asChild size="sm" variant="outline" className="border-monodev text-monodev hover:bg-monodev hover:text-white rounded-md">
            <Link href="#contact">Hubungi Kami</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden pt-14 pb-16 sm:pb-20 lg:pb-28 bg-white dark:bg-background-dark">
          <div className="absolute inset-0 -z-10 bg-tech-grid opacity-[0.4] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <motion.div
            className="mx-auto max-w-7xl px-6 lg:px-8"
            initial={{ filter: "blur(20px)", y: 20, opacity: 0 }}
            animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 px-3 py-1 text-sm font-medium text-monodev mb-6 cursor-default">
                  <span className="flex h-2 w-2 rounded-full bg-monodev mr-2 animate-pulse"></span>
                  Monodev IT Solutions
                </div>
                <h1 className="monodev-hero-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6 cursor-default">
                  Membangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-monodev to-cyan-500">Masa Depan Digital</span>
                </h1>
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-8">
                  Solusi teknologi komprehensif untuk setiap tahap pertumbuhan. Dari UMKM yang ingin go digital, perusahaan yang membutuhkan branding kuat, hingga mahasiswa yang mengejar keunggulan akademik.
                </p>
                <div className="flex items-center gap-x-6">
                  <Button asChild className="bg-monodev hover:bg-monodev-dark shadow-lg shadow-monodev/30">
                    <Link href="#contact">
                      Mulai Proyek
                      <span className="material-symbols-outlined text-sm ml-1">rocket_launch</span>
                    </Link>
                  </Button>
                  <Link className="text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-1 hover:text-monodev transition-colors" href="#umkm">
                    Jelajahi Solusi <span className="material-symbols-outlined text-sm">arrow_downward</span>
                  </Link>
                </div>
              </div>
              <div className="relative lg:h-full" ref={containerRef}>
                <motion.div
                  className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 p-3 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-2xl shadow-blue-900/20"
                  style={{ filter: processFilter }}
                >
                  <div className="flex items-center gap-2 mb-2 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 bg-slate-800 rounded px-2 py-0.5 text-xs text-slate-400 font-mono">dev_mode.tsx</div>
                  </div>
                  <img
                    alt="Developer coding on laptop"
                    className="w-full rounded-lg shadow-inner ring-1 ring-white/5 opacity-90"
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* UMKM Section */}
        <section id="umkm" className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-monodev">UMKM Go Digital</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Solusi Bisnis Kecil & Menengah</p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Tingkatkan efisiensi dan jangkauan pasar Anda dengan teknologi yang terjangkau dan mudah digunakan.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:border-monodev transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-monodev mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">storefront</span>
                  </div>
                  <CardTitle>Landing Page Usaha</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Halaman web satu muka yang dirancang khusus untuk mempromosikan produk atau jasa Anda dengan konversi tinggi.</p>
                  <ul className="text-sm space-y-2 text-slate-500">
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> SEO Friendly</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Integrasi WhatsApp</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Hosting Gratis 1 Tahun</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:border-monodev transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-monodev mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">point_of_sale</span>
                  </div>
                  <CardTitle>Aplikasi Kasir (POS)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Sistem kasir digital untuk mencatat transaksi penjualan harian dengan mudah dan akurat.</p>
                  <ul className="text-sm space-y-2 text-slate-500">
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Laporan Penjualan Harian</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Cetak Struk Bluetooth</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Manajemen Pelanggan</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:border-monodev transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-monodev mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">inventory_2</span>
                  </div>
                  <CardTitle>Manajemen Stok</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Pantau persediaan barang secara real-time untuk mencegah kehabisan stok atau penumpukan barang.</p>
                  <ul className="text-sm space-y-2 text-slate-500">
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Notifikasi Stok Menipis</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Opname Stok Mudah</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Analisa Barang Terlaris</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section id="company" className="py-24 bg-white dark:bg-background-dark">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-base font-semibold leading-7 text-monodev">Korporat & Profesional</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Company Profile Profesional</p>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                  Representasi digital terbaik untuk perusahaan Anda. Bangun kredibilitas dan kepercayaan klien dengan website profil perusahaan yang elegan, informatif, dan profesional.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-none text-monodev">
                      <span className="material-symbols-outlined">verified</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Desain Premium & Eksklusif</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Bukan template pasaran. Desain disesuaikan dengan identitas brand perusahaan Anda.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-none text-monodev">
                      <span className="material-symbols-outlined">security</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Keamanan & Performa Tinggi</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Hosting aman, SSL certificate, dan optimasi kecepatan akses.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-none text-monodev">
                      <span className="material-symbols-outlined">language</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Multi-Bahasa</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Siap untuk pasar global dengan dukungan fitur multi-bahasa (Indonesia/Inggris).</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                  alt="Modern Office"
                  className="relative rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Student Section - Creative/Edgy */}
        <section id="student" className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-monodev/10 to-transparent"></div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-base font-bold uppercase tracking-widest text-cyan-400">Zona Mahasiswa</h2>
              <p className="mt-2 text-4xl font-black tracking-tighter text-white sm:text-5xl font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ACADEMIC BOOSTER</span>
              </p>
              <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
                Deadline menghantui? Bug tidak kunjung hilang? Kami adalah cheat code untuk sukses akademikmu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-xl hover:border-cyan-500/50 transition-all hover:-translate-y-2 group">
                <div className="text-cyan-400 mb-6 group-hover:animate-pulse">
                  <span className="material-symbols-outlined text-4xl">code</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">Weekly Task Partner</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Bantuan coding tugas mingguan. Dari algoritma dasar C++, Java OOP, hingga Web Development. Penjelasan kode disertakan agar kamu tetap paham.
                </p>
                <span className="text-xs font-mono text-cyan-500 bg-cyan-950/30 px-2 py-1 rounded">#AntiPlagiat</span>
              </div>

              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-xl hover:border-purple-500/50 transition-all hover:-translate-y-2 group">
                <div className="text-purple-400 mb-6 group-hover:animate-pulse">
                  <span className="material-symbols-outlined text-4xl">school</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">Final Project Accelerator</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Tugas Akhir Informatika, Sistem Informasi, atau Teknik Komputer? Kami bantu rancang sistem, database, hingga implementasi aplikasi fullstack.
                </p>
                <span className="text-xs font-mono text-purple-500 bg-purple-950/30 px-2 py-1 rounded">#SkripsiKeluar</span>
              </div>

              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-xl hover:border-pink-500/50 transition-all hover:-translate-y-2 group">
                <div className="text-pink-400 mb-6 group-hover:animate-pulse">
                  <span className="material-symbols-outlined text-4xl">lightbulb</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">Creative Tech Solution</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Butuh ide liar untuk PKM atau kompetisi IT? Kami bantu brainstorming ide, prototyping, hingga pembuatan MVP yang memukau juri.
                </p>
                <span className="text-xs font-mono text-pink-500 bg-pink-950/30 px-2 py-1 rounded">#JuaraKompetisi</span>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-500 text-sm italic mb-4">*Privasi & Kerahasiaan dijamin 100%. IP aman, Kode unik.*</p>
              <Button asChild variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 font-mono">
                <Link href="#contact">Konsultasi Tugas Sekarang_</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white relative isolate overflow-hidden">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-monodev/20 rounded-full blur-[100px]"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                  Siap memulai <span className="text-monodev">proyek</span> Anda?
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Pilih kategori Anda dan ceritakan kebutuhan Anda. Tim kami akan segera merespons dengan solusi terbaik.
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
                      <h3 className="font-semibold text-white text-lg">WhatsApp Support</h3>
                      <p className="text-slate-400">Respon Cepat 09.00 - 21.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Formulir Kontak</h3>
                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                    ✓ Pesan terkirim! Kami akan segera menghubungi Anda.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="name">Nama / Instansi</label>
                      <input
                        className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                        id="name"
                        placeholder="Nama Lengkap"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="category">Kategori</label>
                      <select
                        className="mt-1 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="umkm">UMKM</option>
                        <option value="company">Perusahaan</option>
                        <option value="student">Mahasiswa</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="email">Email / WhatsApp</label>
                    <input
                      className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                      id="email"
                      type="text"
                      placeholder="Email atau No. WA aktif"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="message">Ceritakan Kebutuhan Anda</label>
                    <textarea
                      className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-monodev sm:text-sm sm:leading-6 bg-slate-800/50"
                      id="message"
                      rows={4}
                      placeholder="Detail proyek, deadline, atau fitur yang diinginkan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-monodev hover:bg-monodev-dark shadow-lg shadow-monodev/30 transition-all">
                    Kirim Pesan
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
