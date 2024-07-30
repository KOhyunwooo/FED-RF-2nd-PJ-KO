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

function AddressList({ addressListDelete, setSelAddr }) {
  const loc = useLocation(); //링크 스테이트값으로 mycart.jsx에서 받아오기 위한 useLocation
  const totalPrice2 = loc.state.totalPrice; //mycart.jsx에서 받아온 값

  //세션스토리지에서 현재로그인한 데이터 가져오기
  const mySessionData = JSON.parse(sessionStorage.getItem("minfo"));
  //로컬스토리지 멤버들 데이터 가져오기
  const tgData = JSON.parse(localStorage.getItem("mem-data"));

  //컨텍스트 API 불러오기
  const myCon = useContext(dCon);

  //로컬스 데이터 가져오기
  const localsData = JSON.parse(localStorage.getItem("mycart-data"));

  console.log("보낼거", mySessionData.address);

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
        addressListDelete(); //CheckOut.jsx에서 넘어온 <Addresslist/>삭제 함수
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
        <div className="cartlist-bg" onClick={()=>{setShowCart(false);}}></div>
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
          <div className="modal-tit">배송 위치를 선택하세요</div>
          <div className="address-txt-wrap">
            {mySessionData.address && mySessionData.address.length > 0 ? (
              mySessionData.address.map((v, i) => (
                <div className="address-box" key={i}>
                  <div
                    className="addresses"
                    onClick={() => {
                      // ()=> 이거 꼭 해줄것
                      setShowCart(false);
                    //   console.log(tgData);
                    // 해당 주소 순서 바꾸기
                      tgData.find((v) => {
                        // 사용자전체 정보중 uid가 세셔정보와 일치하는 데이테만 선택
                        if (v.uid == mySessionData.uid) {
                        //   console.log(v.uid, "/", mySessionData.uid);
                          // 임시변수에 현재 변경할 주소속성값 저장
                          let temp = v.address[i];
                        //   console.log(temp);
                          // 실제 객체 정보중 해당순번의 주소데이터 삭제!
                          v.address.splice(i, 1);
                          // 주소 배열중 맨 앞에 저장된 주소넣기(순번을 맨앞으로 이동)
                          v.address.unshift(temp);
                        //   console.log("결과:", v.address);
                        //   console.log("결과전체:", v);

                          // 세션정보도 업데이트하기(현재 로그인 사용자 정보 업데이트)
                          sessionStorage.setItem(
                            "minfo",
                            JSON.stringify(v)
                          );
                          return true;
                        } /// if ////
                      }); // find 내부함수 ///
                      // 실제 사용자 주소정보 반영하기 (전체 회원정보중 현재사용자 정보 업데이트)
                    //   console.log(sessionStorage.getItem("minfo"));
                      localStorage.setItem("mem-data", JSON.stringify(tgData));
                      // 서브컴포넌트 리랜더링
                      setSelAddr(0);
                    }}
                  >
                    <p>{v.unm}</p>
                    <p>{v.address}</p>
                    <p>{v.address2}</p>
                    <p>{v.zipcode}</p>
                    <p>대한민국</p>
                    <p>{v.phone}</p>
                  </div>
                  <Link
                    to={"/addaddresspg"}
                    state={{
                      addressIndex: i, //선택된 순번넘기기
                      addressData: v, //선택된 값(주소1,주소2,우편번호,어드레스안에 이름,어드레스안에 번호)넘기기
                      totalPrice2: totalPrice2, //총합계값 넘기기
                    }}
                  >
                    <span>편집</span>
                  </Link>
                </div>
              ))
            ) : (
              <p>등록된 주소가 없습니다.</p>
            )}
          </div>
          <Link to={"/addaddresspg"} state={{ totalPrice2 }}>
            <div className="newaddress">새로운 주소 추가</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AddressList;
