import React, { useEffect } from 'react';
import MyCart from '../modules/MyCart';
import Favorite from '../modules/Favorite';
import { useState } from 'react';

function MyCartSelPg(props) {
 //showMyCart 기본값 true, MyCart 또는 Favorite 표시할 상태변수
  const [showMyCart, setShowMyCart] = useState(true);
  const [force, setForce] = useState(true);
  const localsData = JSON.parse(localStorage.getItem("mycart-data")) || [];


             
              


              console.log("장바구니 상품 갯수",localsData.length)
const chgNum = () => setForce(!force);
              
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
          마음에 드는 제품
        </button>
      </div>
     {showMyCart ? <MyCart chgNum={chgNum} /> : <Favorite />}
    </>
  );
}

export default MyCartSelPg;