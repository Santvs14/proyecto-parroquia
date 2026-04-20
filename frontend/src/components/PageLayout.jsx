import { motion } from "framer-motion"

const PageLayout = ({ title, subtitle, children }) => {
  return (
    <div style={styles.container}>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 style={styles.title}>{title}</h1>
        <p style={styles.subtitle}>{subtitle}</p>
      </motion.div>

      <div style={styles.content}>
        {children}
      </div>

    </div>
  )
}

const styles = {
  container: {
    padding: "60px",
    minHeight: "100vh",
    color: "#fff",
    background: "linear-gradient(135deg, #020617, #0f172a)"
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "40px"
  },
  content: {
    display: "grid",
    gap: "20px"
  }
}

export default PageLayout