import Featuredblur from '@/assets/Bgs/FAQS/FeaturedBlur'
import Linkicn from '@/assets/icons/Linkicn'
import React from 'react'

type FaqType = {
  id: number;
  question: string;
  answer?: string; 
};

interface FAQCardProps {
  faq: FaqType;
}
export default function FAQcard({ faq }: FAQCardProps) {
  return (
        <div
            key={faq.id}
            className=" p-[24px]  bg-translucent-black flex justify-between  max-[450px]:w-[98%] mx-auto min-[450px]:w-[80vw] min-[1200px]:w-[1140px] items-center rounded-[8px] overflow-hidden h-[70px] sm:h-[80px]  md:h-[88px] relative "
          >
            <Featuredblur className="  w-[169px] absolute left-0   h-full" />

            <div className="flex items-center justify-center  gap-1 sm:gap-[6px]  ">
              <p className=" Number-Graident  text-[18px] sm:text-[20px] md:text-[24px] font-[700] leading-[150%]">
                0{faq.id + 1}
              </p>
              <p className=" text-xs sm:text-sm md:text-base lg:text-lg    font-[600]">
                {faq.question}
              </p>
            </div>
            <Linkicn
              className="
       w-[30px] sm:w-[35px]  md:w-[40px]  py-0.5 "
            />
            {/* <p className="text-t-gray">{faq.answer}</p> */}
          </div>
  )
}
