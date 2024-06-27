import React, { useEffect } from "react";
import Footer from "../modules/Footer";

//프로덕트리스트 모듈 불러오기
import ProductList from "../modules/ProductList";

import { useLocation } from "react-router-dom";
import Origins from "../modules/Origins";
import { useState } from "react";

function ProductPg({ cat }) {
  const loc = useLocation();
  let data = loc.state.data;

  const chgBgFn = () => {
    let olist = document.querySelector(".origins-list");
    let bgTg = document.querySelector(".cont");
    let winH = window.innerHeight / 2;

    let pos = olist.getBoundingClientRect().top;
    console.log(pos);
    if (pos < winH) {
      // bgTg.classList.add("change");
      bgTg.style.backgroundColor = "black";
    } else {
      // bgTg.classList.remove("change");
      bgTg.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    console.log("^^^^^useEffect실행");
    // 남자페이지에서 있을때만 이벤트 설정
    if (document.querySelector(".origins-list")) {
      window.addEventListener("scroll", chgBgFn);
    }

    // 없는 페이지는 중간에 남자 페이지에서 이동할 경우
    // 이벤트를 삭제해야함!
    else{

        window.removeEventListener("scroll", chgBgFn);
        // document.querySelector(".cont").classList.remove("change");
        document.querySelector(".cont").style.backgroundColor = "transparent";
    }

    return () => {
        console.log("소멸실행!");
        window.removeEventListener("scroll", chgBgFn);
        // document.querySelector(".cont").classList.remove("change");
        document.querySelector(".cont").style.backgroundColor = "transparent";
    };
  });

  const chgBg = () => {}; /////////// chgBg //////////////

  return (
    <>
      <div style={{ height: "200px" }}></div>
      <ProductList dbName={data} />
      {cat == "man" && <Origins />}
      <Footer />
    </>
  );
}

export default ProductPg;
