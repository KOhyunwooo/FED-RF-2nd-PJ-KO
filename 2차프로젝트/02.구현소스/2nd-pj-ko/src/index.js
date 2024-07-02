//인덱스 index.scss 불러오기
import "../src/css/index.scss";
//제이쿼리 불러오기
import $ from "jquery";

import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Woman from "./components/pages/Woman";
import Man from "./components/pages/Man";
import Main from "./components/pages/Main";
import Kids from "./components/pages/Kids";
import Home from "./components/pages/Home";
import AboutZara from "./components/pages/Aboutzara";
import SearchPg from "./components/pages/SearchPg";
import ProductPg from "./components/pages/ProductPg";
import Sorry from "./components/pages/Sorry";
import JoinMember from "./components/pages/JoinMember";


export default function MainComponent() {


  //8888888888888888888888888888888888888888888888888888888
  const setVh = () => {
    // --vh CSS 변수에 현재 뷰포트 높이를 설정하는 함수
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
  };
  
  // 브라우저 창 크기가 변경될 때마다 setVh 함수 호출
  window.addEventListener('resize', setVh);
  
  // 페이지가 로드될 때 setVh 함수 호출하여 초기화
  setVh();

//8888888888888888888888888888888888888888888888888888888




  const reName = ["man", "woman", "kids", "home"];
  return (
    //라우터 루트로 브라우저 라우트 시작
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* 라우터 경로 변경시 최상단이동 컴포넌트 */}
      <WindowScrollTo00 />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="woman" element={<Woman />} />
          <Route path="man" element={<Man />} />
          <Route path="kids" element={<Kids />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutzara" element={<AboutZara />} />
          <Route path="search" element={<SearchPg />} />
          <Route path="joinmember" element={<JoinMember />} />
          <Route path="sorry" element={<Sorry />} />

          {reName.map((e, i) => (
            <Route
              key={i}
              path={e + "/product"}
              element={<ProductPg cat={e} />}
            />
          ))}
          {/* <Route path="product" element={<ProductPg />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/*********************************************************************************** 
  컴포넌트로 만들고 라우터 않에 넣고
  라우터 경로 변경시 스크롤 최상단이동
***********************************************************************************/
const WindowScrollTo00 = () => {
  // 라우터 경로 변경시 path값 변경하기
  // pathname객체 속성에 담긴다!
  const { pathname } = useLocation();

  useEffect(() => {
    // 화면렌더링 구역에 스크롤상단이동 코드넣기
    // window.scrollTo(0,0); //스크롤 최상단이동!
    $("html,body").animate({ scrollTop: "0px" });//스크롤 최상단이동! 제이쿼리방식, window.scrollTo(0,0); 제대로 안됨
    console.log("라우터 경로:", pathname);
  }, [pathname]); // 의존성을 라우터 경로변수로 설정한다.(의존성: 쟤가 바뀌면 나도 바뀜)

  // 컴포넌트 리턴이 필요하나
  // 소스리턴이 아니므로 null을 쓴다.
  return null; //빈값 리턴(리턴만 되게)
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainComponent></MainComponent>);
