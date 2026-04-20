
const CardActividad = ({ titulo, descripcion, fecha, lugar }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{titulo}</h3>

      <p>{descripcion}</p>

      <div style={styles.info}>
        <span>📅 {fecha}</span>
        <span>📍 {lugar}</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f1f1f1",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    margin: "10px",
  },
  title: {
    marginBottom: "10px",
  },
  info: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    fontSize: "14px",
    color: "#555",
  },
};

export default CardActividad;