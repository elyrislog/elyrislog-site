import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Sobre a ElyrisLog</h1>
          <p className="text-gray-300 leading-relaxed">A ElyrisLog conecta tecnologia e operação logística. Oferecemos consultoria, desenvolvimento de integração e soluções de rastreamento para empresas que buscam profissionalizar sua cadeia de distribuição.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
