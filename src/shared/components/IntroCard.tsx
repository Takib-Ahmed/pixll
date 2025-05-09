import Recentbg from '@/assets/Bgs/works/Recentsbg'
import React from 'react'

type IntroCardProps = {
  Data: {
    title: string;
    subtitle: string;
  };
};

export default function IntroCard({ Data }: IntroCardProps) {
  return (
  <div className=" w-full   md:w-[812.0509033203125px]  h-[280px] md:h-[250px]   lg:h-[303.9018859863281px] relative text-center flex  justify-center items-center ">
        <Recentbg className="   inset-0 absolute  -z-10   w-full    md:w-auto" />
        <div className=" flex flex-col  justify-center items-center sm:mt-5 md:mt-10 ">
          <h1 className="  max-[400px]:text-[25px] text-[30px]  min-[590px]:text-[35px] sm:text-[40px] md:text-[45px]  lg:text-[48px]  font-[700]  ">
            {Data.title}
          </h1>
          <p className=" max-[400px]:text-[10px] text-[12px] md:text-[15px]  lg:text-[20px] font-[400]   lg:w-[372px]  ">
            {Data.subtitle}
          </p>
        </div>
      </div>
  )
}
