"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      {/* Animated grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] grain" />

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Logo / Wordmark */}
        <h1 className="text-[clamp(3rem,15vw,12rem)] font-extralight tracking-[0.3em] text-white/90 select-none">
          SURF
        </h1>

        {/* Subtle tagline */}
        <div className={`mt-8 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[11px] font-light tracking-[0.4em] text-white/30 uppercase">
            Private Investment Office
          </p>
        </div>

        {/* Minimal divider */}
        <div className={`mt-16 h-px w-12 bg-white/10 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

        {/* Contact hint */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="mailto:hello@surf.xyz"
            className="group relative text-[10px] font-light tracking-[0.3em] text-white/20 uppercase transition-colors duration-500 hover:text-white/50"
          >
            <span className="relative">
              Contact
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/30 transition-all duration-500 group-hover:w-full" />
            </span>
          </a>
        </div>
      </div>

      {/* Bottom corner subtle branding */}
      <div className={`absolute bottom-8 right-8 transition-all duration-1000 delay-1200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-[9px] font-light tracking-[0.2em] text-white/10 uppercase">
          Est. 2025
        </p>
      </div>

      {/* Subtle animated accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className={`h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-2000 ${mounted ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </main>
  )
}
