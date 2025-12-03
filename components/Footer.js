
export default function Footer(){
  return (
    <footer className="py-12 border-t border-slate-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <div className="font-bold text-lg">ElyrisLog</div>
          <div className="text-sm text-slate-400 mt-2">A visão que move resultados.</div>
        </div>
        <div className="text-sm text-slate-400">
          contato@elyrislog.com.br
          <div className="mt-4">© 2025 ElyrisLog — Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  )
}
