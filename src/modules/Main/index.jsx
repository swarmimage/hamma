import Header from '@/components/Header'
import Slider from '@/components/Slider'
import { Container } from '@chakra-ui/react'
import Catalog from '@/components/Catalog'
import React from 'react'
import Store from '@/components/Store'
import MaterialCard from '@/components/MaterialCard'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

const MainPage = () => {
  return (
    <Layout>
      <Slider/>
      <Catalog/>
      <Store/>
      <MaterialCard/>
      <Footer/>
    </Layout>
  )
}

export default MainPage
