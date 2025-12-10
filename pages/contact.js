import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <section className="hero-block">
        <h1 className="hero-title">Fale com um especialista</h1>
        <p className="hero-subtitle">
          Conte um pouco sobre sua operação e vamos avaliar juntos como o
          ElyrisLog WMS pode ajudar.
        </p>
      </section>

      <section className="section">
        <p className="text-block">
          Preencha os dados abaixo e nossa equipe entrará em contato para uma
          conversa inicial. Se fizer sentido, seguimos com uma demonstração do
          sistema aplicada ao seu contexto.
        </p>

        <p className="text-block">
          📧 contato@elyrislog.com.br
        </p>
      </section>

      <Footer />
    </>
  );
}
