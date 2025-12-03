export default function ContatoPage() {
  return (
    <section id="contato" className="px-6 py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>

      <form action="/api/contact" method="POST" className="grid gap-4">
        <input
          type="text"
          name="nome"
          required
          placeholder="Seu nome"
          className="p-3 rounded bg-bg-800 border border-gray-600"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Seu e-mail"
          className="p-3 rounded bg-bg-800 border border-gray-600"
        />

        <textarea
          name="mensagem"
          required
          rows={5}
          placeholder="Descreva sua necessidade..."
          className="p-3 rounded bg-bg-800 border border-gray-600"
        />

        <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
          Enviar
        </button>
      </form>
    </section>
  );
}
