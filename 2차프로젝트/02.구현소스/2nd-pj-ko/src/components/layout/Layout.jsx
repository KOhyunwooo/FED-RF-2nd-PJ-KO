import { useEffect, useLayoutEffect, useState } from "react";
import MainArea from "./MainArea";
import TopArea from "./TopArea";
import TopAreaMedia from "./TopAreaMedia";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";

//전체 레이아웃 컴포넌트
export default function Layout() {
  // '/'에서만 <Footer />실행하지 않게 하기
  const { pathname } = useLocation();
  console.log("Layout에서경로:",pathname);
  let sts = false;

  if (pathname == "/") sts = false;
  else sts = true;


  //가로1050이하일때 <TopAreaMedia /> 그렇지 않으면 <TopArea />호출
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1050);
  useEffect(() => {
    const media = () => setIsMobile(window.innerWidth <= 1050);
    window.addEventListener("resize", media);
    return () => window.removeEventListener("resize", media);
  }, []);
  return (
    <>
      {/* 상단영역 */}
      {isMobile ? <TopAreaMedia /> : <TopArea />}
      {/* 메인영역 */}
      <MainArea />
      {/* 하단영역? */}
      {sts && <Footer />}{/* sts가 true면 <Footer />실행 */}
    </>
  );
} ////////////레이아웃////////////
