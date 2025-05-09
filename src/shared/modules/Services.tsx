import Blueblur from "@/assets/Bgs/Services/Blueblur";
import BlueStars from "@/assets/Bgs/Services/Bluestars";
import GreenBlur from "@/assets/Bgs/Services/Greenblur";
import Pinkblur from "@/assets/Bgs/Services/Pinkblur";
import Purpleblur from "@/assets/Bgs/Services/Purpleblur";
import Purplestars from "@/assets/Bgs/Services/Purplestars";
import AIOicn from "@/assets/icons/AIO";
import Crossbox from "@/assets/icons/Crossbox";
import Infinity from "@/assets/icons/Infinity";
import Layer from "@/assets/icons/Layers";
import React from "react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
const ServicesDetails = {
  intro: "We are a full-service studio creating transformative",
  emphasis1: "digital experiences and solutions.",
  middle: "specializing in",
  emphasis2: "websites and web applications.",
  services: [
    {
      id: 1,
      icon: AIOicn,
      title: "All-In-One (AIO) Service",
      des: "Our AIO solution tailors to your unique vision, crafting a website that truly reflects...",
      stars: BlueStars,
      bgblur: GreenBlur,
      translate: 49,
      bgOverlay: "#93FDD326",
    },
    {
      id: 2,
      icon: Infinity,
      title: "Project-Based Development",
      des: "Ideal for agencies with ready designs, our service focuses on bringing...",
      stars: BlueStars,
      bgblur: Blueblur,
      translate: 113,
      bgOverlay: "#6BB3F326",
    },
    {
      id: 3,
      icon: Layer,
      title: "Scalable Dev Partnership",
      des: "Our partnership is designed for businesses needing consistent development support...",
      stars: Purplestars,
      bgblur: Pinkblur,
      translate: 66,
      bgOverlay: "#E879F926",
    },
    {
      id: 4,
      icon: Crossbox,
      title: "End-to-End Consulting",
      des: "Our AIO solution tailors to your unique vision, crafting a website that truly reflects...",
      stars: Purplestars,
      bgblur: Purpleblur,
      translate: 0,
      bgOverlay: "#9773FA26",
    },
  ],
};


  return (
    <div className=" ServiceContainer  min-[1200px]:h-[728.1509399414062px] font-rethiksans flex-col flex justify-center   pt-10   items-center ">
      {/* Introcontainer */}
      <div className=" flex justify-center items-center  Introcontainer ">
        <div className="  w-full  text-center  min-[1200px]:text-left  min-[1200px]:w-[1140px]  min-[1200px]:h-[180px]  ">
          {/* intro  */}
          <p className="text-t-white text-[20px]  min-[380px]:text-[25px]  min-[590px]:text-[30px] sm:text-[35px]  md:text-[38px]  min-[1200px]:text-[40px] leading-[150%]  font-[500]  ">
            <span className="text-t-gray">{ServicesDetails.intro} </span>
            <span className=" text-white font-semibold">
              {ServicesDetails.emphasis1}{" "}
            </span>
            <span className="text-t-gray">{ServicesDetails.middle} </span>
            <span className="text-t-white font-semibold">
              {ServicesDetails.emphasis2}
            </span>
          </p>
        </div>
      </div>
      {/* card container  */}
      <div className=" Servicegrid grid  max-[500px]:grid-cols-1  max-[1200px]:grid-cols-2 !translate-y-0 min-[1200px]:flex min-[1200px]:flex-wrap justify-center p-5 py-10  min-[1200px]:p-4   gap-x-5 min-[1200px]:gap-0  text-white">
        {/* servicecards */}
        {ServicesDetails.services.map((service) => (
          <ServiceCard key={service.id}
                service={service}
          />
        ))}
      </div>
    </div>
  );
}
