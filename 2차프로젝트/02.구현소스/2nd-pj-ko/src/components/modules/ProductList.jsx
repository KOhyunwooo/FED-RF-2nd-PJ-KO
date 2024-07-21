import React, { useContext, useEffect } from "react";

//데이터 불러오기 woman
import { wNew, wSale } from "../data/products_woman";
//데이터 불러오기 man
import { mBestSeller, mNew, mSale, mOrigins } from "../data/products_man";

//https://www.npmjs.com/package/react-icons  불러오기
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import "../../css/ProductList.scss";
import { Link } from "react-router-dom";
import { addComma } from "../func/common_fn";
import { useState } from "react";
import { dCon } from "../func/dCon";

function ProductList({ dbName }) {
  const myCon = useContext(dCon);

  const pdbutton = ["색상", "사이즈", "가격", "컬렉션( )"];

  const selData = {
    wNew: wNew,
    wSale: wSale,
    mBestSeller: mBestSeller,
    mNew: mNew,
    mSale: mSale,
    mOrigins: mOrigins,
  };
  console.log(selData[dbName]);

  //seldata를 슬라이스 리버스로 역순으로 데이터 만들기-항상 신상품순으로 나오게 하기 위해
  const reversedData = selData[dbName].slice().reverse();

  /* *************************************************************  
  // 윈도우 위치값에 따라 이미지 오파시티 1로 변환하는 함수
  const chgOpFn = () => {
    const winH = window.innerHeight * 0.99; 
    const chgop = document.querySelectorAll(".chgop");

    chgop.forEach((v, i) => {
      const pos = v.getBoundingClientRect().top;
      // 이미지가 화면에 나타날 때 .1초 간격으로 on 클래스 추가
      if (pos < winH && !v.classList.contains("on")) {
        setTimeout(() => {
          v.classList.add("on");
        }, 100 * i);
      }
    });
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", chgOpFn);
    window.addEventListener("touchstart", chgOpFn);//모바일용
    window.addEventListener("touchmove", chgOpFn);//모바일용

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 해제
    return () => {
      window.removeEventListener("scroll", chgOpFn);
      window.removeEventListener("touchstart", chgOpFn);//모바일용 리무브
      window.removeEventListener("touchmove", chgOpFn);//모바일용 리무브
    };
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

 ****************************************************************** */

  /////////////////////////즐겨찾기 시작/////////////////////////////////////////////////////
  // 즐겨찾기 목록을 관리하기 위한 상태
  const [favorites, setFavorites] = useState([]);

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 즐겨찾기 데이터를 불러옴
  useEffect(() => {
    // 로컬 스토리지에서 "favorite-data" 키로 저장된 데이터를 가져옴
    const storedFavorites = localStorage.getItem("favorite-data");
    // 저장된 데이터가 있으면 파싱하여 상태에 설정
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행

  // 즐겨찾기 토글 함수
  const toggleFavorite = (data) => {
    // 현재 즐겨찾기 목록을 복사
    const newFavorites = [...favorites];
    // 현재 아이템이 즐겨찾기에 있는지 확인
    const index = newFavorites.findIndex((item) => item.idx === data.idx);

    if (index !== -1) {
      // 이미 즐겨찾기에 있으면 제거
      newFavorites.splice(index, 1);
    } else {
      // 즐겨찾기에 없으면 추가
      newFavorites.push({
        idx: data.idx,
        name: data.name,
        price: data.price[0],
        price1: data.price[1],
        price2: data.price[2],
        color: data.color,
        isrc: data.isrc,
        cnt: 1, // 기본 수량을 1로 설정
      });
    }

    // 새로운 즐겨찾기 목록으로 상태 업데이트
    setFavorites(newFavorites);
    // 업데이트된 즐겨찾기 목록을 로컬 스토리지에 저장
    localStorage.setItem("favorite-data", JSON.stringify(newFavorites));
  };

  /////////////////////즐겨찾기 끝///////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="pdbutton-box">
        {pdbutton.map((v, i) => (
          <button key={i} className="pdbutton">
            {v}
          </button>
        ))}
      </div>
      <div className="product-list">
        {reversedData.map((v, i) => (
          <div key={i} className="product-item chgop">
            <Link to="/detail" state={{ v }}>
              {/* state={{키:값}}//**state는 객체형식으로만 보낼 수 있다 */}
              {/* DetailPg.jsx로 selData보내기 */}
              <img
                src={process.env.PUBLIC_URL + v.isrc}
                alt={v.name}
                className="product-image"
              />
            </Link>
            <div className="txt-box">
              {/* 하트버튼:favorite버튼 */}
              <div className="heartbutton" onClick={() => toggleFavorite(v)}>
                {/* 
                  현재 아이템(v)이 즐겨찾기 목록에 있는지 확인
                  some() 메서드는 배열의 요소 중 하나라도 조건을 만족하면 true를 반환
                */}
                {favorites.some((fav) => fav.idx === v.idx) ? (
                  // 아이템이 즐겨찾기에 있으면 채워진 하트 아이콘 표시
                  <IoMdHeart size={20} />
                ) : (
                  // 아이템이 즐겨찾기에 없으면 빈 하트 아이콘 표시
                  <IoMdHeartEmpty size={20} />
                )}
              </div>
              <span>{v.name}</span>
              <span className="price">
                {v.price[0] && <p>₩&nbsp;{addComma(v.price[0])}</p>}
                {v.price[1] && (
                  <p>
                    {v.price[1]}&nbsp;₩&nbsp;{addComma(v.price[2])}
                  </p>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
