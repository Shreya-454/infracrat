import React from 'react'
import Header from '../common/Header'
import heroImg from "../../assets/images/webp/library-img.webp"

const Hero = () => {
  return (
    <div>
      <Header
      headerClass="lg:min-h-[621px] bg-library-small"
      heading="Component Library"
      headPara="A collection of reusable, pre-designed UI elements for consistent, efficient development."
      tag="hidden"
      img={heroImg}
      gap="xl:gap-[57px]"
    contentWidth="max-xl:w-5/12 max-lg:w-full md:mb-16 sm:14 mb-11 lg:mb-0"
    imgWidth="max-xl:w-7/12 max-lg:w-full"
      imgClass="xl:max-w-[705px] w-full max-w-[650px]"
      paraClass="max-w-[378px]"
      headClass="max-w-[328px] max-lg:pt-2.5 !text-custom-3xl sm:!text-5xl md:!text-6xl mb-4 sm:mb-3.5 !leading-130 sm:!leading-130 md:!leading-130"
      btn="hidden"
      />
    </div>
  )
}

export default Hero
