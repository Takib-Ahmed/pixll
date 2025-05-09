"use client";
import React from "react";
import Dashboard from "@/assets/images/services/Dashboard.png";
import Mobileview from "@/assets/images/services/Mobile View.png";
import Landing from "@/assets/images/services/Landing.png";
import Darkshade from "@/assets/Bgs/Showcase/DarkShade";
import WhiteShade from "@/assets/Bgs/Showcase/WhiteShade";
import ShowcaseSlider from "../components/ShowcaseSlider";
export default function Showcase() {
  const Samples = [
    {
      id: 1,
      coverImage: Landing,
    },
    {
      id: 2,
      coverImage: Dashboard,
    },
    {
      id: 3,
      coverImage: Mobileview,
    },
    {
      id: 4,
      coverImage: Landing,
    },
    {
      id: 5,
      coverImage: Dashboard,
    },
    {
      id: 6,
      coverImage: Mobileview,
    },
  ];

  return (
    <div className=" h-[35vw]  sm:h-[250px] md:h-[300px] relative      mb-14 lg:h-[342px] bg-cover w-full flex justify-between items-center    bg-translucent-black  backdrop-blur-[30px] ">
      <Darkshade className="absolute  w-1/2 h-full  left-[-10%]  sm:w-auto sm:left-0 top-0 z-20" />
      <Darkshade className="absolute  w-1/2 h-full sm:w-auto  right-[-10%]  sm:right-0 top-0 scale-[-1] z-20" />

      <div className="  flex justify-center  items-center absolute   w-auto sm:w-[100vw] h-full">
        <WhiteShade className=" w-[90%]  md:w-auto  md:scale-110  " />
      </div>

<ShowcaseSlider Samples={Samples}/>
    </div>
  );
}
