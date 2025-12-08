import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Por que escolher a ElyrisLog?</h2>
              <p className="text-gray-300 leading-relaxed">Temos expertise em integrar sistemas, monitorar frotas e otimizar rotas com foco em redução de custos e ganho de eficiência operacional.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Destaques</h3>
              <ul className="text-gray-300 list-disc ml-5">
                <li>Rastreamento em tempo real</li>
                <li>Integração com ERPs</li>
                <li>Relatórios e dashboards</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
