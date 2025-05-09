import Recentbg from "@/assets/Bgs/works/Recentsbg";
import React from "react";
import AlcoholTracker from "@/assets/images/works/Alcohol Tracker.png";
import Rely from "@/assets/images/works/Rely.png";
import Toposware from "@/assets/images/works/Toposware.png";
import Finance from "@/assets/images/works/Markscoin.png";
import NexRv from "@/assets/images/works/NexRv.png";
import Recentblur from "@/assets/Bgs/works/RecentBlur";
import Recentblur2 from "@/assets/Bgs/works/RecentBlur2";
import Recentblur4 from "@/assets/Bgs/works/Recentsblur4";
import Recentsblur3 from "@/assets/Bgs/works/Recentblur3";
import RecentWorkCard from "../components/RecentWorkcard";
import IntroCard from "../components/IntroCard";

export default function Recents() {
  const RecentWorkDetails = {
    title: "Our Most Recent Works",
    subtitle: "Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.",
    works: [
      {
        id: 1,
        coverImage: AlcoholTracker,
        name: "Alcohol Tracker",
        service: "All-In-One (AIO) Service",
      },
      {
        id: 2,
        coverImage: Rely,
        name: "Rely",
        service: "All-In-One (AIO) Service",
      },
      {
        id: 3,
        coverImage: Toposware,
        name: "Alcohol Tracker",
        service: "All-In-One (AIO) Service",
      },
      {
        id: 4,
        coverImage: Finance,
        name: "Finance Website",
        service: "All-In-One (AIO) Service",
      },
      {
        id: 5,
        coverImage: NexRv,
        name: "Alcohol Tracker",
        service: "All-In-One (AIO) Service",
      },
    ],
  };
  return (
    <div className=" flex flex-col  justify-center  items-center    sm:mt-5 md:mt-10 lg:mt-20">
 <IntroCard Data={RecentWorkDetails}/>

      <div className="flex flex-col gap-6 p-2  md:p-4   lg:mt-10 relative  w-full justify-center items-center   ">
        {/* Corners light effect */}
        <Recentblur className=" z-[-1]  Recentsblur absolute  top-[-550px]  left-[-100px]  " />
        <Recentblur2 className="     z-[-1] Recentsblur absolute  top-[-550px]    right-[-100px]" />
        <Recentsblur3 className="     z-[-1] Recentsblur absolute   top-[550px]    left-[-100px]" />

        <Recentblur4 className="     z-[-1] Recentsblur absolute  top-[550px]     right-[-100px]" />

        {/* First Two in Flex */}
        <div className=" grid sm:grid-cols-2 gap-6     ">
          {RecentWorkDetails.works.slice(0, 2).map((work) => (
 <RecentWorkCard position="top" work={work} key={work.id}/>
          ))}
        </div>

        {/* Remaining in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
          {RecentWorkDetails.works.slice(2).map((work) => (
       <RecentWorkCard position="bottom" work={work} key={work.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
