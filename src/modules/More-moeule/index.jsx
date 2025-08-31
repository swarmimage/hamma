  import News from '@/components/Actions'
  import Footer from '@/components/Footer'
  import Layout from '@/components/Layout'
  import React from 'react'
  import { newsItems } from '@/data/newsData'

  const Newsmodule = () => {
    return (
        <Layout>
          <News items={newsItems}  title="Новости"/>
        <Footer/>
      </Layout>
    )
  }

  export default Newsmodule

