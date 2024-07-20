import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//css불러오기
import "../../css/add_address_pg.scss";
import { addComma } from "../func/common_fn";
//다음 주소찾기 오픈api불러오기
import DaumPostcode from "react-daum-postcode";

//제이쿼리 불러오기
import $ from "jquery";

function AddAddressPg({ totalPrice2 }) {

  
    const goNav = useNavigate();
  //유즈로케이션으로 받아오면 여기에 안써도 되는지 확인하기//
  //링크 스테이트값으로 CheckOut.jsx에서 받아오기 위한 useLocation
  const loc = useLocation();
  const totalPrice3 = loc.state.totalPrice2;
//888888888888888888888888888888888888888888888888888888888888 */
  const addressIndex = loc.state.addressIndex;
  const addressData = loc.state.addressData;
  // console.log("addaddresspg로 넘어온 총합게값", totalPrice3);
  
  /////////////////////////////////입력요소 상태관리변수/////////////////////////////////////////
  //1.이름 입력요소 상태변수
  const [userName, setUserName] = useState(addressData.unm || "");//*8888888888888888888888888888888888888888
  //2.우편번호 입력요소 상태변수
  const [userZipCode, setUserZipCode] = useState(addressData.zipcode || "");//*8888888888888888888888888888888888888888
  //3.주소 입력요소 상태변수
  const [userAddress, setUserAddress] = useState(addressData.address || "");//*8888888888888888888888888888888888888888
  //4.상세주소 입력요소 상태변수
  const [userAddress2, setUserAddress2] = useState(addressData.address2 || "");//*8888888888888888888888888888888888888888
  //5.전화번호 입력요소 상태변수
  const [userPhone, setUserPhone] = useState(addressData.phone || "");//*8888888888888888888888888888888888888888

  //주소찾기 창 보이기 상태변수
  const [isOpen, setIsOpen] = useState(false);
  /////////////////////////////////에러 상태관리변수:초기값,에러아님:(false)///////////////////////
  //1.이름 에러 상태변수
  const [userNameError, setUserNameError] = useState(false);
  //2.우편번호 에러 상태변수
  const [userZipCodeError, setUserZipCodeError] = useState(false);
  //3.주소 에러 상태변수
  const [userAddressError, setUserAddressError] = useState(false);
  //4.상세주소 에러 상태변수
  const [userAddress2Error, setUserAddress2Error] = useState(false);
  //5.전화번호 에러 상태변수
  const [userPhoneError, setUserPhoneError] = useState(false);

  /////////////////////////////메시지 프리셋////////////
  const msg = ["필수 입력란입니다."];
  /////////////////////////////////////////////////////

  /////////////////////////////////////////유효성 검사 구역//////////////////////////////////////////

  //이름 유효성검사 함수*******************************************
  const changeUserName = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값체크
    if (val !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존입력값 반영하기
    setUserName(val);
  }; //이름 유효성검사 함수**************************************

  //상세주소 유효성검사 함수*******************************************
  const changeUserAddress2 = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값체크
    if (val !== "") setUserAddress2Error(false);
    else setUserAddress2Error(true);

    // 2. 기존입력값 반영하기
    setUserAddress2(val);
  }; //상세주소 유효성검사 함수**************************************

  // 전화번호 유효성검사 함수***********************************
  const changephone = (e) => {
    // 입력된 값읽기
    let val = e.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거

    // 1. 휴대폰 유효성 검사식(따옴표로 싸지 말것!)
    const valid = /^(010|011|012|013|014|015|016|017|018|019)\d{3,4}\d{4}$/;
    
    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(val);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(val)) setUserPhoneError(false);
    else setUserPhoneError(true);

    // 4. 기존입력값 반영하기
    setUserPhone(val);
  }; //전화번호 유효성검사 함수***************************************

  // 주소,우편번호 유효성 검사 함수**********************************
  const changeAddr = () => {
    // 앞주소(자동입력값)
    let address = $(".userAddress").val();
    // 뒷주소(직접입력값)
    let address2 = $(".userAddress2").val();
    // 우편번호(자동입력값)
    let zipcode = $(".userZipcode").val();

    // 2. 빈값체크
    if (address !== "" && address2 !== "" && zipcode !== "") {
      //세값 모두 빈값이 아니면 에러아님
      setUserAddressError(false);
      setUserAddress2Error(false);
    } else {
      setUserAddressError(true);
      setUserAddress2Error(true);
    }

    // 3. 기존입력값 반영하기: 상태변수에 반영함
    // (1)앞주소 저장
    setUserAddress(address);
    // (2)뒷주소(상세주소) 저장
    setUserAddress(address2);
    // (3) 우편번호 저장
    setUserZipCode(zipcode);
    //  console.log(zipcode);
  };
  //주소,우편번호 유효성 검사 함수***********************************

  // [ 전체 유효성검사 체크함수 ]*********************************************이부분 이해 못함
  const totalValid = () => {
    // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userName) setUserNameError(true);
    if (!userZipCode) setUserZipCodeError(true);
    if (!userAddress) setUserAddressError(true);
    if (!userAddress2) setUserAddress2Error(true);
    if (!userPhone) setUserPhoneError(true);
    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (
      userName &&
      !userNameError &&
      userZipCode &&
      !userZipCodeError &&
      userAddress &&
      !userAddressError &&
      userAddress2 &&
      !userAddress2Error &&
      userPhone &&
      !userPhoneError
    )
      return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수*********************************************
  ////////////////////////////////////////유효성 검사 구역:끝////////////////////////////////////////////////

  //스타일 객체///////////////////////////////////
  //[1] 다음주소창 테마 디자인 객체(속성은 다음API)
  const themeObj = {
    bgColor: "#FFFFFF",
    pageBgColor: "#FFFFFF",
    postcodeTextColor: "#C05850",
    emphTextColor: "#222222",
  };
  //[2] 검색창 크기설정 객체
  const postCodeStyle = {
    width: "40vw",
    height: "60vh",
  };
  //[3] 전체박스 스타일 객체
  const wholeBoxStyle = {
    display: "inline-block",
    verticalAlign: "top",
  };
  //[4]팝업 스타일 객체
  const popupWindowStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    backgroundColor: "white",
    padding: "20px",
    border: "4px double #000",
    zIndex: "1",
  };
  //[5]닫기버튼 스타일
  const closeButtonStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    fontSize: "40px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };
  //DaumPostcode API 기능처리 함수/////////////////////////////////////////////////////////////////////
  //[1]주소선택완료시 처리함수(주소선택 완료시 주소가 들어감)
  const completeHandler = (data) => {
    //DaumPostcode API에서 반환된 data 객체에서 zonecode와 address를 추출하여 상태를 업데이트
    setUserZipCode(data.zonecode); //DaumPostcode API의 기본 동작:우편번호
    setUserAddress(data.address); //DaumPostcode API의 기본 동작:전체주소
  };
  //[2]주소창 닫기처리 함수
  const closeHandler = (state) => {
    //강제 닫기
    if (state === "FORCE_CLOSE") {
      setIsOpen(false);
    }
    //선택완료시 닫기
    else if (state === "COMPLETE_CLOSE") {
      setIsOpen(false);
    }
  };
  //[3]주소창 열기/닫기 토글기능 함수
  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };
  //DaumPostcode API 기능처리 함수:끝////////////////////////////////////////////////////

  //contin '계속'버튼 함수///////////////////////////////////////////
  const contin = (e) => {
    if (totalValid()) {//totalValid()(전체유효성검사) true이면
      const memData = JSON.parse(localStorage.getItem("mem-data"));
      let currid = JSON.parse(sessionStorage.getItem("minfo")).uid;
      console.log(currid);
      memData.some((v) => {
        if (v.uid == currid) {
            if(v.address == "") v.address = [];//v.address가 ""이면 [];만들고
             
            
            // 기존 주소 데이터 수정8888888888888888888888888888888888888888888888888888888888888888
          if (addressIndex !== undefined) {
            v.address[addressIndex] = {
              address: userAddress,
              address2: userAddress2,
              zipcode: userZipCode,
            };
          } else {
          v.address.push({//v.address에 {}이런모양으로 푸씨
            address: userAddress,
            address2: userAddress2,
            zipcode: userZipCode,
          });
        }
          // 세션데이터(minfo) 업데이트하기
          sessionStorage.setItem("minfo", JSON.stringify(v));
          return true;
        }
      });
        //로컬데이터(mem-data)에도 업데이트 하기
      localStorage.setItem("mem-data", JSON.stringify(memData));

      goNav("/checkout",{state:{totalPrice:totalPrice3}});//totalPrice라는 이름으로totalPrice3가지고 /checkout페이지로 가기
    } else {
      alert("Change your input!");
    }
  };

  //contin '계속'버튼 함수:끝///////////////////////////////////////////

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
                  onChange={changeUserName} // 유효성검사
                  onBlur={changeUserName} //포커스변경시 실행하는 유효성검사
                />
                <label>이름</label>
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  userNameError && (
                    <div className="msg">
                      <small>{msg}</small>
                    </div>
                  )
                }
              </li>
              {/* 우편번호**************************************************************************************************************** */}
              <li>
                <input
                  className="loginput"
                  type="text"
                  maxLength="30"
                  placeholder=" "
                  value={userZipCode}
                  readOnly                
                  onFocus={toggleHandler}
                  onChange={changeAddr} //유효성검사
                  // onBlur={changeAddr} //포커스변경시 실행하는 유효성검사
                />
                <label>우편번호</label>
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  userZipCodeError && (
                    <div className="msg">
                      <small>{msg}</small>
                    </div>
                  )
                }
              </li>
              {/* 주소**************************************************************************************************************** */}
              <li>
                <input
                  className="loginput"
                  type="text"
                  maxLength="30"
                  placeholder=" "
                  value={userAddress}
                  readOnly
                  onClick={toggleHandler}
                  onChange={changeAddr} //유효성검사
                  onBlur={changeAddr} //포커스변경시 실행하는 유효성검사
                />
                <label>주소</label>
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  userAddressError && (
                    <div className="msg">
                      <small>{msg}</small>
                    </div>
                  )
                }
              </li>
              {/* 상세 주소**************************************************************************************************************** */}
              <li>
                <input
                  className="loginput"
                  type="text"
                  maxLength="30"
                  placeholder=" "
                  value={userAddress2}
                  onChange={changeUserAddress2} //유효성검사
                  onBlur={changeUserAddress2} //포커스아웃시 실행하는 유효성검사
                />
                <label>상세주소</label>
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  userAddress2Error && (
                    <div className="msg">
                      <small>{msg}</small>
                    </div>
                  )
                }
              </li>
              {/* 전화**************************************************************************************************************** */}
              <li>
                <input
                  className="loginput"
                  type="text"
                  maxLength="11"
                  placeholder=" "
                  value={userPhone}
                  onChange={changephone} //유효성검사
                  onBlur={changephone} //유효성검사
                />
                <label>전화</label>
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  userPhoneError && (
                    <div className="msg">
                      <small>{msg}</small>
                    </div>
                  )
                }
              </li>
            </ul>
            {isOpen && (
              <div style={popupWindowStyle}>
                <DaumPostcode
                  theme={themeObj}
                  style={postCodeStyle}
                  onComplete={completeHandler}
                  onClose={closeHandler}
                />
                <button style={closeButtonStyle} onClick={toggleHandler}>
                  ×
                </button>
              </div>
            )}
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

        <button className="buybutton" onClick={contin}>
          계속
        </button>
      </div>
    </>
  );
}

export default AddAddressPg;
