import React, { useState } from "react";
import { useLocation } from "react-router-dom";
//css불러오기
import "../../css/add_address_pg.scss";
import { addComma } from "../func/common_fn";

function AddAddressPg({ totalPrice2 }) {
  //링크 스테이트값으로 CheckOut.jsx에서 받아오기 위한 useLocation
  const loc = useLocation();
  const totalPrice3 = loc.state.totalPrice2;
  console.log("addaddresspg로 넘어온 총합게값", totalPrice3);

  /////////////////////////////////입력요소 상태관리변수///////////////////////
  //1.아이디 입력요소 상태변수
  const [userName, setUserName] = useState("");
  //2.우편번호 입력요소 상태변수
  const [userZipCode, setUserZipCode] = useState("");
  //3.주소 입력요소 상태변수
  const [userAddress, setUserAddress] = useState("");
  //3.상세주소 입력요소 상태변수
  const [userAddress2, setUserAddress2] = useState("");
  //3.전화번호 입력요소 상태변수
  const [userPhoneNum, setUserPhoneNum] = useState("");
  /////////////////////////////////에러 상태관리변수:초기값,에러아님(false)///////////////////////
  //1.아이디 에러 상태변수
  const [userNameError, setUserNameError] = useState(false);
  //2.우편번호 에러 상태변수
  const [userZipCodeError, setUserZipCodeError] = useState(false);
  //3.주소 에러 상태변수
  const [userAddressError, setUserAddressError] = useState(false);
  //3.상세주소 에러 상태변수
  const [userAddressError2, setUserAddressError2] = useState(false);
  //3.전화번호 에러 상태변수
  const [userPhoneNumError, setUserPhoneNumError] = useState(false);

  /////////////////////////////메시지 프리셋
  const msg = ["필수 입력란입니다."];

  return (
    <>
      <div style={{ marginTop: "100px" }}></div>
      <div className="add-address-pg-box">
        <div className="outbx addadd">
          <span className="addadd-txt">개인 정보를 입력하세요.</span>
          <span className="addadd-txt2">
            우편번호를 입력하여 주소를 검색하세요. 주소 필드는 검색을 기반으로
            자동 완성됩니다. 주소 2 필드에 필요한 정보를 입력하여 주소를 완성할
            수 있습니다.
          </span>
          <div className="login-left">
            <ul>
              <li>
                {/* 1. 이름**************************************************************************************************************** */}
                <input
                  className="loginput"
                  type="text"
                  maxLength="30"
                  placeholder=" " //placeholder에 공백값을 넣지 않으면 아이폰에서는 제대로 작동하지 않음.
                  value={userName}
                  // onChange={changeUserId}: 유효성검사
                />
                <label>이름</label>
                {/* {
                          //   에러일 경우 메시지 출력
                          // 조건문 && 출력요소
                          userIdError && (
                            <div className="msg">
                              <small>{idMsg}</small>
                            </div>
                          )
                        } */}
              </li>
              {/* 우편번호**************************************************************************************************************** */}
              <li>
                <input
                  className="loginput"
                  type="text"
                  maxLength="30"
                  placeholder=" "
                  value={userZipCode}
                  // onChange={changePwd}: 유효성검사
                />
                <label>우편번호</label>
                {/* {
                          // 에러일 경우 메시지 출력
                          // 조건문 && 출력요소
                          pwdError && (
                            <div className="msg">
                              <small>{msgEtc.pwd}</small>
                            </div>
                          )
                        } */}
              </li>
              {/* 주소**************************************************************************************************************** */}
              <li>
                <input
                  className="loginput"
                  type="text"
                  maxLength="30"
                  placeholder=" "
                  value={userAddress}
                  // onChange={changeChkPwd}: 유효성검사
                />
                <label>주소</label>
                {/* {
                          // 에러일 경우 메시지 출력
                          // 조건문 && 출력요소
                          chkPwdError && (
                            <div className="msg">
                              <small>{msgEtc.confPwd}</small>
                            </div>
                          )
                        } */}
              </li>
              {/* 상세 주소**************************************************************************************************************** */}
              <li>
                <input
                  className="loginput"
                  type="text"
                  maxLength="20"
                  placeholder=" "
                  value={userAddress2}
                  // onChange={changeUserName}: 유효성검사
                />
                <label>상세주소</label>
                {/* {
                          // 에러일 경우 메시지 출력
                          // 조건문 && 출력요소
                          userNameError && (
                            <div className="msg">
                              <small>{msgEtc.req}</small>
                            </div>
                          )
                        } */}
              </li>
              {/* 전화**************************************************************************************************************** */}
              <li>
                <input
                  className="loginput"
                  type="text"
                  maxLength="11"
                  placeholder=" "
                  value={userPhoneNum}
                  // onChange={changephone}: 유효성검사
                />
                <label>전화</label>
                {/* {
                          // 에러일 경우 메시지 출력
                          // 조건문 && 출력요소
                          phoneError && (
                            <div className="msg">
                              <small>{msgEtc.phone}</small>
                            </div>
                          )
                        } */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 최하단 fixed된 계속버튼 있는곳 //MyCart.jsx에서 재사용*/}
      <div className="buybar">
        <span className="buytxt"></span>
        <span>
          <b>
            총&nbsp;&nbsp;&nbsp;&nbsp;₩&nbsp;
            {addComma(totalPrice3)}
          </b>
          <p>*&nbsp;부가세 포함</p>
        </span>

        <button className="buybutton">계속</button>
      </div>
    </>
  );
}

export default AddAddressPg;
