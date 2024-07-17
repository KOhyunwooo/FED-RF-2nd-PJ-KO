import React from "react";

//카트리스트 scss 불러오기
import "../../css/address_list.scss";
import { dCon } from "../func/dCon";
//제이쿼리 불러오기
import $, { data } from "jquery";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

function AddressList({ addressListDelete }) {
  
  const loc = useLocation();//링크 스테이트값으로 mycart.jsx에서 받아오기 위한 useLocation
  const totalPrice2=loc.state.totalPrice;//mycart.jsx에서 받아온 값

  //세션스토리지에서 현재로그인한 데이터 가져오기
  const mySessionData = JSON.parse(sessionStorage.getItem("minfo"));

  //컨텍스트 API 불러오기
  const myCon = useContext(dCon);

  //로컬스 데이터 가져오기
  const localsData = JSON.parse(localStorage.getItem("mycart-data"));

  //카트리스트 보이게->안보이게 하기////////////////////////////////////////////
  const [showCart, setShowCart] = useState(true); //초깃값true로 보이는 상태임
  useEffect(() => {
    if (showCart) {
      $(".addedcart-box").animate({ right: "0" });
      document.querySelector("html").style.overflow = "hidden";
      $(".cartlist-bg").fadeIn(300);
    } else {
      $(".addedcart-box").animate({ right: "-100%" });
      document.querySelector("html").style.overflow = "auto";
      $(".cartlist-bg").fadeOut(300);
      setTimeout(() => {
        myCon.setCartList(false);
        addressListDelete();//CheckOut.jsx에서 넘어온 <Addresslist/>삭제 함수
      }, 300);
    }
    return () => {
      //소멸자~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      $(".addedcart-box").stop(true, true); //.addedcart-box 애니매이션 소멸
      $(".cartlist-bg").stop(true, true); //.cartlist-bg 애니매이션 소멸
      document.querySelector("html").style.overflow = "auto"; //html오버플로우 오토로 복귀
      clearTimeout(); //클리어 타임아웃
    };
  }, [showCart]);

  return (
    <>
      <div className="addresslist-box">
        <div className="cartlist-bg"></div>
        <div className="addedcart-box">
          {/* 오른쪽 상단 X엑스 버튼 */}
          <button
            className="cbtn"
            onClick={() => {
              setShowCart(false);
            }}
          >
            <img src={process.env.PUBLIC_URL + "/images/icons/x.svg"} alt="x" />
          </button>
            <div style={{marginTop:"80px",marginBottom:"30px",paddingLeft:"20px", fontSize:"18px"}}>배송 위치를 선택하세요</div>
            <div className="address-txt-wrap">

              {mySessionData.address && mySessionData.address.length > 0 ? (
                mySessionData.address.map((v, i) => (
                  <div className="address-box" key={i}>
                    <div className="addresses">
                      <p>{mySessionData.unm}</p>
                      <p>{v.address}</p>
                      <p>{v.address2}</p>
                      <p>{v.zipcode}</p>
                      <p>대한민국</p>
                      <p>{mySessionData.phone}</p>
                    </div>
                    <span>편집</span>

                  </div>
                ))
              ) : (
                <p>등록된 주소가 없습니다.</p>
              )}
                     
            </div>
              <Link to={"/addaddresspg"} state={{totalPrice2}}>
              
              <div className="newaddress">새로운 주소 추가</div>
              </Link>

        </div>
      </div>
    </>
  );
}

export default AddressList;
