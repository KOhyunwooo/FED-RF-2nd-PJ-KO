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


  // console.log("구조분해할당으로 제대로 넘어왔니????",data);

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
        className="mySwiper"
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
          {data.dtsrc.map((v,i)=>
        <SwiperSlide key={i}>
            <img src={process.env.PUBLIC_URL +v} alt={i}/>
        </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
