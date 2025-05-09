"use client"
import Logo from "@/assets/logo.svg";
import Menuicn from "@/assets/icons/Menuicn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const Navdetails = {
    Logo,
    navlinks: [
      {
        id: 1,
        name: "Work",
      },
      {
        id: 2,
        name: "About",
      },
      {
        id: 3,
        name: "Blog",
      },
      {
        id: 4,
        name: "Contract",
      },
    ],
    Menuicn,
  };
  const [Isopen,setIsopen] =  useState(false)
  return (
    <div className=" flex  w-full justify-center    ">
      <div
        className={` bg-translucent-black z-50   flex gap-[8px]  p-[16px] sm:p-[24px] 
       w-[90%]
      min-[1200px]:w-[1140px]   transition-all duration-300 ease-in overflow-hidden  h-[6%]  font-DMSans leading-[150%] border-[1px] border-translucent-white   fixed  top-[32px]
       ${Isopen ?' px-5 rounded-[50px]  backdrop-blur-[30px]  h-fit  flex-col  items-start justify-start ':" rounded-[80px] h-[6%] min-[375px]:h-[60px] min-[555px]:h-[70px] sm:h-[100px] backdrop-blur-[30px] items-center justify-between  "}
       `}
      >
        <Link href="/">
          <Image
            width={10000}
            height={10000}
            src={Navdetails.Logo}
            alt=""
            className={`  z-50  w-5 min-[375px]:w-8 sm:w-10 md:w-[38.49px]  lg:h-[36px]  left-[-1px]  top-[2px] ${
              Isopen&&  '  mt-5 '
            }`}
          />
        </Link>
     

         <ul className={`${Isopen ? "grid  items-start       py-10    w-full  justify-start gap-[8vw]  sm:gap-10   ":'flex items-center   h-[32px]    justify-between  w-[360px]'}`}>
          {Navdetails.navlinks.map((link) => (
            <li key={link.id}>
              
              <Link href="#" className={Isopen?"text-xs min-[350px]:text-[12px] lg:text-[16px]  sm:block  ":"text-[16px] hidden sm:block  "}>
                {link.name}
              </Link>
            </li>
          ))}
           <li onClick={()=>{ setIsopen((prev)=>!prev)}} className={` sm:hidden ${Isopen && 'absolute right-5 top-8'}   `}>
            <Link href="#" className=" text-[16px]  ">
              <Navdetails.Menuicn className=" w-[24px] min-[375px]:w-[28px] sm:w-[32px]" />
            </Link>
          </li>
        </ul>
        
 
    
      </div>
    </div>
  );
}
