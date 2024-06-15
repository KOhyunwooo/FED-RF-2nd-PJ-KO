// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//내가 커스텀하는 css 불러오기
import "../plugin/css/swiper_main.scss";

// import required modules
import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";
// 이미지 데이터 불러오기
import { main_img } from "../data/main_img";

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
        //맨페이지부터 시작하게 하기
        initialSlide={1}
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
            {main_img.main_woman.map((v, i) => (
              <SwiperSlide key={i}>
                <img src={v.isrc} alt={v.tit} />
              </SwiperSlide>
            ))}
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
            {main_img.main_man.map((v, i) => (
              <SwiperSlide key={i}>
                <img src={v.isrc} alt={v.tit} />
              </SwiperSlide>
            ))}
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
            {main_img.main_kids.map((v, i) => (
              <SwiperSlide key={i}>
                <img src={v.isrc} alt={v.tit} />
              </SwiperSlide>
            ))}
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
            {main_img.main_home.map((v, i) => (
              <SwiperSlide key={i}>
                <img src={v.isrc} alt={v.tit} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
