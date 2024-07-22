import React, { useEffect } from 'react';
import MyCart from '../modules/MyCart';
import Favorite from '../modules/Favorites';
import { useState } from 'react';
//https://www.npmjs.com/package/react-icons  불러오기
import { IoMdHeartEmpty } from "react-icons/io";


function MyCartSelPg(props) {
 //showMyCart 기본값 true, MyCart 또는 Favorite 표시할 상태변수
  const [showMyCart, setShowMyCart] = useState(true);
  const localsData = JSON.parse(localStorage.getItem("mycart-data")) || [];         
      console.log("장바구니 상품 갯수",localsData.length)

  const [force, setForce] = useState(true);//강제 리렌더링을 위한 상태변수
  const chgNum = () => setForce(!force);//강제 리렌더링 함수
              
return (
    <>
      <div style={{ height: "120px" }}></div>
      <div className="select_cart-favorite">
        <button
          className="mycart-button"
          onClick={() => setShowMyCart(true)}
          style={{ fontWeight: showMyCart ? 'bold' : 'normal' }}
        >
         
          바스켓백({localsData.length})
        </button>
        <button
          className="favorite-button"
          onClick={() => setShowMyCart(false)}
          style={{ fontWeight: !showMyCart ? 'bold' : 'normal' }}
        >
          마음에 드는 제품<IoMdHeartEmpty size={17} style={{marginTop:"3px"}} color='#2c2c2c;'/>
        </button>
      </div>
     {showMyCart ? <MyCart chgNum={chgNum} /> : <Favorite />}
    </>
  );
}

export default MyCartSelPg;