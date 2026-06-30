'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { benefits } from '@/lib/constants'

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const isReversed = benefit.reversed

  return (
    <div data-card className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      <div className="relative w-full lg:w-[45%] aspect-[16/10] rounded-xl overflow-hidden shrink-0">
        {benefit.videoPath ? (
          <video
            autoPlay loop muted playsInline preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={benefit.videoPath} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={benefit.imagePath}
            alt={benefit.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/10 to-primary-green/5" />
      </div>

      <div className="flex-1">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-green mb-2">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
          {benefit.title}
        </h3>
        <p className="text-base text-charcoal/60 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  )
}

export function Benefits() {
  return (
    <SectionWrapper id="beneficios">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-green mb-3">Beneficios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Resultados reales en cada fase
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            Más que funciones, ObraSuite entrega control, trazabilidad y decisión informada en cada nivel de la obra.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {benefits.map((b, i) => (
            <BenefitCard key={b.id} benefit={b} index={i} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
