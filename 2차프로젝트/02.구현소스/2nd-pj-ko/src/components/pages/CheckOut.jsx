import React, { useContext } from "react";
import { dCon } from "../func/dCon";
import Login from "./Login";
import "../../css/check-out.scss";

// 제이쿼리불러오기
import $ from "jquery";

import { FaRegBuilding } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useEffect } from "react";
import { addComma } from "../func/common_fn";
import { useLocation } from "react-router-dom";

function CheckOut() {
  //링크 스테이트로 받아오기 위한 useLocation
  const loc=useLocation();
  //전역(LayOut.jsx)에서 가져오기 위한컨텍스트
  const myCon = useContext(dCon);

  console.log("받아 왔니?",loc.state.totalPrice)

  return (
    <>
      {!myCon.loginSts && <Login />}

      {myCon.loginSts && (
        <>
          <div
            className="check-out-box"
            style={{ margin: "0 auto", paddingTop: "200px" }}
          >
            <h1>물품을 배송 받을 장소</h1>
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
                여기에 주소 서울시 강서구 어쩌구 저쩌구
              </div>
            </div>
            <div className="payment">{/* 결제 관련 내용 */}</div>
          </div>
  {/* 최하단 fixed된 계속버튼 있는곳 //MyCart.jsx에서 재사용*/}
          <div className="buybar">
            <span className="buytxt">
              *&nbsp;&nbsp;계속 진행함으로써 본인은 구매 조건을 읽고 이에
              동의하며 Zara의 개인정보 및 쿠키 정책을 이해했음을 선언합니다.
            </span>
            <span>
              <b>
                총&nbsp;&nbsp;&nbsp;&nbsp;₩&nbsp;
               {addComma(loc.state.totalPrice)}
              </b>
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
