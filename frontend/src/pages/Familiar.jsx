import PageLayout from "../components/PageLayout"
import Card from "../components/Card"

const Familiar = () => {
  return (
    <PageLayout 
      title="Pastoral Familiar"
      subtitle="Fortaleciendo familias en Cristo 💙"
    >
      <Card title="Matrimonio" desc="Acompañamiento espiritual." />
      <Card title="Crianza" desc="Educación cristiana." />
      <Card title="Consejería" desc="Orientación familiar." />
    </PageLayout>
  )
}

export default Familiar