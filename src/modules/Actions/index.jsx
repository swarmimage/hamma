import Actions from '@/components/Actions'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import { actionsItems } from '@/data/actionsData'

const Conduct = () => {
  return (
    <Layout>
      <Actions items={actionsItems}  title="Акции"/>
      <Footer/>
    </Layout>
  )
}

export default Conduct;

