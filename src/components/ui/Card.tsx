interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export function Card({ children, className = '', hover = true, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`rounded-xl bg-white border border-[#E8E8E4] shadow-sm ${
        hover ? 'transition-all duration-300 hover:shadow-md hover:border-mid-green/30 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
