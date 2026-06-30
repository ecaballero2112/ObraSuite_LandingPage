'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { NAV_LINKS } from '@/lib/constants'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-[#E8E8E4]">
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex flex-col text-charcoal shrink-0">
          <div className="relative h-10 w-44 sm:h-12 sm:w-56 md:h-16 md:w-72">
            <Image
              src="/assets/logos/obrasuite.svg"
              alt="ObraSuite"
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>
          <span className="hidden sm:block text-[10px] leading-tight text-charcoal/50 w-44 sm:w-56 md:w-72 -mt-1">
            Plataforma Integral de Gestión para la Construcción.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 hover:text-primary-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" href="#demo" className="text-base !px-5 !py-2.5 hidden sm:inline-flex">
            Solicitar demo
          </Button>

          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="md:hidden border-t border-[#E8E8E4] bg-warm-white">
          <Container className="py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/70 hover:text-primary-green transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" href="#demo" className="text-sm !px-4 !py-2 w-full">
              Solicitar demo
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
