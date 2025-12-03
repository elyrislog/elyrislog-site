// components/Hero.js
export default function Hero() {
  return (
    <section className="text-center px-6 py-20 bg-bg-900 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        ElyrisLog WMS
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
        Um novo conceito em gestão de armazém.
      </p>

      <a
        href="#contato"
        className="mt-10 inline-block px-8 py-4 bg-primary-500 text-white rounded-xl text-lg font-medium hover:bg-primary-600 transition"
      >
        Solicitar Contato
      </a>
    </section>
  );
}
