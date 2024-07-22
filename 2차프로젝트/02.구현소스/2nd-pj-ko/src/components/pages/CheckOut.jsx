import React, { useContext, useState } from "react";
import { dCon } from "../func/dCon";
import Login from "./Login";
import "../../css/check-out.scss";

// 제이쿼리불러오기
import $ from "jquery";

import { FaRegBuilding } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useEffect } from "react";
import { addComma } from "../func/common_fn";
import { Link, useLocation } from "react-router-dom";
import AddressList from "../modules/AddressList";
import Switch from "../modules/Switch";
import DeliveryDate from "../modules/DeliveryDate ";
import SwiperCheckOut from "../plugin/SwiperCheckOut";

function CheckOut() {
  //세션스토리지에서 현재로그인한 데이터 가져오기
  const mySessionData = JSON.parse(sessionStorage.getItem("minfo"));
  // console.log(mySessionData.uid);

  //링크 스테이트값으로 mycart.jsx에서 받아오기 위한 useLocation
  const loc = useLocation();
  // console.log("받아 왔니?", loc.state.totalPrice);
  // 가져온값
  const totalPrice2 = loc.state.totalPrice;

  //전역(LayOut.jsx)에서 가져오기 위한컨텍스트
  const myCon = useContext(dCon);

  // 편집 클릭시 addresslist나오기 위한 상태변수만들기
  const [addressList, setAddressList] = useState(false);
  const showAddresslist = () => {
    setAddressList(true);
  };

  //재사용 상자 스위치 버튼 상태변수, 함수
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // 결제정보 상태변수, 함수/////////////////////
  const [selPayment, setSelPayment] = useState({
    text: "결제정보를 선택하여 주문을 완료하십시오.",
    color: "red",
  });
  const [selPay, setSelPay] = useState("");
  const paymentClick = (aaa) => {
    switch (aaa) {
      case "credit_cart":
        setSelPayment({
          tit: "신용카드",
          text: '"결제 승인"을 클릭하시면 KCP사이트로 이동 후 결제를 완료하실 수 있습니다.',
          color: "black",
        });
        setSelPay("credit_cart");
        break;
      case "kakaopay":
        setSelPayment({
          tit: "카카오페이",
          text: '"결제 승인"을 클릭하시면 결제를 완료할 수 있는 카카오페이 웹사이트로 이동될 것입니다.',
          color: "black",
        });
        setSelPay("kakaopay");
        break;
      case "naverpay":
        setSelPayment({
          tit: "네이버페이",
          text: '"결제 승인"을 클릭하시면 결제를 완료할 수 있는 네이버페이 웹사이트로 이동될 것입니다.',
          color: "black",
        });
        setSelPay("naverpay");
        break;
      default:
        setSelPayment({
          text: "올바른 결제 방법을 선택해주세요.",
          color: "red",
        });
        setSelPay("");
        break;
    }
  };

  //로컬스 데이터 가져오기///////////////////////////////////////////////////////////
  const localsData = JSON.parse(localStorage.getItem("mycart-data")) || [];

  //배송주소 선택해서 원하는 배송주소 넣기 위한 상태변수:기본값0(idx가0임)
  //프롭스다운해서 상태변경함.
  const [selAddr,setSelAddr] =useState(0);
  console.log("나는 0이어야함",selAddr)


  return (
    <>
      {!myCon.loginSts && <Login />}

      {myCon.loginSts && (
        <>
          <div className="check-out-item-box">
            <div className="check-out-box">
              <h1>배송</h1>
              <div className="where-delivery">
                <div className="get-hz-wrap">
                  <div className="gethome">
                    <p>
                      <IoHomeOutline fontSize={"15px"} />
                    </p>
                    <p>자택</p>
                  </div>
                  <div className="getzara">
                    <p>
                      <FaRegBuilding fontSize={"15px"} />
                    </p>
                    <p>ZARA 매장</p>
                  </div>
                </div>
                <div className="getaddress">
                  {/* 재사용상자 부분********** */}
                  <div className="reuse-box">
                    <label onClick={toggleSwitch}>재사용 상자</label>

                    {/* 스위치 버튼 */}
                    <Switch checked={isOn} onChange={toggleSwitch} />
                  </div>
                  {/* 배송날짜 */}
                  <p>
                    <DeliveryDate />
                  </p>
                  {/* 배송주소표시 */}
                  <p>
                    {mySessionData.address 
                      ? mySessionData.address[selAddr].unm
                      : ""}
                  </p>
                  <p>
                    {mySessionData.address 
                      ? mySessionData.address[selAddr].address
                      : ""}
                  </p>
                  <p>
                    {mySessionData.address 
                      ? mySessionData.address[selAddr].address2
                      : ""}
                  </p>
                  <p>
                    {mySessionData.address
                      ? mySessionData.address[selAddr].phone
                      : ""}
                  </p>

                  {mySessionData.address === "" ? (
                    <Link to="/addaddresspg" state={{ totalPrice2 }}>
                      <span>추가하기</span>
                    </Link>
                  ) : (
                    <span onClick={showAddresslist}>편집</span> //클릭시 addressList 를 true로 바꿔줌
                  )}
                  {
                    addressList && (
                      <AddressList
                        addressListDelete={() => setAddressList(false)}
                       
                        setSelAddr={setSelAddr}
                      />
                    )
                    // addressListDelete는 addressListDelete를 false 하는 함수: 자식컴포넌트로 보내줌
                    // addressListDelete는 addressListDelete를 false 하면 AddressList를 삭제함
                  }
                </div>
              </div>

              <h1>결제</h1>
              <div className="payment-outbox">
                <div className="payment">
                  <div
                    className={`payment-imgbox ${
                      selPay === "credit_cart" ? "on" : ""
                    }`}
                    onClick={() => paymentClick("credit_cart")}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icons/credit_card.svg"
                      }
                      alt="credit_card"
                    />
                  </div>
                  <div
                    className={`payment-imgbox ${
                      selPay === "kakaopay" ? "on" : ""
                    }`}
                    onClick={() => paymentClick("kakaopay")}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icons/kakaopay.svg"
                      }
                      alt="kakaopay"
                    />
                  </div>
                  <div
                    className={`payment-imgbox ${
                      selPay === "naverpay" ? "on" : ""
                    }`}
                    onClick={() => paymentClick("naverpay")}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icons/naverpay.svg"
                      }
                      alt="naverpay"
                    />
                  </div>
                </div>
                <div className="payment-txtbox">
                  <h3 style={{ color: selPayment.color }}>{selPayment.tit}</h3>
                  <p style={{ color: selPayment.color }}>{selPayment.text}</p>
                </div>
              </div>
            </div>
            <div className="check-out-box2">
              <h1>배송요약</h1>
              <div className="check-out-item">
                <div className="check-out-item-txt">
                  <p>
                    <DeliveryDate />
                  </p>
                  <p>{localsData.length} 아이템</p>
                </div>
                <SwiperCheckOut />
              </div>
            </div>
          </div>

          {/* 최하단 fixed된 계속버튼 있는곳 //MyCart.jsx에서 재사용*/}
          <div className="buybar2">
            <span className="buytxt" style={{ justifySelf: "end" }}>
              {totalPrice2 > 50000 ? (
                "배송비 무료"
              ) : (
                <>
                  <span>상품 ₩{addComma(totalPrice2)}</span>
                  <span> + 배송 ₩3000</span>
                </>
              )}
            </span>
            <span>
              <p>
                총&nbsp;&nbsp;&nbsp;&nbsp;₩&nbsp;
                {totalPrice2 > 50000
                  ? addComma(totalPrice2)
                  : addComma(totalPrice2 + 3000)}
              </p>
              <p>*&nbsp;부가세 포함</p>
            </span>

            <button className="buybutton">결제 승인</button>
          </div>
        </>
      )}
    </>
  );
}

export default CheckOut;
