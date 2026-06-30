'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { phases, modules } from '@/lib/constants'

const moduleMap = Object.fromEntries(modules.map((m) => [m.name, m]))

const phaseColors = ['border-primary-green', 'border-mid-green', 'border-light-green'] as const
const phaseBg = ['bg-primary-green/10', 'bg-mid-green/10', 'bg-light-green/20'] as const
const phaseText = ['text-primary-green', 'text-mid-green', 'text-deep-green'] as const

export function Implementation() {
  return (
    <SectionWrapper id="implementacion" className="!bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-green mb-3">Implementación</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Implementación modular y escalable
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            Conecta primero los procesos críticos. Escala sin rehacer tu operación.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E8E8E4] hidden md:block" />

          <div className="flex flex-col gap-12">
            {phases.map((phase, i) => (
              <div key={phase.id} data-card className="relative pl-0 md:pl-16">
                <div className={`hidden md:flex absolute left-0 w-12 h-12 rounded-full ${phaseBg[i]} ${phaseText[i]} items-center justify-center font-bold text-sm border-2 ${phaseColors[i]}`}>
                  {phase.id}
                </div>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${phaseBg[i]} ${phaseText[i]} mb-3 md:hidden`}>
                  Fase {phase.id}
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-2">{phase.title}</h3>
                <p className="text-sm text-charcoal/60 mb-4">{phase.description}</p>

                <div className="flex flex-wrap gap-3">
                  {phase.modules.map((modName) => {
                    const mod = moduleMap[modName]
                    return (
                      <span
                        key={modName}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${phaseBg[i]} ${phaseText[i]}`}
                      >
                        {mod ? (
                          <div className="relative h-10 w-36 sm:h-[50px] sm:w-48 md:h-[60px] md:w-60 shrink-0">
                            <Image
                              src={mod.logoPath}
                              alt={mod.name}
                              fill
                              unoptimized
                              className="object-contain object-left"
                            />
                          </div>
                        ) : (
                          modName
                        )}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
