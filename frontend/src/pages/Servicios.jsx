import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"
import Navbar from "../components/Navbar"

export default function Servicios() {

  const [servicios, setServicios] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function cargar() {
      const { data } = await supabase
        .from("servicios")
        .select("*")

      setServicios(data || [])
      setLoading(false)
    }

    cargar()
  }, [])

  // 🔥 SERVICIOS COMPLETOS (mejorados)
  const serviciosFijos = [
    {
      nombre: "Eucaristías",
      icono: "✝️",
      descripcion: "Celebración de la Santa Misa",
      horario: [
        "Martes a Jueves - 7:00 A.M",
        "Viernes - 6:00 P.M",
        "Sábado - 7:00 A.M",
        "Domingo - 7:00 A.M / 10:00 A.M"
      ]
    },
    {
      nombre: "Adoración a Dios",
      icono: "🙏",
      descripcion: "Adoración al Santísimo Sacramento",
      horario: [
        "Martes a Viernes",
        "8:00 A.M - 5:00 P.M"
      ]
    },
    {
      nombre: "Noche Blanca",
      icono: "🌙",
      descripcion: "Adoración especial mensual",
      horario: [
        "Consultar fecha cada mes"
      ]
    },
    {
      nombre: "Grupo de Oración",
      icono: "🔥",
      descripcion: "Encuentros por sectores",
      horario: [
        "Días según cada sector"
      ]
    },
    {
      nombre: "Botica Popular Vida y Salud",
      icono: "💊",
      descripcion: "Medicamentos a bajo costo",
      horario: [
        "Lunes a Viernes - 8:00 A.M a 4:00 P.M"
      ]
    },
    {
      nombre: "Dispensario Médico",
      icono: "🩺",
      descripcion: "Servicios médicos comunitarios",
      horario: [
        "Medicina General - Lunes",
        "Pediatría - Miércoles",
        "Ginecología - Viernes"
      ]
    },
    {
      nombre: "Venta de artículos",
      icono: "📚",
      descripcion: "Biblias, T-Shirts y artículos religiosos",
      horario: [
        "Disponible después de cada misa"
      ]
    }
  ]

  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.header}>
        <h1 style={styles.title}>Servicios Parroquiales</h1>
        <p style={styles.subtitle}>
          Conoce todos los servicios espirituales y comunitarios
        </p>
      </div>

      {loading && <p style={styles.loading}>Cargando servicios...</p>}

      {/* 🔥 SERVICIOS PRINCIPALES */}
      <div style={styles.grid}>
        {serviciosFijos.map((s, i) => (
          <div key={i} style={styles.card} className="card">

            <div style={styles.icon}>{s.icono}</div>

            <h3 style={styles.cardTitle}>{s.nombre}</h3>
            <p style={styles.descripcion}>{s.descripcion}</p>

            <div style={styles.divider}></div>

            {s.horario.map((h, index) => (
              <p key={index} style={styles.horario}>🕒 {h}</p>
            ))}

          </div>
        ))}
      </div>

      {/* 🔥 DINÁMICOS */}
      {servicios.length > 0 && (
        <>
          <h2 style={styles.sectionTitle}>Otros Servicios</h2>

          <div style={styles.grid}>
            {servicios.map((s) => (
              <div key={s.id} style={styles.card} className="card">

                <div style={styles.icon}>📌</div>

                <h3 style={styles.cardTitle}>{s.nombre}</h3>

                <div style={styles.divider}></div>

                <p style={styles.horario}>📅 {s.dia}</p>
                <p style={styles.horario}>🕒 {s.hora}</p>

              </div>
            ))}
          </div>
        </>
      )}

      {/* ✨ Animaciones PRO */}
      <style>
        {`
          .card {
            transform: translateY(20px);
            opacity: 0;
            animation: fadeUp 0.6s ease forwards;
          }

          .card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 25px 60px rgba(0,0,0,0.6);
          }

          @keyframes fadeUp {
            to {
              transform: translateY(0);
              opacity: 1;
            }
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
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    padding: "40px 20px",
    fontFamily: "sans-serif"
  },

  header: {
    textAlign: "center",
    marginBottom: "40px"
  },

  title: {
    color: "#fff",
    fontSize: "2.5rem",
    fontWeight: "bold"
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "10px"
  },

  sectionTitle: {
    color: "#fff",
    fontSize: "1.8rem",
    marginTop: "60px",
    marginBottom: "20px",
    textAlign: "center"
  },

  loading: {
    textAlign: "center",
    color: "#94a3b8"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    borderRadius: "20px",
    padding: "25px",
    backdropFilter: "blur(20px)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    transition: "0.3s"
  },

  icon: {
    fontSize: "2rem",
    marginBottom: "10px"
  },

  cardTitle: {
    color: "#fff",
    fontSize: "1.3rem",
    marginBottom: "8px"
  },

  descripcion: {
    color: "#94a3b8",
    fontSize: "0.9rem"
  },

  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.1)",
    margin: "10px 0"
  },

  horario: {
    color: "#cbd5f5",
    fontSize: "0.9rem"
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