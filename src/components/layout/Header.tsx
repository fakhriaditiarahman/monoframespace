"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-8"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">

          {/* Brand Logo - Minimal Text */}
          <Link href="/" className="relative z-50 group">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-900 hover:text-blue-700 transition-colors uppercase">
              Monoframe
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Studio", "Monobox", "Monodev"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-bold tracking-widest text-blue-900 uppercase relative overflow-hidden group z-50 pointer-events-auto"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-900 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Toggle (Desktop + Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/10 backdrop-blur-md border border-blue-900/20 hover:bg-blue-900/20 transition-all z-50 text-blue-950"
          >
            <div className="flex flex-col gap-1.5 items-end justify-center w-5 h-5">
              <span className={`h-0.5 bg-blue-950 transition-all duration-300 ${mobileMenuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`} />
              <span className={`h-0.5 bg-blue-950 transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4"}`} />
              <span className={`h-0.5 bg-blue-950 transition-all duration-300 ${mobileMenuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-3"}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black text-white flex flex-col justify-center px-6 md:px-24"
          >
            <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-8">
              {/* Massive Menu Links */}
              {[
                { label: "Home", href: "/" },
                { label: "Monoframe Studio", href: "/studio" },
                { label: "Monobox", href: "/monobox" },
                { label: "Monodev", href: "/monodev" },
                { label: "Contact", href: "/#contact" },
              ].map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-6"
                  >
                    <span className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-transparent text-stroke-1 hover:text-white transition-all duration-500">
                      {link.label}
                    </span>
                    <span className="material-symbols-outlined text-4xl opacity-0 -translate-x-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      arrow_forward
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 text-zinc-500 flex flex-col md:flex-row gap-8 uppercase tracking-widest text-sm font-medium"
              >
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
