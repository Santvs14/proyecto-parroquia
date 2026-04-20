import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"
import Navbar from "../components/Navbar"
import CardNoticia from "../components/CardNoticia"

export default function Noticias() {

  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function cargar() {

      const { data, error } = await supabase
        .from("noticias")
        .select("*")
        .order("id", { ascending: false })

      if (error) {
        console.error("Error cargando noticias", error)
      } else {
        setNoticias(data)
      }

      setLoading(false)
    }

    cargar()

  }, [])


  //Formato de fecha
  function formatearFecha(fecha) {
  const f = new Date(fecha)

  const dia = String(f.getDate()).padStart(2, "0")
  const mes = String(f.getMonth() + 1).padStart(2, "0")
  const año = f.getFullYear()

  return `${dia}/${mes}/${año}`
}

  return (
    <div>

      <Navbar />

      <div className="container">
        <h2>Noticias Parroquiales</h2>

        {loading && <p>Cargando noticias...</p>}

        {!loading && noticias.length === 0 && (
          <p>No hay noticias disponibles</p>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {noticias.map(n => (
            <CardNoticia
              key={n.id}
              titulo={n.titulo}
              contenido={n.descripcion}
              imagen={n.imagen}
              fecha={formatearFecha(n.fecha)}
              
            />
          ))}
        </div>

      </div>

    </div>
  )
}