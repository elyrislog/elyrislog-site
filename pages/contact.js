import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <section className="hero-block">
        <h1 className="hero-title">Fale com um especialista</h1>
        <p className="hero-subtitle">
          Conte um pouco sobre a sua operação e vamos avaliar como o ElyrisLog
          WMS pode se adaptar ao seu cenário.
        </p>
      </section>

      <section className="section">
<form
  action="https://formsubmit.co/contato@elyrislog.com.br"
  method="POST"
  className="contact-form-card"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  <div className="form-grid">
    <input
      type="text"
      name="nome"
      placeholder="Nome"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="E-mail"
      required
    />
  </div>

  <input
    type="text"
    name="empresa"
    placeholder="Empresa"
  />

  <input
    type="text"
    name="tipo_operacao"
    placeholder="Tipo de operação (3PL, e-commerce, logística própria)"
  />

  <textarea
    name="mensagem"
    placeholder="Descreva brevemente sua operação"
    rows="4"
  />

  <button type="submit" className="btn-primary">
    Enviar mensagem
  </button>
</form>


        <p className="text-block" style={{ marginTop: "32px" }}>
          Ou, se preferir, envie um e-mail para:<br />
          <strong>contato@elyrislog.com.br</strong>
        </p>
      </section>
<p className="text-block" style={{ marginTop: "20px", textAlign: "center" }}>
  Ou fale diretamente pelo WhatsApp:<br />
  <a
    href="https://wa.me/5511918579195?text=Ol%C3%A1!%20Tenho%20interesse%20no%20ElyrisLog%20WMS."
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#38bdf8", fontWeight: "600" }}
  >
    📲 (11) 91857-9195 — Iniciar conversa no WhatsApp
  </a>
</p>

      <Footer />
    </>
  );
}

