import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Noticias from "./pages/Noticias"
import Actividades from "./pages/Actividades"
import Donaciones from "./pages/Donaciones"
import Servicios from "./pages/Servicios"
import Formaciones from "./pages/Formaciones"
import Multimedia from "./pages/Multimedia"
import MilagrosEucaristicos from "./pages/MilagrosEucaristicos"
import VidaDevocional from "./pages/VidaDevocional"
import GuiaBiblia from "./pages/GuiaBiblia"
// Pastoral
import Familiar from "./pages/Familiar"
import Social from "./pages/Social"
import Juvenil from "./pages/Juvenil"
import Vicaria from "./pages/Vicaria"

// Formaciones
import PrimeraComunion from "./pages/PrimeraComunion"
import Confirmacion from "./pages/Confirmacion"
import Prematrimoniales from "./pages/Prematrimoniales"
import Lectores from "./pages/Lectores"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"//Protector de ruta AUTH
function App(){

return(
   

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/noticias" element={<Noticias/>}/>
<Route path="/actividades" element={<Actividades/>}/>
<Route path="/donaciones" element={<Donaciones/>}/>
<Route path="/servicios" element={<Servicios/>}/>
<Route path="/formaciones" element={<Formaciones/>}/>
<Route path="/multimedia" element={<Multimedia/>}/>
<Route path="/MilagrosEucaristicos" element={<MilagrosEucaristicos/>}/>
<Route path="/VidaDevocional" element={<VidaDevocional/>}/>
<Route path="/guia-biblia" element={<GuiaBiblia />} />
 {/* Pastoral */}
        <Route path="/pastoral/familiar" element={<Familiar />} />
        <Route path="/pastoral/social" element={<Social />} />
        <Route path="/pastoral/juvenil" element={<Juvenil />} />
        <Route path="/pastoral/vicaria" element={<Vicaria />} />

        {/* Formaciones */}
        <Route path="/primera-comunion" element={<PrimeraComunion />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/prematrimoniales" element={<Prematrimoniales />} />
        <Route path="/lectores" element={<Lectores />} />

<Route path="/login" element={<Login/>}/>

<Route path="/admin" element={
  <ProtectedRoute>
    <Admin/>
  </ProtectedRoute>
}/>
</Routes>

</BrowserRouter>

)

}

export default App