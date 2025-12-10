
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home(){
 return(<><Header/><main style={{padding:60,textAlign:'center'}}>
 <img src="/logo.png" style={{maxWidth:240}} />
 <h1>Tecnologia e inteligência aplicadas à logística</h1>
 <p>Integração de sistemas, rastreamento e gestão operacional.</p>
 </main><Footer/></>)
}
