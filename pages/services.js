
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Services(){
 return(
  <>
   <Header/>
   <section className="section">
    <h1>Serviços</h1>
    <div style={{display:'grid',gap:24,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
      <div className="card">Gestão Logística</div>
      <div className="card">Rastreamento</div>
      <div className="card">Integração de Sistemas</div>
      <div className="card">Dashboards</div>
    </div>
   </section>
   <Footer/>
  </>
 )
}
