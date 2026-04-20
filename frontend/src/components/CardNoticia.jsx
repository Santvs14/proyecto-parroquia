
const CardNoticia = ({ titulo, contenido, imagen, fecha }) => {
  return (
    <div style={styles.card}>
      <img src={imagen} alt={titulo} style={styles.image} />

      <div style={styles.content}>
        <h3>{titulo}</h3>
        <p>{contenido}</p>
        <span style={styles.fecha}>📅 Publicado el {fecha}</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
    margin: "10px",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  
    fecha: {
  display: "block",
  textAlign: "right",
  fontSize: "11px",
  color: "#bbb",
  marginTop: "15px"

  },
};

export default CardNoticia;