import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="relative h-8 w-36 sm:h-10 sm:w-44">
              <Image
                src="/assets/logos/obrasuite.svg"
                alt="ObraSuite"
                fill
                unoptimized
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <span className="text-white/30 hidden sm:inline">|</span>
            <div className="relative h-6 w-24 sm:h-8 sm:w-32">
              <Image
                src="/assets/logos/nexusone.svg"
                alt="NexusOne SpA."
                fill
                unoptimized
                className="object-contain object-center brightness-0 invert"
              />
            </div>
          </div>

          <p className="text-xs text-white/40 text-center">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
