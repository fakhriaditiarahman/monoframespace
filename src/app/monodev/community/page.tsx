"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"
import { animateTextReveal } from "@/lib/animations"
import { MagneticButton } from "@/components/ui/magnetic-button"

export default function MonodevCommunityPage() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Hero scale effect
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const heroBlur = useTransform(scrollYProgress, [0, 0.2], ["blur(0px)", "blur(20px)"])

    useEffect(() => {
        animateTextReveal('.community-hero-heading', { y: 40, duration: 1.5, delay: 0.2 });
    }, []);

    return (
        <div className="bg-slate-950 text-slate-100 font-display antialiased min-h-screen selection:bg-monodev selection:text-white" ref={containerRef}>
            {/* Absolute Transparent Header */}
            <header className="absolute top-0 left-0 right-0 z-50 py-8">
                <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
                    <Link href="/monodev" className="flex items-center gap-2 group cursor-pointer" data-cursor-text="BACK">
                        <span className="material-symbols-outlined text-white text-3xl group-hover:-translate-x-2 transition-transform">arrow_left_alt</span>
                        <span className="font-extrabold tracking-widest text-lg text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0">Monodev</span>
                    </Link>
                    <div className="flex gap-4">
                        <Button asChild className="px-6 py-3 rounded-full bg-monodev hover:bg-monodev-dark text-white font-semibold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-monodev/30 border-none cursor-pointer">
                            <a href="https://github.com/monodev-id" target="_blank" rel="noopener noreferrer">
                                Join Community
                            </a>
                        </Button>
                    </div>
                </div>
            </header>

            <main>
                {/* Immersive Hero Section */}
                <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
                    <motion.div
                        className="absolute inset-0 z-0 origin-center"
                        style={{ scale: heroScale, opacity: heroOpacity, filter: heroBlur }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,71,255,0.15)_0%,transparent_60%)]" />
                    </motion.div>

                    <div className="relative z-10 w-full px-6 flex flex-col items-center pointer-events-none">
                        <div className="flex items-center gap-3 text-monodev font-bold uppercase tracking-[0.2em] mb-8 text-sm md:text-base">
                            <span className="w-12 h-[1px] bg-monodev" />
                            Monodev.id Community
                            <span className="w-12 h-[1px] bg-monodev" />
                        </div>
                        <h1 className="community-hero-heading text-[10vw] md:text-[8vw] font-black uppercase leading-[0.9] tracking-tighter text-center text-white mix-blend-difference px-4">
                            <span className="block text-transparent text-stroke-1 hover:text-white transition-colors duration-700 pointer-events-auto cursor-default">Mahasiswa</span>
                            Teknik Informatika
                        </h1>
                        <p className="mt-8 text-lg md:text-2xl text-slate-300 font-medium max-w-3xl text-center leading-relaxed px-4">
                            Ngoding · Sharing · Kolaborasi · Edukasi Digital.<br />Wadah belajar aktif untuk mahasiswa TI & Pendidikan TI di Indonesia.
                        </p>
                    </div>

                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest">Discover</span>
                        <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
                            <motion.div
                                animate={{ y: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="w-full h-full bg-white"
                            />
                        </div>
                    </motion.div>
                </section>

                {/* Content Section */}
                <section className="py-24 relative overflow-hidden bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 md:mb-32">
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">Misi <span className="text-transparent text-stroke-1-monodev">Monodev.id</span></h3>
                                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                                    Monodev.id adalah ekosistem terbuka untuk mahasiswa Teknik Informatika dan Pendidikan Teknik Informatika. Kami berfokus pada pengembangan kemampuan praktis dalam teknologi, pemrograman mutakhir, dan memajukan edukasi digital melalui budaya kolaborasi yang inklusif.
                                </p>
                                <div className="mt-10 flex flex-wrap items-center gap-4 text-white font-bold bg-slate-900/50 border border-white/10 p-4 px-6 rounded-2xl w-fit backdrop-blur-md">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-monodev text-2xl">location_on</span>
                                        <span className="tracking-wide">Padang, Indonesia</span>
                                    </div>
                                    <span className="text-white/20 mx-2 hidden sm:block">|</span>
                                    <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                                        <span className="material-symbols-outlined text-monodev text-2xl">group</span>
                                        <span className="tracking-wide">Growing Community</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Card className="bg-slate-900 border-white/10 overflow-hidden relative group hover:border-monodev/50 transition-colors">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-monodev to-cyan-400 group-hover:w-full transition-all duration-500 z-0 opacity-10" />
                                        <CardContent className="p-8 relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-monodev border border-blue-500/20">
                                                    <span className="material-symbols-outlined text-2xl">track_changes</span>
                                                </div>
                                                <h4 className="text-2xl font-black text-white uppercase tracking-wider">Tujuan Kami</h4>
                                            </div>
                                            <ul className="space-y-4 text-lg text-slate-400">
                                                <li className="flex gap-4 items-start"><span className="text-monodev font-black text-xl">01</span> Mengembangkan skill pemrograman & TI mutakhir</li>
                                                <li className="flex gap-4 items-start"><span className="text-monodev font-black text-xl">02</span> Mendorong kolaborasi riset & project antar mahasiswa</li>
                                                <li className="flex gap-4 items-start"><span className="text-monodev font-black text-xl">03</span> Menjadi wadah belajar yang inklusif & berkelanjutan</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <Card className="bg-slate-900 border-white/10 overflow-hidden relative group hover:border-monodev/50 transition-colors">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-monodev to-cyan-400 group-hover:w-full transition-all duration-500 z-0 opacity-10" />
                                        <CardContent className="p-8 relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-monodev border border-blue-500/20">
                                                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                                                </div>
                                                <h4 className="text-2xl font-black text-white uppercase tracking-wider">Aktivitas Inti</h4>
                                            </div>
                                            <ul className="space-y-4 text-lg text-slate-400">
                                                <li className="flex gap-4 items-start"><span className="text-monodev mt-1 material-symbols-outlined text-sm">terminal</span> Diskusi mendalam tentang teknologi & ranah IT</li>
                                                <li className="flex gap-4 items-start"><span className="text-monodev mt-1 material-symbols-outlined text-sm">integration_instructions</span> Kolaborasi pengerjaan open-source & nyata</li>
                                                <li className="flex gap-4 items-start"><span className="text-monodev mt-1 material-symbols-outlined text-sm">forum</span> Sharing session reguler & peer-learning</li>
                                                <li className="flex gap-4 items-start"><span className="text-monodev mt-1 material-symbols-outlined text-sm">developer_mode</span> Pengembangan ragam software edukasi</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>
                        </div>

                        {/* Core Values Section (Awwwards Style Display) */}
                        <div className="my-32 md:my-56 relative z-10">
                            <div className="flex flex-col items-center justify-center mb-24 md:mb-40 text-center sticky top-32 z-0 mix-blend-exclusion">
                                <span className="text-monodev font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-4">
                                    <span className="w-12 h-[1px] bg-monodev" /> Manifesto <span className="w-12 h-[1px] bg-monodev" />
                                </span>
                                <h2 className="text-6xl md:text-[10vw] font-black text-white uppercase tracking-tighter leading-none" data-cursor-text="BELIEF">
                                    Core <span className="text-transparent text-stroke-1-monodev">Values</span>
                                </h2>
                            </div>

                            <div className="relative z-10 flex flex-col gap-8 w-full max-w-5xl mx-auto px-4 mt-[20vh]">
                                {[
                                    { title: "Belajar Serius", desc: "Dedikasi total pada penguasaan materi inti ilmu komputer.", icon: "school" },
                                    { title: "Diskusi Santai", desc: "Menciptakan ekosistem komunal yang aman untuk bertanya.", icon: "coffee" },
                                    { title: "Satu Visi", desc: "Bergerak bersama melahirkan inovasi teknologi lokal.", icon: "visibility" }
                                ].map((val, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-20%" }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] sticky"
                                        style={{ top: `calc(15vh + ${i * 5}vh)` }}
                                        data-cursor-text="NILAI"
                                    >
                                        <div className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 bg-slate-950 rounded-full flex items-center justify-center border border-monodev/30 text-monodev relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-monodev/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                                            <span className="material-symbols-outlined text-4xl md:text-6xl relative z-10">{val.icon}</span>
                                        </div>
                                        <div className="flex-grow w-full">
                                            <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
                                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">{val.title}</h3>
                                                <span className="text-monodev font-black text-3xl md:text-5xl opacity-50">0{i + 1}</span>
                                            </div>
                                            <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed">{val.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Grand Vision CTA */}
                        <div className="w-full min-h-[90vh] flex items-center justify-center relative overflow-hidden py-32 rounded-t-[4rem] bg-slate-950 border-t border-white/5 mt-32 md:mt-48">
                            <div className="absolute inset-0 z-0 opacity-30">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[60vw] w-[60vw] rounded-full bg-monodev opacity-20 blur-[150px]" />
                                <div className="absolute bottom-0 right-0 -z-10 h-[40vw] w-[40vw] rounded-full bg-cyan-500 opacity-20 blur-[150px]" />
                            </div>

                            <div className="relative z-20 flex flex-col items-center max-w-7xl mx-auto px-6 text-center">
                                <span className="material-symbols-outlined text-[8vw] md:text-[5vw] text-monodev mb-8 -rotate-12 opacity-80" data-cursor-text="QUOTE">format_quote</span>
                                <h2 className="text-4xl md:text-[6.5vw] font-black leading-[1.1] tracking-tighter mb-16 text-white" data-cursor-text="VISION">
                                    Menjadi developer dan pendidik IT yang <span className="text-monodev italic pr-2">relevan</span> <br className="hidden md:block" />dan <span className="text-cyan-400">berdampak.</span>
                                </h2>
                                <MagneticButton>
                                    <Button asChild className="group px-8 py-8 md:px-12 md:py-10 rounded-full bg-white text-black font-black text-sm md:text-lg uppercase tracking-widest hover:bg-monodev hover:text-white transition-all duration-500 overflow-hidden relative">
                                        <a href="https://github.com/monodev-id" target="_blank" rel="noopener noreferrer">
                                            <span className="relative z-10 flex items-center gap-3">
                                                Belajar Bersama Kami <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">arrow_outward</span>
                                            </span>
                                        </a>
                                    </Button>
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
