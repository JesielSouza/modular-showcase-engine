import React from 'react'
import { Quote } from 'lucide-react'

export default function TestimonialsSection({ config }) {
  const { testimonials } = config

  return (
    <section id="depoimentos" className="section-padding border-b border-[#232D27]">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold text-[#C68A2B] uppercase tracking-widest mb-3">Depoimentos</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <blockquote
              key={idx}
              className="p-8 rounded-2xl bg-[#161D19] border border-[#232D27] flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#C68A2B]/40 mb-4" />
              <p className="text-base text-[#EAF2EC] leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading font-bold text-white text-sm">{t.name}</p>
                <p className="text-xs text-[#8FA39A]">{t.role}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
