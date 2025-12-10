import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ParaQuem() {
  return (
    <>
      <Header />

      <section className="hero-block">
        <h1 className="hero-title">Para quem é o ElyrisLog WMS</h1>
        <p className="hero-subtitle">
          Um WMS feito para operações que precisam de flexibilidade e controle.
        </p>
      </section>

      <section className="section">
        <div className="cards-grid">
          <div className="card">
            <h3>Operadores logísticos (3PL)</h3>
            <p>
              Múltiplos clientes, contratos diferentes e fluxos operacionais
              distintos dentro do mesmo armazém.
            </p>
          </div>

          <div className="card">
            <h3>E-commerce</h3>
            <p>
              Alto volume de pedidos, picos de demanda e necessidade de agilidade
              na separação e expedição.
            </p>
          </div>

          <div className="card">
            <h3>Logística própria</h3>
            <p>
              Empresas que precisam de controle interno e evolução constante dos
              processos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
