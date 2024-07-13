import React, { useContext } from "react";
//마이카트 (장바구니)scss불러오기
import "../../css/my_cart.scss";

import $ from "jquery";
import { Link } from "react-router-dom";
import { dCon } from "../func/dCon";
import { addComma } from "../func/common_fn";

function MyCart(props) {

  //컨텍스트 api 가져오기
  const myCon= useContext(dCon);
  //로컬스 데이터 가져오기///////////////////////////////////////////////////////////
  const localsData = JSON.parse(localStorage.getItem("mycart-data")) || [];
  console.log("이걸 장바구니에 뿌려야지", localsData);


  return (
    <>
     
      <div style={{ height: "80px" }}></div>
      
      
      <button className="mycart-button">바스켓백({localsData.length})</button>
      <button className="favorite-button">마음에 드는 제품</button>
      <div className="mycart-txt">
        장바구니에 담긴 상품은 구매가 완료될 때까지 예약되지 않습니다.
      </div>
      <div className="mycart-box">
        <div className="product-list5">
          {localsData.map((v, i) => (
            <div key={i} className="product-item chgop">
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + v.isrc}
                  alt={v.name}
                  className="product-image"
                />
              </Link>
              <div className="txt-box">
                {/* x버튼:삭제 버튼/////////////////////////////////////////////// */}
                <button className="del-button" onClick={()=>{
                  
                  //1.데이터 지우기
                  localsData.splice(i,1);
                   // 2.데이터 문자화하기: 변경된 원본을 문자화(문자화: json형식)해서 =res에 담기
                   let res =JSON.stringify(localsData);
                   // 3. 로컬스("cart-data")에 반영하기
                   localStorage.setItem("mycart-data",res);

                   // 4.카트리스트 전역상태변수 설정//상태가 res가 들어간 상태로 재렌더링
                   myCon.setLocalsMycart(res);
                  

                   // 5. 데이터 개수가 0 이면 카트리스트 상태변수를 false로 변경하여 카트리스트 출력 없애기.
                    if (localsData.length ==0)
                       myCon.setCartList(false); //myCon.setCartList(false);는 index.js상태관리변수:true시<CartList/>출력임

                }}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/icons/multiply_thin.png"
                    }
                    alt="x"
                  />
                </button>
                {/* <img src={process.env.PUBLIC_URL+"/images/icons/multiply.png"} alt="minus" /> */}

                <span>{v.name}</span>
                <span className="price">
                  {v.price && <p>₩{addComma(v.price)}</p>}
                  {v.price1 && (
                    <p>
                      {v.price1}&nbsp;₩{addComma(v.price2)}
                    </p>
                  )}
                </span>
                <span>
                  {v.size} | {v.color}
                </span>

                {/* +-버튼 박스**************************** */}
                <div className="cntbox">
                  <button onClick={(e)=>{
                     let tg = $(e.currentTarget).siblings(
                      "input");
                    tg.val(Number(tg.val()) + 1);
                  }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/plus.svg"}
                      alt="plus"
                    />
                  </button>
                  <input type="text" readOnly value={1} />
                  <button onClick={(e)=>{
                     let tg = $(e.currentTarget).siblings(
                      "input");
                    tg.val(Number(tg.val()) ==1?1:Number(tg.val())- 1);
                  }}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icons/minus.svg"}
                      alt="minus"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* 최하단 fixed된 계속버튼 있는곳 */}
      <div className="buybar">       
        <span className="buytxt">
          *&nbsp;&nbsp;계속 진행함으로써 본인은 구매 조건을 읽고 이에 동의하며 Zara의
          개인정보 및 쿠키 정책을 이해했음을 선언합니다.
        </span>
        <b className="totals">총 W: 1124124</b>
        <button className="buybutton">계속</button>
      </div>

      <h1>여기에 추천상품 들어올것↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓</h1>
    </>
  );
}

export default MyCart;
