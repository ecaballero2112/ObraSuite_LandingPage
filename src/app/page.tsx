import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Value } from '@/components/sections/Value'
import { Modules } from '@/components/sections/Modules'
import { Benefits } from '@/components/sections/Benefits'
import { Implementation } from '@/components/sections/Implementation'
import { ObraLift } from '@/components/sections/ObraLift'
import { CTA } from '@/components/sections/CTA'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { ScrollNarrative } from '@/components/ScrollNarrative'

export default function Home() {
  return (
    <>
      <ScrollNarrative />
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Value />
        <Modules />
        <Benefits />
        <Implementation />
        <ObraLift />
        <CTA />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
