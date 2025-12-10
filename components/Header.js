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
      </nav>
    </header>
  );
}
