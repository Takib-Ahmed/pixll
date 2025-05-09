import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

interface HeroDetailsProps {
  HeroDetails: {
    partners: {
      id: string | number;
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
  };
}
 const PartnersSlider: React.FC<HeroDetailsProps> = ({ HeroDetails }) => {
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <div className="overflow-hidden min-[1300px]:w-[1140px] h-[80px] w-full mx-auto absolute bottom-0 lg:bottom-32 items-center">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="w-full h-full max-[530px]:translate-x-[5vw] max-[768px]:translate-x-[5vw]"
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
        >
  {[...HeroDetails.partners, ...HeroDetails.partners].map((partner, index) => {
  const Partner = partner.icon;
  return (
    <SwiperSlide
      key={`${partner.id}-${index}`}
      className="flex justify-center items-center"
    >
      <Partner className="w-[75%] h-20 sm:w-[6.6rem] md:w-[8rem] lg:w-[90%] min-[1300px]:w-[163px] min-[1300px]:h-[80px]" />
    </SwiperSlide>
  );
})}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnersSlider;