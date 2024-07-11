import React, { useContext, useEffect } from "react";
//카트리스트 scss 불러오기
import "../../css/cart_list.scss";
import { dCon } from "../func/dCon";
//제이쿼리 불러오기
import $, { data } from "jquery";
import { Link } from "react-router-dom";

function CartList(props) {


  //컨텍스트 API 불러오기
  const myCon = useContext(dCon);

  console.log(myCon.setCartList);
  console.log("DetailPg.jsx에서 size버튼 클릭해서 전역으로 저장된 데이터:",myCon.optVal.current);
  //DetailPg.jsx에서 size버튼 클릭해서 전역으로 저장된 [[데이터]]
  const cartData= myCon.optVal.current;
  //cartData[이름,이미지주소,색상,사이즈];임

  //로컬스 데이터 가져오기
  const localsData=JSON.parse(localStorage.getItem("mycart-data"));
  


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
          <h3>{cartData[3]} 사이즈가 장바구니에 추가됨</h3>
          <button
            className="cbtn"
            onClick={() => {
              
              $(".addedcart-box").animate({ right: "-100%" });
              $(".cartlist-bg").fadeOut(300);
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
