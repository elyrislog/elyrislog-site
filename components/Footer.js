export default function Footer(){
  return (
    <footer className="py-12">
      <div className="container">
        <div className="backglass flex flex-col md:flex-row items-start justify-between gap-6 p-6">
          <div>
            <div className="font-bold text-xl">ElyrisLog</div>
            <div className="text-slate-300 mt-2">A visão que move resultados.</div>
          </div>
          <div className="text-sm text-slate-300">
            contato@elyrislog.com.br
            <div className="mt-4">© 2025 ElyrisLog — Todos os direitos reservados.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
