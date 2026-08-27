import React from 'react'
import { LayoutGrid, BedDouble, Tv, Building2 } from 'lucide-react'

const iconMap = {
  LayoutGrid,
  BedDouble,
  Tv,
  Building2,
}

export default function ServicesSection({ config }) {
  const { services } = config

  return (
    <section id="servicos" className="section-padding bg-[#0B0E0D] border-b border-[#232D27]">
      <div className="container-custom">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold text-[#C68A2B] uppercase tracking-widest mb-3">Especialidades</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Ambientes planejados com perfeição técnica e estética
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon] || LayoutGrid
            return (
              <article
                key={idx}
                className="p-6 rounded-2xl bg-[#161D19] border border-[#232D27] hover:border-[#C68A2B]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1F2922] border border-[#2F3C34] flex items-center justify-center text-[#C68A2B] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-[#8FA39A] leading-relaxed">{s.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
