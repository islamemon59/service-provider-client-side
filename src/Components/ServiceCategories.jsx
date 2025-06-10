import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import "../styles.css";

import { EffectCards } from "swiper/modules";

const ServiceCategories = () => {
  return (
    <div className="md:min-h-[450px] min-h-[350px]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-80"
      >
        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            Home Clean
          </p>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            Plastic Paint
          </p>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            Car Paint
          </p>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            Salon Care
          </p>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            AC Service
          </p>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            Plumbing Service
          </p>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            Kitchen Cleaning
          </p>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            Interior Work
          </p>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl">
          <div className="inset-0 bg-black/45 absolute"></div>
          <p className="text-xl md:2xl font-semibold text-base-100 bottom-4 z-10 absolute">
            Electrical Work
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceCategories;
