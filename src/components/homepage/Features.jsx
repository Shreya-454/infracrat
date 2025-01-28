import React from 'react'
import CommonHeading from '../custom-ui/CommonHeading'
import Paragraph from '../custom-ui/Paragraph'
import { FEATURES_DATA_LIST } from '../../utils/helper'
import Icons from '../common/Icons'


const Features = () => {
  return (
    <div id='features' className='md:pt-4 sm:pt-10 pt-[60px] md:pb-[120px] pb-20'>
      <div className="container max-w-[1188px] mx-auto px-6 sm:pb-12 pb-[60px]">
        <CommonHeading className='sm:mb-4 mb-2.5'>Features</CommonHeading>
        <Paragraph center className='md:mb-[70px] mb-[60px]'>Core Technology</Paragraph>
        <div className='flex flex-col gap-20 lg:gap-5 relative after:absolute  after:w-[1px] after:bg-blue after:bg-opacity-[18%] after:top-10 after:left-[21px] sm:after:left-[65px] custom-md:after:left-20 lg:after:left-1/2 after:bottom-[29.5%] sm:after:bottom-[30%] lg:after:bottom-[28%]'>
          {FEATURES_DATA_LIST.map((data, i) => (
            <div key={i} className={`flex flex-row max-lg:gap-10 flex-wrap items-center  relative ${i === 1 && "lg:flex-row-reverse"}`}>
              <span className={`bg-white z-10 absolute top-0 -left-0 sm:left-[6.2%] lg:left-[48.2%] ${i === 1 && "lg:top-[19%]"} ${i=== 2 && "lg:top-[10%]"}`}>
                <Icons icon="featuresCircle" className=''/>
              </span>
              <div className={`lg:w-1/2 w-full lg:pl-[18px] max-sm:pl-[41px] flex lg:justify-start justify-center ${i === 1 && "pl-0  lg:justify-end"}`}>
                <img src={data.img} alt="apiImg" className={`sm:max-w-[417px] max-w-[248.91px] max-h-[216.07px] sm:max-h-[355.5px] w-full ${i === 1 && "sm:max-w-[508px] max-w-[281px] sm:max-h-[508px] max-h-[262px]"} ${i===2 && "sm:max-w-[449px] max-w-[276px] sm:max-h-[449px] max-h-[259px]"}`} />
              </div>
              <div className={`lg:w-1/2 w-full max-sm:pl-[41px] flex justify-center ${i ===1 && "lg:justify-start"}`} >
                <div className={`max-w-[351px] ${i === 1 && "lg:max-w-[490px]"} w-full`}>
                  <h3 className='md:text-custom-2xl sm:text-2xl text-xl font-bold !leading-120 tracking-xxs font-open-sans mb-5 md:mb-[30px]'>{i+1}. {data.title}</h3>
                  <div className='flex flex-col gap-[18px]'>
                    {data.list.map((item,index)=>(
                    <div key={index} className='flex gap-3 items-center'>
                    <div className='w-1 h-1 rounded-full bg-black opacity-70'></div>
                    <p className='text-base md:text-lg text-black font-open-sans !leading-136 md:!leading-153 text-opacity-70 capitalize'>{item}</p>
                  </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
