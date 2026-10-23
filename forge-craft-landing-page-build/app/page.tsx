import { SiteHeader } from '@/components/forgecraft/site-header'
import { Hero } from '@/components/forgecraft/hero'
import { Services } from '@/components/forgecraft/services'
import { Audience, Process } from '@/components/forgecraft/audience-process'
import { Portfolio } from '@/components/forgecraft/portfolio'
import { Pricing, Values } from '@/components/forgecraft/values-pricing'
import { SiteFooter } from '@/components/forgecraft/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Audience />
        <Process />
        <Portfolio />
        <Values />
        <Pricing />
      </main>
      <SiteFooter />
    </>
  )
}
