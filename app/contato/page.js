export default function Contato() {
  return (
    <section id="contato" className="px-6 py-16 max-w-xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h2>

      <form
        action="/api/contact"
        method="POST"
        className="grid gap-4 bg-bg-800 p-6 rounded-xl border border-gray-700"
      >
        <input
          type="text"
          name="nome"
          required
          placeholder="Seu nome"
          className="p-3 rounded bg-bg-900 border border-gray-600"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Seu e-mail"
          className="p-3 rounded bg-bg-900 border border-gray-600"
        />

        <textarea
          name="mensagem"
          required
          rows={5}
          placeholder="Sua mensagem"
          className="p-3 rounded bg-bg-900 border border-gray-600"
        />

        <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
          Enviar
        </button>
      </form>
    </section>
  );
}
