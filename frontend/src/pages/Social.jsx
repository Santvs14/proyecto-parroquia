import PageLayout from "../components/PageLayout"
import Card from "../components/Card"

const Social = () => {
  return (
    <PageLayout 
      title="Pastoral Social"
      subtitle="Servicio a los más necesitados 🤝"
    >
      <Card title="Ayuda Social" desc="Apoyo a familias vulnerables." />
      <Card title="Donaciones" desc="Programas solidarios." />
    </PageLayout>
  )
}

export default Social