
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="text-5xl font-extrabold leading-tight">
          A visão que <span className="text-ely-cyan">move</span> resultados.
        </motion.h1>
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.9}} className="mt-6 text-slate-300 max-w-xl">
          ElyrisLog combina visão computacional, IA e análise em tempo real para transformar câmeras e fluxos visuais em decisões operacionais.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <a href="/contact" className="px-6 py-3 rounded-md iris-accent text-black font-semibold">Comece agora</a>
          <a href="/technology" className="px-6 py-3 rounded-md border border-slate-700 text-slate-200">Ver tecnologia</a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-gradient-to-b from-[#0D1A33] to-[#1A4CFF]">
            <div className="text-white font-semibold text-lg">Dashboard ElyrisLog</div>
            <div className="mt-4 bg-white/10 rounded-lg p-4">
              <div className="h-2 bg-white/20 rounded-full w-3/4 mb-3"></div>
              <div className="h-2 bg-white/10 rounded-full w-1/2 mb-3"></div>
              <div className="text-sm text-white/80">Resumo operacional • Pedidos em fila • Performance</div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="text-slate-700 font-medium">Últimos pedidos</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex justify-between"><span>#12345</span><span>Expedido</span></li>
              <li className="flex justify-between"><span>#12344</span><span>Packing</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
