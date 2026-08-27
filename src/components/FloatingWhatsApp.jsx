import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp({ config }) {
  const { business } = config
  const waLink = "https://wa.me/" + business.whatsapp + "?text=" + encodeURIComponent(business.whatsappDefaultMessage)

  return (
    <aside aria-label="Atendimento WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-[#25D366]/40"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Falar no WhatsApp</span>
      </a>
    </aside>
  )
}
