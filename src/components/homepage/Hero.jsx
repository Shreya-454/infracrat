import React from 'react'
import Header from '../common/Header'
import hero from "../../assets/images/webp/home-hero.webp"

const Hero = () => {
  return (
    <div>
      <Header heading="Digital infrastructure for modern politics"
      headerClass="min-h-screen bg-small"
      img={hero}
      contentWidth="custom-3xl:w-[53%] lg:w-7/12 w-full"
      imgWidth="custom-3xl:w-[47%] lg:w-5/12 w-full"
      imgClass="custom-3xl:max-w-[570.09px] w-full max-w-[500px] custom-3xl:translate-x-[39px]"
      headClass="sm:mb-5 mb-4 max-w-[597px] !leading-120 "
      paraClass="md:mb-10 mb-[30px] max-w-[561px]" 
btntext="Start your free trial"
btn="mb-[50px]"
      headPara="Everything you need to launch and manage your political website, without the complexity. Built for organizers, not tech experts."/>
    </div>
  )
}

export default Hero
