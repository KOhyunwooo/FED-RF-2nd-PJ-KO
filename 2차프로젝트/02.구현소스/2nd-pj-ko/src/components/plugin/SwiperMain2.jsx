// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
//내가 커스텀하는 css 불러오기
import "../plugin/css/swiper_main.scss";

// import required modules
import {
    Pagination,
    Navigation,
    Autoplay,
    Mousewheel,
    EffectCube,
} from "swiper/modules";
// 이미지 데이터 불러오기
import { main_img, main_img_midea } from "../data/main_img";
import { useRef } from "react";

export default function SwiperMain() {
    // 리액트에서 컴포넌트가 리랜더링 되어도 값을 유지하는 변수
    // 생성되는 하위 스와이퍼 객체
    const xx = useRef([]);

    return (
        <>
            {/* 가로방향 스와이프 설정///////////////////////////////////////////////////////////// */}
            <Swiper
                className="mySwiper swiper-h"
                mousewheel={false}
                spaceBetween={0}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                //맨페이지부터 시작하게 하기
                initialSlide={1}
                /* 큐브 이펙트**************** */
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                modules={[
                    Autoplay,
                    Pagination,
                    Navigation,
                    Mousewheel,
                    EffectCube,
                ]}
                onSlideChange={(iam) => {
                    let idx = iam.activeIndex;
                    let tg = xx.current;
                    console.log(idx);
                    /* 각 세로방향슬라이드(4개)의 순번을 찾아서 autoplay설정 */
                    tg.forEach((v, i) => {
                        if (i == idx) tg[i].autoplay.start();
                        else tg[i].autoplay.stop();
                    });
                    // tg[1].autoplay.start();
                }}
            >
                {/* woman/////////////////////////////////////////////// */}
                <SwiperSlide>
                    {/* 세로방향 스와이프 설정///////////////////////////////////////////////////////////// */}
                    <Swiper
                        className="mySwiper2 swiper-v"
                        mousewheel={false}
                        direction={"vertical"}
                        spaceBetween={0}
                        // onInit() 메서드는 스와퍼 처음 셋팅완료시 실행구역
                        onInit={(iam) => xx.current.push(iam)}
                        // autoplay={{
                        //   delay: 2000,
                        //   disableOnInteraction: false,
                        //   //마지막 페이지에 도달하면 멈추기
                        //   stopOnLastSlide: true,
                        // }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        effect={"cube"}
                        grabCursor={true}
                        /* 큐브 이펙트**************** */
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        // navigation={true}

                        modules={[
                            Autoplay,
                            Pagination,
                            Navigation,
                            Mousewheel,
                            EffectCube,
                        ]}
                    >
                        {main_img_midea.main_woman.map((v, i) => (
                            <SwiperSlide key={i}>
                                <img src={v.isrc} alt={v.tit} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>

                {/* man/////////////////////////////////////////////// */}
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        mousewheel={false}
                        direction={"vertical"}
                        spaceBetween={0}
                        onInit={(iam) => xx.current.push(iam)}
                        grabCursor={true}
                        effect={"cube"}
                        /* 큐브 이펙트**************** */
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        // autoplay={{
                        //   delay: 2000,
                        //   disableOnInteraction: false,
                        //   //마지막 페이지에 도달하면 멈추기
                        //   stopOnLastSlide: true,
                        // }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={true}

                        modules={[
                            Autoplay,
                            Pagination,
                            Navigation,
                            Mousewheel,
                            EffectCube,
                        ]}
                    >
                        {main_img_midea.main_man.map((v, i) => (
                            <SwiperSlide key={i}>
                                <img src={v.isrc} alt={v.tit} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>
                {/* kids/////////////////////////////////////////////// */}
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        mousewheel={false}
                        direction={"vertical"}
                        spaceBetween={0}
                        onInit={(iam) => xx.current.push(iam)}
                        // autoplay={{
                        //   delay: 2000,
                        //   disableOnInteraction: false,
                        //   //마지막 페이지에 도달하면 멈추기
                        //   stopOnLastSlide: true,
                        // }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        effect={"cube"}
                        grabCursor={true}
                        /* 큐브 이펙트**************** */
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        // navigation={true}

                        modules={[
                            Autoplay,
                            Pagination,
                            Navigation,
                            Mousewheel,
                            EffectCube,
                        ]}
                    >
                        {main_img_midea.main_kids.map((v, i) => (
                            <SwiperSlide key={i}>
                                <img src={v.isrc} alt={v.tit} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>
                {/* home/////////////////////////////////////////////// */}
                <SwiperSlide>
                    <Swiper
                        className="mySwiper2 swiper-v"
                        mousewheel={false}
                        direction={"vertical"}
                        spaceBetween={0}
                        onInit={(iam) => xx.current.push(iam)}
                        // autoplay={{
                        //   delay: 2000,
                        //   disableOnInteraction: false,
                        //   //마지막 페이지에 도달하면 멈추기
                        //   stopOnLastSlide: true,
                        // }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        effect={"cube"}
                        grabCursor={true}
                        /* 큐브 이펙트**************** */
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        // navigation={true}

                        modules={[
                            Autoplay,
                            Pagination,
                            Navigation,
                            Mousewheel,
                            EffectCube,
                        ]}
                    >
                        {main_img_midea.main_home.map((v, i) => (
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
