export default function Nav(){
  return (
    <header className="py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="ElyrisLog" className="w-12 h-12"/>
          <div>
            <div className="font-bold text-lg">ElyrisLog</div>
            <div className="text-xs text-slate-400">Visão Inteligente da Logística</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#features" className="text-slate-300 hover:text-white">Recursos</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contato</a>
          <a href="/login" className="button btn-primary">Entrar</a>
        </nav>
      </div>
    </header>
  )
}
