import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative h-screen bg-transparent pointer-events-none">
      <div className="fixed bottom-0 left-0 w-full h-screen -z-50 bg-[#0a0f1d] text-cyan-50 pointer-events-auto flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 border-t border-blue-900/30">

        {/* Massive CTA */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="inline-block px-6 py-3 rounded-full border border-cyan-800/50 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-12 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            Initiate Project
          </div>
          <h2 className="text-[12vw] md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-12 hover:text-transparent hover:text-stroke-2-blue transition-all duration-500 cursor-pointer text-white">
            Let's <br className="md:hidden" />Talk
          </h2>
          <a href="mailto:hello@monoframe.studio" className="text-xl md:text-3xl font-bold uppercase tracking-widest text-blue-400/80 hover:text-cyan-300 transition-colors relative group">
            hello@monoframe.studio
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Traditional Footer Links */}
        <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 text-zinc-500 text-sm font-bold uppercase tracking-widest">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black tracking-tighter text-white uppercase">Monoframe</span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed hidden md:block">
              We blend art and technology to deliver unforgettable digital experiences across web, interactive installations, and visual media.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-white mb-2">Socials</span>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white mb-2">Pillars</span>
              <Link href="/monobox" className="hover:text-white transition-colors">Monobox</Link>
              <Link href="/monodev" className="hover:text-white transition-colors">Monodev</Link>
              <Link href="/studio" className="hover:text-white transition-colors">Studio</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
