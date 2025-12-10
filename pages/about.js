import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <section className="hero-block">
        <h1 className="hero-title">Sobre a ElyrisLog</h1>
        <p className="hero-subtitle">
          Tecnologia aplicada à logística, com foco em produto e operação real.
        </p>
      </section>

      <section className="section">
        <p className="text-block">
          A <strong>ElyrisLog</strong> é uma empresa de tecnologia especializada no
          desenvolvimento de sistemas logísticos inteligentes. Seu principal
          produto é o <strong>ElyrisLog WMS</strong>, uma plataforma criada para
          operações que exigem flexibilidade, controle e capacidade de adaptação.
        </p>

        <p className="text-block">
          A empresa nasceu da combinação entre experiência prática em operações
          logísticas e o uso de tecnologias modernas, incluindo Inteligência
          Artificial, para acelerar desenvolvimento e evolução contínua do
          produto.
        </p>

        <p className="text-block">
          O foco da ElyrisLog é simples: entregar um WMS que funcione na prática,
          acompanhe a complexidade da operação e não se torne um gargalo para o
          crescimento do negócio.
        </p>
      </section>

      <section className="section section-soft">
        <h2 className="section-title">Missão, visão e forma de trabalhar</h2>

        <div className="cards-grid">
          <div className="card">
            <h3>Missão</h3>
            <p>
              Tornar a gestão de armazéns e estoques mais simples, confiável e
              transparente através da tecnologia.
            </p>
          </div>

          <div className="card">
            <h3>Visão</h3>
            <p>
              Ser referência em WMS moderno, flexível e preparado para operações
              logísticas complexas.
            </p>
          </div>

          <div className="card">
            <h3>Como trabalhamos</h3>
            <p>
              Atuamos próximos ao cliente, entendendo o cenário real da operação
              antes de qualquer implementação.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
