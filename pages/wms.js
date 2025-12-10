import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WMS() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero-block">
        <h1 className="hero-title">
          ElyrisLog WMS
          <br />
          Um WMS preparado para operações logísticas complexas
        </h1>

        <p className="hero-subtitle">
          Desenvolvido pela <strong>ElyrisLog</strong>, o ElyrisLog WMS foi criado
          para atender operações que fogem do padrão. Múltiplos fluxos,
          exceções constantes e regras específicas, sem depender de
          customizações intermináveis.
        </p>

        <a href="/contact" className="hero-cta">
          Solicitar demonstração
        </a>
      </section>

      {/* PARA QUEM É */}
      <section className="section">
        <h2 className="section-title">Para quem opera logística de verdade</h2>

        <div className="cards-grid">
          <div className="card">
            <h3>Operadores logísticos</h3>
            <p>
              Operações multi-cliente, com regras específicas por contrato
              e fluxos distintos dentro do mesmo armazém.
            </p>
          </div>

          <div className="card">
            <h3>E-commerce</h3>
            <p>
              Alta volumetria, picos de demanda e necessidade de agilidade
              sem perda de controle operacional.
            </p>
          </div>

          <div className="card">
            <h3>Logística própria</h3>
            <p>
              Operações internas de varejo e indústria que precisam evoluir
              rapidamente sem projetos longos.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMA DOS WMS TRADICIONAIS */}
      <section className="section section-soft">
        <h2 className="section-title">
          Onde os WMS tradicionais deixam de funcionar
        </h2>

        <p className="text-block">
          A maioria dos WMS foi desenvolvida para cenários padronizados.
          Quando a operação cresce em complexidade, o sistema passa a exigir
          customizações constantes, projetos longos e alto custo de
          manutenção. Com o tempo, o WMS deixa de ser um facilitador e passa
          a limitar a operação.
        </p>
      </section>

      {/* DIFERENCIAL */}
      <section className="section">
        <h2 className="section-title">
          Flexibilidade sem depender de customização pesada
        </h2>

        <p className="text-block">
          O ElyrisLog WMS foi desenvolvido desde a base com uso de Inteligência
          Artificial. Isso permite que o sistema se adapte a diferentes fluxos
          operacionais por meio de configuração e lógica, reduzindo a
          dependência de desenvolvimento sob demanda e acelerando a evolução
          da operação.
        </p>
      </section>

      {/* CAPACIDADES */}
      <section className="section section-soft">
        <h2 className="section-title">O que o ElyrisLog WMS entrega</h2>

        <div className="cards-grid">
          <div className="card">Gestão de estoque e endereçamento</div>
          <div className="card">Orquestração inteligente de picking</div>
          <div className="card">Recebimento, armazenagem e expedição</div>
          <div className="card">Suporte a múltiplos fluxos operacionais</div>
          <div className="card">Integração nativa com ERPs</div>
          <div className="card">Dados operacionais em tempo real</div>
        </div>
      </section>

      {/* QUEM DESENVOLVE */}
      <section className="section">
        <h2 className="section-title">Desenvolvido pela ElyrisLog</h2>

        <p className="text-block">
          A ElyrisLog é uma empresa de tecnologia focada no desenvolvimento de
          sistemas logísticos inteligentes. O ElyrisLog WMS é seu principal
          produto, evoluindo continuamente a partir de cenários reais de
          operação.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <h2>Conheça o ElyrisLog WMS em operação</h2>
        <a href="/contact">Solicitar demonstração</a>
      </section>

      <Footer />
    </>
  );
}
