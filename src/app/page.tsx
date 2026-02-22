"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "@/components/layout/Header"

// ---- SCENE 1: THE SPARK (HERO) ----
function HeroScene({ scrollYProgress }: { scrollYProgress: any }) {
  // As we scroll, the text scales up massively (creating a zoom-through effect)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 20])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const blur = useTransform(scrollYProgress, [0, 0.8, 1], ["blur(0px)", "blur(0px)", "blur(20px)"])

  return (
    <section className="relative h-[150vh] bg-blue-50">
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
                <motion.img
                  src={srv.image}
                  alt={srv.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
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
          The <br /> <span className="text-transparent text-stroke-2-blue">Archive</span>
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
        <motion.img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
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


export default function HomePage() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <>
      <Header />
      <div ref={containerRef} className="bg-blue-50 text-blue-950 min-h-screen selection:bg-blue-950 selection:text-white font-sans relative">
        <HeroScene scrollYProgress={scrollYProgress} />
        <NarrativeScene />
        <PillarsScene />
        <ArchiveScene />

        {/* 5. MASSIVE FOOTER / CTA (CURTAIN REVEAL) */}
        {/* We achieve a curtain reveal by making the footer fixed at the bottom, 
            and the rest of the content has a higher z-index and margin-bottom equal to footer height */}
        <div className="h-screen" /> {/* Spacer for the fixed footer */}
      </div>
    </>
  )
}
