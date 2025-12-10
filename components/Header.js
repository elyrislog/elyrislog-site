
export default function Header(){
 return(
  <header style={{padding:'20px 28px',display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
    <nav style={{opacity:.9}}>
      <a href="/">Home</a> · <a href="/about">Sobre</a> · <a href="/services">Serviços</a> · <a href="/contact">Contato</a>
    </nav>
  </header>
 )
}
