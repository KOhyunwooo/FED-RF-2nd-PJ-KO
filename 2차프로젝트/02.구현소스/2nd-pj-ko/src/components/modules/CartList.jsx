import React, { useContext, useEffect } from "react";
//카트리스트 scss 불러오기
import "../../css/cart_list.scss";
import { dCon } from "../func/dCon";
//제이쿼리 불러오기
import $ from "jquery";

function CartList(props) {
  //컨텍스트 API 불러오기
  const myCon = useContext(dCon);

  console.log(myCon.setCartList);
  console.log(myCon.optVal.current);


  /////////setCartList상태로 html에 오버플로우히든주기:추가하기버튼 클릭시 뒷배경 안눌리게  //////////////////////////
  useEffect(() => {
    if (myCon.setCartList) {
      //mycon.cartList가 true냐 그럼 html에 오버플로우 히든
      document.querySelector("html").style.overflow = "hidden";
    } else {
      //아니면 오버플로우 오토
      document.querySelector("html").style.overflow = "auto";
    }

    //소멸자// 언마운트시 하는거
    return () => {
      document.querySelector("html").style.overflow = "auto";
    };
  }, [myCon.setCartList]); // myCon.cartList 상태가 변경될 때마다 useEffect 실행

  return (
    <>
      <div className="cartlist-box">
        <div className="cartlist-bg"></div>
        <div className="addedcart-box">
          <button
            className="cbtn"
            onClick={() => {
              myCon.setCartList(false); //상태변수 false로 바꿔서 숨겨버리기
            }}
          >
            X
          </button>
          <div className="item-box">
            <div className="item-img">이미지 들어올자리</div>
            <div className="item-txt">상품명, 색상 데이터 들어올자리</div>
          </div>
          <button className="look-my-cart">장바구니 보기</button>
          <div className="recommend-txt">추천상품</div>
          <div className="yu-gi-e-recommendcomp">
            여기에 추천상품 컴포넌트 들어와야함/여기에 추천상품 컴포넌트
            들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에 추천상품
            컴포넌트 들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에
            추천상품 컴포넌트 들어와야함/여기에 추천상품 컴포넌트
            들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에 추천상품
            컴포넌트 들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에
            추천상품 컴포넌트 들어와야함/여기에 추천상품 컴포넌트
            들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에 추천상품
            컴포넌트 들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에
            추천상품 컴포넌트 들어와야함/여기에 추천상품 컴포넌트
            들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에 추천상품
            컴포넌트 들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에
            추천상품 컴포넌트 들어와야함/여기에 추천상품 컴포넌트
            들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에 추천상품
            컴포넌트 들어와야함/여기에 추천상품 컴포넌트 들어와야함/여기에
            추천상품 컴포넌트 들어와야함/여기에 추천상품 컴포넌트
            들어와야함/여기에 추천상품 컴포넌트 들어와야함/
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
