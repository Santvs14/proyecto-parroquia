import { useState } from "react"
import { supabase } from "../services/supabase"
import Navbar from "../components/Navbar"

export default function Donaciones() {

  const [form, setForm] = useState({
    nombre_donante: "",
    banco: "",
    monto: "",
    mensaje: "",
    causa: ""
  })

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const donar = async () => {
    setErrorMsg("")
    setSuccessMsg("")

    if (!form.monto || !form.banco) {
      setErrorMsg("Completa los campos obligatorios")
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from("donaciones")
      .insert([{
        nombre_donante: form.nombre_donante || "Anónimo",
        banco: form.banco,
        monto: Number(form.monto),
        mensaje: form.mensaje,
        causa: form.causa
      }])

    setLoading(false)

    if (error) {
      setErrorMsg("Error al registrar donación")
    } else {
      setSuccessMsg("🙏 Donación registrada correctamente")
      console.log("Donacion registrada")

      setForm({
        nombre_donante: "",
        banco: "",
        monto: "",
        mensaje: "",
        causa: ""
      })
    }
  }

  return (
  <div style={styles.page}>
    <Navbar />

    <div style={styles.wrapper}>
      <h2 style={styles.title}>💝 Donaciones</h2>

      <div style={styles.container}>

        {/* FORMULARIO */}
        <div style={styles.card}>
          <p style={styles.subtitle}>
            Apoya las obras del ministerio
          </p>

          <select name="causa" value={form.causa} onChange={handleChange} style={styles.input}>
            <option value="">Selecciona una causa</option>
            <option value="infraestructura">🏗️ Infraestructura</option>
            <option value="ayuda_social">🤝 Ayuda Social</option>
            <option value="evangelizacion">📖 Evangelización</option>
            <option value="eventos">🎉 Eventos</option>
          </select>

          <input
            type="text"
            name="nombre_donante"
            value={form.nombre_donante}
            onChange={handleChange}
            placeholder="Nombre (opcional)"
            style={styles.input}
          />

          <select name="banco" value={form.banco} onChange={handleChange} style={styles.input}>
            <option value="">Selecciona tu banco</option>
            <option>Banco Popular</option>
            <option>Banreservas</option>
            <option>Scotiabank</option>
            <option>BHD</option>
          </select>

          <input
            type="number"
            name="monto"
            value={form.monto}
            onChange={handleChange}
            placeholder="Monto (RD$)"
            style={styles.input}
          />

          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Mensaje (opcional)"
            style={styles.textarea}
          />

          {errorMsg && <p style={styles.error}>{errorMsg}</p>}
          {successMsg && <p style={styles.success}>{successMsg}</p>}

          <button onClick={donar} style={styles.button} disabled={loading}>
            {loading ? "Procesando..." : "Donar ahora"}
          </button>
        </div>

        {/* TARJETAS */}
        <div style={styles.cardsBox}>
          <h3 style={styles.cardsTitle}>Métodos aceptados</h3>

          <div style={styles.cardBrand}>
            <div style={styles.visa}>VISA</div>
            <span>Pago seguro</span>
          </div>

          <div style={styles.cardBrand}>
            <div style={styles.mastercard}>
              <div style={styles.mcRed}></div>
              <div style={styles.mcYellow}></div>
            </div>
            <span>Tarjeta débito / crédito</span>
          </div>
        </div>

      </div>
    </div>

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
    fontFamily: "sans-serif"
  },

  /* 🔥 IMPORTANTE: evita romper navbar */
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px"
  },

  title: {
    color: "#fff",
    marginBottom: "30px",
    fontSize: "28px",
    textAlign: "center"
  },

  container: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },

  card: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "380px",
    padding: "25px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: "13px",
    textAlign: "center"
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    fontSize: "13px",
    outline: "none"
  },

  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    minHeight: "70px",
    fontSize: "13px",
    outline: "none"
  },

  button: {
    marginTop: "10px",
    padding: "11px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  },

  error: {
    color: "#f87171",
    fontSize: "12px",
    textAlign: "center"
  },

  success: {
    color: "#4ade80",
    fontSize: "12px",
    textAlign: "center"
  },

  /* 💳 TARJETAS BIEN HECHAS */
  cardsBox: {
    flex: "1",
    minWidth: "240px",
    maxWidth: "300px",
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  cardsTitle: {
    color: "#fff",
    fontSize: "14px"
  },

  cardBrand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#cbd5f5",
    fontSize: "12px"
  },

  visa: {
    width: "45px",
    height: "28px",
    background: "#1a1f71",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px"
  },

  mastercard: {
    position: "relative",
    width: "45px",
    height: "28px"
  },

  mcRed: {
    position: "absolute",
    width: "18px",
    height: "18px",
    background: "#eb001b",
    borderRadius: "50%",
    left: "6px",
    top: "5px"
  },

  mcYellow: {
    position: "absolute",
    width: "18px",
    height: "18px",
    background: "#f79e1b",
    borderRadius: "50%",
    right: "6px",
    top: "5px",
    opacity: 0.9
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