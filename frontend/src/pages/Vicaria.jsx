import PageLayout from "../components/PageLayout"
import Card from "../components/Card"

const Vicaria = () => {
  return (
    <PageLayout 
      title="Vicaría"
      subtitle="Organización pastoral de la parroquia"
    >
      <Card title="Coordinación" desc="Gestión pastoral." />
      <Card title="Planificación" desc="Estrategias evangelizadoras." />
    </PageLayout>
  )
}

export default Vicaria