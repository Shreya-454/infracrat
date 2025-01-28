import React from 'react'
import logo from "../../assets/images/svg/footer-logo.svg"
import Paragraph from '../custom-ui/Paragraph'
import Icons from './Icons'
import { FOOTER_LINK_LIST, SOCIAL_LINK__LIST } from '../../utils/helper'

const Footer = () => {
    return (
        <div className='bg-off-black bg-footer bg-cover bg-center bg-no-repeat pt-[258px] sm:pt-[229px]'>
            <div className="container max-w-[1188px] mx-auto px-6 pb-[90px]">
                <div className="flex flex-row flex-wrap">
                    <div className="md:w-1/2 w-full max-md:mb-10 max-sm:mb-12">
                        <img src={logo} alt="footer-logo" className='mb-5 sm:max-w-[282.65px] sm:h-[52px] max-w-[224px] h-[41px]' />
                        <Paragraph className='text-white md:max-w-[316px] mb-[18px] sm:mb-[30px]'>Empowering organizers with the digital tools to drive change. Let’s build something great together.</Paragraph>
                        <div className="flex gap-3">
                            {
                                SOCIAL_LINK__LIST.map((link, i) => (
                                    <a href={link.url} key={i}>
                                        <div className='w-[38.02px] hover:scale-110 duration-300 h-[38.02px] rounded-full border border-white flex justify-center items-center'>
                                            <Icons icon={link.icon} />
                                        </div>
                                    </a>
                                ))
                            }

                        </div>
                    </div>
                    <div className="md:w-1/2 w-full flex md:justify-end">
                        <div className="md:max-w-[438px] w-full flex justify-between lg:gap-[100px]">
{FOOTER_LINK_LIST.map((link,i)=>(
    <ul className='text-white font-open-sans '>
        <li className='sm:text-xl text-base font-semibold !leading-136 mb-5'>{link.title}</li>
        {(link.list).map((obj,index)=>(
            <li className={` text-opacity-70 !leading-136 text-sm hover:text-opacity-100 duration-300 sm:text-base text-white  ${index === link.list.length - 1 ? 'mb-0' : 'mb-4'}`}><a href={obj.url} className='flex gap-[15px] text-opacity-70 items-center relative after:absolute after:h-[1.5px] after:rounded-lg after:left-0 after:right-full w-fit after:-bottom-0.5 hover:text-opacity-100 after:bg-white hover:after:right-0 after:duration-300'>
                <Icons icon={obj.icon}/> 
                {obj.link}
              
                </a></li>
        ))}
        
    </ul>
))}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[1px] w-full bg-foot-line'></div>
            <Paragraph center className='py-[22px] text-white'>© {new Date().getFullYear()} Infracrat. All rights reserved.</Paragraph>
        </div>
    )
}

export default Footer
