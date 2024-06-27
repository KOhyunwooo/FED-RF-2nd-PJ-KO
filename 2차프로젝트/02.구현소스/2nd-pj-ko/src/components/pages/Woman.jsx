//우먼페이지 컴포넌트//////

import { useEffect } from "react";
import Banner from "../modules/Banner";
import Footer from "../modules/Footer";

export default function Woman(){
    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);
    return(
        <>
              
        {/* 배너들어올것 */}
        <Banner category="womanData"/>
        {/* 푸터모듈 들어올 것 */}
        <Footer/>
        </>
    );

}