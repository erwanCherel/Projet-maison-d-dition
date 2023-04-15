import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swipe carousel1 "></SwiperSlide>
        <SwiperSlide className="swipe carousel2 "></SwiperSlide>
        <SwiperSlide className="swipe carousel3 "></SwiperSlide>
      </Swiper>
    </div>
  );
}
