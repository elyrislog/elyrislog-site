
export default function Pricing(){
  const plans = [
    {name:'Starter', price:'R$499/mês', bullets:['Até 2k pedidos/dia','Suporte básico','1 tenant']},
    {name:'Pro', price:'R$1.499/mês', bullets:['Até 10k pedidos/dia','Suporte priorizado','Multi-tenant']},
    {name:'Enterprise', price:'Sob consulta', bullets:['SLA dedicado','Onboarding','Integrações customizadas']}
  ]
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Planos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p,i)=> (
          <div key={i} className="p-6 backglass rounded-2xl">
            <div className="font-semibold text-xl">{p.name}</div>
            <div className="text-ely-cyan font-bold my-3">{p.price}</div>
            <ul className="text-sm text-slate-300">
              {p.bullets.map((b,bi)=> <li key={bi}>• {b}</li>)}
            </ul>
            <button className="mt-6 w-full py-3 bg-ely-blue rounded font-semibold text-black">Solicitar</button>
          </div>
        ))}
      </div>
    </section>
  )
}
