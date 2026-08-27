import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'

export default function PortfolioGallery({ config }) {
  const { portfolio, business } = config
  const categories = ['Todos', ...Array.from(new Set(portfolio.map((p) => p.category)))]
  const [selectedCat, setSelectedCat] = useState('Todos')

  const filtered = selectedCat === 'Todos'
    ? portfolio
    : portfolio.filter((p) => p.category === selectedCat)

  const waLink = "https://wa.me/" + business.whatsapp + "?text=" + encodeURIComponent('Olá! Vi seus projetos no site e gostaria de um orçamento similar.')

  return (
    <section id="projetos" className="section-padding border-b border-[#232D27]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-bold text-[#C68A2B] uppercase tracking-widest mb-3">Galeria de Execução</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Projetos Recentes Entregues
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={'px-4 py-2 rounded-lg text-xs font-semibold transition-colors ' + (
                  selectedCat === cat
                    ? 'bg-[#C68A2B] text-[#0E1210]'
                    : 'bg-[#161D19] text-[#8FA39A] hover:text-white border border-[#232D27]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#161D19] border border-[#232D27] hover:border-[#2F3C34] transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0E1210]/80 backdrop-blur-md text-[#C68A2B] border border-[#232D27]">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8FA39A] leading-relaxed mb-6">{item.description}</p>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C68A2B] hover:text-[#D49A3D] transition-colors"
                >
                  <span>Quero um projeto neste estilo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
