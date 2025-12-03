'use client'
export default function Hero(){
  return (
    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            A visão que <span className="text-ely-cyan">move</span> resultados.
          </h1>
          <p className="mt-6 max-w-xl text-slate-300">
            ElyrisLog combina visão computacional e IA para transformar câmeras e fluxos visuais em decisões operacionais em tempo real.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="button btn-primary">Solicitar Demo</a>
            <a href="#features" className="button btn-ghost">Ver Recursos</a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="backglass text-center">
              <div className="text-2xl font-bold">2.000+</div>
              <div className="text-xs text-slate-400">Pedidos/dia</div>
            </div>
            <div className="backglass text-center">
              <div className="text-2xl font-bold">&lt;200ms</div>
              <div className="text-xs text-slate-400">Tempo de resposta</div>
            </div>
            <div className="backglass text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-xs text-slate-400">Uptime</div>
            </div>
            <div className="backglass text-center">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-xs text-slate-400">Usuários simultâneos</div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 bg-gradient-to-b from-[#0D1A33] to-[#1A4CFF]">
              <div className="text-white font-semibold text-lg">Dashboard ElyrisLog</div>
              <div className="mt-4 bg-white/10 rounded-lg p-4">
                <div className="h-2 bg-white/20 rounded-full w-3/4 mb-3"></div>
                <div className="h-2 bg-white/10 rounded-full w-1/2 mb-3"></div>
                <div className="text-sm text-white/80">Resumo operacional • Pedidos em fila • Performance</div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <div className="text-slate-700 font-medium">Últimos pedidos</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex justify-between"><span>#12345</span><span>Expedido</span></li>
                <li className="flex justify-between"><span>#12344</span><span>Packing</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
