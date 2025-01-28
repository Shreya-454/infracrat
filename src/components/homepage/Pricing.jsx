import React from 'react'
import CommonHeading from '../custom-ui/CommonHeading'
import Paragraph from '../custom-ui/Paragraph'
import Icons from '../common/Icons'
import CommonButton from '../custom-ui/CommonButton'
import { DOMAIN_CARD_LIST, DOMAIN_DATA_LIST, PRICING_CARD_LIST } from '../../utils/helper'

const Pricing = () => {
    return (
        <div id='pricing' className='bg-pricing bg-off-white bg-full bg-center bg-no-repeat md:py-20 py-[60px] lg:py-[100px]'>
            <div className="container max-w-[1134px] mx-auto px-6">
                <CommonHeading className='mb-4'>Clear & Honest Pricing</CommonHeading>
                <Paragraph center className='max-w-[470px] mb-[50px]'>Choose the plan that fits your campaign needs. No hidden fees, no surprises.</Paragraph>
                <div className="grid custom-lg:grid-cols-2 grid-cols-1 gap-[30px] sm:mb-[100px] mb-20 lg:mb-[140px]">
                    {PRICING_CARD_LIST.map((item, i) => (
                        <div className={`w-full  sm:max-w-[528px] mx-auto ${i === 0 ? "bg-blue text-white p-[30px]" : "bg-white text-off-black px-[30px] pb-[26px] pt-[30px]"} rounded-[15px] shadow-pricing-box  sm:p-[26px]`}>
                            <div className="sm:flex mb-[30px] sm:mb-8 items-center">
                                <div className={`sm:w-[41%] max-sm:border-b sm:border-r ${i === 0 ? "border-white" : "border-off-black"} border-opacity-10 max-sm:pb-6`}>
                                    <div className='max-sm:flex justify-between items-center max-sm:mb-3.5'>
                                        <div className={`w-fit py-[9px] px-[18px] border ${i === 0 ? "border-white" : "border-off-black"} rounded-full sm:mb-4`}>
                                            <p className='sm:text-base text-sm !leading-136 font-semibold font-open-sans '>{item.tag}</p>
                                        </div>
                                        <p className={`lg:text-custom-52xl sm:text-4xl text-3xl font-semibold font-open-sans !leading-136 sm:mb-4 ${i === 0 ? "text-white" : "text-blue"}`}>$ {item.price}<sub className={`text-xl text-off-black ${i === 0 && "hidden"} font-normal`}>/month</sub></p>
                                    </div>
                                    <Paragraph className={`${i === 0 ? "text-white" : "text-off-black"}`}>{item.timing}</Paragraph>
                                </div>
                                <div className="sm:w-[59%] sm:max-w-[282px] pt-5 sm:pl-5">
                                    <div className="flex flex-col gap-[18px]">

                                        {item.features.map((obj, index) => (
                                            <div className="flex gap-3.5 items-center">
                                                {
                                                    i === 0 ? (<Icons icon="whiteCheck" className='max-w-[18.5px] h-[17px] w-full' />) : (
                                                        <Icons icon="blackCheck" className='max-w-[18.5px] h-[17px] w-full' />
                                                    )
                                                }
                                                <p className={`${i === 0 ? "text-white" : "text-off-black"} text-opacity-100 text-base !leading-136 font-open-sans font-normal`}>{obj.para} <span className='text-xs'>{obj.email}</span></p>
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <CommonButton className={`w-full py-4 !leading-136 ${i === 1 && "!bg-off-black text-white hover:!bg-transparent !border-off-black hover:border-off-black hover:!text-off-black"}`}>{item.btnText}</CommonButton>
                        </div>
                    ))}

                </div>
                <CommonHeading className='mb-4'>Find Your Perfect Domain</CommonHeading>
                <Paragraph center className='mb-10'>Your journey to building a remarkable online presence starts here.</Paragraph>
                <div className='max-w-[466px] w-full border border-blue  border-opacity-20 mx-auto rounded-full bg-white py-[11px] px-6 flex gap-4 items-center justify-between mb-[50px]'>
                    <input type="text" className='w-full text-base !leading-160 text-off-black  placeholder:text-opacity-70 focus:outline-none font-open-sans' placeholder='Search here.....' />
                    <Icons icon="searchIcon" />
                </div>
                <div className="max-w-[765px] w-full mx-auto rounded-[15px] bg-off-white  overflow-hidden">
                    <div className=' bg-blue border rounded-t-[15px] border-black border-opacity-10'>
                        <div className="flex">
                            {
                                DOMAIN_CARD_LIST.map((item, i) => (
                                    <div key={i} className={`py-6 w-full flex justify-center items-center max-w-[185px] ${i < 3 && " border-r border-white border-opacity-[8%]"} ${i === 0 && "max-w-[228px]"} ${i === 3 && " !max-w-[165px]"} `}>
                                        <p className='text-white md:text-xl !leading-120 font-semibold font-open-sans tracking-xxs text-center '>{item}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                   
                    {DOMAIN_DATA_LIST.map((obj,index) => (
                                <div key={index} className={`flex border border-black border-opacity-[8%] border-t-0  ${ index === 2 && "rounded-b-[15px]"}`}>
                                    <div  className={`py-6 w-full flex justify-center items-center max-w-[228px] border-r border-black border-opacity-[8%]`}>
                                    <p className='text-off-black text-sm !leading-136 font-semibold font-open-sans tracking-xxs text-center break-all '>{obj.name}</p>
                                                                </div>
                                                                <div  className={`py-6 w-full flex justify-center items-center max-w-[185px] border-r border-black border-opacity-[8%]`}>
                                    <p className='text-off-black text-sm !leading-136 font-semibold font-open-sans tracking-xxs text-center '>{obj.status}</p>
                                                                </div>
                                                                <div  className={`py-6 w-full flex justify-center items-center max-w-[185px] border-r border-black border-opacity-[8%]`}>
                                    <p className='text-off-black text-sm !leading-136 font-semibold font-open-sans tracking-xxs text-center '>{obj.price}</p>
                                                                </div>
                                                                <div  className={`py-6 w-full flex justify-center items-center max-w-[165px] ${ index === 2 && "rounded-br-[15px]"} `}>
                                    <a href='#' className='text-blue underline text-sm !leading-136 font-semibold font-open-sans tracking-xxs text-center '>{obj.action}</a>
                                                                </div>
                                </div>
                    ))}
                  
                </div>
            </div>
        </div>
    )
}

export default Pricing
