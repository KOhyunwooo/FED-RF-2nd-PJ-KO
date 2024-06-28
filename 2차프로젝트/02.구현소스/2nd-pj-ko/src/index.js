//인덱스 index.scss 불러오기
import "../src/css/index.scss";

import React, { useEffect,useRef  } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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






export default function MainComponent() {

  /////////////////아이폰에서 아래방향으로 드래그터치시에 브라우저네비 안나오게 하기///////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  const startY = useRef(null);
  const lastY = useRef(null);

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (startY.current !== null) {
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - lastY.current;

        if (deltaY > 0 && lastY.current < startY.current) {
          // 아래로 드래그 중일 때 네비게이션 숨기기
          hideNavigation();
        } else if (deltaY < 0 && lastY.current > startY.current) {
          // 위로 드래그 중일 때 네비게이션 보이기
          showNavigation();
        }

        lastY.current = currentY;
      }
    };

    const handleTouchStart = (e) => {
      startY.current = e.touches[0].clientY;
      lastY.current = startY.current;
    };

    const handleTouchEnd = () => {
      startY.current = null;
      lastY.current = null;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const hideNavigation = () => {
    // 네비게이션 숨기기 로직 구현
    document.body.classList.add('hide-navigation');
  };

  const showNavigation = () => {
    // 네비게이션 보이기 로직 구현
    document.body.classList.remove('hide-navigation');
  };


  /* 
  css 설정 이거 추가 해야함
  .hide-navigation {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  } 
    */
////////////////////////////////////////////////////////////////////////////////////////////////////









  const reName = ["man", "woman", "kids", "home"];
  return (
    //라우터 루트로 브라우저 라우트 시작
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="woman" element={<Woman />} />
          <Route path="man" element={<Man />} />
          <Route path="kids" element={<Kids />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutzara" element={<AboutZara />} />
          <Route path="search" element={<SearchPg />} />
          <Route path="sorry" element={<Sorry />} />
          
          {reName.map((e, i) => (
            <Route key={i} path={e + "/product"} element={<ProductPg cat={e} />} />
          ))}
          {/* <Route path="product" element={<ProductPg />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainComponent></MainComponent>);
