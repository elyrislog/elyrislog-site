import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO – BLOCO FORTE */}
      <section className="hero-block">
        <img
          src="/logo.png"
          alt="ElyrisLog"
          className="hero-logo"
        />

        <h1 className="hero-title">
          Plataforma de inteligência logística em tempo real
        </h1>

        <p className="hero-subtitle">
          A ElyrisLog centraliza dados, rastreamento e integrações em uma única
          plataforma para gestão, visibilidade operacional e tomada de decisão.
        </p>

        <a href="/contact" className="hero-cta">
          Falar com o time técnico
        </a>
      </section>

      {/* SEÇÃO – O QUE FAZEMOS */}
      <section className="section">
        <h2 className="section-title">O que a plataforma entrega</h2>

        <div className="feature-list">
          <div>Rastreamento e monitoramento contínuo</div>
          <div>Integração com ERPs, TMS e WMS</div>
          <div>Dashboards e indicadores em tempo real</div>
        </div>
      </section>

      {/* SEÇÃO – CAPACIDADES */}
      <section className="section section-soft">
        <h2 className="section-title">Capacidades técnicas</h2>

        <div className="cards-grid">
          <div className="card">
            Integração via API com sistemas corporativos
          </div>
          <div className="card">
            Consolidação de dados operacionais e eventos logísticos
          </div>
          <div className="card">
            Visibilidade ponta a ponta da operação
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <h2>Pronto para ter controle total da sua operação logística?</h2>
        <a href="/contact">Entrar em contato</a>
      </section>

      <Footer />
    </>
  );
}
