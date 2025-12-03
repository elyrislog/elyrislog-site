
export default function Features(){
  const items = [
    {title: '100% Cloud Native', desc: 'Escala automática e zero necessidade de infra local.'},
    {title: 'Multi-tenant Nativo', desc: 'Isolamento total via Row Level Security.'},
    {title: 'IA Integrada', desc: 'Assistente para priorização e análises preditivas.'},
    {title: 'Integrações Automáticas', desc: 'Bling, E-com Plus, ERPs e API completa.'},
    {title: 'Gestão Avançada', desc: 'FIFO, FEFO, lote, validade e serialização.'},
    {title: 'Performance Real-Time', desc: '<200ms, operando com muitos usuários.'}
  ]

  return (
    <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Diferenciais Competitivos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it,i)=> (
          <div key={i} className="p-6 backglass rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">{it.title}</h3>
            <p className="text-sm text-slate-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
