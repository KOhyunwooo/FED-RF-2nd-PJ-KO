//맨 페이지 컴포넌트//////

import Banner from "../modules/Banner";
import Footer from "../modules/Footer";

export default function Man(){
    return(
        <>
        <Banner category="manData"/>
        {/* 푸터에어리어 들어올 것 */}
        <Footer/>
        </>
    );

}