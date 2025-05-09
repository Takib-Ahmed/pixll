import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

interface Sample {
  id: number | string;
  coverImage: string | StaticImageData;
}

interface ShowcaseSliderProps {
  Samples: Sample[];
}


const ShowcaseSlider: React.FC<ShowcaseSliderProps> = ({ Samples }) => {
  return (
      <div className=" Showcase-Slider w-full bg-transparent  ">
        <Swiper
          className=" mySwiper  w-full    justify-center items-center flex bg-transparent"
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          spaceBetween={100}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {},
            768: {},
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1556: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {Samples.map((sample) => (
            <SwiperSlide className=" " key={sample.id}>
              <div
                className="  Slide relative  w-[105%]
            sm:w-[250px] sm:h-[180px] 
            md:w-[300px] md:h-[200px] 
            lg:w-[457px] lg:h-[306px] 
         
            flex items-center justify-center"
              >
                <Image
                  width={5000}
                  height={5000}
                  className="z-10  w-full h-full   
"
                  src={sample.coverImage}
                  alt={`sample ${sample.id}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}

export default ShowcaseSlider