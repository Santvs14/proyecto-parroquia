import PageLayout from "../components/PageLayout"
import Card from "../components/Card"

const Lectores = () => {
  return (
    <PageLayout 
      title="Curso de Lectores 📖"
      subtitle="Proclamando la Palabra"
    >
      <Card title="Lectura" desc="Interpretación bíblica." />
      <Card title="Liturgia" desc="Participación en misa." />
    </PageLayout>
  )
}

export default Lectores