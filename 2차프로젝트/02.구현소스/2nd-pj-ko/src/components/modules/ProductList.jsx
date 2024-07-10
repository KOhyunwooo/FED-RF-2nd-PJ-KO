import React, { useEffect } from "react";

//데이터 불러오기 woman
import { wNew, wSale } from "../data/products_woman";
//데이터 불러오기 man
import { mBestSeller, mNew, mSale, mOrigins } from "../data/products_man";

import "../../css/ProductList.scss";
import { Link } from "react-router-dom";

function ProductList({ dbName }) {
    const pdbutton = ["색상", "사이즈", "가격", "컬렉션( )"];

    const selData = {
        wNew: wNew,
        wSale: wSale,
        mBestSeller: mBestSeller,
        mNew: mNew,
        mSale: mSale,
        mOrigins: mOrigins,
    };

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
                        <Link to="/detail" state={{v}}>{/* state={{키:값}}//**state는 객체형식으로만 보낼 수 있다 */}
                            {/* DetailPg.jsx로 selData보내기 */}
                            <img
                                src={process.env.PUBLIC_URL + v.isrc}
                                alt={v.name}
                                className="product-image"
                            />
                            <div className="txt-box">
                                <span>{v.name}</span>
                                <span className="price">
                                    {v.price[0] && <p>{v.price[0]}</p>}
                                    {v.price[1] && (
                                        <p>
                                            {v.price[1]}&nbsp;{v.price[2]}
                                        </p>
                                    )}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;
