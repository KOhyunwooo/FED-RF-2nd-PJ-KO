import React, { useEffect } from 'react';
import MyCart from '../modules/MyCart';
import Favorite from '../modules/Favorite';
import { useState } from 'react';

function MyCartSelPg(props) {
 //showMyCart 기본값 true, MyCart 또는 Favorite 표시할 상태변수
  const [showMyCart, setShowMyCart] = useState(true);
  const localsData = JSON.parse(localStorage.getItem("mycart-data")) || [];


              // useState로 해봤는데 안됌
              //   const [lDLength,setLDLength] =useState(0);
              //   useEffect(()=>{
              //   //로컬스 데이터 가져오기///////////////////////////////////////////////////////////
              // const localsData = JSON.parse(localStorage.getItem("mycart-data")) || [];
              // //   console.log("이걸 장바구니에 뿌려야지", localsData);
              //   setLDLength(localsData.length);
              // },[lDLength])


              console.log("장바구니 상품 갯수",localsData.length)

              
return (
    <>
      <div style={{ height: "120px" }}></div>
      <button
        className="mycart-button"
        onClick={() => setShowMyCart(true)}
        style={{ fontWeight: showMyCart ? 'bold' : 'normal' }}
      >
        {/* 바스켓백({lDLength}) */}
        바스켓백({localsData.length})
      </button>
      <button
        className="favorite-button"
        onClick={() => setShowMyCart(false)}
        style={{ fontWeight: !showMyCart ? 'bold' : 'normal' }}
      >
        마음에 드는 제품
      </button>
     {showMyCart ? <MyCart /> : <Favorite />}
    </>
  );
}

export default MyCartSelPg;