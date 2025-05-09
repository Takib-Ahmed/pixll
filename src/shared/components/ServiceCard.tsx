import React from 'react'
import Link from 'next/link';
import Linkicn from '@/assets/icons/Linkicn';
interface Service {
  id: number | string;
  translate: number;
  des:string,
bgOverlay:string;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  bgblur: React.FC<React.SVGProps<SVGSVGElement>>;
  stars: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
           <div
            key={service.id}
            className={` ServiceCardContainer  w-fit rounded-[16px] overflow-hidden      `}
            style={{ transform: `translateY(${service.translate}px)` }}
          >
            <div
              className={` Inner-container  w-full   sm:w-[286px] h-[314px] rounded-[16px]  relative   grid   border-[1.6px]  overflow-hidden   p-6  z-20 `}
         
            style={{borderColor:service.bgOverlay}} >
              {/* coloredbg */}
              <div
                className={`  absolute  inset-0  opacity-20 top-0      `}
            style={{background:service.bgOverlay}}  
              ></div>
              {/* StairsBg */}
              <div className=" service-Card rounded-[16px]   absolute w-full -z-20 opacity-15   grid      p-6 h-[95%] lg:h-[90%]"></div>
              {/* Icon */}
              <div className=" mb-5 sm:mb-6 md:mb-8  lg:mb-10 z-20">
                <service.icon className="  scale-80   sm:scale-100" />
              </div>
              {/* link  */}
              <Link
                className=" flex justify-between z-20 items-center sm:items-start mb-5"
                href={"#"}
              >
                <h3 className="  text-[20px] lg:text-[24px] font-semibold ">
                  {service.title}
                </h3>
                <Linkicn className=" w-[30px]  md:w-[35px] lg:w-[40px] lg:h-[40px] scale-125" />
              </Link>
              {/* contents */}

              <p className="text-sm  z-20">
          {service.des}
              </p>

              {/* blurs */}
              <service.bgblur className="absolute  right-0 lg:left-[123.55px]  sm:w-[188.75999450683594px] sm:h-[234.8719940185547px] top-[-33.91px]   " />
              <service.bgblur className=" absolute  left-0 lg:left-[-29.2px]  sm:w-[241.06111992906435] sm:h-[194.90907423034812]  bottom-0 scale-[-1]         " />
              {/* stars */}
              <service.stars className=" absolute right-0 translate-x-1/3 sm:translate-x-1/4   w-full " />
              <service.stars className=" absolute -translate-x-1/3  left-0 sm:-translate-x-1/3 bottom-5  w-full  " />
            </div>
            <br />
          </div>
  )
}

export default ServiceCard;
