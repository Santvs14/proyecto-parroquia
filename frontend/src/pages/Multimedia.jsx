import Navbar from "../components/Navbar"

export default function Multimedia() {

  const canciones = [
    {
      categoria: "Espíritu Santo 🔥",
      video: "https://www.youtube.com/embed/9EVu9g-cZv4"
    },
    {
      categoria: "Acción de Gracias 🙏",
      video: "https://www.youtube.com/embed/9EVu9g-cZv4"
    }
  ]

  return (
    <div style={styles.container}>
      <Navbar />

      <h1 style={styles.title}>🎬 Multimedia</h1>

      <div style={styles.layout}>

        {/* 🎵 Canciones */}
        <section style={styles.cardSection}>
          <h3 style={styles.sectionTitle}>🎵 Canciones</h3>

          {canciones.map((c, i) => (
            <div key={i} style={styles.miniCard} className="card">

              <span style={styles.badge}>{c.categoria}</span>

              <div style={styles.videoWrapperSmall}>
                <iframe
                  src={c.video}
                  title="Canción"
                  allowFullScreen
                  style={styles.video}
                />
              </div>

            </div>
          ))}
        </section>

        {/* 🙏 Adoración */}
        <section style={styles.cardSection}>
          <h3 style={styles.sectionTitle}>🙏 Pista de Adoración</h3>

          <div style={styles.miniCard} className="card">
            <div style={styles.videoWrapperSmall}>
              <iframe
                src="https://www.youtube.com/embed/xoRD8XbTyY4"
                title="Adoración"
                allowFullScreen
                style={styles.video}
              />
            </div>
          </div>
        </section>

        {/* 📖 Recursos */}
        <section style={styles.cardSection}>
          <h3 style={styles.sectionTitle}>📖 Recursos</h3>

          <div style={styles.resourceGrid}>
            <a
              href="https://seriesbiblicas.net/"
              target="_blank"
              rel="noreferrer"
              style={styles.resourceCard}
              className="card"
            >
              <h4>🎬 Series Biblicas</h4>
            </a>

            <a
              href="https://www.ewtn.com/es"
              target="_blank"
              rel="noreferrer"
              style={styles.resourceCard}
              className="card"
            >
              <h4>📡 EWTN - TV Catolica Global</h4>
            </a>
          </div>
        </section>

      </div>

      {/* Animación PRO */}
      <style>
        {`
          .card {
            transition: all 0.3s ease;
          }

          .card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
        `}
      </style>
      <footer style={styles.footer}>
  <p style={styles.footerText}>
    © 2026 ParroquiaNuestraSeñoraDelRosario | Todos los derechos reservados.
  </p>

  <p style={styles.footerText}>
    Desarrollado por <strong>Ing.Vasquez</strong>
  </p>
</footer>

    </div>
  )
}

const styles = {

  container: {
    padding: "30px 15px",
    minHeight: "100vh",
    fontFamily: "system-ui, sans-serif",
    background: "radial-gradient(circle at top, #1e293b, #020617)"
  },

  title: {
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: "30px",
    fontWeight: "700",
    color: "#f1f5f9",
    textShadow: "0 0 15px rgba(99,102,241,0.5)"
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "auto"
  },

  /* 🧊 Glass PRO */
  cardSection: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(18px)",
    borderRadius: "20px",
    padding: "15px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },

  sectionTitle: {
    fontSize: "1.1rem",
    marginBottom: "12px",
    color: "#c7d2fe",
    fontWeight: "600"
  },

  miniCard: {
    background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    padding: "10px",
    borderRadius: "14px",
    marginBottom: "12px",
    border: "1px solid rgba(255,255,255,0.06)"
  },

  /* 🌈 Badge con glow */
  badge: {
    fontSize: "11px",
    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "999px",
    display: "inline-block",
    marginBottom: "8px",
    boxShadow: "0 0 10px rgba(99,102,241,0.6)"
  },

  videoWrapperSmall: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    borderRadius: "10px"
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none"
  },

  resourceGrid: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },

  /* 🔥 Cards con glow */
  resourceCard: {
    flex: "1",
    minWidth: "100px",
    textDecoration: "none",
    background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    padding: "12px",
    borderRadius: "12px",
    color: "#f1f5f9",
    textAlign: "center",
    fontSize: "0.85rem",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "0 0 12px rgba(99,102,241,0.2)"
  },
  //footer
footer: {
  marginTop: "60px",
  padding: "25px 20px",
  textAlign: "center",
  background: "linear-gradient(to top, #020617, #0f172a)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  fontSize: "14px",
  opacity: 0.8
},

footerText: {
  margin: "5px 0"
}
}