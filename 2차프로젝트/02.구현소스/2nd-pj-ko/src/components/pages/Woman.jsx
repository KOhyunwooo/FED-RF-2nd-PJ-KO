//우먼페이지 컴포넌트//////

import Banner from "../modules/Banner";
import Footer from "../modules/Footer";

export default function Woman(){
    return(
        <>
              
        {/* 배너들어올것 */}
        <Banner category="womanData"/>
        {/* 푸터모듈 들어올 것 */}
        <Footer/>
        </>
    );

}