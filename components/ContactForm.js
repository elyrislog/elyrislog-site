
export default function ContactForm(){
  return (
    <form className="bg-white/5 p-6 rounded-lg">
      <label className="text-sm text-slate-300">Nome</label>
      <input className="w-full p-3 rounded mt-2 bg-transparent border border-slate-700" />
      <label className="text-sm text-slate-300 mt-4">Empresa</label>
      <input className="w-full p-3 rounded mt-2 bg-transparent border border-slate-700" />
      <label className="text-sm text-slate-300 mt-4">Mensagem</label>
      <textarea className="w-full p-3 rounded mt-2 bg-transparent border border-slate-700" rows="4"></textarea>
      <button className="mt-6 py-3 px-6 bg-ely-blue rounded font-semibold text-black">Enviar</button>
    </form>
