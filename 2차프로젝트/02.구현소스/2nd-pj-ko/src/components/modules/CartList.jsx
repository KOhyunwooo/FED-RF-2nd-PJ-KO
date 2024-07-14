import React, { useContext, useEffect, useState } from "react";
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
  console.log("Detailpg->myCon.optVal.current->Layout.jsx에서 상태변수로 담아서<CartList optVal={optVal}/>로 구조분해할당으로 가져옴",optVal.current);
  
  //DetailPg.jsx에서 size버튼 클릭해서 전역으로 저장된 [[데이터]]
  const cartData= optVal.current;
  //cartData[이름,이미지주소,색상,사이즈];임

  //로컬스 데이터 가져오기
  const localsData=JSON.parse(localStorage.getItem("mycart-data"));
  

  //카트리스트 보이게->안보이게 하기////////////////////////////////////////////  
  const [showCart,setShowCart]= useState(true);//초깃값true로 보이는 상태임
  useEffect(()=>{
      if(showCart){
        $(".addedcart-box").animate({ right: "0" });
        document.querySelector("html").style.overflow = "hidden";
        $(".cartlist-bg").fadeIn(300);
      }
      else{
        $(".addedcart-box").animate({ right: "-100%" });
        document.querySelector("html").style.overflow = "auto";
        $(".cartlist-bg").fadeOut(300);
        setTimeout(() => {
          myCon.setCartList(false);
        }, 300); 
      }
      return () => {//소멸자~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
        $(".addedcart-box").stop(true, true);//.addedcart-box 애니매이션 소멸
        $(".cartlist-bg").stop(true, true);//.cartlist-bg 애니매이션 소멸
        document.querySelector("html").style.overflow = "auto"; //html오버플로우 오토로 복귀
        clearTimeout();//클리어 타임아웃
      };
  },[showCart])



  return (
    <>
      <div className="cartlist-box">
        <div className="cartlist-bg"></div>
        <div className="addedcart-box">
          {/* 오른쪽 상단 X엑스 버튼 */}
          <button
            className="cbtn"
            onClick={() => {
              setShowCart(false);
              
              //?????????순서대로 작동대어야함(안그러면 안이쁨)
              // myCon.setCartList(false);//엑스버튼 클릭시false로 지우기, 이게 없으면 {cartData[3]}가 제대로 작동하지 않음....
            }}
          >
         <img src={process.env.PUBLIC_URL +"/images/icons/x.svg"} alt="x" />
          </button>
          <div className="itembox-wrap">
            <span className="addmsg">{cartData[3]} 사이즈가 장바구니에 추가됨</span>
            <div className="item-box">
              <div className="item-img"><img src={process.env.PUBLIC_URL+cartData[1]} alt="img" /></div>
              <div className="item-txt">
                <p>{cartData[0]}</p>
              <p>{cartData[2]}</p>
              </div>
            </div>
              <Link to={"/mycartselpg"}>
            <button
            className="look-my-cart"
            onClick={()=>
              setShowCart(false)
              }>
              장바구니 보기
              </button>
              </Link>
          </div>
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
