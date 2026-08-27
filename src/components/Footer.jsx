import React from 'react'

export default function Footer({ config }) {
  const { business } = config

  return (
    <footer className="py-8 bg-[#090C0B] border-t border-[#232D27] text-center text-xs text-[#8FA39A]">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
        <p>Desenvolvido com alta performance por <a href="https://cauesystems.vercel.app" target="_blank" rel="noreferrer" className="text-[#C68A2B] hover:underline font-semibold">Cauê Systems</a></p>
      </div>
    </footer>
  )
}
