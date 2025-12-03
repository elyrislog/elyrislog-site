
export default function Metrics(){
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold">2.000+</div>
          <div className="text-xs text-slate-400">Pedidos/dia</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">&lt;200ms</div>
          <div className="text-xs text-slate-400">Tempo de resposta</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">99.9%</div>
          <div className="text-xs text-slate-400">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">∞</div>
          <div className="text-xs text-slate-400">Usuários simultâneos</div>
        </div>
      </div>
    </section>
  )
}
