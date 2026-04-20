import PageLayout from "../components/PageLayout"
import Card from "../components/Card"

const PrimeraComunion = () => {
  return (
    <PageLayout 
      title="Primera Comunión ✝️"
      subtitle="Encuentro con Jesús en la Eucaristía"
    >
      <Card title="Catequesis" desc="Formación doctrinal." />
      <Card title="Preparación" desc="Vida espiritual." />
    </PageLayout>
  )
}

export default PrimeraComunion