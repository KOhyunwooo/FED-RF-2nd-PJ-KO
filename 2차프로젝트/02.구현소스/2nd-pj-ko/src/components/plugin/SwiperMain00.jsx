// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-creative';
//내가 커스텀하는 css 불러오기
import "../plugin/css/swiper_main.scss";

// import required modules
import { Pagination, Navigation, Autoplay, Mousewheel,EffectCreative } from "swiper/modules";
// 이미지 데이터 불러오기
import { main_img } from "../data/main_img";
import { useRef } from "react";

export default function SwiperMain() {

  // 리액트에서 컴포넌트가 리랜더링 되어도 값을 유지하는 변수
  // 생성되는 하위 스와이퍼 객체
  const xx = useRef([]);

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
        onSlideChange={(iam)=>{
          let idx = iam.activeIndex;
          let tg = xx.current;
          console.log(idx);
         /* 각 세로방향슬라이드(4개)의 순번을 찾아서 autoplay설정 */
          tg.forEach((v,i)=>{
            if(i == idx) tg[i].autoplay.start();
            else tg[i].autoplay.stop();
          });
          // tg[1].autoplay.start();
        }}
      >
        <SwiperSlide>
          {/* 세로방향 스와이프 설정///////////////////// */}
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={0}
            mousewheel={true}
            // onInit() 메서드는 스와퍼 처음 셋팅완료시 실행구역
            onInit={(iam)=>xx.current.push(iam)}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            //   //마지막 페이지에 도달하면 멈추기
            //   stopOnLastSlide: true,
            // }}
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
            onInit={(iam)=>xx.current.push(iam)}

            grabCursor={true}
            effect={"creative"}
            creativeEffect={{              
              prev: {
                shadow: true,
                translate: [0, '-20%', -1],
              },
              next: {
                translate: [0, '100%', 0],
              },
            }}

            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            //   //마지막 페이지에 도달하면 멈추기
            //   stopOnLastSlide: true,
            // }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel,EffectCreative]}
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
            onInit={(iam)=>xx.current.push(iam)}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            //   //마지막 페이지에 도달하면 멈추기
            //   stopOnLastSlide: true,
            // }}
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
            onInit={(iam)=>xx.current.push(iam)}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            //   //마지막 페이지에 도달하면 멈추기
            //   stopOnLastSlide: true,
            // }}
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
