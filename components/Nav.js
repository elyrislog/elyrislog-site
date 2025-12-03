
export default function Nav(){
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="ElyrisLog" className="w-10 h-10"/>
        <div>
          <div className="font-bold">ElyrisLog</div>
          <div className="text-xs text-slate-400">Visão Inteligente da Logística</div>
        </div>
      </div>
      <nav className="flex items-center gap-6">
        <a className="text-slate-300 hover:text-white" href="/">Início</a>
        <a className="text-slate-300 hover:text-white" href="/features">Recursos</a>
        <a className="text-slate-300 hover:text-white" href="/technology">Tecnologia</a>
        <a className="text-slate-300 hover:text-white" href="/pricing">Preços</a>
        <a className="px-4 py-2 rounded-md bg-white text-black font-semibold" href="/contact">Solicitar demo</a>
      </nav>
    </header>
  )
}
