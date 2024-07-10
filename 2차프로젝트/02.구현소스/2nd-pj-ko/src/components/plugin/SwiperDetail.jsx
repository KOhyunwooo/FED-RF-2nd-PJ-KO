import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/scrollbar';

import "./css/SwiperDetail.scss";

// import required modules
import { Pagination, FreeMode, Navigation, Thumbs, Mousewheel } from "swiper/modules";

export default function SwiperDetail({data}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  console.log("구조분해할당으로 제대로 넘어왔니????",data);

  return (
    <>
      <Swiper
        style={{
          //   '--swiper-navigation-color': '#fff',
          "--swiper-pagination-color": "#000",
        }}
        direction={"vertical"}
        mousewheel= {true}//설정 안들어감
        pagination={{
          type: "progressbar",
        }}
        spaceBetween={0}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Pagination, FreeMode, Navigation, Thumbs, Mousewheel]}
        className="mySwiper2"
      >
        {data.dtsrc.map((v,i)=>
        <SwiperSlide key={i}>
            <img src={process.env.PUBLIC_URL +v} alt={i}/>
        </SwiperSlide>


        )}
     
      </Swiper>
      <Swiper
       direction={"vertical"}
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
