import React from "react";
import { useState } from "react";
// 로컬스토리지 생성 JS
import { initData } from "../func/mem_fn";
// 회원가입 CSS 불러오기
import "../../css/mypagemodify-eml.scss";

function MyPageModifyPhone({ setShowCart }) {
  //setShowCart:모달창 닫기 상태변수, false로 해야 닫힘.

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
     phone: "올바른 전화번호 형식을 입력하십시오. 예)010XXXXXXXX, '-'생략",
  }; ///// msgEtc ///////
// [1] 입력요소 상태변수
// 5. 휴대폰 변수
const [phone, setPhone] = useState("");
// [2] 에러상태관리 변수
 // 5. 휴대폰 변수
  const [phoneError, setPhoneError] = useState(false);
// 5. 휴대폰 유효성 검사 ///////////
  const changephone = (e) => {
    // 입력된 값읽기
    let val = e.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거

    // 1. 휴대폰 유효성 검사식(따옴표로 싸지 말것!)
    const valid = /^(010|011|012|013|014|015|016|017|018|019)\d{3,4}\d{4}$/;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(val);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(val)) setPhoneError(false);
    else setPhoneError(true);

    // 4. 기존입력값 반영하기
    setPhone(val);
  }; ///////// changephone 함수 //////////


  //전체 유효성 검사 함수/////////////////////////////////////////////////////////////////////////////
  const totalValid = () => {
    if (!phone) setPhoneError(true);
    if (phone && !phoneError) return true;
    else return false;
  }; /////////// totalValid 함수 /////////////////////////////////////////////////////////////

  //saveModfy함수////////////////////////////////////////////////////////////////////////////////////
  const saveModify = (e) => {
    if (totalValid()) {
      //totalValid()(전체유효성검사) true이면
      const memData = JSON.parse(localStorage.getItem("mem-data"));
      let currid = JSON.parse(sessionStorage.getItem("minfo")).uid;      
      console.log(currid);
      memData.some((v) => {
        if (v.uid == currid) {
        
            v.phone = phone; //phone v.phone에 업데이트
       

          // 세션데이터(minfo) 업데이트하기
          sessionStorage.setItem("minfo", JSON.stringify(v));
          return true;
        }
      });
      //로컬데이터(mem-data)에도 업데이트 하기
      localStorage.setItem("mem-data", JSON.stringify(memData));

      setShowCart(false);
      alert("전화번호가 성공적으로 변경되었습니다.");
    } else {
      alert("Change your input!");
    }
  }; ////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="mypagemodify-box">
        {/* 전화번호**************************************************************************************************************** */}
        <input
          className="loginput"
          type="text"
          maxLength="11"
          placeholder=" " //placeholder에 공백값을 넣지 않으면 아이폰에서는 제대로 작동하지 않음.
          value={phone}
          onChange={changephone}
        />
        <label>전화번호</label>
        {
          //   에러일 경우 메시지 출력
          // 조건문 && 출력요소
          phoneError && (
            <div className="msg">
              <small>{msgEtc.phone}</small>
            </div>
          )
        }
      
       
      </div>
      <button className="save-modify" onClick={saveModify}>
        수정하기
      </button>
    </>
  );
}

export default MyPageModifyPhone;
