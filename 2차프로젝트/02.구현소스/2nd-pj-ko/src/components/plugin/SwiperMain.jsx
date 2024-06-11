import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//내가 커스텀하는 css
import "../plugin/css/swiper_main.scss";

// import required modules
import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";

export default function SwiperMain() {
  return (
    <>
      {/* 가로방향 스와이프 설정///////////////////// */}
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
      >
        <SwiperSlide>
          {/* 세로방향 스와이프 설정///////////////////// */}
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={0}
            mousewheel={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              //마지막 페이지에 도달하면 멈추기
              stopOnLastSlide: true,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          >
            <SwiperSlide>woman1</SwiperSlide>
            <SwiperSlide>woman2</SwiperSlide>
            <SwiperSlide>woman3</SwiperSlide>
            <SwiperSlide>woman4</SwiperSlide>
            <SwiperSlide>woman5</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={0}
            mousewheel={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              //마지막 페이지에 도달하면 멈추기
              stopOnLastSlide: true,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          >
            <SwiperSlide>man1</SwiperSlide>
            <SwiperSlide>man2</SwiperSlide>
            <SwiperSlide>man3</SwiperSlide>
            <SwiperSlide>man4</SwiperSlide>
            <SwiperSlide>man5</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={0}
            mousewheel={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              //마지막 페이지에 도달하면 멈추기
              stopOnLastSlide: true,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          >
            <SwiperSlide>kids1</SwiperSlide>
            <SwiperSlide>kids2</SwiperSlide>
            <SwiperSlide>kids3</SwiperSlide>
            <SwiperSlide>kids4</SwiperSlide>
            <SwiperSlide>kids5</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={0}
            mousewheel={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              //마지막 페이지에 도달하면 멈추기
              stopOnLastSlide: true,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
          >
            <SwiperSlide>home1</SwiperSlide>
            <SwiperSlide>home2</SwiperSlide>
            <SwiperSlide>home3</SwiperSlide>
            <SwiperSlide>home4</SwiperSlide>
            <SwiperSlide>home5</SwiperSlide>
            <SwiperSlide>home5</SwiperSlide>
            <SwiperSlide>home5</SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
