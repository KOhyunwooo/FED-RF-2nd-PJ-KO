//인덱스 index.scss 불러오기
import "../src/css/index.scss";

import React from "react";
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
  const reName = ["man", "woman", "kids", "home"];
  return (
    //라우터 루트로 브라우저 라우트 시작
    <BrowserRouter>
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
