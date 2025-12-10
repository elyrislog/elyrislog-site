import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Funcionalidades() {
  return (
    <>
      <Header />

      <section className="hero-block">
        <h1 className="hero-title">Funcionalidades do ElyrisLog WMS</h1>
        <p className="hero-subtitle">
          Recursos desenvolvidos para controle operacional e tomada de decisão.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Operação</h2>
        <div className="cards-grid">
          <div className="card">Recebimento com conferência guiada</div>
          <div className="card">Endereçamento por regras configuráveis</div>
          <div className="card">Movimentações internas e armazenagem</div>
          <div className="card">Picking com múltiplas estratégias</div>
          <div className="card">Conferência e expedição</div>
        </div>
      </section>

      <section className="section section-soft">
        <h2 className="section-title">Gestão e análise</h2>
        <div className="cards-grid">
          <div className="card">
            Estoque em tempo real por endereço, lote e validade
          </div>
          <div className="card">
            Dashboards de produtividade e ocupação
          </div>
          <div className="card">
            Indicadores de SLA e acuracidade
          </div>
          <div className="card">
            Histórico completo de movimentações
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
