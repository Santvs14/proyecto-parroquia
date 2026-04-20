import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function Admin() {

  const [seccion, setSeccion] = useState("noticias")
const [horaFin, setHoraFin] = useState("")
const [periodo, setPeriodo] = useState("AM")
const [periodoFin, setPeriodoFin] = useState("PM")
  // ================= NOTICIAS =================
  const [noticias, setNoticias] = useState([])
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [imagen, setImagen] = useState("")
  const [editandoId, setEditandoId] = useState(null)

  // ================= AVISOS =================
  const [avisos, setAvisos] = useState([])
  const [avisoTitulo, setAvisoTitulo] = useState("")
  const [avisoDesc, setAvisoDesc] = useState("")
  const [editAvisoId, setEditAvisoId] = useState(null)

  // ================= ACTIVIDADES =================
  const [actividades, setActividades] = useState([])
  const [actTitulo, setActTitulo] = useState("")
  const [actDesc, setActDesc] = useState("")
  const [lugar, setLugar] = useState("")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")
  const [tipo, setTipo] = useState("")
  const [editActId, setEditActId] = useState(null)

  useEffect(() => {
    cargarNoticias()
    cargarAvisos()
    cargarActividades()
  }, [])

  // ================= NOTICIAS =================
  async function cargarNoticias() {
    const { data } = await supabase
      .from("noticias")
      .select("*")
      .order("id", { ascending: false })
    setNoticias(data || [])
  }

  async function guardarNoticia() {
    if (editandoId) {
      await supabase
        .from("noticias")
        .update({ titulo, descripcion, imagen })
        .eq("id", editandoId)
      setEditandoId(null)
    } else {
      await supabase
        .from("noticias")
        .insert([{ titulo, descripcion, imagen }])
    }
    limpiarNoticias()
    cargarNoticias()
  }

  function editarNoticia(n) {
    setTitulo(n.titulo)
    setDescripcion(n.descripcion)
    setImagen(n.imagen)
    setEditandoId(n.id)
  }

  async function eliminarNoticia(id) {
    await supabase.from("noticias").delete().eq("id", id)
    cargarNoticias()
  }

  function limpiarNoticias() {
    setTitulo("")
    setDescripcion("")
    setImagen("")
  }

  // ================= AVISOS =================
  async function cargarAvisos() {
    const { data } = await supabase
      .from("avisos")
      .select("*")
      .order("fecha", { ascending: false })
    setAvisos(data || [])
  }

  async function guardarAviso() {
    if (editAvisoId) {
      await supabase
        .from("avisos")
        .update({ titulo: avisoTitulo, descripcion: avisoDesc })
        .eq("id", editAvisoId)
      setEditAvisoId(null)
    } else {
      await supabase
        .from("avisos")
        .insert([{ titulo: avisoTitulo, descripcion: avisoDesc }])
    }

    setAvisoTitulo("")
    setAvisoDesc("")
    cargarAvisos()
  }

  function editarAviso(a) {
    setAvisoTitulo(a.titulo)
    setAvisoDesc(a.descripcion)
    setEditAvisoId(a.id)
  }

  async function eliminarAviso(id) {
    await supabase.from("avisos").delete().eq("id", id)
    cargarAvisos()
  }

  // ================= ACTIVIDADES =================
  async function cargarActividades() {
    const { data } = await supabase
      .from("actividades")
      .select("*")
      .order("fecha", { ascending: false })
    setActividades(data || [])
  }

  async function guardarActividad() {
    if (editActId) {
      await supabase
  .from("actividades")
  .insert([{
    titulo: actTitulo,
    descripcion: actDesc,
    lugar,
    fecha,
    hora,
    hora_fin: horaFin,
    tipo,
    periodo,
    periodo_fin: periodoFin
  }])
        .eq("id", editActId)
      setEditActId(null)
    } else {
      await supabase
        .from("actividades")
        .insert([{ titulo: actTitulo, descripcion: actDesc, lugar, fecha, hora, tipo }])
    }

    limpiarActividad()
    cargarActividades()
  }

  function editarActividad(a) {
  setActTitulo(a.titulo)
  setActDesc(a.descripcion)
  setLugar(a.lugar)
  setFecha(a.fecha)
  setHora(a.hora)
  setHoraFin(a.hora_fin)
  setTipo(a.tipo)
  setPeriodo(a.periodo || "AM")
  setPeriodoFin(a.periodo_fin || "PM")
  setEditActId(a.id)
}

  async function eliminarActividad(id) {
    await supabase.from("actividades").delete().eq("id", id)
    cargarActividades()
  }

  function limpiarActividad() {
  setActTitulo("")
  setActDesc("")
  setLugar("")
  setFecha("")
  setHora("")
  setHoraFin("")
  setTipo("")
  setPeriodo("AM")
  setPeriodoFin("PM")
}

  return (
    <div style={styles.page}>

      <div style={styles.container}>
        <h2 style={styles.title}>📊 Panel Administrador Parroquial</h2>

        {/* NAV */}
        <div style={styles.nav}>
          <button style={styles.navBtn} onClick={() => setSeccion("noticias")}>Noticias</button>
          <button style={styles.navBtn} onClick={() => setSeccion("avisos")}>Avisos</button>
          <button style={styles.navBtn} onClick={() => setSeccion("actividades")}>Actividades</button>
        </div>

        {/* ================= NOTICIAS ================= */}
        {seccion === "noticias" && (
          <>
            <div style={styles.card}>
              <h3 style={styles.subtitle}>📰 Crear / Editar Noticia</h3>

              <input style={styles.input} placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
              <textarea style={styles.textarea} placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
              <input style={styles.input} placeholder="Imagen URL" value={imagen} onChange={e => setImagen(e.target.value)} />

              <button style={styles.primaryBtn} onClick={guardarNoticia}>
                {editandoId ? "Actualizar" : "Crear"}
              </button>
            </div>

            <div style={styles.card}>
              <h3 style={styles.subtitle}>📰 Noticias</h3>

              <div style={styles.grid}>
                {noticias.map(n => (
                  <div key={n.id} style={styles.newsCard}>
                    {n.imagen && <img src={n.imagen} alt="" style={styles.image} />}
                    <h4 style={styles.newsTitle}>{n.titulo}</h4>
                    <p style={styles.newsDesc}>{n.descripcion}</p>

                    <div style={styles.actions}>
                      <button style={styles.editBtn} onClick={() => editarNoticia(n)}>Editar</button>
                      <button style={styles.deleteBtn} onClick={() => eliminarNoticia(n.id)}>Eliminar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ================= AVISOS ================= */}
        {seccion === "avisos" && (
          <>
            <div style={styles.card}>
              <h3 style={styles.subtitle}>📢 Crear / Editar Aviso</h3>

              <input style={styles.input} placeholder="Título" value={avisoTitulo} onChange={e => setAvisoTitulo(e.target.value)} />
              <textarea style={styles.textarea} placeholder="Descripción" value={avisoDesc} onChange={e => setAvisoDesc(e.target.value)} />

              <button style={styles.primaryBtn} onClick={guardarAviso}>
                {editAvisoId ? "Actualizar" : "Crear"}
              </button>
            </div>

            <div style={styles.card}>
              <h3 style={styles.subtitle}>📢 Avisos</h3>

              <div style={styles.grid}>
                {avisos.map(a => (
                  <div key={a.id} style={styles.newsCard}>
                    <h4 style={styles.newsTitle}>{a.titulo}</h4>
                    <p style={styles.newsDesc}>{a.descripcion}</p>

                    <small style={{ opacity: 0.6 }}>
                      {new Date(a.fecha).toLocaleString()}
                    </small>

                    <div style={styles.actions}>
                      <button style={styles.editBtn} onClick={() => editarAviso(a)}>Editar</button>
                      <button style={styles.deleteBtn} onClick={() => eliminarAviso(a.id)}>Eliminar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ================= ACTIVIDADES ================= */}
        {seccion === "actividades" && (
          <>
            <div style={styles.card}>
              <h3 style={styles.subtitle}>📅 Crear / Editar Actividad</h3>

              <input style={styles.input} placeholder="Título" value={actTitulo} onChange={e => setActTitulo(e.target.value)} />
              <textarea style={styles.textarea} placeholder="Descripción" value={actDesc} onChange={e => setActDesc(e.target.value)} />
              <input style={styles.input} placeholder="Lugar" value={lugar} onChange={e => setLugar(e.target.value)} />
              <input type="date" style={styles.input} value={fecha} onChange={e => setFecha(e.target.value)} />
             {/* HORA INICIO */}
<label>Hora de inicio</label>
<div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
  <input 
    type="time" 
    style={styles.input} 
    value={hora} 
    onChange={e => setHora(e.target.value)} 
  />

  <select 
    style={styles.input}
    value={periodo}
    onChange={e => setPeriodo(e.target.value)}
  >
    <option>AM</option>
    <option>PM</option>
  </select>
</div>

{/* HORA FIN */}
<label>Hora de salida</label>
<div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
  <input 
    type="time" 
    style={styles.input} 
    value={horaFin} 
    onChange={e => setHoraFin(e.target.value)} 
  />

  <select 
    style={styles.input}
    value={periodoFin}
    onChange={e => setPeriodoFin(e.target.value)}
  >
    <option>AM</option>
    <option>PM</option>
  </select>
</div>
              <input style={styles.input} placeholder="Tipo" value={tipo} onChange={e => setTipo(e.target.value)} />

              <button style={styles.primaryBtn} onClick={guardarActividad}>
                {editActId ? "Actualizar" : "Crear"}
              </button>
            </div>

            <div style={styles.card}>
              <h3 style={styles.subtitle}>📅 Actividades</h3>

              <div style={styles.grid}>
                {actividades.map(a => (
                  <div key={a.id} style={styles.newsCard}>
                    <h4 style={styles.newsTitle}>{a.titulo}</h4>
                    <p style={styles.newsDesc}>{a.descripcion}</p>

                    <div style={{ fontSize: "13px", opacity: 0.8 }}>
                      📍 {a.lugar}
                    </div>

                   <div style={{ fontSize: "13px", opacity: 0.8 }}>
  📅 {a.fecha}
</div>

<div style={{ fontSize: "13px", opacity: 0.8 }}>
  ⏰ {a.hora} {a.periodo} - {a.hora_fin} {a.periodo_fin}
</div>

                    <div style={{ fontSize: "12px", color: "#38bdf8" }}>
                      {a.tipo}
                    </div>

                    <div style={styles.actions}>
                      <button style={styles.editBtn} onClick={() => editarActividad(a)}>Editar</button>
                      <button style={styles.deleteBtn} onClick={() => eliminarActividad(a.id)}>Eliminar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

/* 🎨 ESTILOS */
const styles = {
  page: {
    background: "#0f172a",
    minHeight: "100vh",
    padding: "30px",
    color: "#fff"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px"
  },
  subtitle: {
    marginBottom: "15px"
  },
  nav: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  navBtn: {
    padding: "10px 15px",
    background: "#1e293b",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer"
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "none"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    minHeight: "80px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "none"
  },
  primaryBtn: {
    padding: "10px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px"
  },
  newsCard: {
    background: "#0f172a",
    padding: "15px",
    borderRadius: "10px"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px"
  },
  newsTitle: {
    fontSize: "16px",
    marginBottom: "8px"
  },
  newsDesc: {
    fontSize: "14px",
    opacity: 0.8
  },
  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "10px"
  },
  editBtn: {
    flex: 1,
    padding: "8px",
    background: "#22c55e",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer"
  },
  deleteBtn: {
    flex: 1,
    padding: "8px",
    background: "#ef4444",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    cursor: "pointer"
  }
}