import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services(){
  const items = [
    {title: 'Gestão Logística', desc: 'Otimização de processos e planejamento de rotas.'},
    {title: 'Tecnologia & Integração', desc: 'APIs, dashboards e integrações com ERPs.'},
    {title: 'Monitoramento', desc: 'Rastreamento em tempo real e alertas inteligentes.'},
  ]
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Serviços</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((s)=>(
              <div key={s.title} className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
