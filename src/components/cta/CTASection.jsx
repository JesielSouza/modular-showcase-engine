import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function CTASection({ config }) {
  const { business } = config
  const waLink = "https://wa.me/" + business.whatsapp + "?text=" + encodeURIComponent(business.whatsappDefaultMessage)

  return (
    <section className="section-padding bg-[#0B0E0D] relative overflow-hidden">
      <div className="container-custom text-center max-w-3xl mx-auto relative z-10">
        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
          Vamos tirar o seu projeto do papel com a qualidade que você merece?
        </h2>
        <p className="text-base sm:text-lg text-[#8FA39A] mb-10 leading-relaxed">
          Fale diretamente com nossa equipe no WhatsApp para tirar dúvidas, receber uma visita técnica ou solicitar um orçamento sem compromisso.
        </p>

        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-[#C68A2B] text-[#0E1210] font-bold text-base hover:bg-[#D49A3D] transition-all duration-200 shadow-2xl shadow-[#C68A2B]/25 hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Conversar no WhatsApp Agora</span>
        </a>
      </div>
    </section>
  )
}
