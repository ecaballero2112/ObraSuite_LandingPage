'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { HERO_CONTENT } from '@/lib/constants'

const rotatingPhrases = HERO_CONTENT.phrases.slice(1)

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingPhrases.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col bg-charcoal pt-16 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-charcoal/50 z-[1]" />

      <div className="relative z-10 w-full flex-1 flex flex-col">
        <Container className="flex-1 flex flex-col">
          <div className="pt-8 md:pt-12 lg:pt-16">
            <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-light-green mb-2">
              {HERO_CONTENT.eyebrow}
            </span>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug max-w-2xl">
              {HERO_CONTENT.phrases[0]}
            </h1>
          </div>

          <div className="flex-1 flex items-center">
            <div className="w-full">
              <div className="relative min-h-[8rem] sm:min-h-[8rem] md:min-h-[9rem] lg:min-h-[11rem] max-w-3xl">
                {rotatingPhrases.map((phrase, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-700 ${
                      i === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] tracking-tight text-balance">
                      {phrase}
                    </h2>
                  </div>
                ))}
              </div>

              <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mt-6 mb-6 max-w-xl">
                {HERO_CONTENT.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                <Button variant="primary" href="#demo" className="text-sm sm:text-base !px-6 sm:!px-8 !py-3 sm:!py-4">
                  {HERO_CONTENT.ctaPrimary}
                </Button>
                <Button variant="outline-white" href="#modulos" className="text-sm sm:text-base !px-6 sm:!px-8 !py-3 sm:!py-4">
                  {HERO_CONTENT.ctaSecondary}
                </Button>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/50 font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{HERO_CONTENT.stats}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-1 sm:gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest">Scroll</span>
          <svg width="12" height="18" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="sm:w-4 sm:h-6">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <circle cx="8" cy="8" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  )
}
