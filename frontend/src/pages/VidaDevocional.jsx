import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const imagenes = [
  {
    src: "https://www.palabrasbiblicas.net/wp-content/uploads/sites/19/2025/09/why-spend-time-alone-with-god-e1524313562224.jpg",
    desc: "Busca a Dios en lo secreto y Él transformará tu corazón."
  },
  {
    src: "https://ministeriointernacionalepdd.wordpress.com/wp-content/uploads/2014/02/comunion.jpg",
    desc: "La comunión con Dios llena el alma de paz verdadera."
  },
  {
    src: "https://0a800251c6.clvaw-cdnwnd.com/abf63ecbe4f10473001425110ff02bbc/200001196-18c4618c49/700/111115_adoracion1.webp?ph=0a800251c6",
    desc: "En silencio, Dios habla al corazón que le busca."
  }
]

const versiculos = [
  {
    titulo: "🙏 Dios nos invita a buscarle",
    items: [
      "Jeremías 29:13 — Y me buscaréis y me hallaréis, porque me buscaréis de todo vuestro corazón.",
      "Isaías 55:6 — Buscad a Jehová mientras puede ser hallado.",
      "2 Crónicas 7:14 — Si se humillare mi pueblo...",
      "Amós 5:4 — Buscadme, y viviréis"
    ]
  },
  {
    titulo: "🔥 Dios promete renovarnos",
    items: [
      "Isaías 40:31 — Tendrán nuevas fuerzas",
      "Salmos 51:10 — Crea en mí un corazón limpio",
      "Romanos 12:2 — Transformaos por medio de la renovación",
      "2 Corintios 5:17 — Nueva criatura es"
    ]
  },
  {
    titulo: "🤍 Oración en intimidad",
    items: [
      "Mateo 6:6 — Entra en tu aposento",
      "Jeremías 33:3 — Clama a mí",
      "Salmos 145:18 — Cercano está Jehová",
      "Filipenses 4:6 — Presenta tus peticiones"
    ]
  },
  {
    titulo: "🌿 Permanecer en Dios",
    items: [
      "Santiago 4:8 — Acercaos a Dios",
      "Salmos 34:8 — Gustad y ved"
    ]
  }
]

export default function VidaDevocional() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(null)
const [hoveredCard, setHoveredCard] = useState(null)
const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
const [modalHover, setModalHover] = useState(false)
const [glow, setGlow] = useState(0)
const [hoveredImage, setHoveredImage] = useState(null)

useEffect(() => {
  const interval = setInterval(() => {
    setGlow(g => (g === 0 ? 1 : 0))
  }, 2000)

  return () => clearInterval(interval)
}, [])
  return (
    <div style={styles.container}>

      <Navbar />

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>Construye tu relación con Dios</h1>
          <p style={styles.subtitle}>Un encuentro diario con Dios transforma tu vida</p>
        </div>
      </div>

      {/* EUCARISTIA PRO */}
      <section style={styles.eucaristiaGrid}>

        {/* IZQUIERDA */}
        <div style={styles.leftBox}>
          <img
            src="https://whjcbmywxubdzdgrhzak.supabase.co/storage/v1/object/public/MilagroDeAmor/JesusHostiaConsagrada2.png"
           style={{
  ...styles.bigImage,
  boxShadow: glow
    ? "0 0 120px rgba(255,215,0,0.9), 0 0 200px rgba(255,215,0,0.4)"
    : "0 0 40px rgba(255,215,0,0.3)"
}}
          />

          <div style={styles.leftText}>
            <h2 className="glow">¡¡¡Enamórate de Jesús!!!</h2>
            <p style={{fontSize:14,fontFamily:'monospace'}}>
              Esto es lo que pasa cuando el sacerdote hace la consagración,
              lo que tú y yo no vemos.
            </p>
              <h3 style={{marginTop: "10px",fontSize:16,fontFamily:'cursive', opacity: 0.9}}>
          Carlo Acutis nos habla mas sobre la Eucaristía.
        </h3>
          <button style={styles.button} onClick={() => navigate("/milagroseucaristicos")}>Conoce a Carlos Acutis</button>

            
          </div>
        </div>

        {/* DERECHA */}
        <div style={styles.rightBox}>
          <h2>La Transustanciación</h2>

          <p>
            Es el cambio real del pan y el vino en el Cuerpo y la Sangre de Jesucristo.
          </p>

          <p style={{background:'#0003',borderRadius:10}}>
            El pan deja de ser pan → aunque lo parece <br />
            El vino deja de ser vino → aunque lo parece <br />
            Ahora es Jesús mismo, vivo y presente
          </p>

          <p style={styles.quote}>
            “El que come mi carne y bebe mi sangre tiene vida eterna. Juan 6:54-55”
          </p>

          <p>
            En el silencio de la consagración, el cielo desciende… <br />
            El Espíritu Santo transforma. <br />
            Es Jesucristo mismo, vivo, presente.
          </p>

          <p style={{fontWeight:"bold"}}>
            La cruz no se recuerda… se hace presente.
          </p>
        </div>
      </section>

      {/* IMAGENES */}
      <section style={styles.section}>
        <h2 style={styles.centerTitle}>A solas con Dios derrama tu corazon.</h2>
        <div style={styles.grid}>
          {imagenes.map((img, i) => (
  <div
    key={i}
    onMouseEnter={() => setHoveredImage(i)}
    onMouseLeave={() => setHoveredImage(null)}
    style={{
      ...styles.imageCard,
      ...styles.imageCardHover,
      transform: hoveredImage === i ? "translateY(-8px) scale(1.03)" : "none",
      boxShadow: hoveredImage === i
        ? "0 25px 60px rgba(0,0,0,0.7)"
        : styles.imageCard.boxShadow
    }}
  >
    <img
      src={img.src}
      style={{
        ...styles.image,
        transform: hoveredImage === i ? "scale(1.1)" : "scale(1)",
        transition: "0.5s",
        filter: hoveredImage === i ? "brightness(0.7)" : "none"
      }}
    />

    {/* DESCRIPCIÓN */}
    <div
      style={{
        ...styles.imageOverlay,
        opacity: hoveredImage === i ? 1 : 0,
        transform: hoveredImage === i ? "translateY(0)" : "translateY(20px)"
      }}
    >
      {img.desc}
    </div>
  </div>
))}
        </div>
      </section>

      {/* CARDS + MODAL DEBAJO DE IMAGENES */}
      <section style={styles.section}>
        <h2 style={styles.centerTitle}>Versículos para tu vida haz click</h2>

        <div style={styles.grid}>
         {versiculos.map((v, i) => (
  <div
    key={i}
    onClick={() => setModal(i)}
    onMouseEnter={() => setHoveredCard(i)}
    onMouseLeave={() => setHoveredCard(null)}
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }}
    style={{
      ...styles.cardPro,
      transform: hoveredCard === i ? "translateY(-12px) scale(1.03)" : "none",
      border: hoveredCard === i ? "1px solid rgba(255,215,0,0.4)" : styles.cardPro.border,
      boxShadow: hoveredCard === i
        ? `0 0 40px rgba(255,215,0,0.3)`
        : styles.cardPro.boxShadow,
      background:
        hoveredCard === i
          ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,215,0,0.25), transparent 60%), rgba(255,255,255,0.03)`
          : styles.cardPro.background
    }}
  >
    <h3>{v.titulo}</h3>
  </div>
))}
        </div>

        {modal !== null && (
          <div style={styles.modalOverlay} onClick={() => setModal(null)}>
           <div
  style={{
    ...styles.modal,
    background: modalHover
      ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,215,0,0.15), #020617)`
      : styles.modal.background,
    boxShadow: modalHover
      ? "0 0 60px rgba(255,215,0,0.3)"
      : styles.modal.boxShadow
  }}
  onMouseEnter={() => setModalHover(true)}
  onMouseLeave={() => setModalHover(false)}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }}
  onClick={(e)=>e.stopPropagation()}
>
              <h3>{versiculos[modal].titulo}</h3>

              {versiculos[modal].items.map((t, idx) => (
                <p key={idx} style={{marginTop:10}}>{t}</p>
              ))}

              <button onClick={()=>setModal(null)} style={styles.button}>
                Cerrar
              </button>
            </div>
          </div>
        )}
      </section>
      {/* COMUNION CON DIOS */}
      {/* COMUNION PREMIUM */}
<section style={styles.section}>
  <h2 style={styles.centerTitle}>🤍 Comunión con Dios</h2>

 <div style={{
  ...styles.comunionPremium,
  boxShadow: glow
    ? "0 0 120px rgba(255,215,0,0.15)"
    : "none",
  transition:"0.6s"
}}>

    {/* INTRO */}
    <div style={styles.comunionIntro}>
      <h3 style={styles.gradientText}>
        Una relación viva, íntima y transformadora
      </h3>

      <p style={styles.comunionText}>
        La comunión con Dios no es religión… es una conexión real con el Creador.
        Es vivir unido a Cristo por medio del Espíritu Santo, donde el alma encuentra
        descanso, dirección y propósito eterno.
      </p>
    </div>

    {/* GRID */}
    <div style={styles.comunionGrid}>

      {/* IZQUIERDA */}
   <div style={{
  ...styles.comunionCard,
  boxShadow: glow
    ? "0 0 40px rgba(255,215,0,0.25)"
    : styles.comunionCard.boxShadow,
  border: glow
    ? "1px solid rgba(255,215,0,0.25)"
    : styles.comunionCard.border
}}>
        <h3>✨ Aspectos clave</h3>

        <div style={styles.item}>
          <span>🤝</span>
          <p><strong>Intimidad:</strong> Relación cercana (koinonía)</p>
        </div>

        <div style={styles.item}>
          <span>👑</span>
          <p><strong>Identidad:</strong> Hijo de Dios por Cristo</p>
        </div>

        <div style={styles.item}>
          <span>📖</span>
          <p><strong>Cultivo diario:</strong> Oración y Palabra</p>
        </div>

        <div style={styles.item}>
          <span>🕊️</span>
          <p><strong>Gracia:</strong> Descansar en su amor</p>
        </div>

        <div style={styles.item}>
          <span>🔥</span>
          <p><strong>Trinidad:</strong> Padre, Hijo y Espíritu Santo</p>
        </div>
      </div>

     {/* DERECHA */} 
<div style={styles.comunionCard}>
  <h3>🔥 Cómo fortalecerla</h3>

  <div style={styles.item}>
    <span>🙏</span>
    <p><strong>Orar:</strong> Hablar con Dios constantemente</p>
  </div>

  <div style={styles.item}>
    <span>📜</span>
    <p><strong>Meditar:</strong> Conocer su voluntad</p>
  </div>

  <div style={styles.item}>
    <span>🎶</span>
    <p><strong>Adorar:</strong> Rendirse y agradecer</p>
  </div>

  <div style={styles.item}>
    <span>⏳</span>
    <p><strong>Perseverar:</strong> Buscarlo cada día</p>
  </div>

  {/* 🔥 NUEVA SECCIÓN */}
  <div style={styles.guiaContainer}>
    <h4 style={styles.guiaTitle}>
      📖 Guía de estudio para leer la biblia
    </h4>

   <button 
  style={styles.guiaBtn}
  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    onClick={() => navigate("/guia-biblia")}>
  Guía
</button>
  </div>
</div>
    </div>

    {/* FRASE FINAL */}
    <div style={styles.comunionFinal}>
      Esta relación transforma tu mente, tu corazón y tu vida…
      <br />
      <span style={{color:"gold"}}>y te guía con paz y propósito eterno.</span>
    </div>

  </div>
</section>
      <style>{`
        .hover {transition: all .3s}
        .hover:hover {transform: translateY(-10px) scale(1.03)}

        .glow {
          animation: glow 2s infinite alternate;
        }

        @keyframes glow {
          from {text-shadow: 0 0 10px gold}
          to {text-shadow: 0 0 35px orange}
        }
      `}</style>
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
  background: "radial-gradient(circle at top, #0f172a, #020617)",
  color:"white",
  fontFamily: "system-ui",
  minHeight:"100vh"
},
 hero: {
  height: "340px",
  backgroundImage: "url('https://www.juventudonline.com/wp-content/uploads/2017/07/comunion2.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position:"relative"
},

  overlay: {
  height: "100%",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(2,6,23,0.95))",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter:"blur(4px)"
},

  title: {fontSize: "42px", fontWeight: "700"},
  subtitle: {opacity: 0.85},

  section: {padding: "60px 20px", maxWidth: "1100px", margin: "auto"},

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px"
  },

  imageCard: {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
  },

  image: {width: "100%", height: "200px", objectFit: "cover"},

  centerTitle: {textAlign: "center", marginBottom: "25px"},

  /* EUCARISTIA PRO */
  eucaristiaGrid:{
  display:"grid",
  gridTemplateColumns:"1fr 1fr",
  gap:"50px",
  padding:"100px 20px",
  alignItems:"start" // 🔥 ya no fuerza alturas raras
},

 leftBox:{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center", // 🔥 alinea con el texto
 // height:"100%" // 🔥 mismo alto que la derecha
},

 bigImage:{
  width:"320px",
  borderRadius:"20px",
  transition:"0.6s",
},

  leftText:{marginTop:"20px", textAlign:"center"},

rightBox:{
  background:"linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
  padding:"30px",
  borderRadius:"20px",
  backdropFilter:"blur(16px)",
  boxShadow:"0 30px 80px rgba(0,0,0,0.6)",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignSelf:"start",
  maxWidth:"520px",
  lineHeight:"1.8",
  border:"1px solid rgba(255,255,255,0.08)"
},

  quote:{color:"gold", marginTop:"10px"},

  /* CARDS PRO */
  cardPro:{
  background:"linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
  padding:"30px",
  borderRadius:"18px",
  cursor:"pointer",
  backdropFilter:"blur(14px)",
  border:"1px solid rgba(255,255,255,0.08)",
  transition:"all 0.4s ease",
  position:"relative",
  overflow:"hidden"
},

  /* MODAL */
  modalOverlay:{
    position:"fixed",
    top:0,left:0,right:0,bottom:0,
    background:"rgba(0,0,0,0.8)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:999
  },

 modal:{
  background:"linear-gradient(145deg, #0f172a, #020617)",
  padding:"35px",
  borderRadius:"20px",
  maxWidth:"600px",
  width:"90%",
  boxShadow:"0 40px 100px rgba(0,0,0,0.9)",
  border:"1px solid rgba(255,255,255,0.1)",
  position:"relative",
  overflow:"hidden"
},

  button:{
    marginTop:"1px",
    padding:"4px 14px",
    borderRadius:"10px",
    border:"none",
    background:"orange",
    cursor:"pointer",
    fontWeight:"bold"
  },

  //Seccion Comunion
    comunionPremium:{
  marginTop:"30px",
  display:"flex",
  flexDirection:"column",
  gap:"30px"
},

comunionIntro:{
  textAlign:"center",
  maxWidth:"700px",
  margin:"auto"
},

gradientText:{
  fontSize:"24px",
  background:"linear-gradient(90deg,gold,orange)",
  WebkitBackgroundClip:"text",
  color:"transparent",
  fontWeight:"bold"
},

comunionText:{
  marginTop:"10px",
  opacity:0.85,
  lineHeight:"1.7"
},

comunionGrid:{
  display:"grid",
  gridTemplateColumns:"1fr 1fr",
  gap:"25px"
},

comunionCard:{
  background:"linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
  padding:"25px",
  borderRadius:"20px",
  backdropFilter:"blur(14px)",
  boxShadow:"0 25px 70px rgba(0,0,0,0.5)",
  border:"1px solid rgba(255,255,255,0.08)",
  transition:"0.4s"
},

item:{
  display:"flex",
  alignItems:"center",
  gap:"12px",
  marginTop:"15px"
},

comunionFinal:{
  textAlign:"center",
  marginTop:"10px",
  fontSize:"18px",
  fontWeight:"500",
  opacity:0.9
},
//Estilos boton guia
guiaContainer: {
  marginTop: "25px",
  paddingTop: "15px",
  borderTop: "1px solid rgba(255,255,255,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px"
},

guiaTitle: {
  fontSize: "15px",
  textAlign: "center",
  color: "#e2e8f0"
},

guiaBtn: {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #6366f1, #a78bfa)",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
  boxShadow: "0 10px 20px rgba(99,102,241,0.4)"
},

//Estilo de imagenes
imageCardHover: {
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  transition: "0.4s"
},

imageOverlay: {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "15px",
  background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
  color: "white",
  fontSize: "14px",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "0.4s"
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
