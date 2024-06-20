//키즈 페이지 컴포넌트//////

import Banner from "../modules/Banner";
import Footer from "../modules/Footer";

export default function Kids(){
    return(
        <>
         {/* 메인 배너 영역 */}
         <Banner category="kidsData"/>
        {/* 푸터에어리어*/}
        <Footer/>
        </>
    );

}