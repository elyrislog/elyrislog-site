export default function Header() {
  return (
    <header
      style={{
        padding: "20px 32px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          fontSize: "14px",
          opacity: 0.9,
        }}
      >
        <a href="/wms" style={{ fontWeight: 600 }}>
          ElyrisLog WMS
        </a>
        <a href="/funcionalidades">Funcionalidades</a>
        <a href="/para-quem-e">Para quem é</a>
        <a href="/about">Sobre</a>
        <a href="/contact">Contato</a>

        {/* WHATSAPP NO MENU */}
        <a
          href="https://wa.me/5511918579195?text=Ol%C3%A1!%20Tenho%20interesse%20no%20ElyrisLog%20WMS."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 16px",
            backgroundColor: "#22c55e",
            borderRadius: "12px",
            color: "white",
            fontWeight: "600",
          }}
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
