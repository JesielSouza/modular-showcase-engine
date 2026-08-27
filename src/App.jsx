import React from 'react'
import { siteConfig } from './site.config'
import Nav from './components/Nav'
import HeroSplit from './components/heroes/HeroSplit'
import HeroCentered from './components/heroes/HeroCentered'
import ServicesSection from './components/services/ServicesSection'
import PortfolioGallery from './components/portfolio/PortfolioGallery'
import DifferentialsSection from './components/about/DifferentialsSection'
import TestimonialsSection from './components/testimonials/TestimonialsSection'
import CTASection from './components/cta/CTASection'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'

export default function App() {
  const isSplit = siteConfig.theme.heroVariant === 'split'

  return (
    <div className="min-h-screen flex flex-col bg-[#0E1210] text-[#EAF2EC]">
      <Nav config={siteConfig} />
      <main className="flex-1">
        {isSplit ? <HeroSplit config={siteConfig} /> : <HeroCentered config={siteConfig} />}
        <ServicesSection config={siteConfig} />
        <PortfolioGallery config={siteConfig} />
        <DifferentialsSection config={siteConfig} />
        <TestimonialsSection config={siteConfig} />
        <CTASection config={siteConfig} />
      </main>
      <Footer config={siteConfig} />
      <FloatingWhatsApp config={siteConfig} />
    </div>
  )
}
