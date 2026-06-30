import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-warm-white text-charcoal p-8">
      <h1 className="text-6xl font-bold text-primary-green mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
      <p className="text-charcoal/60 mb-8">La página que buscas no existe o fue movida.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-primary-green text-white px-6 py-3 font-semibold hover:bg-deep-green transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
