"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "@/components/layout/Header"

const MARQUEE_ITEMS = [
  "MONOBOX", "PHOTOBOOTH PREMIUM", "MONODEV", "WEB DEVELOPMENT", "MONOFRAME STUDIO", "CREATIVE DIRECTION",
  "MONOBOX", "PHOTOBOOTH PREMIUM", "MONODEV", "WEB DEVELOPMENT", "MONOFRAME STUDIO", "CREATIVE DIRECTION"
]

const PORTFOLIO = [
  { title: "Pemotretan Editorial", category: "Studio", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200", span: "md:col-span-2 md:row-span-2" },
  { title: "Dashboard FinTech", category: "Monodev", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800", span: "col-span-1 row-span-1" },
  { title: "Tech Summit 2023", category: "Monobox", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800", span: "col-span-1 row-span-1" },
  { title: "Kampanye Brand Audio", category: "Studio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800", span: "col-span-1 row-span-1" },
  { title: "Aplikasi Kesehatan UX/UI", category: "Monodev", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200", span: "md:col-span-2 row-span-1" }
]

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const SERVICES = [
  { id: "monobox", name: "Monobox", num: "01", desc: "Fotobooth interaktif yang mengubah acara menjadi kenangan abadi.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800" },
  { id: "monodev", name: "Monodev", num: "02", desc: "Web architecture & engineering. Performa tinggi dengan desain menawan.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800" },
  { id: "studio", name: "Studio", num: "03", desc: "Arahan seni, editorial, dan fotografi profesional untuk narasi visual yang kuat.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800" }
]

export default function HomePage() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <>
      <Header />
      <div ref={containerRef} className="bg-black text-white min-h-screen selection:bg-white selection:text-black font-sans overflow-hidden">

        {/* 1. HERO SECTION */}
        <section className="relative h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
          {/* Abstract animated gradient bg */}
          <div className="absolute inset-0 z-0 opacity-40 blur-[120px]">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-pink-600 rounded-full mix-blend-screen"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-600 rounded-full mix-blend-screen"
            />
          </div>

          <motion.div style={{ y: heroY, opacity }} className="relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col mt-20">
            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase"
            >
              <div className="overflow-hidden"><motion.div variants={fadeIn}>We Build</motion.div></div>
              <div className="overflow-hidden flex gap-4 md:gap-8 items-center">
                <motion.div variants={fadeIn} className="text-transparent text-stroke-1 hover:text-white transition-colors duration-500">Digital</motion.div>
                <motion.div variants={fadeIn} className="hidden md:block h-[1vw] flex-1 bg-white mt-4" />
              </div>
              <div className="overflow-hidden text-right pr-4"><motion.div variants={fadeIn}>Experiences</motion.div></div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" as any }}
              className="mt-12 md:mt-24 self-end md:w-1/3 text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
            >
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          >
            <span className="text-xs tracking-widest uppercase font-bold text-zinc-500">Scroll</span>
            <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-white"
              />
            </div>
          </motion.div>
        </section>

        {/* 2. INFINITE MARQUEE */}
        <section className="py-8 md:py-16 border-y border-white/10 overflow-hidden bg-black relative z-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap gap-8 text-4xl md:text-7xl font-black tracking-tighter uppercase"
          >
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className={i % 2 === 0 ? "text-white" : "text-transparent text-stroke-1 opacity-50"}>
                {item}
              </span>
            ))}
          </motion.div>
        </section>

        {/* 3. EXPERTISE / SERVICES */}
        <section id="services" className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto relative z-10 bg-black">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 md:mb-0">Pilar<br /><span className="text-transparent text-stroke-1">Keahlian</span></h2>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-lg">Pendekatan tripartit kami memastikan setiap aspek visual dan digital brand Anda ditangani oleh ahlinya.</p>
          </div>

          <div className="flex flex-col border-t border-white/20">
            {SERVICES.map((srv) => (
              <Link href={`/${srv.id}`} key={srv.id} className="group relative border-b border-white/20 py-12 md:py-16 overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 z-10">

                {/* Hover Image Reveal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[500px] aspect-video md:h-[300px] opacity-0 group-hover:opacity-30 md:group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700 pointer-events-none z-0 rounded-2xl overflow-hidden saturate-0 group-hover:saturate-100 blur-sm group-hover:blur-none border border-white/10">
                  <img src={srv.image} alt={srv.name} className="w-full h-full object-cover" />
                </div>

                {/* Number and Name */}
                <div className="flex items-center gap-6 md:gap-16 relative z-10 w-full md:w-auto">
                  <span className="text-xl md:text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-500">{srv.num}</span>
                  <h3 className="text-4xl md:text-8xl font-black tracking-tighter uppercase group-hover:text-transparent group-hover:text-stroke-1 transition-all duration-500 will-change-transform">{srv.name}</h3>
                </div>

                {/* Description and Icon */}
                <div className="relative z-10 md:max-w-md flex flex-col md:items-end gap-6 text-left md:text-right">
                  <p className="text-lg text-zinc-400 group-hover:text-white transition-colors duration-500 max-w-sm">{srv.desc}</p>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110">
                    <span className="material-symbols-outlined -rotate-45 group-hover:rotate-0 transition-transform duration-500">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. PORTFOLIO (BENTO GRID) */}
        <section id="portfolio" className="py-32 px-6 md:px-12 bg-zinc-950 relative z-10 rounded-t-[3rem]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Karya<br /><span className="text-transparent text-stroke-1">Unggulan</span></h2>
              <Link href="/portfolio" className="inline-flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors group">
                Lihat Semua
                <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
              {PORTFOLIO.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ duration: 0.8, ease: "easeOut" as any }}
                  className={`group relative overflow-hidden rounded-3xl bg-zinc-900 ${item.span}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-4 py-2 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md bg-white/10">
                        {item.category}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. MASSIVE FOOTER / CTA */}
        <section id="contact" className="py-32 px-6 md:px-12 bg-black relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center w-full max-w-screen-xl"
          >
            <div className="inline-block px-6 py-3 rounded-full border border-white/20 text-sm font-bold uppercase tracking-widest mb-12">
              Mulai Proyek Anda
            </div>
            <h2 className="text-[10vw] md:text-[8vw] font-black tracking-tighter uppercase leading-[0.85] mb-12 hover:text-transparent hover:text-stroke-2 transition-all duration-500 cursor-pointer">
              Mari <br className="md:hidden" />Berkolaborasi
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-xl md:text-3xl font-bold uppercase tracking-widest text-zinc-500">
              <a href="mailto:hello@monoframe.studio" className="hover:text-white transition-colors relative group">
                hello@monoframe.studio
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  )
}

