'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { OBRALIFT_CONTENT } from '@/lib/constants'

const icons: Record<string, React.ReactNode> = {
  cube: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  ),
  truck: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  'check-circle': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
}

export function ObraLift() {
  return (
    <section id="obralift" data-reveal className="relative py-20 md:py-28 bg-charcoal text-white overflow-hidden">
      <video
        autoPlay loop muted playsInline preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video/ObraliftCranes.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-charcoal/65 z-[1]" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-light-green mb-4">
            {OBRALIFT_CONTENT.eyebrow}
          </span>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <div className="relative h-[168px] w-[672px] max-w-full sm:h-[192px] sm:w-[768px] rounded-2xl overflow-hidden bg-white/50">
                <Image
                  src="/assets/logos/obralift.png"
                  alt="ObraLift"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            {OBRALIFT_CONTENT.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {OBRALIFT_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {OBRALIFT_CONTENT.features.map((f) => (
            <div
              key={f.title}
              data-card
              className="group rounded-xl bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-primary-green/30"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-green/15 text-light-green flex items-center justify-center mb-5 group-hover:bg-primary-green/25 transition-colors">
                {icons[f.icon]}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-green text-white hover:bg-deep-green transition-all duration-200 px-6 py-3 font-semibold text-sm active:scale-[0.98]"
          >
            {OBRALIFT_CONTENT.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-xs text-white/40 mt-3">{OBRALIFT_CONTENT.ctaFootnote}</p>
        </div>
      </Container>
    </section>
  )
}
