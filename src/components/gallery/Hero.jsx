import React from 'react'
import Header from '../common/Header'
import galleryImg from "../../assets/images/webp/gallery-hero.webp"

const Hero = () => {
  return (
    <div>
      <div>
      <Header
      headerClass="lg:min-h-[621px] bg-library-small"
      heading="Templates Gallery"
      headPara="A Templates Gallery showcases pre-designed layouts or blueprints for websites, apps, or projects, enabling quick customization."
      tag="hidden"
      img={galleryImg}
    //   gap="xl:gap-[57px]"
    contentWidth=" lg:w-1/2 w-full md:mb-16 sm:14 mb-11 lg:mb-0"
    imgWidth="lg:w-1/2 w-full "
      imgClass="xl:max-w-[522.8px] w-full max-w-[450px] "
      paraClass="max-w-[407px]"
      headClass="max-w-[328px] max-lg:pt-2.5 !text-custom-3xl sm:!text-5xl md:!text-6xl mb-4 sm:mb-3.5 !leading-130 sm:!leading-130 md:!leading-130"
      btn="hidden"
      />
    </div>
    </div>
  )
}

export default Hero
