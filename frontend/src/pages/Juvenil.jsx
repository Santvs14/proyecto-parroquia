import PageLayout from "../components/PageLayout"
import Card from "../components/Card"

const Juvenil = () => {
  return (
    <PageLayout 
      title="Pastoral Juvenil"
      subtitle="Jóvenes encendidos por Cristo 🔥"
    >
      <Card title="Encuentros" desc="Reuniones juveniles." />
      <Card title="Eventos" desc="Actividades espirituales." />
    </PageLayout>
  )
}

export default Juvenil