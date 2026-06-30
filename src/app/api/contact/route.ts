import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const { name, email, company, phone } = data

    if (!name || !email) {
      return NextResponse.json({ error: 'Nombre y email son requeridos' }, { status: 400 })
    }

    const body = `
      Nombre: ${name}
      Email: ${email}
      Empresa: ${company || '—'}
      Teléfono: ${phone || '—'}
    `

    console.log('=== Solicitud de demo ===')
    console.log(body)
    console.log('=========================')

    return NextResponse.json({ success: true, message: 'Solicitud recibida. Nos pondremos en contacto pronto.' })
  } catch {
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 })
  }
}
