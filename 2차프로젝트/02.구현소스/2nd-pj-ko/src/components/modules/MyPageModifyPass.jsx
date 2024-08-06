import React from "react";
import { useState } from "react";
import "../../css/mypagemodify-eml.scss";

// 에러 메시지를 상수로 정의하여 관리
const errMsg = {
  CURRENT_PASSWORD_MISMATCH: "기존 비밀번호가 일치하지 않습니다.",
  NEW_PASSWORD_INVALID: "특수문자, 문자, 숫자 형태의 5~15자리를 사용해주세요.",
  NEW_PASSWORD_MISMATCH: "새 비밀번호가 일치하지 않습니다.",
};

function MyPageModifyPass({ setShowCart }) {
  // 상태 변수 정의
  const [currentPwd, setCurrentPwd] = useState(""); // 현재 비밀번호
  const [newPwd, setNewPwd] = useState(""); // 새 비밀번호
  const [confirmNewPwd, setConfirmNewPwd] = useState(""); // 새 비밀번호 확인
  const [currentPwdError, setCurrentPwdError] = useState(false); // 현재 비밀번호 에러 상태
  const [newPwdError, setNewPwdError] = useState(false); // 새 비밀번호 에러 상태
  const [confirmNewPwdError, setConfirmNewPwdError] = useState(false); // 새 비밀번호 확인 에러 상태

  // 현재 비밀번호 변경 핸들러
  const changeCurrentPwd = (e) => {
    const val = e.target.value;
    const currPwd = JSON.parse(sessionStorage.getItem("minfo")).pwd; // 세션에서 현재 비밀번호 가져오기
    setCurrentPwdError(val !== currPwd); // 입력값과 세션의 비밀번호 비교
    setCurrentPwd(val); // 상태 업데이트
  };

  // 새 비밀번호 변경 핸들러
  const changeNewPwd = (e) => {
    const val = e.target.value;
    // 비밀번호 유효성 검사 정규식 (특수문자, 문자, 숫자 포함 5~15자)
    const validPwd = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    setNewPwdError(!validPwd.test(val)); // 유효성 검사 결과 설정
    setNewPwd(val); // 상태 업데이트
  };

  // 새 비밀번호 확인 변경 핸들러
  const changeConfirmNewPwd = (e) => {
    const val = e.target.value;
    setConfirmNewPwdError(val !== newPwd); // 새 비밀번호와 일치 여부 확인
    setConfirmNewPwd(val); // 상태 업데이트
  };

  // 전체 유효성 검사 함수
  const totalValid = () => {
    return (
      currentPwd && newPwd && confirmNewPwd && // 모든 필드가 입력되었는지 확인
      !currentPwdError && !newPwdError && !confirmNewPwdError // 에러가 없는지 확인
    );
  };

  // 비밀번호 변경 저장 함수
  const saveModify = () => {
    if (totalValid()) {
      const memData = JSON.parse(localStorage.getItem("mem-data")); // 로컬 스토리지에서 회원 데이터 가져오기
      const currid = JSON.parse(sessionStorage.getItem("minfo")).uid; // 세션에서 현재 사용자 ID 가져오기
      
      memData.some((v) => {
        if (v.uid === currid) {
          if (v.pwd === currentPwd) {
            v.pwd = newPwd; // 새 비밀번호로 업데이트
            // 세션 스토리지 업데이트
            sessionStorage.setItem("minfo", JSON.stringify(v));
            // 로컬 스토리지 업데이트
            localStorage.setItem("mem-data", JSON.stringify(memData));
            setShowCart(false); // 모달 닫기
            alert("비밀번호가 성공적으로 변경되었습니다.");
          } else {
            alert(errMsg.CURRENT_PASSWORD_MISMATCH);
          }
          return true; // 루프 종료
        }
      });
    } else {
      alert("입력 정보를 확인해주세요.");
    }
  };

  return (
    <>
      <ul className="mypagemodify-box">
        {/* 현재 비밀번호 입력 필드 */}
        <li>
          <input
            className="loginput"
            type="password"
            maxLength="30"
            placeholder=" "
            value={currentPwd}
            onChange={changeCurrentPwd}
          />
          <label>기존 비밀번호</label>
          {currentPwdError && (
            <div className="msg">
              <small>{errMsg.CURRENT_PASSWORD_MISMATCH}</small>
            </div>
          )}
        </li>
        {/* 새 비밀번호 입력 필드 */}
        <li>
          <input
            className="loginput"
            type="password"
            maxLength="30"
            placeholder=" "
            value={newPwd}
            onChange={changeNewPwd}
          />
          <label>새로운 비밀번호</label>
          {newPwdError && (
            <div className="msg">
              <small>{errMsg.NEW_PASSWORD_INVALID}</small>
            </div>
          )}
        </li>
        {/* 새 비밀번호 확인 입력 필드 */}
        <li>
          <input
            className="loginput"
            type="password"
            maxLength="30"
            placeholder=" "
            value={confirmNewPwd}
            onChange={changeConfirmNewPwd}
          />
          <label>새로운 비밀번호 확인</label>
          {confirmNewPwdError && (
            <div className="msg">
              <small>{errMsg.NEW_PASSWORD_MISMATCH}</small>
            </div>
          )}
        </li>
      </ul>
      {/* 수정하기 버튼 */}
      <button className="save-modify" onClick={saveModify}>
        수정하기
      </button>
    </>
  );
}

export default MyPageModifyPass;