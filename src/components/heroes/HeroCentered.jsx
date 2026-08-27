import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function HeroCentered({ config }) {
  const { hero, business } = config
  const waLink = "https://wa.me/" + business.whatsapp + "?text=" + encodeURIComponent(business.whatsappDefaultMessage)

  return (
    <section className="section-padding relative overflow-hidden border-b border-[#232D27] text-center">
      <div className="container-custom max-w-4xl flex flex-col items-center">
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

        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C68A2B] text-[#0E1210] font-bold text-base hover:bg-[#D49A3D] transition-all duration-200 shadow-xl shadow-[#C68A2B]/20"
        >
          <MessageCircle className="w-5 h-5" />
          {hero.primaryButtonText}
        </a>
      </div>
    </section>
  )
}
