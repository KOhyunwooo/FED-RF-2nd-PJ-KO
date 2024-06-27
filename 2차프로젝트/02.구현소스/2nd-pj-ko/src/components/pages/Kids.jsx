//키즈 페이지 컴포넌트//////

import { useEffect } from "react";
import Banner from "../modules/Banner";
import Footer from "../modules/Footer";

export default function Kids(){
    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);
    return(
        <>
         {/* 메인 배너 영역 */}
         <Banner category="kidsData"/>
        {/* 푸터에어리어*/}
        <Footer/>
        </>
    );

}