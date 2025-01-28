import React from 'react'
import Hero from '../components/homepage/Hero'
import HowItWorks from '../components/homepage/HowItWorks'
import Features from '../components/homepage/Features'
import Pricing from '../components/homepage/Pricing'
import Trust from '../components/homepage/Trust'
import Coutries from '../components/homepage/Coutries'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <Features/>
      <Pricing/>
      <Trust/>
      <Coutries/>
    </div>
  )
}

export default Home
