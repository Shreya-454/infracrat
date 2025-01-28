import React, { useState } from 'react';
import CommonHeading from '../custom-ui/CommonHeading';
import Paragraph from '../custom-ui/Paragraph';
import Icons from '../common/Icons';
import { TRUST_TAB_LIST } from '../../utils/helper';

const Trust = () => {
  // State to manage the active tab index
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:py-[120px] md:py-[100px] py-20">
      <div className="container max-w-[1188px] mx-auto px-6">
        <div className="max-w-[1073px] mx-auto w-full">
          <CommonHeading className="mb-4">Trust & Security</CommonHeading>
          <Paragraph center className="max-w-[557px] mb-[60px]">
            Your campaign's integrity is our top priority. We provide robust security measures to protect your data and ensure compliance.
          </Paragraph>
          <div className="custom-md:flex gap-8 lg:gap-[57px] items-center shadow-pricing-box">
            {/* Tabs */}
            <div className="custom-md:max-w-[390px] max-custom-md:mb-10 w-full bg-blue bg-opacity-[6%] custom-md:h-[479px]">
              {TRUST_TAB_LIST.map((tab, i) => (
                <div
                  key={i}
                  className={`h-[112px] pl-5 lg:pl-9 flex border-l-4 items-center gap-4 cursor-pointer ${
                    activeTab === i ? 'bg-white  border-blue' : 'border-transparent'
                  }`}
                  onClick={() => setActiveTab(i)}
                >
                  <Icons icon={tab.icon} />
                  <p className="text-custom-xl font-red font-semibold leading-133 text-black">{tab.title}</p>
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full">
              <div className="flex flex-col gap-[27px]">
                {TRUST_TAB_LIST[activeTab].tabcontent.map((item,i)=>(
                     <div key={i} className="flex gap-[15px] items-center">
                     <Icons icon="star" />
                     <p className="text-xl !leading-160 text-black text-opacity-70 font-normal font-open-sans">
                       {item}
                     </p>
                   </div>
                ))}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
