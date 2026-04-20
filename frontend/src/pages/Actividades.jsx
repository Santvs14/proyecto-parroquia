import { useEffect,useState } from "react"
import { supabase } from "../services/supabase"

export default function Actividades(){

const [actividades,setActividades] = useState([])

useEffect(()=>{

console.log("Cargando actividades")

async function cargar(){

const {data} = await supabase
.from("actividades")
.select("*")

console.log("Actividades recibidas",data)

setActividades(data)

}

cargar()

},[])

return(

<div>

<h2>Actividades parroquiales</h2>

{actividades.map(a=>(
<div key={a.id}>

<h3>{a.titulo}</h3>

<p>Lugar: {a.lugar}</p>

<p>Fecha: {a.fecha}</p>

<p>Hora: {a.hora}</p>

</div>
))}

</div>

)

}