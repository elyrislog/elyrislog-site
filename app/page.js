
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Metrics from '../components/Metrics'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <main className="min-h-screen bg-bg-900 text-white">
      <Nav />
      <Hero />
      <Metrics />
      <Features />
      <Footer />
    </main>
  )
}
