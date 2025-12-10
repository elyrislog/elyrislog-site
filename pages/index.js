
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home(){
 return(
  <>
   <Header/>
   <section className="section" style={{textAlign:'center'}}>
    <img src="/logo.png" className="hero-logo" alt="ElyrisLog" />
    <h1>Tecnologia aplicada à logística</h1>
    <p style={{opacity:.75,maxWidth:760,margin:'20px auto'}}>
     Integração de dados, rastreamento em tempo real e inteligência operacional.
    </p>
   </section>
   <section className="section">
    <div style={{display:'grid',gap:24,gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
      <div className="card">Rastreamento e monitoramento contínuo</div>
      <div className="card">Integração com ERPs e sistemas</div>
      <div className="card">Dashboards estratégicos</div>
    </div>
   </section>
   <Footer/>
  </>
 )
}
