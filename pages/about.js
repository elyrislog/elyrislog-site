
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function About(){
 return(
  <>
   <Header/>
   <section className="section">
    <h1>Sobre a ElyrisLog</h1>
    <p style={{maxWidth:820}}>
     A ElyrisLog desenvolve soluções tecnológicas para operações logísticas que exigem visibilidade,
     controle e performance.
    </p>
   </section>
   <Footer/>
  </>
 )
}
