import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const businessUnits = [
  {
    name: "Monobox",
    description: "Pengalaman fotobooth premium untuk acara perusahaan, aktivasi brand, dan pernikahan.",
    icon: "celebration",
    href: "/monobox",
    color: "from-monobox",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
  },
  {
    name: "Monodev",
    description: "Aplikasi web yang skalabel, berkinerja tinggi, dan indah. Kami mengubah kebutuhan kompleks menjadi kode yang bersih.",
    icon: "terminal",
    href: "/monodev",
    color: "from-monodev",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
  },
  {
    name: "Monoframe Studio",
    description: "Fotografi profesional dan arahan seni. Dari foto profil perusahaan hingga fotografi produk.",
    icon: "shutter_speed",
    href: "/studio",
    color: "from-monostudio",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
  },
]

const portfolioItems = [
  {
    title: "Pemotretan Editorial",
    category: "Studio",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    color: "bg-monostudio",
  },
  {
    title: "Dashboard FinTech",
    category: "Monodev",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    color: "bg-monodev",
  },
  {
    title: "Tech Summit 2023",
    category: "Monobox",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
    color: "bg-monobox",
  },
  {
    title: "Kampanye Brand Audio",
    category: "Studio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    color: "bg-monostudio",
  },
  {
    title: "Aplikasi Kesehatan UX/UI",
    category: "Monodev",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
    color: "bg-monodev",
  },
  {
    title: "Gala Musim Panas",
    category: "Monobox",
    image: "https://images.unsplash.com/photo-1519671482502-9759101d4561?w=600",
    color: "bg-monobox",
  },
]

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Manajer Acara, Tech Corp",
    content: "Monoframe mengubah gala tahunan kami dengan Monobox. Kualitas fotonya luar biasa, dan kustomisasi branding-nya sangat tepat.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    brandColor: "monobox",
  },
  {
    name: "Michael Chen",
    role: "Pendiri, StartupXYZ",
    content: "Tim Monodev membangun website yang memukau untuk kami. Perhatian mereka terhadap detail dan keahlian teknis melampaui ekspektasi kami.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    brandColor: "monodev",
  },
  {
    name: "Emma Rodriguez",
    role: "Direktur Kreatif",
    content: "Bekerja dengan Monoframe Studio sangat menyenangkan. Mereka menangkap esensi brand kami dengan sempurna di setiap shot.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    brandColor: "monostudio",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background-light dark:bg-deep-blue pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-monostudio/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-monobox/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-monodev/20 bg-monodev/5 px-3 py-1 text-xs font-medium text-monodev mb-6">
                <span className="mr-1 h-1.5 w-1.5 rounded-full bg-monodev"></span>
                Solusi Kreatif Terpadu
              </div>
              <h1 className="text-4xl font-black tracking-tight text-text-main sm:text-6xl mb-6 dark:text-white">
                Tempat <span className="text-transparent bg-clip-text bg-gradient-to-r from-monobox to-monodev">Kreativitas</span> Bertemu <span className="text-transparent bg-clip-text bg-gradient-to-r from-monodev to-monostudio">Teknologi</span>
              </h1>
              <p className="text-lg leading-8 text-text-muted mb-8 dark:text-slate-400">
                Monoframe mengintegrasikan pengalaman fotobooth premium, pengembangan web mutakhir, dan fotografi profesional dalam satu atap. Kami membangun, mengabadikan, dan mendesain narasi Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-deep-blue hover:bg-monodev dark:bg-monodev dark:hover:bg-blue-600">
                  <Link href="/#services">Jelajahi Layanan</Link>
                </Button>
                <Button asChild variant="outline" className="dark:bg-white/5 dark:text-white dark:border-gray-700 dark:hover:bg-white/10">
                  <Link href="/#portfolio">Lihat Portofolio</Link>
                </Button>
              </div>
            </div>

            <div className="relative lg:h-auto lg:w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-deep-blue-light shadow-xl lg:aspect-square dark:bg-deep-blue-light group ring-1 ring-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-monobox/20 via-monodev/20 to-monostudio/20 mix-blend-overlay z-10 pointer-events-none"></div>
                <img
                  alt="Abstract blend of digital technology and artistic lights"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
                />
                <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm dark:bg-deep-blue/90 border-l-4 border-monobox">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-monobox/10 text-monobox">
                    <span className="material-symbols-outlined">camera</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-muted dark:text-slate-400">Abadikan</p>
                    <p className="text-sm font-bold text-text-main dark:text-white">Resolusi 4K</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 z-20 flex items-center gap-3 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm dark:bg-deep-blue/90 border-r-4 border-monodev">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-monodev/10 text-monodev">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-muted dark:text-slate-400">Kembangkan</p>
                    <p className="text-sm font-bold text-text-main dark:text-white">Kode Bersih</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background-subtle py-24 sm:py-32 dark:bg-deep-blue-light" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl dark:text-white">Pilar Keahlian Kami</h2>
            <p className="mt-4 text-lg leading-8 text-text-muted dark:text-slate-400">
              Tiga unit khusus bekerja secara harmonis untuk menghadirkan pengalaman digital dan fisik yang menyeluruh.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {businessUnits.map((unit) => (
              <Card key={unit.name} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-deep-blue border border-transparent hover:border-opacity-30" style={{ '--hover-color': unit.color } as React.CSSProperties}>
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-t ${unit.color}/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  <img
                    alt={unit.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={unit.image}
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined text-pink-200">{unit.icon}</span>
                    <span className="font-bold">{unit.name}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${unit.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
                  <div>
                    <h3 className="text-xl font-bold text-text-main mb-2 dark:text-white group-hover:text-monodev transition-colors">
                      {unit.name === "Monobox" ? "Fotobooth Premium" : unit.name === "Monodev" ? "Pengembangan Web Kustom" : "Narasi Visual"}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed dark:text-slate-400">{unit.description}</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <Link
                      href={unit.href}
                      className="inline-flex items-center text-sm font-semibold hover:opacity-80"
                      style={{ color: unit.name === "Monobox" ? '#ec4899' : unit.name === "Monodev" ? '#0047FF' : '#7dd3fc' }}
                    >
                      {unit.name === "Monobox" ? "Lihat Paket" : unit.name === "Monodev" ? "Lihat Teknologi" : "Lihat Galeri"}
                      <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-background-light py-24 dark:bg-deep-blue" id="portfolio">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl dark:text-white">Karya Unggulan</h2>
              <p className="mt-4 text-text-muted dark:text-slate-400">
                Pilihan kurasi dari proyek terbaru kami di bidang web, acara, dan fotografi.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="bg-deep-blue-light text-white dark:bg-deep-blue-light">Semua</Button>
              <Button variant="ghost" size="sm" className="hover:bg-monobox hover:text-white">Monobox</Button>
              <Button variant="ghost" size="sm" className="hover:bg-monodev hover:text-white">Monodev</Button>
              <Button variant="ghost" size="sm" className="hover:bg-monostudio hover:text-white">Studio</Button>
            </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer">
                <img
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.image}
                />
                <div className={`absolute inset-0 ${item.color}/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="text-center p-4">
                    <p className={`${item.color === 'bg-monostudio' ? 'text-deep-blue' : 'text-white'} font-bold text-lg`}>{item.title}</p>
                    <p className={`${item.color === 'bg-monostudio' ? 'text-deep-blue/70' : 'text-white/80'} text-sm font-semibold`}>{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/5">
              Muat Lebih Banyak Proyek
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background-subtle py-24 relative overflow-hidden dark:bg-deep-blue-light/50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-monobox via-monodev to-monostudio"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-text-main dark:text-white">Cerita Klien</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="dark:bg-deep-blue dark:border-gray-700">
                <span className="material-symbols-outlined">arrow_back</span>
              </Button>
              <Button variant="outline" size="icon" className="dark:bg-deep-blue dark:border-gray-700">
                <span className="material-symbols-outlined">arrow_forward</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-2xl bg-white p-8 shadow-sm dark:bg-deep-blue border-t-4" style={{ borderTopColor: testimonial.brandColor === 'monobox' ? '#ec4899' : testimonial.brandColor === 'monodev' ? '#0047FF' : '#7dd3fc' }}>
                <div className="flex gap-1 mb-4" style={{ color: testimonial.brandColor === 'monobox' ? '#ec4899' : testimonial.brandColor === 'monodev' ? '#0047FF' : '#7dd3fc' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>
                  ))}
                </div>
                <blockquote className="text-text-main mb-6 leading-relaxed dark:text-slate-200">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                    src={testimonial.image}
                    style={{ outline: `2px solid ${testimonial.brandColor === 'monobox' ? '#ec4899' : testimonial.brandColor === 'monodev' ? '#0047FF' : '#7dd3fc'}`, outlineOffset: '2px' }}
                  />
                  <div>
                    <p className="font-semibold text-text-main dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-text-muted dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-deep-blue via-deep-blue-light to-black text-white py-24 relative isolate overflow-hidden" id="contact">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] bg-monostudio/10 rounded-full blur-[100px]"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                Siap memulai <span className="text-primary">perjalanan digital</span> Anda?
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Apakah Anda membutuhkan fotobooth untuk acara, website untuk bisnis, atau fotografi profesional, tim kami siap membantu.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Email Kami</h3>
                    <p className="text-slate-400">hello@monoframe.studio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
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
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="name">Nama</label>
                    <input
                      className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-800/50"
                      id="name"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="email">Email</label>
                    <input
                      className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-800/50"
                      id="email"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="service">Layanan</label>
                  <select
                    className="mt-1 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 bg-slate-800/50"
                    id="service"
                  >
                    <option>Monobox - Fotobooth</option>
                    <option>Monodev - Pengembangan Web</option>
                    <option>Monoframe Studio</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-slate-300" htmlFor="message">Pesan</label>
                  <textarea
                    className="mt-1 block w-full rounded-md border-0 px-3 py-2 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-800/50"
                    id="message"
                    rows={4}
                    placeholder="Ceritakan tentang proyek Anda..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-blue-600">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
