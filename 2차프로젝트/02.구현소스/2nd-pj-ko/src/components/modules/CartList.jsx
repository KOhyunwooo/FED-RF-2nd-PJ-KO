import React, { useContext } from "react";
//카트리스트 scss 불러오기
import "../../css/cart-list.scss";
import { dCon } from "../func/dCon";
//제이쿼리 불러오기
import $ from "jquery";

function CartList(props) {
  //컨텍스트 API 불러오기
  const myCon = useContext(dCon);

  return (
    <>
      <div className="cartlist-box">
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
