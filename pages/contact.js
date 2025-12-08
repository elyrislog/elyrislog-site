import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contato</h1>
          <p className="text-gray-300 mb-6">Solicite uma proposta personalizada ou agende uma reunião.</p>
          <a href="mailto:contato@elyrislog.com.br" className="inline-block px-6 py-3 bg-blue-600 rounded-md">contato@elyrislog.com.br</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
