import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { supabase } from "../services/supabase"

// 📌 PARROCOS
const parrocosData = [
  {
    nombre: "Rev. Padre Juan Cardenas",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    semblanza: "Más de 15 años sirviendo con dedicación."
  },
  {
    nombre: "Rev. Padre Hector Cabral Quezada",
    imagen: "https://randomuser.me/api/portraits/men/45.jpg",
    semblanza: "Liderazgo espiritual y trabajo con jóvenes."
  },
  {
    nombre: "Rev. Padre Estormi Cabral Quezada",
    imagen: "https://randomuser.me/api/portraits/men/55.jpg",
    semblanza: "Evangelización digital y labor social."
  }
]

const Home = () => {

  const [modal, setModal] = useState(null)
  const [contenido, setContenido] = useState([])
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    obtenerContenido()
  }, [])

  // 🔥 CARRUSEL AUTOMÁTICO
  useEffect(() => {
    if (contenido.length === 0) return

    const interval = setInterval(() => {
      setIndex(prev =>
        prev + 3 < contenido.length ? prev + 1 : 0
      )
    }, 3500)

    return () => clearInterval(interval)
  }, [contenido])

  const obtenerContenido = async () => {

    const { data: noticias } = await supabase.from("noticias").select("*")
    const { data: avisos } = await supabase.from("avisos").select("*")
    const { data: actividades } = await supabase.from("actividades").select("*")

    const dataFinal = [
      ...(noticias || []).map(n => ({ ...n, tipo: "noticia" })),
      ...(avisos || []).map(a => ({ ...a, tipo: "aviso" })),
      ...(actividades || []).map(a => ({
        ...a,
        tipo: "actividad",
        descripcion: `${a.descripcion} 📍 ${a.lugar} ⏰ ${a.hora}`
      }))
    ]

    dataFinal.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

    setContenido(dataFinal)
    setLoading(false)
  }

  const next = () => index + 3 < contenido.length && setIndex(index + 1)
  const prev = () => index > 0 && setIndex(index - 1)

  const visibleItems = contenido.slice(index, index + 3)

  const formatearFecha = (fecha) => {
    if (!fecha) return ""
    return new Date(fecha).toLocaleDateString("es-DO", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    })
  }

  return (
    <div style={styles.container}>
{/* 🔥 NAVBAR */}
      <Navbar />
      {/* 🔥 HERO */}
      <div style={styles.hero}>
        <img
          src="https://elaudaz.net/wp-content/uploads/2025/03/comite-de-mujeres-scaled.jpg"
          style={styles.heroImg}
        />

        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Parroquia Nuestra Señora del Rosario
          </h1>
          <p style={styles.heroSubtitle}>
            Bienvenidos a la plataforma parroquial
          </p>
        </div>
      </div>

      

      {/* 👤 PARROCOS */}
      <h2 style={styles.title}>Nuestros Párrocos</h2>

      <div style={styles.grid}>
        {parrocosData.map((p, i) => (
          <div key={i} style={styles.parrocoCard} className="card">
            <img src={p.imagen} style={styles.parrocoImg} />
            <h3>{p.nombre}</h3>

            <button onClick={() => setModal(p)} style={styles.btn}>
              Ver más
            </button>
          </div>
        ))}
      </div>

      {/* 📢 CONTENIDO */}
      <h2 style={styles.title}>Contenido Reciente</h2>

      <div style={styles.carouselWrapper}>

        <button onClick={prev} style={styles.arrow}>◀</button>

        <div style={styles.carousel}>
          {loading ? (
            <p style={{ color: "#fff" }}>Cargando...</p>
          ) : (
            visibleItems.map(item => (
              <div
                key={item.id}
                onClick={() => setModal(item)}
                style={{
                  ...styles.card,
                  boxShadow:
                    item.tipo === "noticia"
                      ? "0 0 25px rgba(56,189,248,0.5)"
                      : item.tipo === "aviso"
                      ? "0 0 25px rgba(251,146,60,0.6)" // 🟠 NARANJA
                      : "0 0 25px rgba(74,222,128,0.5)"
                }}
                className="card"
              >

                <span style={styles.badge}>{item.tipo}</span>

                {item.imagen && (
                  <img src={item.imagen} style={styles.image} />
                )}

                <h4>{item.titulo}</h4>

                <p style={styles.desc}>{item.descripcion}</p>

                <span style={styles.fecha}>
                  📅 {formatearFecha(item.fecha)}
                </span>

              </div>
            ))
          )}
        </div>

        <button onClick={next} style={styles.arrow}>▶</button>

      </div>

      {/* 🧊 MODAL */}
      {modal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>

            <h2>{modal.titulo || modal.nombre}</h2>

            {modal.imagen && (
              <img src={modal.imagen} style={styles.modalImg} />
            )}

            <p>{modal.descripcion || modal.semblanza}</p>

            <button onClick={() => setModal(null)} style={styles.btnCerrar}>
              Cerrar
            </button>

          </div>
        </div>
      )}

      {/* ✨ ANIMACIONES */}
      <style>
        {`
          .card {
            transition: all 0.4s ease;
          }

          .card:hover {
            transform: translateY(-10px) scale(1.04);
            filter: brightness(1.1);
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

// 🎨 ESTILOS
const styles = {

  container: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1e293b, #020617)",
    color: "#e2e8f0",
    fontFamily: "system-ui"
  },

  hero: {
    position: "relative",
    height: "380px",
    overflow: "hidden"
  },

  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.55)",
    transform: "scale(1.05)"
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
    background: "linear-gradient(to top, rgba(2,6,23,0.85), rgba(2,6,23,0.3))"
  },

  heroTitle: {
  fontSize: "clamp(2rem, 4vw, 2.8rem)",
  fontFamily:'cursive',
  fontWeight: "700",
  lineHeight: "1.2",
  maxWidth: "950px",
  color: "gray",
  letterSpacing: "0.3px",
  textAlign: "center",
  textShadow: "0 2px 8px rgba(0,0,0,0.5)", // 👈 sombra suave REALISTA
  
},

  heroSubtitle: {
    marginTop: "-0.5px",
    fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
    color: "#c7d2fe"
  },

  title: {
    textAlign: "center",
    margin: "40px 0 20px",
    fontSize: "1.3rem",
    textShadow: "0 0 10px rgba(99,102,241,0.6)"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    padding: "0 20px"
  },

  parrocoCard: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
    padding: "15px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  parrocoImg: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px"
  },

  btn: {
    marginTop: "10px",
    padding: "6px 12px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg,#6366f1,#a78bfa)",
    color: "#fff",
    cursor: "pointer"
  },

  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "20px"
  },

  carousel: {
    display: "flex",
    gap: "15px"
  },

  card: {
    width: "220px",
    padding: "12px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  desc: {
    fontSize: "13px",
    opacity: 0.8
  },

  badge: {
    fontSize: "10px",
    background: "#6366f1",
    padding: "3px 8px",
    borderRadius: "999px"
  },

  fecha: {
    fontSize: "11px",
    opacity: 0.6
  },

  arrow: {
    background: "#0f172a",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer"
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(6px)"
  },

  modal: {
    width: "280px",
    background: "rgba(15,23,42,0.95)",
    borderRadius: "16px",
    padding: "18px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 30px rgba(99,102,241,0.4)"
  },

  modalImg: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  btnCerrar: {
    marginTop: "12px",
    padding: "6px 10px",
    background: "linear-gradient(135deg,#ef4444,#f87171)",
    border: "none",
    borderRadius: "8px",
    color: "#fff"
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

export default Home