import React, { useContext, useEffect } from "react";
//카트리스트 scss 불러오기
import "../../css/cart_list.scss";
import { dCon } from "../func/dCon";
//제이쿼리 불러오기
import $, { data } from "jquery";
import { Link } from "react-router-dom";

function CartList({optVal}) {


  //컨텍스트 API 불러오기
  const myCon = useContext(dCon);

  // console.log(myCon.setCartList);
  console.log("DetailPg.jsx에서 size버튼 클릭해서 전역으로 저장된 데이터:",optVal.current);
  //DetailPg.jsx에서 size버튼 클릭해서 전역으로 저장된 [[데이터]]
  const cartData= optVal.current;
  //cartData[이름,이미지주소,색상,사이즈];임

  //로컬스 데이터 가져오기
  const localsData=JSON.parse(localStorage.getItem("mycart-data"));
  



  return (
    <>
      <div className="cartlist-box">
        <div className="cartlist-bg"></div>
        <div className="addedcart-box">
          <h2>{cartData[3]} 사이즈가 장바구니에 추가됨</h2>
          {/* 오른쪽 상단 X엑스 버튼 */}
          <button
            className="cbtn"
            onClick={() => {
              
              $(".addedcart-box").animate({ right: "-100%" });
              $(".cartlist-bg").fadeOut(300);
              document.querySelector("html").style.overflow = "auto";
              //?????????순서대로 작동대어야함(안그러면 안이쁨)
              myCon.setCartList(false);//엑스버튼 클릭시false로 지우기, 이게 없으면 {cartData[3]}가 제대로 작동하지 않음....
            }}
          >
            X
          </button>
          <div className="item-box">
            <div className="item-img"><img src={process.env.PUBLIC_URL+cartData[1]} alt="" /></div>
            <div className="item-txt">
              <p>{cartData[0]}</p>
            <p>{cartData[2]}</p>
            </div>
          </div>
            <Link to={"/mycart"}>
          <button 
          className="look-my-cart" 
          onClick={()=>
            myCon.setCartList(false)
            }>
            장바구니 보기

            </button>
            </Link>
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
