'use client'

import { Container } from '@/components/ui/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { PROBLEM_CONTENT } from '@/lib/constants'

const icons: Record<string, React.ReactNode> = {
  'file-spreadsheet': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" /><path d="M2 9h20" /><path d="M9 9v12" />
    </svg>
  ),
  'calendar-clock': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><circle cx="18" cy="18" r="3" /><path d="M18 16v2l1 1" />
    </svg>
  ),
  message: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  clipboard: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  ),
  clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  'link-off': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  file: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
    </svg>
  ),
  'eye-off': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
}

export function Problem() {
  return (
    <SectionWrapper id="problema">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-green mb-3">El diagnóstico</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {PROBLEM_CONTENT.title}
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            La construcción sigue operando con herramientas que no conversan entre sí. El resultado: sobrecostos, retrasos y decisiones sin información.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROBLEM_CONTENT.items.map((item) => (
            <div
              key={item.text}
              data-card
              className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-[#E8E8E4] transition-all duration-300 hover:border-red-300 hover:shadow-sm"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-red-50 text-red-400 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                {icons[item.icon]}
              </div>
              <p className="text-sm leading-snug text-charcoal/70 pt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
