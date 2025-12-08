import Link from 'next/link'
export default function Header(){
  return (
    <header className="w-full py-6 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="ElyrisLog" className="w-20 h-auto logo-glow"/>
        <span className="text-xl font-semibold">ElyrisLog</span>
      </div>
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/services">Serviços</Link>
        <Link href="/contact">Contato</Link>
      </nav>
    </header>
  )
}
