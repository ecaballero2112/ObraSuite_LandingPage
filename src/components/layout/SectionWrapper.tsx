interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function SectionWrapper({ children, className = '', id, dark = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-reveal
      className={`relative py-20 md:py-28 ${dark ? 'bg-charcoal text-white' : 'bg-warm-white text-charcoal'} ${className}`}
    >
      {children}
    </section>
  )
}
