
import { useEffect, useLayoutEffect, useState } from "react";
import MainArea from "./MainArea";
import TopArea from "./TopArea";
import TopAreaMedia from "./TopAreaMedia";
import {Footer} from "./Footer";


//전체 레이아웃 컴포넌트
export default function Layout(){

    




    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1050)
    useEffect(()=>{
        const media = () => setIsMobile(window.innerWidth <= 1050);
        window.addEventListener("resize", media);
        return () => window.removeEventListener("resize", media);
    },[]);
    return(
        <>
        {/* 상단영역 */}
        {isMobile ? <TopAreaMedia/> : <TopArea/>}
        {/* 메인영역 */}
        <MainArea/>
        {/* 하단영역? */}
       <Footer/>
        </>
    );
    
}////////////레이아웃////////////