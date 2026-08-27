import React from 'react'
import { MessageCircle, ArrowDown } from 'lucide-react'

export default function HeroSplit({ config }) {
  const { hero, business } = config
  const waLink = "https://wa.me/" + business.whatsapp + "?text=" + encodeURIComponent(business.whatsappDefaultMessage)

  return (
    <section className="section-padding relative overflow-hidden border-b border-[#232D27]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A221D] border border-[#2F3C34] text-[#C68A2B] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C68A2B] animate-pulse" />
              {hero.badge}
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              {hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#8FA39A] leading-relaxed mb-10 max-w-2xl">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C68A2B] text-[#0E1210] font-bold text-base hover:bg-[#D49A3D] transition-all duration-200 shadow-xl shadow-[#C68A2B]/20"
              >
                <MessageCircle className="w-5 h-5" />
                {hero.primaryButtonText}
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#161D19] border border-[#232D27] text-white font-medium text-base hover:bg-[#1F2922] transition-colors"
              >
                <ArrowDown className="w-4 h-4 text-[#C68A2B]" />
                {hero.secondaryButtonText}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2F3C34] shadow-2xl group">
              <img
                src={hero.heroImage}
                alt={business.name}
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1210] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0E1210]/90 backdrop-blur-md border border-[#232D27]">
                <p className="text-xs text-[#C68A2B] font-semibold uppercase tracking-wider mb-1">Garantia de Qualidade</p>
                <p className="text-sm text-white font-medium">Projetos sob medida com acompanhamento do 3D à instalação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
