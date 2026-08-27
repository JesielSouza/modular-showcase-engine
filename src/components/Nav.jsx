import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function Nav({ config }) {
  const { business } = config
  const waLink = "https://wa.me/" + business.whatsapp + "?text=" + encodeURIComponent(business.whatsappDefaultMessage)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0E1210]/80 border-b border-[#232D27]">
      <div className="container-custom h-20 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className="font-heading font-bold text-xl text-white tracking-tight">{business.name}</span>
          <span className="text-xs text-[#C68A2B] font-medium">{business.city}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8FA39A]">
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
          <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
        </nav>

        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C68A2B] text-[#0E1210] font-semibold text-sm hover:bg-[#D49A3D] transition-all duration-200 shadow-lg shadow-[#C68A2B]/10"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  )
}
