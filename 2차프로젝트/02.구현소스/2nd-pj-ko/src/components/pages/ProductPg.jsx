import React, { useEffect } from "react";


//프로덕트리스트 모듈 불러오기
import ProductList from "../modules/ProductList";

import { useLocation } from "react-router-dom";
import Origins from "../modules/Origins";
import { useState } from "react";

import $ from "jquery";

function ProductPg({ cat }) {
  const loc = useLocation();
  let data = loc.state.data;
  console.log("가져온 {cat} 은 무엇?:",cat);//cat은 index.js에서 보낸 배열값["man", "woman", "kids", "home"]임
  console.log("useLocation으로 받아온 data?:",data);//TopArea에서 <Link to state={{data:v.data}}로 받아왔나????모름..

  const chgBgFn = () => {
    if (cat !== "man") return; //카테고리가 man이 아니면 함수 종료
    let olist = document.querySelector(".origins-list");
    let bgTg = document.querySelector(".cont");    

    // let winH = window.innerHeight*1;
    const winH = document.documentElement.clientHeight * 0.9;
    //window.innerHeight*1보다 더 일관된 높이 계산:브라우저의 주소 창이나 스크롤바와 같은 UI 요소를 더 정확히 고려함.///////////////////

    let pos = olist.getBoundingClientRect().top;
    // console.log(pos);
    if (pos < winH) {
      bgTg.classList.add("change");
      // bgTg.style.backgroundColor = "black"; //이렇게 해도 됨
    } else {
      bgTg.classList.remove("change");
      // bgTg.style.backgroundColor = "transparent"; //이렇게 해도 됨
    }
  };


  //////////////////같은 카테고리내에서 컴포넌트 전환시 스크롤투탑 되게 (index.js에 있는 scrolltotop은 의존성이 pathname임)한번더 줌///////////////////////
  useEffect(() => {
    // 화면렌더링 구역에 스크롤상단이동 코드넣기
    // window.scrollTo(0,0); //스크롤 최상단이동!
    $("html,body").animate({ scrollTop: "0px" });
  }, [data]); // 의존성을 라우터 경로변수로 설정한다.(의존성: 쟤가 바뀌면 나도 바뀜)

  


  useEffect(() => {
    // console.log("^^^^^useEffect실행");
    // 남자페이지에서 있을때만 이벤트 설정
    if (document.querySelector(".origins-list")) {
      window.addEventListener("scroll", chgBgFn);
    }

    // 없는 페이지는 중간에 남자 페이지에서 이동할 경우
    // 이벤트를 삭제해야함!
    else {
      window.removeEventListener("scroll", chgBgFn);

      document.querySelector(".cont").classList.remove("change");
      // document.style.backgroundColor = "transparent";
    }

    return () => {
      console.log("소멸실행!");
      window.removeEventListener("scroll", chgBgFn);

      document.querySelector(".cont").classList.remove("change");
      // document.style.backgroundColor = "transparent";
    };
  }, [cat]); //cat 이 변경될때마다 소멸 실행

  const chgBg = () => {}; /////////// chgBg //////////////

  return (
    <>
      <div style={{ height: "140px" }}></div>
      <ProductList dbName={data} />
      {cat === "man" && <Origins />}
  
    </>
  );
}

export default ProductPg;
