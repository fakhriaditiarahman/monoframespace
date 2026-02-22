"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const packages = [
  {
    name: "Starter",
    price: "Rp 5.250.000",
    description: "Cocok untuk acara kecil",
    features: [
      "Digital Saja (Tanpa Cetak)",
      "2 Jam Layanan",
      "Latar Belakang Standar",
      "Petugas Ramah",
    ],
    popular: false,
  },
  {
    name: "Classic",
    price: "Rp 8.250.000",
    description: "Pilihan paling populer kami",
    features: [
      "Cetak 2x6 atau 4x6 Tak Terbatas",
      "3 Jam Layanan",
      "Pilihan Latar Belakang Kustom",
      "Galeri Privat Online",
      "Meja Props Standar",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "Rp 11.250.000",
    description: "Untuk pengalaman lengkap",
    features: [
      "Cetak Tak Terbatas + Salinan",
      "4 Jam Layanan",
      "Filter Glam 'Kardashian'",
      "Stasiun Scrapbook",
      "Props Bertema Premium",
    ],
    popular: false,
  },
]

const galleryImages = [
  { alt: "Pesta resepsi pernikahan", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600" },
  { alt: "Pesta neon acara perusahaan", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600" },
  { alt: "Teman-teman berpose dengan kacamata", src: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600" },
  { alt: "Strip fotobooth hitam putih", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600" },
  { alt: "Foto grup seru dengan props", src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600" },
  { alt: "Foto acara formal elegan", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600" },
]

export default function MonoboxPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    eventDate: "",
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
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Custom Monobox Header */}
      <header className="sticky top-0 z-50 w-full border-b border-pink-100 dark:border-pink-900 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-[1200px]">
          <Link href="/" className="font-black text-2xl tracking-tighter text-monobox hover:text-monobox-dark transition-colors">MONOBOX</Link>
          <nav className="hidden md:flex gap-6 text-sm font-bold text-slate-600 dark:text-slate-300">
            <Link href="#packages" className="hover:text-monobox transition-colors">Paket</Link>
            <Link href="#booking" className="hover:text-monobox transition-colors">Hubungi</Link>
          </nav>
          <Button asChild size="sm" className="bg-monobox hover:bg-monobox-dark text-white rounded-full">
            <Link href="#booking">Pesan Sekarang</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="px-6 py-12 lg:px-40 lg:py-20 flex flex-col items-center">
          <div className="layout-content-container flex flex-col max-w-[1200px] w-full">
            <div className="flex flex-col gap-10 px-0 lg:flex-row items-center">
              <div className="flex flex-col gap-6 lg:w-1/2 items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-monobox text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">celebration</span>
                  Event Ready
                </div>
                <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-[1.1] tracking-tight lg:text-6xl">
                  Abadikan Momen dengan <span className="text-monobox">Monobox</span>
                </h1>
                <p className="text-slate-600 dark:text-pink-200 text-lg font-normal leading-relaxed max-w-lg">
                  Pengalaman fotobooth premium untuk acara perusahaan & pribadi. Tingkatkan aktivasi brand atau pernikahan Anda dengan cetakan berkualitas tinggi dan berbagi digital instan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                  <Button asChild className="rounded-xl h-12 px-8 bg-monobox hover:bg-monobox-dark transition-all shadow-xl shadow-monobox/30 transform hover:-translate-y-1">
                    <Link href="#booking">Cek Ketersediaan</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl h-12 px-8 border-pink-200 dark:border-pink-800 hover:border-monobox/50">
                    <Link href="#packages">Lihat Paket</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm text-slate-500 dark:text-pink-400">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        alt="Happy customer"
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark object-cover"
                        src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?w=100`}
                      />
                    ))}
                  </div>
                  <p>Dipercaya oleh 500+ acara tahun ini</p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl -rotate-2 transform scale-95 z-0"></div>
                <div className="absolute inset-0 flex gap-4 overflow-hidden rounded-2xl z-10 border-4 border-white dark:border-pink-900/50 shadow-2xl shadow-pink-200 dark:shadow-none">
                  <div className="flex-1 h-full bg-cover bg-center rounded-l-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=600')" }}></div>
                  <div className="flex-1 h-full flex flex-col gap-4">
                    <div className="flex-1 bg-cover bg-center rounded-tr-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=600')" }}></div>
                    <div className="flex-1 bg-cover bg-center rounded-br-sm" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=600')" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-16 lg:px-40 bg-white dark:bg-slate-900/50 relative">
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="flex flex-col gap-4 mb-12 text-center items-center">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                Why Choose Monobox?
              </h2>
              <p className="text-slate-600 dark:text-pink-200 text-lg font-normal max-w-2xl">
                Kami menghadirkan keseruan dan kualitas di setiap acara, memastikan tamu Anda pulang dengan kenangan yang bisa dicetak.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "ios_share", title: "Berbagi Instan", description: "Bagikan foto langsung ke ponsel Anda melalui SMS, Email, atau AirDrop secara instan." },
                { icon: "photo_camera", title: "Kualitas Resolusi Tinggi", description: "Kamera DSLR profesional dan pencahayaan studio memastikan foto tajam berkualitas majalah." },
                { icon: "theater_comedy", title: "Props Kustom", description: "Props bertema, masker digital, dan latar belakang kustom disesuaikan dengan gaya acara Anda." },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col gap-4 rounded-xl border border-pink-100 dark:border-pink-900 bg-background-light dark:bg-background-dark p-6 hover:shadow-lg hover:shadow-pink-100 dark:hover:shadow-pink-900/20 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-monobox mb-2 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-pink-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="px-6 py-20 lg:px-40" id="packages">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Paket Kami</h2>
              <p className="text-slate-600 dark:text-pink-300">Harga transparan. Tanpa biaya tersembunyi.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {packages.map((pkg) => (
                <Card key={pkg.name} className={`rounded-2xl border ${pkg.popular ? 'border-2 border-monobox bg-white dark:bg-slate-900 shadow-xl shadow-pink-200/50 dark:shadow-pink-900/20 hover:-translate-y-2' : 'border-pink-100 dark:border-pink-900 bg-white dark:bg-slate-900 shadow-sm hover:-translate-y-1'} transition-transform duration-300 p-8`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3 bg-monobox text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Terbaik
                    </div>
                  )}
                  <div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold">{pkg.name}</h3>
                    <p className="text-slate-500 text-sm mt-1">{pkg.description}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-slate-900 dark:text-white text-4xl font-black tracking-tight">{pkg.price}</span>
                      <span className="text-slate-500 font-medium">/event</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-slate-700 dark:text-pink-200">
                        <span className="material-symbols-outlined text-monobox text-xl">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`mt-6 w-full h-12 ${pkg.popular ? 'bg-monobox hover:bg-monobox-dark text-white shadow-lg shadow-monobox/25' : 'bg-pink-50 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-slate-700 text-monobox dark:text-pink-200'}`}
                  >
                    <Link href="#booking">Pilih {pkg.name}</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-6 py-16 lg:px-40 bg-white dark:bg-slate-900/50">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div className="flex flex-col gap-2">
                <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-black leading-tight tracking-tight">Acara Terbaru</h2>
                <p className="text-slate-600 dark:text-pink-300">Lihat apa yang orang lain ciptakan dengan Monobox.</p>
              </div>
              <Link className="flex text-monobox font-bold items-center gap-1 hover:gap-2 transition-all text-sm md:text-base" href="#">
                Lihat Galeri Lengkap <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {galleryImages.map((img, index) => (
                <div key={index} className="break-inside-avoid rounded-xl overflow-hidden group relative border-4 border-white dark:border-pink-900 shadow-lg shadow-pink-100 dark:shadow-none">
                  <img alt={img.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src={img.src} />
                  <div className="absolute inset-0 bg-gradient-to-t from-monobox/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="px-6 py-20 lg:px-40" id="booking">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Pesan Tanggal Anda</h2>
              <p className="text-slate-600 dark:text-pink-300 mt-2">Pesan pengalaman fotobooth Anda hari ini</p>
            </div>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                ✓ Permintaan pemesanan terkirim! Kami akan menghubungi Anda segera.
              </div>
            )}

            <Card className="border-pink-100 dark:border-pink-900">
              <CardHeader>
                <CardTitle>Formulir Reservasi</CardTitle>
                <CardDescription>Isi detail acara Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input
                        id="phone"
                        placeholder="0812-3456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="package">Pilih Paket</Label>
                      <select
                        id="package"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        required
                      >
                        <option value="">Pilih paket</option>
                        <option value="starter">Starter - Rp 5.250.000</option>
                        <option value="classic">Classic - Rp 8.250.000</option>
                        <option value="ultimate">Ultimate - Rp 11.250.000</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Tanggal Acara</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Catatan Tambahan (Opsional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Ceritakan tentang acara Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-monobox hover:bg-monobox-dark">
                    Kirim Permintaan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
