import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded bg-gradient-to-br from-monobox via-monodev to-monostudio text-white">
                <span className="material-symbols-outlined text-[20px]">grid_view</span>
              </div>
              <span className="text-xl font-bold">Monoframe</span>
            </div>
            <p className="text-sm text-slate-400">
              Solusi kreatif terpadu. Tempat kreativitas bertemu teknologi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">chat</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Layanan</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/monobox" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Monobox - Fotobooth
                </Link>
              </li>
              <li>
                <Link href="/monodev" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Monodev - Pengembangan Web
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Monoframe Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Portal Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                hello@monoframe.studio
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">phone</span>
                +62 812-3456-7890
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Monoframe. Hak cipta dilindungi.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
              <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
