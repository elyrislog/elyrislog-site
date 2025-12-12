export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "40px 0",
        fontSize: "14px",
        opacity: 0.7,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div>© ElyrisLog</div>

      <a
        href="https://wa.me/5511918579195?text=Ol%C3%A1!%20Tenho%20interesse%20no%20ElyrisLog%20WMS."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#38bdf8",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        📞 Fale pelo WhatsApp: (11) 91857-9195
      </a>
    </footer>
  );
}
