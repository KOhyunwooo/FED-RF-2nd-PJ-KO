//홈 페이지 컴포넌트//////

import { useEffect } from "react";
import Banner from "../modules/Banner";


export default function Home(){
  
    return(
        <>
        {/* 메인 배너 영역 */}
        <Banner category="homeData"/>
        
        </>
    );

}