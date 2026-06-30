'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { values } from '@/lib/constants'

const icons: Record<string, React.ReactNode> = {
  'trending-up': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  calendar: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  package: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4 7.55 4.24" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  ),
  'bar-chart': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  layers: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  dashboard: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
}

export function Value() {
  return (
    <SectionWrapper id="valor" className="!bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-green mb-3">Propuesta de valor</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            De datos dispersos a una obra conectada
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            ObraSuite convierte la fragmentación en visibilidad. Cada módulo resuelve un problema real de la obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {values.map((v) => (
            <Card key={v.id} data-card className="p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary-green/10 text-primary-green flex items-center justify-center mb-4 shrink-0">
                {icons[v.icon]}
              </div>
              <h3 className="text-base font-semibold text-charcoal mb-2">{v.title}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed flex-1">{v.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
