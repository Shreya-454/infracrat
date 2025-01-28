import React from 'react'
import NavBar from './NavBar'
import CommonButton from '../custom-ui/CommonButton'
const Header = ({headerClass,gap,tag,headClass,contentWidth,imgWidth,imgClass,heading,img,headPara,paraClass,btntext,btn,...props}) => {
  return (
    <div {...props}
     className={`${headerClass} sm:bg-hero bg-hero-sm sm:bg-full  flex flex-col lg:bg-center bg-top bg-no-repeat `}>
    <NavBar/>
    <div className='flex flex-grow items-center pt-[70px] lg:pt-0'>
        <div className="container max-w-[1188px] mx-auto px-6">
        <div className={`flex w-full items-center max-lg:flex-wrap ${gap}`}>
        <div className={` ${contentWidth} `}>
            <div className={`${tag} mb-2.5 max-w-[479px] text-xs sm:text-sm text-center mx-auto lg:mx-0 text-white font-open-sans backdrop-blur-[40px] rounded-full leading-160 font-normal py-2 sm:py-2.5 px-[17px] bg-white bg-opacity-5`}>
            Includes a campaign vetting compliant communication opt-in page
            </div>
            <h1 className={`xl:text-custom-6xl text-4xl sm:text-5xl lg:text-6xl ${headClass} font-zen text-white text-center lg:text-start mx-auto lg:mx-0 tracking-xxs capitalize !`}>{heading}</h1>
            <p className={`text-white text-center lg:text-start mx-auto lg:mx-0 font-open-sans text-base leading-160 text-opacity-70 ${paraClass}`}>{headPara}</p>
            <div className='flex justify-center lg:justify-start'>
              <CommonButton transparent className={`${btn}`}>{btntext}</CommonButton>
            </div>
        </div>
        <div className={` ${imgWidth} flex justify-center lg:justify-start`}>
            <img src={img} alt="hero-img" className={` ${imgClass}`} />
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Header
