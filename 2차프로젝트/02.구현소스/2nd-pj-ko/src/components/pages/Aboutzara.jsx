//어바웃자라페이지 컴포넌트//////



import { useEffect } from "react";
import TopAreaMedia from "../layout/TopAreaMedia";
import Footer from "../modules/Footer";
import Sorry from "./Sorry";

export default function AboutZara(){
    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);
    return(
        <>
        <Sorry/>
        <Footer/>
        </>
    );

}