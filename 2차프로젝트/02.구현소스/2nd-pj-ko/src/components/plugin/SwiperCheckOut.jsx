import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './css/swiper_checkout.scss';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SwiperCheckOut() {

    //로컬스 데이터 가져오기///////////////////////////////////////////////////////////
  const localsData = JSON.parse(localStorage.getItem("mycart-data")) || [];
  return (
    <>
    <div className="swiper-checkout">
      <Swiper
        breakpoints={{
          // 화면 너비가 0~300
          0: {
            slidesPerView: 2.8,
          },
          //화면너비 300~380
          300: {
            slidesPerView: 3.2,
          },
          //화면너비 380~480
          380: {
            slidesPerView: 3.8,
          },
          //화면너비 480~600
          480: {
            slidesPerView: 5.2,
          },
          //화면너비 600~777
          600: {
            slidesPerView: 5.8,
          },
          // 화면 너비가 777~900 
          777: {
            slidesPerView: 6.2,
          },
          // 화면 너비가 900~1050 
          900: {
            slidesPerView: 6.8,
          },
          // 화면 너비가 1050~ 
          1050: {
            slidesPerView: 4.2,
          },
        
        }}
        spaceBetween={0}
        freeMode={true}
        // pagination={{
        // //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
  
          {localsData.map((v, i) => (
            <SwiperSlide key={i}>
              <img
                src={process.env.PUBLIC_URL + v.isrc}
                alt={v.name}
              />
            </SwiperSlide>
          ))}
     
      </Swiper>

    </div>
    </>
  );
}
