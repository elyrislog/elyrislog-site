
import './globals.css'

export const metadata = {
  title: 'ElyrisLog — Visão Inteligente da Logística',
  description: 'ElyrisLog — WMS e visão computacional para operações inteligentes.'
}

export default function RootLayout({ children }){
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
