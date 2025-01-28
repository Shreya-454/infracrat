import React from 'react'
import CommonHeading from '../custom-ui/CommonHeading'
import Paragraph from '../custom-ui/Paragraph'
import CommonButton from '../custom-ui/CommonButton'

const Impact = () => {
  return (
    <div className='sm:translate-y-[146px] translate-y-[194px] -mt-[194px] sm:-mt-[146px]'>
      <div className="container max-w-[1188px] px-6 mx-auto">
        <div className='max-w-[893px] mx-auto shadow-impact-box bg-impact bg-center bg-cover md:bg-full bg-no-repeat py-[34px] sm:py-10 md:py-[45px] rounded-2xl px-[17px]'>
<CommonHeading className='text-white mb-3.5'>Ready To Make An Impact?</CommonHeading>
<Paragraph center className='text-white max-w-[529px] mb-6 md:mb-[30px] !text-base'>Get started today and take your campaign to the next level with tools designed for change-makers like you.</Paragraph>
<div className='flex justify-center'>
  <CommonButton>Get Started</CommonButton>
</div>
        </div>
      </div>
    </div>
  )
}

export default Impact
