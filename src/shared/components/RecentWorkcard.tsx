import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Workbottmbg from '@/assets/Bgs/works/worksBg';
import Linkicn from '@/assets/icons/Linkicn';

interface WorkProps {
  work: {
    id?: number | string;
    coverImage: string | StaticImageData;
    name: string;
    service: string;
  };
  position?: 'top' | 'bottom';
}


const RecentWorkCard: React.FC<WorkProps> = ({ work, position = 'bottom' }) => {
  return (
    <>
      {position === 'top' && (
           <div className="flex-1 relative w-full h-full">
              <Image
                src={work.coverImage}
                alt={`Recent Work ${work.id}`}
                width={500}
                height={550}
                className=" w-[365px]   md:w-[554px] rounded-[16px] object-cover  z-20 "
              />

              <div className="details flex justify-between  items-center relative   p-[24px]">
                <Workbottmbg className=" absolute -translate-y-[80%] inset-0   max-[720px]:-translate-y-[70%] scale-105      w-full " />

                <div className="grid gap-[8px]">
                  <h1 className="name max-[850px]:!text-[20px] md:text-[28px]  lg:text-[32px] leading-[120%] font-[700]  ">
                    {work.name}
                  </h1>

                  <p className="    max-[850px]:!text-[14px]   md:text-[20px]   lg:text-[24px] leading-[120%] font-[400]  text-light-gray  z-20">
                    {work.service}
                  </p>
                </div>
                <Link
                  href="#"
                  className=" bg-gray-soft rounded-[56px] max-[850px]:!text-[15px]   md:text-[18px]   lg:text-[24px]  leading-[75%] font-[500]  font-DMSans border-translucent-white w-[91px]     md:w-[121px]  lg:w-[151px] items-center   h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px] border-[1px] backdrop-blur-[40px]  flex justify-center "
                >
                  Open
                  <Linkicn className=" w-[20px]  sm:w-[25px] md:w-[28px]  lg:w-[32px] " />
                </Link>
              </div>
            </div>
      )}



      {position === 'bottom' && (
      <div
            
              className="rounded-[16px] w-fit h-fit overflow-hidden  relative "
            >
             
              <Image
                src={work.coverImage}
                alt={`Recent Work ${work.id}`}
                width={500}
                height={550}
                className="w-[365px] rounded-[10.54px] h-auto object-cover"
              />
              <div className="details flex justify-between  items-center  relative   p-[24px]">
                 <Workbottmbg className=" absolute -translate-y-[50%]  max-[720px]:-translate-y-[50%]  left-0 w-full  scale-105    " />
                <div className=" grid gap-[8px]">
                  <h1 className="name text-[15px] lg:text-[20px] leading-[120%]   ">
                    {work.name}
                  </h1>

                  <p className="  text-[10px]  sm:text-[14px] leading-[120%] font-[400]  text-light-gray  z-20">
                    {work.service}
                  </p>
                </div>
                <Link
                  href="#"
                  className=" bg-gray-soft rounded-[56px] text-[16px] leading-[75%] font-[500]  font-DMSans border-translucent-white w-[97.89px] items-center h-[35.81px] border-[1px] backdrop-blur-[40px]  flex justify-center "
                >
                  Open
                  <Linkicn className=" w-[20px] " />
                </Link>
              </div>
            </div>
      )}
    </>
  );
};


export default RecentWorkCard;