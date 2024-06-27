//메인 페이지 컴포넌트//////

import React, { useState, useEffect, useLayoutEffect } from "react";
import SwiperMain from "../plugin/SwiperMain";
import SwiperMain2 from "../plugin/SwiperMain2";

export default function Main() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 777);//초기값770보다 작거나 같냐?

    useEffect(() => {
        
        const media770 = () => setIsMobile(window.innerWidth <= 777);
        window.addEventListener("resize", media770);
        return () => window.removeEventListener("resize", media770);
    }, []);//한번만 실행

    return (
        <>
            {/* isMobile이 1050보다 작거나 같냐? 그럼  <SwiperMain2 /> 실행 아니면  <SwiperMain /> 실행*/}
            {isMobile ? <SwiperMain2 /> : <SwiperMain />} 
        </>
    );
}