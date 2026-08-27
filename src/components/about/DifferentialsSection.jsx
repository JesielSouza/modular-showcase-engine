import React from 'react'

export default function DifferentialsSection({ config }) {
  const { differentials } = config

  return (
    <section id="diferenciais" className="section-padding bg-[#0B0E0D] border-b border-[#232D27]">
      <div className="container-custom">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold text-[#C68A2B] uppercase tracking-widest mb-3">Por que nos escolher</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Compromisso com o padrão do início ao fim
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#161D19] border border-[#232D27] relative flex flex-col justify-between"
            >
              <div className="text-3xl font-extrabold text-[#C68A2B] font-heading mb-6">
                {item.number}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-sm text-[#8FA39A] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
