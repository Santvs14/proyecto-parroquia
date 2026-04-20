import Navbar from "../components/Navbar";

const frases = [
  "¿De qué le sirve al hombre ganar una batalla, si no es capaz de vencer sus pasiones?",
  "La Eucaristía es mi autopista al cielo",
  "Después de la Eucaristía, el Santo Rosario es el arma más potente para combatir al demonio",
  "Encuentra a Dios y encontrarás el sentido de tu vida",
  "Estar siempre unidos a Jesús, ese es mi proyecto de vida",
  "La vida es un regalo, porque mientras estemos en este planeta podemos incrementar nuestro nivel de caridad. Cuanto más alto sea, más disfrutaremos de la Eterna Bienaventuranza de Dios",
  "La tristeza es dirigir la mirada hacia uno mismo; la felicidad es dirigir la mirada hacia Dios. La conversión no es otra cosa que desviar la mirada desde abajo hacia lo alto",
  "La santificación no es un proceso de suma, sino de resta. Menos yo para dejar espacio a Dios",
  "Todos nacen como originales, pero muchos mueren como fotocopias",
  "Me siento feliz de morir porque he vivido mi vida sin perder un minuto en aquellas cosas que no agradan a Dios",
  "Hay gente que sufre mucho más que yo",
  "Cuanto más Eucaristía recibimos, más nos parecemos a Jesús, de modo que en la tierra tendremos un anticipo del cielo."
];

const MilagrosEucaristicos = () => {
  return (
    <div style={styles.container}>
      <Navbar />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.title}>Milagros Eucarísticos</h1>

          <h2 style={styles.heroTitle}>
            “La Eucaristía es mi autopista al cielo”
          </h2>

          <p style={styles.author}>— Carlo Acutis</p>
        </div>

        <img
          src="https://whjcbmywxubdzdgrhzak.supabase.co/storage/v1/object/sign/CarlosAcutis/CarlosAcutis.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NDNiZmIwYi02YTNmLTQzOGEtOWRhMi00Njk0ZmQwYTJjMzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDYXJsb3NBY3V0aXMvQ2FybG9zQWN1dGlzLlBORyIsImlhdCI6MTc3Mzk3MzMwOSwiZXhwIjoxODY4NTgxMzA5fQ._dfyTWO5EECaSWnJTbVvp-Dy6CPI15_NBdTL2aVNFfA"
          alt="Carlo Acutis"
          style={styles.heroImage}
        />
      </section>

      {/* BIO */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>¿Quién fue Carlo Acutis?</h2>
        <p style={styles.text}>
          Carlo Acutis (1991-2006) fue un adolescente italiano conocido como el "ciberapóstol 
          de la Eucaristía". Utilizó sus habilidades informáticas para evangelizar, incluso 
          siendo hijo de padres no practicantes. Falleció de leucemia a los 15 años, 
          dejando un testimonio profundo de amor a Dios.Gran parte de su legado como 
          cristiano fue desarrollar una pagina web que contiene todos los milagros 
          ecucaristicos de la historia, con  el deseo de que todo el mundo crea 
          en la existencia de Dios en la Eucaristia.
        </p>
      </section>

      {/* IMAGEN */}
      <section style={styles.sectionCenter}>
        <img
          src="https://cathstan-1f209.kxcdn.com/0401carlos.jpg"
          alt="Carlo Acutis"
          style={styles.image}
        />
      </section>

      {/* FRASES */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Frases de Carlos Acutis que transforman</h2>

        <div style={styles.frasesContainer}>
          {frases.map((frase, index) => (
            <div key={index} style={styles.card}>
              <p style={styles.fraseTexto}>“{frase}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>Testimonio</h2>

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/3IQF38Icrgw"
          title="Carlo Acutis"
          style={styles.video}
          allowFullScreen
        ></iframe>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Explora los Milagros Eucarísticos en la pagina de Carlos Acutis</h2>

        <a
          href="https://www.miracolieucaristici.org/es/Liste/list.html"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Ver Milagros
        </a>
      </section>
      {/* Nota final */} <section style={styles.section}> <h2 style={styles.subtitle}>Reflexión</h2> <p style={styles.text}> La vida de Carlo Acutis nos muestra que se puede vivir en santidad siendo joven. Nos recuerda que Jesús está vivo en la Eucaristía y que todos estamos llamados a ser santos. Vivir para agradar a Dios trae gracia, sabiduría y paz. </p> </section>
   <footer style={styles.footer}>
  <p style={styles.footerText}>
    © 2026 ParroquiaNuestraSeñoraDelRosario | Todos los derechos reservados.
  </p>

  <p style={styles.footerText}>
    Desarrollado por <strong>Ing.Vasquez</strong>
  </p>
</footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "#fff",
    minHeight: "100vh"
  },

  hero: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 10%",
    flexWrap: "wrap"
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 1
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "500px"
  },

  title: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px"
  },

  heroTitle: {
    fontSize: "28px",
    fontStyle: "italic",
    color: "#38bdf8"
  },

  author: {
    marginTop: "10px",
    color: "#cbd5f5"
  },

  heroImage: {
    width: "300px",
    borderRadius: "20px",
    zIndex: 2,
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
  },

  section: {
    padding: "60px 10%"
  },

  sectionCenter: {
    textAlign: "center",
    padding: "40px"
  },

  subtitle: {
    fontSize: "28px",
    marginBottom: "20px"
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#cbd5f5"
  },

  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
  },

  frasesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "20px",
    transition: "0.3s",
    cursor: "pointer"
  },

  fraseTexto: {
    fontSize: "16px"
  },

  video: {
    borderRadius: "20px"
  },

  cta: {
    textAlign: "center",
    padding: "60px",
    background: "linear-gradient(135deg, #38bdf8, #6366f1)"
  },

  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "15px 30px",
    background: "#fff",
    color: "#000",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s"
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
};

export default MilagrosEucaristicos;