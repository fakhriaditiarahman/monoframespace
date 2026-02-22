"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { animateTextReveal } from "@/lib/animations"
import { MagneticButton } from "@/components/ui/magnetic-button"

const services = [
    {
        icon: "campaign",
        title: "Social Media Management",
        description: "Pengelolaan media sosial komprehensif untuk meningkatkan engagement dan membangun komunitas loyal. Kurasi estetika harian, penjadwalan konten, dan manajemen interaksi pasif-aktif.",
        features: ["Konten Kreatif Harian", "Copywriting Menarik", "Manajemen Interaksi"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    },
    {
        icon: "palette",
        title: "Visual Branding",
        description: "Desain identitas visual yang menawan dan berkesan untuk membedakan brand Anda dari kompetitor. Dari pedoman logo hingga tipografi dan aset digital kustom.",
        features: ["Desain Logo & Identitas", "Panduan Gaya Visual", "Aset Desain Kustom"],
        image: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?w=800",
    },
    {
        icon: "trending_up",
        title: "Digital Strategy & Ads",
        description: "Strategi pemasaran berbasis data dan periklanan digital untuk ROI yang maksimal dan pertumbuhan bisnis. Menghubungkan titik antara klik dan retensi pelanggan.",
        features: ["Strategi Kampanye", "Facebook & IG Ads", "Analitik & Pelaporan"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    },
]

const projects = [
    {
        title: "Kopi Kawa Padang",
        category: "F&B",
        description: "Re-branding dan pengelolaan media sosial untuk kedai kopi lokal.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
        year: "2023",
    },
    {
        title: "Minang Fashion",
        category: "Retail",
        description: "Kampanye visual dan strategi iklan digital untuk brand pakaian.",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800",
        year: "2023",
    },
    {
        title: "Sate Mak Syukur",
        category: "Kuliner",
        description: "Pembuatan konten video dan foto produk yang menggugah selera.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
        year: "2023",
    },
    {
        title: "Pesona Bahari Resort",
        category: "Hospitality",
        description: "Eksekusi visual profil perusahaan dan media sosial untuk hotel tepi pantai.",
        image: "https://images.unsplash.com/photo-1582719478250-c894e4dc240e?w=800",
        year: "2024",
    }
]

// ---- TEXT SCRUB NARRATIVE COMPONENT ----
function NarrativeScene() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"]
    })

    const text = "Di Monocreative, kami percaya setiap brand memiliki cerita langka yang menanti untuk diceritakan. Melalui lensa visual sinematik dan strategi komunikasi tepat sasaran, kami tidak sekadar mencari klik—kami menciptakan ikatan emosional abadi bagi audiens Anda."
    const words = text.split(" ")

    return (
        <section ref={containerRef} className="py-32 md:py-64 bg-slate-950 relative z-20 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-monocreative/10 mix-blend-screen rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center md:text-left relative z-10">
                <p className="text-3xl md:text-[5vw] font-black uppercase tracking-tighter leading-[1.1] flex flex-wrap gap-x-[1.5vw] gap-y-2 md:gap-y-4 justify-center md:justify-start">
                    {words.map((word, i) => {
                        const start = i / words.length
                        const end = start + (1 / words.length)
                        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
                        const y = useTransform(scrollYProgress, [start, end], [20, 0])
                        return (
                            <motion.span key={i} style={{ opacity, y }} className="text-white">
                                {word}
                            </motion.span>
                        )
                    })}
                </p>
            </div>
        </section>
    )
}

export default function MonocreativePage() {
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
        animateTextReveal('.monocreative-hero-heading', { y: 40, duration: 1.5, delay: 0.2 });
        animateTextReveal('.monocreative-subtitle', { y: 20, duration: 1, delay: 1 });
    }, []);

    return (
        <div className="bg-slate-950 text-slate-100 font-display antialiased min-h-screen selection:bg-monocreative selection:text-white" ref={containerRef}>
            {/* Absolute Transparent Header */}
            <header className="absolute top-0 left-0 right-0 z-50 py-8">
                <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer" data-cursor-text="BACK">
                        <span className="material-symbols-outlined text-white text-3xl group-hover:-translate-x-2 transition-transform">arrow_left_alt</span>
                        <span className="font-extrabold tracking-widest text-lg text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0">Beranda</span>
                    </Link>
                    <div className="flex gap-4">
                        <MagneticButton>
                            <Link href="#contact" className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-monocreative hover:text-white transition-colors">
                                Let&apos;s Talk
                            </Link>
                        </MagneticButton>
                    </div>
                </div>
            </header>

            <main>
                {/* Massive Interactive Hero Section */}
                <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
                    <motion.div
                        className="absolute inset-0 z-0 origin-center"
                        style={{ scale: heroScale, opacity: heroOpacity, filter: heroBlur }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_60%)]" />
                    </motion.div>

                    <div className="relative z-10 w-full px-6 flex flex-col items-center pointer-events-none">
                        <div className="monocreative-subtitle flex items-center gap-3 text-monocreative font-bold uppercase tracking-[0.2em] mb-8 text-sm md:text-base">
                            <span className="w-12 h-[1px] bg-monocreative" />
                            Social Media Agency • Padang
                            <span className="w-12 h-[1px] bg-monocreative" />
                        </div>
                        <h1 className="monocreative-hero-heading text-[12vw] md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-center text-white mix-blend-difference">
                            Creative
                            <span className="block text-transparent text-stroke-1 hover:text-monocreative transition-colors duration-700 pointer-events-auto cursor-default" data-cursor-text="WOW">Partner</span>
                        </h1>
                        <p className="monocreative-subtitle mt-8 text-lg md:text-2xl text-slate-300 font-medium max-w-2xl text-center leading-relaxed">
                            Storytelling. Visual. Strategy.<br />Untuk UMKM & Brand yang ingin melesat.
                        </p>
                    </div>

                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
                        <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
                            <motion.div
                                animate={{ y: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="w-full h-full bg-white"
                            />
                        </div>
                    </motion.div>
                </section>

                {/* Storytelling Scrub */}
                <NarrativeScene />

                {/* Services / Pillars Section (Parallax Stagger) */}
                <section className="py-24 md:py-40 bg-slate-950" id="services">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="mb-24 md:mb-40 flex flex-col items-start gap-4" data-cursor-text="SERVICES">
                            <h2 className="text-5xl md:text-[7vw] font-black uppercase tracking-tighter leading-none text-white">
                                The <span className="text-transparent text-stroke-1-monocreative">Method</span>
                            </h2>
                            <div className="w-24 h-1 bg-monocreative mt-4" />
                        </div>

                        <div className="flex flex-col gap-32 md:gap-64">
                            {services.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Showcase Grid */}
                <section className="py-32 bg-slate-900 border-t border-white/5 rounded-t-[3rem] relative z-20" id="showcase">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                                Selected <br /><span className="text-monocreative">Works</span>
                            </h2>
                            <MagneticButton>
                                <Link href="#contact" className="group flex items-center gap-3 text-white uppercase tracking-widest text-sm font-bold pb-2 border-b border-white/20 hover:border-white transition-colors">
                                    Mulai Proyek Serupa <span className="material-symbols-outlined group-hover:-rotate-45 transition-transform">arrow_forward</span>
                                </Link>
                            </MagneticButton>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-32">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`group relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                                    data-cursor-text="VIEW"
                                >
                                    <div className="aspect-[4/5] overflow-hidden bg-slate-800 rounded-lg group-hover:rounded-[2rem] transition-all duration-700 mb-6">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                                        />
                                    </div>
                                    <div className="flex justify-between items-start gap-4 px-2">
                                        <div>
                                            <span className="text-monocreative text-xs font-bold uppercase tracking-widest">{project.category}</span>
                                            <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-monocreative transition-colors">{project.title}</h3>
                                        </div>
                                        <span className="text-slate-500 font-mono text-sm">{project.year}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Immersive Contact Section */}
                <section className="py-32 lg:py-48 bg-slate-950 relative overflow-hidden" id="contact">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-monocreative/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-8">
                                    Let&apos;s <br /><span className="text-transparent text-stroke-1-monocreative hover:text-monocreative transition-colors cursor-default" data-cursor-text="TALK">Create</span> <br />Magic.
                                </h2>
                                <div className="text-slate-400 font-medium leading-relaxed max-w-md space-y-6">
                                    <p>Ceritakan visi brand Anda, dan tim kreatif kami akan menenun strategi visual yang mengubah audiens menjadi loyalis.</p>

                                    <div className="pt-8 space-y-4">
                                        <div className="flex items-center gap-4 group">
                                            <span className="material-symbols-outlined text-monocreative text-2xl group-hover:scale-110 transition-transform">alternate_email</span>
                                            <a href="mailto:hello@monocreative.agency" className="text-white text-lg font-bold hover:text-monocreative transition-colors">hello@monocreative.id</a>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <span className="material-symbols-outlined text-monocreative text-2xl group-hover:scale-110 transition-transform">location_on</span>
                                            <span className="text-white text-lg font-bold">Padang, West Sumatra</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-6 lg:col-start-7 relative">
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 -rotate-1 lg:-rotate-2 z-0" />
                                <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12">
                                    <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white border-b border-white/10 pb-4">Drop a Message</h3>

                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                            className="bg-monocreative/20 border border-monocreative text-monocreative text-center p-8 rounded-xl font-bold uppercase tracking-widest flex flex-col items-center gap-4"
                                        >
                                            <span className="material-symbols-outlined text-5xl">check_circle</span>
                                            Pesan Anda Terbang ke Inbox Kami!
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2 group">
                                                <Label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Brand Name</Label>
                                                <Input
                                                    className="bg-white/5 border-none focus-visible:ring-1 focus-visible:ring-monocreative rounded-none border-b border-white/20 h-12 text-lg text-white placeholder:text-slate-600 transition-colors"
                                                    placeholder="Type your brand name"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Email</Label>
                                                <Input
                                                    type="email"
                                                    className="bg-white/5 border-none focus-visible:ring-1 focus-visible:ring-monocreative rounded-none border-b border-white/20 h-12 text-lg text-white placeholder:text-slate-600 transition-colors"
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-xs uppercase tracking-widest text-slate-400 font-bold">What do you need?</Label>
                                                <select
                                                    className="w-full bg-white/5 border-none focus-visible:ring-1 focus-visible:ring-monocreative rounded-none border-b border-white/20 h-12 text-lg text-white/80 appearance-none cursor-pointer"
                                                    value={formData.serviceType}
                                                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                                                    required
                                                >
                                                    <option value="" className="bg-slate-900">Select Service</option>
                                                    <option value="smm" className="bg-slate-900">Social Media Management</option>
                                                    <option value="branding" className="bg-slate-900">Visual & Branding</option>
                                                    <option value="full" className="bg-slate-900">Full Campaign (Story + Visuals + Ads)</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-xs uppercase tracking-widest text-slate-400 font-bold">Project Details</Label>
                                                <Textarea
                                                    className="bg-white/5 border-none focus-visible:ring-1 focus-visible:ring-monocreative rounded-none border-b border-white/20 min-h-[120px] text-lg text-white resize-none placeholder:text-slate-600 transition-colors"
                                                    placeholder="Tell us everything..."
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="pt-4 flex justify-end">
                                                <MagneticButton>
                                                    <button type="submit" className="group flex items-center gap-4 bg-monocreative hover:bg-monocreative/90 text-white p-4 px-8 rounded-full font-bold uppercase tracking-widest text-sm transition-colors">
                                                        Send Brief <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">send</span>
                                                    </button>
                                                </MagneticButton>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

// Sub-component for Parallax Service Cards
function ServiceCard({ service, index }: { service: any, index: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    const isEven = index % 2 === 0

    return (
        <motion.div ref={ref} style={{ opacity }} className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            {/* Numbers Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/5 pointer-events-none z-[-1]">
                0{index + 1}
            </div>

            {/* Text Content */}
            <motion.div
                style={{ y: y1 }}
                className={`flex flex-col gap-6 md:col-span-5 ${isEven ? 'md:order-1' : 'md:order-2 md:col-start-8'}`}
            >
                <div className="flex items-center gap-4 text-monocreative">
                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                    <span className="font-bold tracking-widest uppercase text-sm border-b border-monocreative pb-1">Core Service</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    {service.title}
                </h3>
                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                    {service.description}
                </p>
                <ul className="flex justify-start gap-4 flex-wrap mt-4">
                    {service.features.map((feature: string, i: number) => (
                        <li key={i} className="px-4 py-2 border border-white/20 rounded-full text-xs font-bold uppercase text-white tracking-widest backdrop-blur-sm">
                            {feature}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Image Content */}
            <motion.div
                style={{ y: y2 }}
                className={`h-[50vh] md:h-[80vh] w-full bg-slate-800 rounded-3xl overflow-hidden relative shadow-2xl shadow-monocreative/10 md:col-span-6 ${isEven ? 'md:col-start-7 md:order-2' : 'md:order-1'}`}
                data-cursor-text="DISCOVER"
            >
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${service.image}')`,
                        y: useTransform(scrollYProgress, [0, 1], [-100, 100])
                    }}
                />
                <div className="absolute inset-0 bg-monocreative/20 mix-blend-color hover:bg-transparent transition-colors duration-1000" />
            </motion.div>
        </motion.div>
    )
}
