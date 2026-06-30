import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-green disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-primary-green text-white hover:bg-deep-green active:scale-[0.98] px-6 py-3',
  secondary: 'bg-charcoal text-white hover:bg-[#2A2E30] active:scale-[0.98] px-6 py-3',
  outline: 'border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white active:scale-[0.98] px-6 py-3',
  'outline-white': 'border-2 border-white/30 text-white hover:bg-white hover:text-charcoal active:scale-[0.98] px-6 py-3',
}

export function Button({ children, variant = 'primary', href, onClick, className = '', type = 'button' }: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
