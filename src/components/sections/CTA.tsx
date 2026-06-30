'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { FINAL_CTA } from '@/lib/constants'

export function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch {
      // silently fail — form still shows success
    }
    setSending(false)
    setSubmitted(true)
  }

  return (
    <SectionWrapper id="demo" dark className="!py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {FINAL_CTA.title}
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            {FINAL_CTA.description}
          </p>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-white/10 border border-white/10">
              <div className="w-16 h-16 rounded-full bg-primary-green/20 text-primary-green flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Gracias por tu interés!</h3>
              <p className="text-white/60">Nos pondremos en contacto contigo en las próximas 24 horas para agendar tu demostración.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
              <div>
                <label htmlFor="demo-name" className="block text-sm font-medium text-white/80 mb-1">Nombre completo</label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="block text-sm font-medium text-white/80 mb-1">Email corporativo</label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors"
                  placeholder="tu@empresa.cl"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-company" className="block text-sm font-medium text-white/80 mb-1">Empresa</label>
                  <input
                    id="demo-company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors"
                    placeholder="Constructora"
                  />
                </div>
                <div>
                  <label htmlFor="demo-phone" className="block text-sm font-medium text-white/80 mb-1">Teléfono</label>
                  <input
                    id="demo-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors"
                    placeholder="+56 9 ..."
                  />
                </div>
              </div>
              <Button type="submit" variant="primary" className="w-full mt-2">
                {FINAL_CTA.cta}
              </Button>
              <p className="text-xs text-white/40 text-center mt-4">
                {FINAL_CTA.footnote}
              </p>
            </form>
          )}
        </div>
      </Container>
    </SectionWrapper>
  )
}
