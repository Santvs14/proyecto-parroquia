import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [pastoralOpen, setPastoralOpen] = useState(false)

  // 🔥 nuevo estado para hover en submenus
  const [hoveredItem, setHoveredItem] = useState(null)

  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav style={styles.nav}>

      {/* LOGO */}
      <div style={styles.logoContainer}>
        <img 
          src="https://whjcbmywxubdzdgrhzak.supabase.co/storage/v1/object/sign/LogoParroNtraSraR/logoPaNtraSraR.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NDNiZmIwYi02YTNmLTQzOGEtOWRhMi00Njk0ZmQwYTJjMzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMb2dvUGFycm9OdHJhU3JhUi9sb2dvUGFOdHJhU3JhUi5wbmciLCJpYXQiOjE3NzQ2NzU3NzEsImV4cCI6MTg2OTI4Mzc3MX0.DTOn93ZOnSM5Bnm49r_rHAPqRV1qX59DZMjBxWRNsaM"
          alt="Logo Parroquia"
          style={styles.logoImg}
        />
      </div>

      {/* MENU */}
      <ul style={styles.menu}>

        <li>
          <Link to="/" style={isActive("/") ? styles.activeLink : styles.link}>
            Inicio
          </Link>
        </li>

        {/* 🔽 PASTORAL */}
        <li
          style={styles.dropdown}
          onMouseEnter={() => setPastoralOpen(true)}
          onMouseLeave={() => setPastoralOpen(false)}
        >
          <span style={styles.link}>
            Pastoral {pastoralOpen ? "▲" : "▼"}
          </span>

          <ul style={{
            ...styles.submenu,
            opacity: pastoralOpen ? 1 : 0,
            transform: pastoralOpen ? "translateY(0)" : "translateY(10px)",
            pointerEvents: pastoralOpen ? "auto" : "none"
          }}>

            {[
              { name: "familiar", label: "Pastoral Familiar", path: "/pastoral/familiar" },
              { name: "social", label: "Pastoral Social", path: "/pastoral/social" },
              { name: "juvenil", label: "Pastoral Juvenil", path: "/pastoral/juvenil" },
              { name: "vicaria", label: "Vicaría", path: "/pastoral/vicaria" }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    ...styles.subLink,
                    ...(hoveredItem === item.name && styles.subLinkHover)
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>
        </li>

        <li>
          <Link to="/servicios" style={isActive("/servicios") ? styles.activeLink : styles.link}>
            Servicios
          </Link>
        </li>

        <li>
          <Link to="/VidaDevocional" style={isActive("/VidaDevocional") ? styles.activeLink : styles.link}>
            Vida Devocional
          </Link>
        </li>

        <li>
          <Link to="/donaciones" style={isActive("/donaciones") ? styles.activeLink : styles.link}>
            Donaciones
          </Link>
        </li>

        <li>
          <Link to="/multimedia" style={isActive("/multimedia") ? styles.activeLink : styles.link}>
            Multimedia
          </Link>
        </li>

        {/* 🔽 FORMACIONES */}
        <li
          style={styles.dropdown}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span style={styles.link}>
            Formaciones {open ? "▲" : "▼"}
          </span>

          <ul style={{
            ...styles.submenu,
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(10px)",
            pointerEvents: open ? "auto" : "none"
          }}>

            {[
              { name: "primera", label: "Primera Comunión", path: "/primera-comunion" },
              { name: "confirmacion", label: "Confirmación", path: "/confirmacion" },
              { name: "prematrimonial", label: "Prematrimoniales", path: "/prematrimoniales" },
              { name: "lectores", label: "Lectores", path: "/lectores" },
              { name: "devocional", label: "Vida Devocional", path: "/vida-devocional" }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    ...styles.subLink,
                    ...(hoveredItem === item.name && styles.subLinkHover)
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>
        </li>

        <li>
          <Link 
            to="/MilagrosEucaristicos" 
            style={isActive("/MilagrosEucaristicos") ? styles.activeLink : styles.link}
          >
            Milagros Eucarísticos
          </Link>
        </li>

      </ul>
    </nav>
  )
}

const styles = {

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 30px",
    backdropFilter: "blur(15px)",
    background: "rgba(2, 6, 23, 0.8)",
    borderBottom: "1px solid rgba(255,255,255,0.05)"
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer"
  },

  logoImg: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))"
  },

  menu: {
    display: "flex",
    listStyle: "none",
    gap: "18px",
    alignItems: "center"
  },

  link: {
    color: "#cbd5f5",
    textDecoration: "none",
    fontSize: "14px",
    transition: "0.3s",
    cursor: "pointer"
  },

  activeLink: {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    borderBottom: "2px solid #6366f1",
    paddingBottom: "2px"
  },

  dropdown: {
    position: "relative",
    cursor: "pointer"
  },

  submenu: {
    position: "absolute",
    top: "120%",
    left: 0,
    background: "rgba(15, 23, 42, 0.95)",
    backdropFilter: "blur(15px)",
    listStyle: "none",
    padding: "10px",
    borderRadius: "12px",
    minWidth: "200px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
    transition: "all 0.25s ease"
  },

  subLink: {
    display: "block",
    padding: "10px",
    borderRadius: "8px",
    color: "#e2e8f0",
    textDecoration: "none",
    fontSize: "13px",
    transition: "all 0.25s ease"
  },

  // 🔥 EFECTO HOVER
  subLinkHover: {
    background: "rgba(99, 102, 241, 0.15)",
    color: "#fff",
    transform: "translateX(6px)",
    boxShadow: "0 0 12px rgba(99, 102, 241, 0.5)"
  }
}

export default Navbar