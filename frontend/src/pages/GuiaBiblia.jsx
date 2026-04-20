import Navbar from "../components/Navbar"
import { useState } from "react"

const GuiaBiblia = () => {

  const [hovered, setHovered] = useState(null)

  return (
    <div style={styles.wrapper}>

      <Navbar />

      <div style={styles.container}>

        {/* HERO */}
        <div style={styles.hero}>
          <h1 style={styles.title}>📖 Guía de Estudio Bíblico</h1>
          <p style={styles.subtitle}>
            Aprende a escuchar la voz de Dios, entender Su Palabra y transformar tu vida diariamente.
          </p>
        </div>

        {/* INTRO */}
       <section style={styles.propositoCard}>
  <div style={styles.propositoContent}>
    
    <div style={styles.propositoIcon}>✨</div>

    <div>
      <h2 style={styles.propositoTitle}>Propósito</h2>
      <p style={styles.propositoText}>
        Esta guía no es solo para leer la Biblia, sino para 
        <strong> encontrarte con Dios</strong>, entender Su voz 
        y permitir que transforme cada área de tu vida.
      </p>

      <div style={styles.propositoHighlight}>
        📖 "Tu palabra es lámpara a mis pies, y lumbrera a mi camino."
      </div>
    </div>

  </div>
</section>

        {/* PASOS */}
        <section style={styles.card}>
          <h2>🔥 Cómo estudiar la Biblia</h2>

          <div style={styles.grid}>
            {[
              ["🙏", "Orar", "Hablar con Dios antes de comenzar"],
              ["📜", "Leer", "Entender el contexto"],
              ["🧠", "Meditar", "Reflexionar profundamente"],
              ["⚡", "Aplicar", "Vivir la Palabra"],
              ["⏳", "Perseverar", "Constancia diaria"]
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  ...styles.stepCard,
                  transform: hovered === i ? "scale(1.05)" : "scale(1)"
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span style={styles.icon}>{item[0]}</span>
                <h4>{item[1]}</h4>
                <p>{item[2]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* METODO */}
       <section style={styles.card}>
  <h2>📜 Método SOAP</h2>

  {/* 🔥 LEYENDA */}
  <div style={styles.soapLegend}>
    <h2>Leyenda Ingles - Español-</h2>
    <span><strong>S</strong> → Scripture - Escritura</span>
    <span><strong>O</strong> → Observation - Observación</span>
    <span><strong>A</strong> → Application - Aplicación</span>
    <span><strong>P</strong> → Prayer - Oración</span>
  </div>

  <div style={styles.methodGrid}>
    {[
      ["S", "Escritura", "Escribe el versículo clave"],
      ["O", "Observación", "¿Qué está pasando?"],
      ["A", "Aplicación", "¿Cómo lo aplico?"],
      ["P", "Oración", "Habla con Dios"]
    ].map((m, i) => (
      <div key={i} style={styles.soapCard}>
        <h3 style={styles.soapLetter}>{m[0]}</h3>
        <h4>{m[1]}</h4>
        <p>{m[2]}</p>
      </div>
    ))}
  </div>
</section>

        {/* PLAN */}
        <section style={styles.card}>
          <h2>🗓️ Plan de 30 días</h2>

          <div style={styles.planGrid}>
            {[
              "Evangelio de Juan",
              "Salmos 1-23",
              "Proverbios",
              "Hechos de los Apóstoles"
            ].map((item, i) => (
              <div key={i} style={styles.planCard}>
                📘 {item}
              </div>
            ))}
          </div>
        </section>

        {/* CONSEJOS */}
        <section style={styles.card}>
  <h2>💡 Consejos clave</h2>

  <div style={styles.consejosGrid}>
    {[
      ["📍", "Lugar secreto", "Aparta un lugar donde puedas encontrarte con Dios sin distracciones"],
      ["📓", "Diario espiritual", "Escribe lo que Dios te habla cada día"],
      ["📵", "Sin distracciones", "Apaga notificaciones y enfócate en Su presencia"],
      ["🔥", "Constancia", "No se trata de perfección, sino de perseverancia"]
    ].map((c, i) => (
      <div key={i} style={styles.consejoCard}>
        <div style={styles.consejoIcon}>{c[0]}</div>
        <h4>{c[1]}</h4>
        <p>{c[2]}</p>
      </div>
    ))}
  </div>
</section>

        {/* FRASE FINAL */}
        <section style={styles.finalCard}>
          <h2>❤️ Mensaje final</h2>
          <p>
            La Biblia no es solo un libro… es la voz viva de Dios.
            Cuando la lees, Él te habla. Cuando la obedeces, Él te transforma.
          </p>
        </section>

      </div>

      {/* FOOTER */}
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

  wrapper: {
    background: "linear-gradient(180deg, #020617, #020617, #020617)",
    minHeight: "100vh"
  },

  container: {
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    color: "#e2e8f0"
  },

  hero: {
    textAlign: "center",
    marginBottom: "40px"
  },

  title: {
    fontSize: "38px",
    marginBottom: "10px",
    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  subtitle: {
    opacity: 0.7,
    fontSize: "16px"
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "18px",
    marginBottom: "25px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
    transition: "0.3s"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    marginTop: "15px"
  },

  stepCard: {
    background: "rgba(255,255,255,0.04)",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer"
  },

  icon: {
    fontSize: "24px"
  },

  methodGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
    gap: "15px"
  },

  soapCard: {
    background: "rgba(99,102,241,0.1)",
    padding: "20px",
    borderRadius: "12px"
  },

  soapLetter: {
    fontSize: "28px",
    color: "#a78bfa"
  },

  planGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
    gap: "15px"
  },

  planCard: {
    background: "rgba(255,255,255,0.05)",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center"
  },

  list: {
    marginTop: "10px",
    lineHeight: "1.8"
  },

  finalCard: {
    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    color: "#fff",
    marginTop: "20px",
    boxShadow: "0 20px 50px rgba(99,102,241,0.5)"
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
},
  // 🔥 PROPOSITO ELITE
propositoCard: {
  background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))",
  padding: "30px",
  borderRadius: "20px",
  marginBottom: "25px",
  backdropFilter: "blur(15px)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  border: "1px solid rgba(255,255,255,0.08)"
},

propositoContent: {
  display: "flex",
  gap: "20px",
  alignItems: "flex-start"
},

propositoIcon: {
  fontSize: "30px",
  background: "rgba(255,255,255,0.08)",
  padding: "15px",
  borderRadius: "12px"
},

propositoTitle: {
  fontSize: "22px",
  marginBottom: "10px"
},

propositoText: {
  opacity: 0.85,
  lineHeight: "1.6"
},

propositoHighlight: {
  marginTop: "15px",
  padding: "12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.05)",
  fontStyle: "italic",
  borderLeft: "3px solid #a78bfa"
},

// 🔥 CONSEJOS ELITE
consejosGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "18px",
  marginTop: "20px"
},

consejoCard: {
  background: "rgba(255,255,255,0.04)",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "left",
  transition: "0.3s",
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.05)"
},

consejoIcon: {
  fontSize: "24px",
  marginBottom: "10px"
},
soapLegend: {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "10px",
  marginBottom: "20px",
  padding: "12px 15px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.04)",
  fontSize: "13px",
  opacity: 0.8,
  border: "1px solid rgba(255,255,255,0.05)"
},
}

export default GuiaBiblia