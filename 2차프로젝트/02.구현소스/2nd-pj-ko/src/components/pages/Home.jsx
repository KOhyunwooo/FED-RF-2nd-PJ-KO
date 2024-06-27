//홈 페이지 컴포넌트//////

import { useEffect } from "react";
import Banner from "../modules/Banner";
import Footer from "../modules/Footer";

export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);
    return(
        <>
        {/* 메인 배너 영역 */}
        <Banner category="homeData"/>
        {/* 푸터에어리어*/}
        <Footer/>
        </>
    );

}