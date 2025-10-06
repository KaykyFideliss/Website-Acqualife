import React from 'react'
import CarroselSistema from '../components/Sistema/CarroselSistema'
import HeroSistema from '../components/HeroSistema'
import Funcionamento from '../components/Sistema/Funcionamento'
import Components from '../components/Sistema/Components'
import Motivation from '../components/Sistema/Motivation'
import Footer from '../components/Footer'
const Sistema = () => {
  return (
    <div>
    <HeroSistema />  
    <CarroselSistema />
    <Funcionamento />
    <Components />
    <Motivation />
    <Footer />
    </div>
  )
}

export default Sistema
