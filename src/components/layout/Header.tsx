"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-4 z-50 mx-4 mt-4 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-xl dark:border-gray-800 dark:bg-deep-blue/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded bg-gradient-to-br from-monobox via-monodev to-monostudio text-white">
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-text-main dark:text-white">Monoframe</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/#about"
              className="text-sm font-medium text-text-main hover:text-monodev transition-colors dark:text-slate-200 dark:hover:text-monodev"
            >
              Tentang
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-text-main hover:text-monodev transition-colors dark:text-slate-200 dark:hover:text-monodev"
            >
              Layanan
            </Link>
            <Link
              href="/#portfolio"
              className="text-sm font-medium text-text-main hover:text-monodev transition-colors dark:text-slate-200 dark:hover:text-monodev"
            >
              Portofolio
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-text-main hover:text-monodev transition-colors dark:text-slate-200 dark:hover:text-monodev"
            >
              Kontak
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex bg-deep-blue hover:bg-monodev dark:bg-monodev dark:hover:bg-blue-600">
              <Link href="/#contact">Minta Penawaran</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center text-text-main dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-deep-blue">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link
              href="/#about"
              className="text-sm font-medium text-text-main hover:text-monodev transition-colors dark:text-slate-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-text-main hover:text-monodev transition-colors dark:text-slate-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="/#portfolio"
              className="text-sm font-medium text-text-main hover:text-monodev transition-colors dark:text-slate-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portofolio
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-text-main hover:text-monodev transition-colors dark:text-slate-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak
            </Link>
            <Button asChild className="w-full bg-monodev hover:bg-blue-600">
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                Minta Penawaran
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </nav>
  )
}
