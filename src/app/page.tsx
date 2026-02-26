"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Header } from "@/components/layout/Header"
import { ProductSlider } from "@/components/home/ProductSlider"

// ---- SCENE 1: THE SPARK (HERO) ----
function HeroScene({ scrollYProgress }: { scrollYProgress: any }) {
  // As we scroll, the text scales up massively (creating a zoom-through effect)
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 20])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0])
  const blur = useTransform(scrollYProgress, [0, 0.6, 0.8], ["blur(0px)", "blur(10px)", "blur(40px)"])

  return (
    <section className="relative h-[180vh] bg-blue-50">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Abstract animated gradient bg */}
        <div className="absolute inset-0 z-0 opacity-40 blur-[100px]">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-300 rounded-full mix-blend-multiply"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-400 rounded-full mix-blend-multiply"
          />
        </div>

        <motion.div
          style={{ scale, opacity, filter: blur }}
          className="relative z-10 flex flex-col items-center justify-center w-full origin-center pointer-events-none"
        >
          <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter uppercase text-center flex flex-col items-center">
            <span className="text-blue-900">Mono</span>
            <span className="text-transparent text-stroke-2-blue hover:text-blue-900 transition-colors duration-500">Frame</span>
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        >
          <span className="text-xs tracking-widest uppercase font-bold text-blue-800/60">Scroll down</span>
          <div className="w-[1px] h-16 bg-blue-900/20 overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-blue-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ---- SCENE 2: THE PROCESS (TEXT SCRUB) ----
function NarrativeScene() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  })

  const text = "Di Monoframe, kami percaya bahwa setiap momen, baris kode, dan pixel memiliki cerita. Kami menggabungkan seni visual dengan keunggulan teknis untuk menciptakan pengalaman digital yang tak terlupakan."
  const words = text.split(" ")

  return (
    <section ref={containerRef} className="py-32 md:py-64 bg-blue-50 relative z-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center md:text-left">
        <p className="text-3xl md:text-[4vw] font-black uppercase tracking-tighter leading-[1.1] flex flex-wrap gap-x-[1vw] gap-y-2 md:gap-y-4 justify-center md:justify-start">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])
            return (
              <motion.span key={i} style={{ opacity }} className="text-blue-950">
                {word}
              </motion.span>
            )
          })}
        </p>
      </div>
    </section>
  )
}

// ---- SCENE 3: THE PILLARS (HORIZONTAL SCROLL) ----
const SERVICES = [
  { id: "monobox", name: "Monobox", num: "01", desc: "Fotobooth interaktif yang mengubah acara menjadi kenangan abadi.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800" },
  { id: "monodev", name: "Monodev", num: "02", desc: "Web architecture & engineering. Performa tinggi dengan desain menawan.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800" },
  { id: "studio", name: "Studio", num: "03", desc: "Arahan seni, editorial, dan fotografi profesional untuk narasi visual yang kuat.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800" },
  { id: "monocreative", name: "Monocreative", num: "04", desc: "Social Media Agency | Creative Partner for UMKM & Brand. Storytelling, Visual, Strategy.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800" }
]

function PillarsScene() {
  const targetRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-blue-100">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[400vw] h-full items-center">
          {SERVICES.map((srv, i) => (
            <div key={srv.id} className="w-[100vw] flex flex-col md:flex-row items-center justify-center p-6 md:p-24 gap-12 relative">
              {/* Background Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-blue-900/5 pointer-events-none z-0">
                {srv.num}
              </div>

              <div className="w-full md:w-1/2 aspect-square md:aspect-video relative overflow-hidden rounded-3xl z-10 group">
                <Image
                  src={srv.image}
                  alt={srv.name}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center z-10">
                <h3 className="text-5xl md:text-[8vw] font-black tracking-tighter uppercase mb-6 leading-none">
                  <span className="text-transparent text-stroke-2-blue block">{srv.name}</span>
                </h3>
                <p className="text-xl md:text-3xl text-blue-900/70 font-medium max-w-lg mb-12">
                  {srv.desc}
                </p>
                <Link href={`/${srv.id}`} className="inline-flex items-center gap-6 group w-fit text-blue-950">
                  <span className="w-16 h-16 rounded-full border border-blue-900/30 flex items-center justify-center group-hover:bg-blue-950 shadow-sm group-hover:text-white transition-all duration-500">
                    <span className="material-symbols-outlined -rotate-45 group-hover:rotate-0 transition-transform duration-500">arrow_forward</span>
                  </span>
                  <span className="text-xl font-bold uppercase tracking-widest">Explore</span>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ---- SCENE 4: THE ARCHIVE (PARALLAX GALLERY) ----
const PORTFOLIO = [
  { title: "Pemotretan Editorial", category: "Studio", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200", yOffset: 50 },
  { title: "Dashboard FinTech", category: "Monodev", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", yOffset: -50 },
  { title: "Tech Summit 2023", category: "Monobox", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800", yOffset: 100 },
  { title: "Kampanye Brand Audio", category: "Studio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800", yOffset: 0 },
]

function ArchiveScene() {
  return (
    <section className="py-32 md:py-64 bg-blue-50 relative z-20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-24 md:mb-48 text-center md:text-left text-blue-950">
          Galeri <br /> <span className="text-transparent text-stroke-2-blue">Produk</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
          {PORTFOLIO.map((item, i) => (
            <PortfolioCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item, index }: { item: any, index: number }) {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Stagger the parallax effect based on index
  const y = useTransform(scrollYProgress, [0, 1], [item.yOffset, -item.yOffset])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={`flex flex-col gap-6 ${index % 2 === 1 ? 'md:mt-32' : ''}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group cursor-pointer bg-blue-100 shadow-xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />

        {/* Overlay Text */}
        <div className="absolute bottom-0 left-0 p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="inline-block px-4 py-2 rounded-full border border-white/50 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md bg-white/30 text-white shadow-sm">
            {item.category}
          </span>
          <h3 className="text-3xl font-black tracking-tighter uppercase text-white drop-shadow-md">{item.title}</h3>
        </div>
      </div>
    </motion.div>
  )
}

// ==== NEW SECTIONS ====

// ---- SCENE 5: NEWS (BERITA) ----
const NEWS_DUMMY = [
  { date: "24 Feb 2026", title: "Peluncuran Fitur Pemesanan Interaktif", category: "Pembaruan" },
  { date: "10 Feb 2026", title: "Kolaborasi Monoframe dengan Brand Lokal XYZ", category: "Kerjasama" },
  { date: "01 Jan 2026", title: "Membuka Tahun Baru dengan Kamera Baru di Studio", category: "Studio" },
]

function NewsScene() {
  return (
    <section className="py-24 md:py-32 bg-white relative z-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase text-blue-950">
            Berita <br /><span className="text-transparent text-stroke-2-blue">Terbaru</span>
          </h2>
          <button className="text-blue-900 font-bold uppercase tracking-widest text-sm hover:text-blue-600 transition-colors border-b-2 border-blue-900 pb-1">
            Lihat Semua Berita
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {NEWS_DUMMY.map((news, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="flex flex-col gap-4 group cursor-pointer">
              <div className="aspect-video bg-blue-100 rounded-xl overflow-hidden relative border-4 border-transparent group-hover:border-blue-200 transition-colors">
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="w-full h-full bg-blue-200 flex flex-col items-center justify-center text-blue-400 font-bold uppercase">
                  <span className="material-symbols-outlined text-4xl mb-2 opacity-50">newspaper</span>
                  <span>Placeholder {i + 1}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-blue-500 mb-2">
                  <span>{news.category}</span>
                  <span className="w-1 h-1 rounded-full bg-blue-300"></span>
                  <span>{news.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black leading-tight text-blue-950 group-hover:text-blue-600 transition-colors">{news.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- SCENE 6: ABOUT & JOURNEY (TENTANG & PERJALANAN) ----
function AboutScene() {
  return (
    <section className="py-32 md:py-48 bg-blue-950 text-white relative z-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8">
              Tentang <br /><span className="text-blue-400">Monoframe</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-blue-100 mb-12">
              Lahir dari hasrat untuk menggabungkan estetika visual dan inovasi digital. Monoframe hadir untuk merekam momen melalui lensa dan merangkai cerita melalui baris kode.
            </p>
            <div className="space-y-12">
              <div>
                <h3 className="text-blue-400 font-bold uppercase tracking-widest mb-8">Perjalanan Kami</h3>
                <div className="border-l-[3px] border-blue-800/50 p-0 m-0 pl-10 space-y-10 relative">

                  <div className="relative">
                    <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-blue-950 border-4 border-blue-400 z-10"></div>
                    <div className="font-black text-3xl text-white mb-2 tracking-tighter">2023 <span className="text-blue-400/50 ml-2">Awal Mula</span></div>
                    <p className="text-blue-200 leading-relaxed text-lg">Dimulai sebagai studio fotografi kecil, melayani klien personal dan dokumentasi acara.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-blue-950 border-4 border-blue-500 z-10"></div>
                    <div className="font-black text-3xl text-white mb-2 tracking-tighter">2024 <span className="text-blue-500/50 ml-2">Ekspansi Digital</span></div>
                    <p className="text-blue-200 leading-relaxed text-lg">Lahirnya lini Monodev untuk menjawab kebutuhan transformasi digital UMKM dan korporasi.</p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-blue-300 border-4 border-blue-100 shadow-[0_0_20px_rgba(147,197,253,0.8)] z-10"></div>
                    <div className="font-black text-3xl text-white mb-2 tracking-tighter">Hari Ini <span className="text-blue-300/50 ml-2">Ekosistem Kreatif</span></div>
                    <p className="text-blue-200 leading-relaxed text-lg">Sinergi penuh antara Studio, Photobooth (Monobox), Development, dan Creative Agency.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-blue-900/30 p-10 rounded-3xl border border-blue-800/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-blue-400 font-bold uppercase tracking-widest mb-10 text-center text-sm">Dipercaya Oleh / Partner Kerjasama</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 items-center justify-items-center">
                {[
                  { name: "Gojek", url: "https://upload.wikimedia.org/wikipedia/commons/9/99/Gojek_logo_2019.svg" },
                  { name: "Tokopedia", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg" },
                  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                  { name: "BCA", url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" },
                  { name: "Pertamina", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Pertamina_Logo.svg" },
                  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
                ].map((partner, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05 }} className="w-full flex justify-center group/logo">
                    <img
                      src={partner.url}
                      alt={partner.name}
                      className="h-8 md:h-10 max-w-[120px] object-contain brightness-0 invert opacity-50 group-hover/logo:opacity-100 transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${partner.name}&background=random&color=fff&font-size=0.33&length=3&rounded=true`;
                        e.currentTarget.className = "h-10 md:h-14 object-contain opacity-50 group-hover/logo:opacity-100 transition-all duration-300 grayscale";
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-700/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-700/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
    </section>
  )
}

// ---- SCENE 7: SOCIALS (SOSIAL MEDIA PRODUK) ----
function SocialsScene() {
  return (
    <section className="py-24 md:py-32 bg-blue-50 relative z-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-blue-950 mb-6">Sosial Media <span className="text-transparent text-stroke-2-blue">Produk</span></h2>
          <p className="text-blue-800/70 font-medium max-w-2xl mx-auto text-lg">Ikuti perjalanan keseharian kami, behind the scenes, dan karya terbaru di Instagram masing-masing layanan.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-6 md:gap-8 max-w-5xl">
          {[
            { tag: "@monobox.id", name: "Monobox", color: "from-pink-500 to-rose-600", shadow: "shadow-pink-500/20" },
            { tag: "@monodev.id", name: "Monodev", color: "from-blue-600 to-indigo-600", shadow: "shadow-blue-600/20" },
            { tag: "@monoframe.studio", name: "Studio", color: "from-sky-400 to-blue-500", shadow: "shadow-sky-400/20" },
          ].map((soc, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group block relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl ${soc.shadow} hover:-translate-y-2 transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${soc.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center z-10 transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-6xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity">photo_camera</span>
                <span className="font-bold text-sm uppercase tracking-widest mb-2 opacity-80">{soc.name}</span>
                <span className="font-black text-2xl md:text-3xl tracking-tighter">{soc.tag}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---- SCENE 8: FAQ (PERTANYAAN YANG SERING DITANYAKAN) ----
const FAQ_DUMMY = [
  { q: "Apakah saya bisa memesan layanan Monobox untuk acara di luar kota?", a: "Saat ini kami fokus melayani area [Nama Kota] dan sekitarnya. Namun, untuk acara berskala besar di luar kota, silakan hubungi tim kami untuk mendiskusikan kemungkinan logistik." },
  { q: "Berapa lama proses pembuatan website di Monodev?", a: "Waktu pengerjaan bervariasi bergantung pada kompleksitas proyek. Untuk website Company Profile standar, biasanya memakan waktu 2-3 minggu. Sedangkan untuk aplikasi web custom bisa memakan waktu 1-3 bulan." },
  { q: "Apakah Monoframe Studio menyediakan jasa makeup artist (MUA)?", a: "Kami memiliki rekanan MUA profesional yang bisa ditambahkan ke dalam paket pemotretan Anda dengan biaya tambahan. Silakan sampaikan kebutuhan ini saat melakukan pemesanan sesi." },
  { q: "Bagaimana sistem pembayaran untuk layanan joki tugas Monodev?", a: "Kami menerapkan sistem down payment (DP) sebesar 50% di awal, dan pelunasan 50% setelah tugas selesai dikerjakan dan diperlihatkan hasilnya." },
]

function FAQScene() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-white relative z-20">
      <div className="max-w-screen-md mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-blue-950 mb-4">FAQ</h2>
          <p className="text-blue-800/60 font-medium pb-2 text-lg">Pertanyaan yang sering ditanyakan</p>
        </div>

        <div className="space-y-4">
          {FAQ_DUMMY.map((faq, i) => (
            <div key={i} className="border-b-2 border-blue-50 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-4 flex justify-between items-center group gap-6"
              >
                <span className={`font-bold text-lg md:text-xl transition-colors ${openIndex === i ? 'text-blue-600' : 'text-blue-950 group-hover:text-blue-700'}`}>
                  {faq.q}
                </span>
                <span className={`material-symbols-outlined text-blue-400 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-blue-800/70 pb-6 pr-8 leading-relaxed text-lg">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <>
      {/* Cinematic Blue Zigzag Line Scroll Progress */}
      <div className="fixed top-0 left-0 w-8 h-full z-[9999] pointer-events-none mix-blend-screen drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 1000"
          fill="none"
          stroke="url(#blue-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          {/* A long zigzag path traversing top to bottom */}
          <motion.path
            d="M 50 0 L 80 50 L 20 150 L 80 250 L 20 350 L 80 450 L 20 550 L 80 650 L 20 750 L 80 850 L 20 950 L 50 1000"
            style={{
              pathLength: scrollYProgress,
              filter: "drop-shadow(0px 0px 8px rgba(56, 189, 248, 0.8))"
            }}
          />
        </svg>
      </div>

      <Header />
      <div ref={containerRef} className="bg-blue-50 text-blue-950 min-h-screen selection:bg-blue-950 selection:text-white font-sans relative">
        <HeroScene scrollYProgress={scrollYProgress} />
        <ProductSlider />
        <NarrativeScene />
        <PillarsScene />
        <ArchiveScene />
        <NewsScene />
        <AboutScene />
        <SocialsScene />
        <FAQScene />

        {/* 5. MASSIVE FOOTER / CTA (CURTAIN REVEAL) */}
        {/* We achieve a curtain reveal by making the footer fixed at the bottom, 
            and the rest of the content has a higher z-index and margin-bottom equal to footer height */}
        <div className="h-screen" /> {/* Spacer for the fixed footer */}
      </div>
    </>
  )
}
