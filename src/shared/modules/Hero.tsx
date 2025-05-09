"use client";
import React from "react";
import Apex from "@/assets/partners/Apex";
import FixMyphone from "@/assets/partners/Fixmyphone";
import Verdant from "@/assets/partners/Verdant";
import Duet from "@/assets/partners/Duet";
import LindHolmes from "@/assets/partners/LindHolmes";
import Button from "../components/Button";
import PartnersSlider from "../components/PartnersSlider";

export default function Hero() {
  const HeroDetails = {
    title: `We Shape Your Ideas Into  Awesome Digital  Experience`,
    subtitle: "Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.",
    partners: [
      {
        id: 1,
        icon: FixMyphone,
      },
      {
        id: 2,
        icon: Verdant,
      },
      {
        id: 3,
        icon: Duet,
      },
      {
        id: 4,
        icon: Apex,
      },
      {
        id: 5,
        icon: LindHolmes,
      },
    ],
    link: "Book a call with us",
  };

  return (
    <div className="  h-[420px]  max-[400px]:h-[420px] max-[470px]:h-[480px] max-[570px]:h-[450px]  max-[585px]:h-[480px] max-[600px]:h-[500px]   max-[620px]:h-[500px]    sm:h-[600px] overflow-hidden md:h-[680px] lg:h-[870px] relative ">
      <div className="  Herocontainer h-[870px] bg-white text-center flex items-end justify-center    relative ">
        {/* Introduction content */}
        <div className="title  w-full  min-[418px]:w-[90%] sm:w-[90%] md:w-[740px]  absolute top-32 min-[375px]:top-34.5   sm:top-48  flex flex-col items-center  ">
          <h1 className="  text-3xl  min-[400px]:text-[40px]  min-[590px]:text-[44px] sm:text-[54px]  md:text-[64px] text-graident font-[700] leading-[120%] ">
            {HeroDetails.title}
          </h1>
          <p className=" text-hero-subtitle px-5 sm:px-0  mt-3 sm:mt-5 md:mt-8  text-xs min-[590px]:text-sm sm:text-base  lg:mt-10 ">
            {HeroDetails.subtitle}
          </p>
          <Button
            className={`  sm:w-[231px]  mt-4 sm:mt-5 md:mt-8   lg:mt-10   `}
          >
            {HeroDetails.link}
          </Button>
        </div>
      </div>

      {/* Partners container  */}
<PartnersSlider HeroDetails={HeroDetails}/>
    </div>
  );
}
