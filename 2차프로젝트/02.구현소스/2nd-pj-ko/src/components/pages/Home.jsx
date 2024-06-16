//홈 페이지 컴포넌트//////

import Banner from "../modules/Banner";
import FooterArea from "../modules/FooterArea";

export default function Home(){
    return(
        <>
        {/* 메인 배너 영역 */}
        <Banner category="homeData"/>
        {/* 푸터에어리어*/}
        <FooterArea/>
        </>
    );

}