"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { animateTextReveal } from "@/lib/animations"
import { useEffect } from "react"

const sessions = [
  {
    title: "Sesi Potret",
    category: "Personal",
    description: "Foto profil profesional dan potret artistik disesuaikan dengan persona Anda.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600",
  },
  {
    title: "Pemotretan Pasangan",
    category: "Gaya Hidup",
    description: "Sesi pertunangan dan pemotretan gaya hidup yang mengabadikan koneksi tulus.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
  },
  {
    title: "Fotografi Produk",
    category: "Komersial",
    description: "Citra komersial berkualitas tinggi untuk meningkatkan kehadiran brand Anda.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    title: "Foto Wisuda",
    category: "Pendidikan",
    description: "Abadikan momen kelulusan berharga Anda dengan potret wisuda profesional dan estetik.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
  },
]

const studioImages = [
  { alt: "Panggung Utama", src: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?w=800", span: "md:col-span-2 md:row-span-2", label: "Panggung Utama" },
  { alt: "Pengaturan Pencahayaan", src: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=600", span: "", label: "" },
  { alt: "Peralatan Kamera", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600", span: "", label: "" },
  { alt: "Area Makeup", src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600", span: "", label: "Area Makeup" },
  { alt: "Pencahayaan Abstrak", src: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600", span: "", label: "Lihat Galeri" },
]

const packages = [
  {
    name: "The Essential",
    price: "Rp 3.000.000",
    description: "Cocok untuk pembaruan LinkedIn atau penyegaran cepat.",
    features: [
      "Sesi 45 Menit",
      "1 Look / Pakaian",
      "5 Gambar Retouched Resolusi Tinggi",
      "Akses Galeri Online",
    ],
    popular: false,
  },
  {
    name: "The Standard",
    price: "Rp 5.250.000",
    description: "Ideal untuk portofolio dan pemotretan brand kecil.",
    features: [
      "Sesi 90 Menit",
      "Hingga 3 Look",
      "15 Gambar Retouched Resolusi Tinggi",
      "Makeup Artist Termasuk",
      "Pengiriman Prioritas",
    ],
    popular: true,
  },
  {
    name: "The Creative",
    price: "Rp 13.500.000",
    description: "Seharian penuh untuk brand dan kampanye.",
    features: [
      "Seharian Penuh (6 Jam)",
      "Look Tak Terbatas",
      "Edit Galeri Lengkap",
      "Arahan Seni Termasuk",
      "Lisensi Komersial",
    ],
    popular: false,
  },
]

export default function StudioPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(8)

  useEffect(() => {
    animateTextReveal('.studio-hero-heading', { y: 30, duration: 1.2, delay: 0.5 });
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display antialiased">
      {/* Custom Studio Header */}
      <header className="absolute top-0 w-full z-50 border-b border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-widest uppercase text-white hover:text-sky-200 transition-colors">STUDIO</Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-sky-100 uppercase tracking-wider">
            <Link href="#space" className="hover:text-white transition-colors">Ruangan</Link>
            <Link href="#book" className="hover:text-white transition-colors">Harga</Link>
          </nav>
          <Button asChild className="bg-white text-slate-900 hover:bg-sky-50 uppercase tracking-widest text-xs font-bold rounded-none px-6">
            <Link href="#book">Pesan Sesi</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] lg:h-[750px] overflow-hidden bg-slate-900 pt-20">
          <div className="absolute inset-0 z-0">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-900/40 to-black/30"></div>
          </div>
          <motion.div
            className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 text-center md:text-left"
            initial={{ filter: "blur(20px)", scale: 0.95, opacity: 0 }}
            animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-sky-300/30 bg-sky-900/30 px-3 py-1 text-sm font-medium text-sky-100 backdrop-blur-sm cursor-default">
                <span className="mr-2 h-2 w-2 rounded-full bg-monostudio animate-pulse"></span>
                Pemesanan Musim Baru Dibuka
              </div>
              <h1 className="studio-hero-heading text-3xl md:text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl cursor-default">
                Menangkap Esensi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white">Di Setiap Bingkai.</span>
              </h1>
              <p className="max-w-xl text-lg text-sky-100 md:text-xl font-light leading-relaxed">
                Fotografi profesional untuk era modern. Tingkatkan brand, citra personal, dan produk Anda dengan layanan studio terkini dari Monoframe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button asChild className="h-12 rounded-lg bg-monostudio px-8 text-base font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-monostudio-dark hover:text-white transition-all hover:shadow-sky-500/40">
                  <Link href="#book" data-cursor-text="BOOK">Pesan Sesi</Link>
                </Button>
                <Button variant="outline" className="group flex h-12 items-center justify-center gap-2 border border-white/20 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm hover:bg-white/10 transition-colors" data-cursor-text="PLAY">
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">play_circle</span>
                  Tonton Showreel
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sessions Section */}
        <section className="py-20 lg:py-28 bg-background-off dark:bg-background-dark">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Sesi Kami</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Pengalaman fotografi yang disesuaikan untuk menampilkan yang terbaik dari Anda dan brand Anda.</p>
              </div>
              <Link className="group flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400" href="#portfolio">
                Lihat semua layanan
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {sessions.map((session, index) => (
                <Card key={index} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sky-100 transition-all hover:shadow-xl hover:shadow-sky-100 dark:bg-slate-900 dark:ring-slate-800 dark:hover:shadow-none">
                  <div className="aspect-[4/5] overflow-hidden bg-sky-100">
                    <img alt={session.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={session.image} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="mb-2 inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-medium backdrop-blur-sm text-sky-50">
                      {session.category}
                    </div>
                    <h3 className="text-xl font-bold">{session.title}</h3>
                    <p className="mt-2 text-sm text-sky-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {session.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Space Section */}
        <section className="bg-white py-20 lg:py-28 dark:bg-background-dark border-t border-sky-50 dark:border-slate-800" id="space">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-sky-500">Ruangan</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Suasana Studio</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                Studio kami seluas 2.000 kaki persegi dilengkapi dinding cyclorama, ruang ganti privat, dan peralatan pencahayaan Profoto terdepan di industri.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[500px] auto-rows-[200px]">
              {studioImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ clipPath: "inset(100% 0 0 0)", scale: 0.95 }}
                  whileInView={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative overflow-hidden rounded-xl bg-sky-50 cursor-pointer ${img.span ? img.span : 'md:col-span-1 md:row-span-1'}`}
                  data-cursor-text={img.label === 'Lihat Galeri' ? 'GALLERY' : 'VIEW'}
                >
                  <motion.img
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    src={img.src}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  {img.label && (
                    <div className={`absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-semibold text-slate-900 backdrop-blur-sm ${img.label === 'Lihat Galeri' ? 'bg-sky-950 text-white' : ''}`}>
                      {img.label}
                    </div>
                  )}
                  {img.label === 'Lihat Galeri' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-sky-950/50 hover:bg-sky-950/30 transition-colors duration-300">
                      <span className="text-white font-medium border-b border-sky-300 pb-0.5 cursor-pointer hover:border-sky-200">Lihat Galeri Lengkap</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-28 bg-sky-50/50 dark:bg-background-dark/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Harga Sederhana & Transparan</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Pilih paket yang sesuai dengan kebutuhan kreatif Anda.</p>
              <div className="mt-6 flex justify-center">
                <div className="relative flex items-center rounded-full bg-sky-100 p-1 dark:bg-slate-800">
                  <button className="relative rounded-full bg-white px-6 py-2 shadow-sm dark:bg-slate-700">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">Sesi</span>
                  </button>
                  <button className="ml-0.5 relative rounded-full px-6 py-2">
                    <span className="text-sm font-medium text-sky-600 hover:text-sky-900 dark:text-slate-400">Keanggotaan</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`flex flex-col rounded-2xl bg-white p-8 shadow-sm border ${pkg.popular
                    ? 'shadow-xl shadow-sky-100/50 border-2 border-monostudio dark:bg-slate-900 dark:border-monostudio/60 scale-105 z-10 relative'
                    : 'border-sky-100 dark:border-slate-800 dark:bg-slate-900'
                    }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-monostudio px-3 py-1 text-center text-xs font-medium text-white shadow-sm">
                      Paling Populer
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm leading-6 text-slate-600 dark:text-slate-400">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{pkg.price}</span>
                      <span className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">{pkg.name === 'The Creative' ? '/hari' : '/sesi'}</span>
                    </p>
                    <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300" role="list">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex gap-x-3">
                          <span className="material-symbols-outlined text-monostudio-dark text-[20px]">check</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`mt-8 w-full ${pkg.popular
                        ? 'bg-monostudio hover:bg-monostudio-dark text-white shadow-sm'
                        : 'bg-sky-50 hover:bg-sky-100 text-monostudio-dark ring-1 ring-inset ring-monostudio/20 dark:bg-slate-800 dark:hover:bg-slate-700'
                        }`}
                    >
                      <Link href="#book">Pilih {pkg.name.split(' ')[1]}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Calendar Section */}
        <section className="relative py-20 lg:py-28 bg-white dark:bg-background-dark" id="book">
          <div className="absolute inset-0 bg-sky-50 dark:bg-background-dark/80 skew-y-3 transform origin-bottom-right z-0"></div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Siap untuk pemotretan?</h2>
                  <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Pilih tanggal dan waktu untuk memesan jadwal Anda.</p>
                </div>
                <Card className="bg-white rounded-2xl shadow-lg shadow-sky-100/50 border border-sky-100 p-6 dark:bg-slate-900 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">October 2024</h3>
                    <div className="flex gap-2">
                      <button className="p-1 rounded-full hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined">chevron_left</span>
                      </button>
                      <button className="p-1 rounded-full hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 md:gap-2 text-center text-xs md:text-sm mb-2">
                    {['Mi', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb'].map((day) => (
                      <span key={day} className="text-slate-400 font-medium py-1 md:py-2">{day}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 md:gap-2">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                      const isToday = day === 8
                      const isAvailable = [3, 4, 8, 10, 11, 15, 17, 18, 22, 24, 25].includes(day)
                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDate(day)}
                          className={`p-2 md:p-3 text-xs md:text-sm rounded-lg transition-colors ${isToday
                            ? 'bg-monostudio text-white font-semibold shadow-md shadow-sky-200'
                            : isAvailable
                              ? 'text-slate-700 hover:bg-sky-50 dark:text-slate-300 dark:hover:bg-slate-800'
                              : 'text-slate-300 dark:text-slate-600 cursor-not-allowed'
                            }`}
                          disabled={!isAvailable}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                  <div className="mt-6 flex gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-monostudio"></div>
                      <span>Dipilih</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-sky-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"></div>
                      <span>Tersedia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-slate-100 dark:bg-slate-800"></div>
                      <span>Tidak Tersedia</span>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Detail Anda</h2>
                  <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Lengkapi informasi pemesanan Anda.</p>
                </div>
                <Card className="bg-white rounded-2xl shadow-lg shadow-sky-100/50 border border-sky-100 p-6 dark:bg-slate-900 dark:border-slate-800">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nama Depan</Label>
                        <Input id="firstName" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nama Belakang</Label>
                        <Input id="lastName" placeholder="Doe" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telepon</Label>
                      <Input id="phone" placeholder="+62 812-3456-7890" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="session">Jenis Sesi</Label>
                      <select id="session" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>Sesi Potret</option>
                        <option>Pemotretan Pasangan</option>
                        <option>Fotografi Produk</option>
                        <option>Foto Wisuda</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="package">Paket</Label>
                      <select id="package" className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>The Essential - Rp 3.000.000</option>
                        <option>The Standard - Rp 5.250.000</option>
                        <option>The Creative - Rp 13.500.000</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="notes">Permintaan Khusus (Opsional)</Label>
                      <textarea id="notes" rows={3} className="mt-1 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Permintaan khusus..."></textarea>
                    </div>
                    <Button className="w-full bg-monostudio hover:bg-monostudio-dark text-white">
                      Konfirmasi Pemesanan
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
