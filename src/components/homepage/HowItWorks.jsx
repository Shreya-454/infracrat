import React from 'react'
import CommonHeading from '../custom-ui/CommonHeading'
import Paragraph from '../custom-ui/Paragraph'
import Icons from '../common/Icons'
import { WORK_CARDS_LIST } from '../../utils/helper'
import firstCurve from "../../assets/images/svg/how-1st-line.svg"
import secondCurve from "../../assets/images/svg/how-2nd-line.svg"

const HowItWorks = () => {
    return (
        <div className='pt-[26px] md:pb-[120px] sm:pb-24 pb-20'>
            <div className="container max-w-[1188px] mx-auto px-6">
                <CommonHeading className='sm:mb-4 mb-3.5'>How It Works</CommonHeading>
                <Paragraph center className='sm:mb-10 mb-[50px]'>Get your political campaign website up and running in three simple steps</Paragraph>
                <div className="flex flex-row flex-wrap lg:px-[19px] relative z-10">
                    <img src={firstCurve} alt="firstline" className='absolute left-[26%] custom-lg:left-1/4 top-[21%] custom-lg:w-[199px] w-[161px] max-lg:hidden' />
                    <img src={secondCurve} alt="secondcurve" className='absolute custom-lg:right-[24%] right-[26%] top-[13%] custom-lg:w-[195px] w-[165px] max-lg:hidden ' />
                    {WORK_CARDS_LIST.map((data, index) => (
                        <div key={index} className={`lg:w-1/3 justify-center lg:justify-start w-full flex ${index === 1 && "lg:justify-center pt-10 lg:pt-[45px] md:w-1/2"} ${index === 2 && "lg:justify-end md:w-1/2 max-lg:pt-10"} `}>
                            <div className={`md:max-w-[332px] sm:max-w-[470px] max-w-[326.63px] w-full group flex md:flex-col items-start max-md:gap-[17px] relative z-10 md:after:hidden ${index === 0 && "relative after:content-[url(./assets/images/svg/dash-line2.svg)] z-10 after:-z-10 sm:after:content-[url(./assets/images/svg/dashed-line1.svg)] after:absolute after:left-[36.315px] max-sm:after:h-[187px] sm:after:top-[52%] after:top-[44%]"} ${index === 1 && "relative after:content-[url(./assets/images/svg/dashed-line2.svg)] z-10 after:-z-10  sm:after:content-[url(./assets/images/svg/dashed-line1.svg)] after:absolute after:left-[36.315px] sm:after:h-[105px] after:h-[161px] after:top-[52%]"}`}>
                                <span className='max-md:bg-white w-full'>
                                    <Icons icon={data.icon} className='md:mx-auto md:max-w-[146px] md:size-[146px] max-w-[72.63px] md:h-[146px] h-[72.63px]  w-full' />
                                </span>
                                <div className='md:mt-10'>
                                    <h4 className='md:text-2xl text-lg font-bold font-open-sans md:text-center !leading-120 tracking-xxs text-off-black mb-4 md:mb-2.5'>{data.title}</h4>
                                    <Paragraph center className={`${index === 0 && "md:max-w-[298px]"} max-md:text-start`}>{data.content}</Paragraph>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
