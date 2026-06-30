'use client'

import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { modules } from '@/lib/constants'
import { Module } from '@/lib/types'

function ModuleCard({ mod }: { mod: Module }) {
  return (
    <div
      data-card
      className="group relative rounded-xl bg-white border border-[#E8E8E4] p-5 transition-all duration-300 hover:shadow-md hover:border-mid-green/30 hover:-translate-y-1"
    >
      <div className="mb-3">
        <div className="w-full h-10 sm:h-[50px] md:h-[60px] relative">
          <Image
            src={mod.logoPath}
            alt={mod.name}
            fill
            unoptimized
            className="object-contain object-left"
          />
        </div>
      </div>

      <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
        <span className={`inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full text-[8px] sm:text-[10px] font-bold ${
          mod.phase === 1 ? 'bg-primary-green/10 text-primary-green' :
          mod.phase === 2 ? 'bg-mid-green/10 text-mid-green' :
          'bg-light-green/20 text-deep-green'
        }`}>
          F{mod.phase}
        </span>
      </div>

      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 sm:w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
        <div className="bg-charcoal text-white text-xs leading-relaxed p-3 rounded-lg shadow-lg">
          <p className="font-semibold mb-1">{mod.name}</p>
          <p className="text-white/80">{mod.description}</p>
        </div>
      </div>
    </div>
  )
}

export function Modules() {
  return (
    <SectionWrapper id="modulos" className="!bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary-green mb-3">Los 12 módulos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Un ecosistema completo para tu obra
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            Cada módulo cubre un área crítica. Juntos forman el sistema operativo de tu constructora.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {modules.map((mod) => (
            <ModuleCard key={mod.id} mod={mod} />
          ))}
        </div>

          <p className="text-center text-xs text-charcoal/40 mt-6">
            F1: Núcleo · F2: Aseguramiento · F3: Escalamiento
          </p>
      </Container>
    </SectionWrapper>
  )
}
