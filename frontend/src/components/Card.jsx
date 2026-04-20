import { motion } from "framer-motion"

const Card = ({ title, desc }) => {
  return (
    <motion.div 
      style={styles.card}
      whileHover={{ scale: 1.05 }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  )
}

const styles = {
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    transition: "0.3s"
  }
}

export default Card