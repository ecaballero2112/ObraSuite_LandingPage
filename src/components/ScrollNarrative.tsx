'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function ScrollNarrative() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll('[data-reveal]')
      sections.forEach((section) => {
        const heading = section.querySelector('h2')
        const subtitle = section.querySelector('h2 + p')
        const cards = section.querySelectorAll('[data-card]')

        if (heading) {
          gsap.from(heading, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
        }

        if (subtitle) {
          gsap.from(subtitle, {
            x: -40,
            opacity: 0,
            duration: 0.8,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: subtitle,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
        }

        if (cards.length > 0) {
          gsap.from(cards, {
            x: -60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          })
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [reduced])

  return <div ref={ref} className="hidden" />
}
