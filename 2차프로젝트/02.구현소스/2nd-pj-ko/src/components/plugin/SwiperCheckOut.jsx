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
        slidesPerView={4.2}
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
