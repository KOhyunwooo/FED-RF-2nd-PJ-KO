// 로그인 페이지 컴포넌트 - Login.jsx
import React, { useContext, useEffect, useState } from "react";

// CSS 불러오기 (회원가입과 동일)
import "../../css/login.scss";

// 로컬 스토리지 셋팅 함수 호출!
import { initData } from "../func/mem_fn";
// 컨텍스트 API불러오기
import { dCon } from "../func/dCon";

function Login(props) {
  // 컨텍스트 사용
  const myCon = useContext(dCon);
  console.log(myCon.loginSts);

  // [ 상태관리변수 ] /////////////
  // [1] 입력요소 상태변수
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");

  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);

  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = ["필수 입력란입니다.", "유효한 이메일 주소를 입력하십시오."];
  // [ 비밀번호관련 메시지 프리셋 ] ////
  const msgPwd = ["필수 입력란입니다.", "비밀번호가 일치하지 않습니다."];

  // [3] 에러메시지 상태변수 : 초기값 msgId[0]
  // -> 기본 메시지가 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);
  const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);

  // [ 유효성 검사 함수 ] ///////
  // 1. 아이디 유효성 검사 ////////////
  const changeUserId = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값 체크 :
    // 1-1.빈값아니면 에러아님(false)
    if (val !== "") setUserIdError(false);
    //val이 빈값이 아니면 setUserIdError가 아니다(false)
    // 1-2.빈값이면 에러임(true)
    else {
      // (1) 메시지 띄우기(필수입력메시지)
      setIdMsg(msgId[0]); //"필수 입력"
      // (2) 에러상태값 변경하기
      setUserIdError(true); //setUserIdError가 맞음(true)
    } /////// else ///////////

    // 실제 userId 상태변수값이 업데이트 돼야만
    // 화면에 출력된다!
    setUserId(val);
  }; ////////// changeUserId 함수 ////////////

  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값 체크 :
    // 1-1.빈값아니면 에러아님(false)
    if (val !== "") setPwdError(false);
    //val이 빈값이 아니면 setPwdError가 아니다(false)
    // 1-2.빈값이면 에러임(true)
    else {
      // (1) 메시지 띄우기(필수입력메시지)
      setPwdMsg(msgPwd[0]); //"필수 입력"
      // (2) 에러상태값 변경하기
      setPwdError(true); //setPwdError가 맞음(true)
    } /////// else ///////////

    // 4. 기존입력값 반영하기
    setPwd(val);
  }; ///////// changePwd 함수 //////////

  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);

    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (userId && pwd && !userIdError && !pwdError) return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ///////////

  // [ 서브밋 기능함수 ] ////////////////
  const onSubmit = (e) => {
    // 1. 기본서브밋 막기
    e.preventDefault();

    console.log("최종검사:", totalValid());

    // 2. 유효성검사 전체 통과시
    if (totalValid()) {
      console.log("모두통과! 데이터조회!");

      // [회원정보를 로컬스토리지에 저장하기]

      // 1. 로컬스 체크함수호출(없으면 생성!)
      initData();

      // 2. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 3. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 4. 아이디 존재 여부 검사하기'
      let result = memData.find((v) => {
        if (v.uid === userId) return true;
      }); ////////find///////
      console.log("아이디 존재 여부 검사 결과", result);

      // 4.1 결과 값이 없으면 false처리됨!!
      if (!result) {
        // (1) 아이디 에러 메시지 선택하기
        setIdMsg(msgId[1]);
        // (2) 아이디 에러메시지 보이기
        setUserIdError(true);
      } //////if//////////
      // 4-2 결과값이 있으면 비밀번호검사
      else {
        //(1)아이디 에러메시지 숨기기
        setUserIdError(false);
        // (2) 비밀번호 검사: 입력비번 == 결과비번
        // 로그인 성공시 메시지 출력
        if (pwd === result.pwd) {
          // 같을 경우 로그인 성공처리
          // alert("로그인 성공!");
          //**************[로그인 후 셋팅작업] ****************//
          // 1. 로그인한 회원정보 세션스에 셋팅!
          // -> 서버 세션을 대신하여 사용함!
          // -> 결과기 result에 배열로 담김
          // -> 넣을때는 JSON.stringify()
          sessionStorage.setItem("minfo", JSON.stringify(result));
          // 2. 컨텍스트API의 로그인상태 업데이트
          myCon.setLoginSts(sessionStorage.getItem("minfo"));
          // ->업데이트된 minfo 세션스 값을 넣음!

          // 3. 로그인 환영메시지 셋팅함수 호출
          myCon.makeMsg(result.unm);

          // 4. 로그인 성공 메시지 버튼에 출력하기
          document.querySelector(".sbtn").innerText = "로그인 성공~!";

          // 5.라우팅 페이지 이동
          // 1초후 메인 페이지 이동
          setTimeout(() => {
            myCon.goPage("/");
          }, 1000);
        }
        // 로그인 실패시 메시지 출력
        else {
          //(1)비밀번호 에러메시지 선택하기
          setPwdMsg(msgPwd[1]);
          //(2)비밀번호 에러메시지 보이기
          setPwdError(true);
        }
        // ->원래 비밀번호는 암호화 되어 있으므로
        // 백엔드 비밀번호 검사 모듈로 대부분 검사한다!
      } /////else//////////

      // 배열.find()-> 있을경우 레코드 저장
      // find는 filter와 달리 배열로 저장하지 않고
      // 값만 저장함. 그래서 결과값이 없으면
      // undefined를 리턴함.
    } ///////// if /////////
    // 3. 불통과시 /////
    else {
      alert("Change your input!");
    } //// else ///////////
  }; /////////// onSubmit 함수 //////////

  // 화면 렌더링 구역/////////
  useEffect(() => {
    //아이디 입력창 포커스 넣기
    document.querySelector("#user-id").focus();
  }, []);

  // 코드 리턴구역 ////////////////////////
  return (
    <div className="outbx">
      <section className="login-left">
        <span className="logtit">고객님의 계정에 엑세스 하세요</span>
        <form method="post" action="process.php">
          <ul>
            <li>
              {/* 이메일 입력 */}
              <input
                id="user-id"
                className="loginput"
                type="text"
                maxLength="20"
                placeholder=" "
                value={userId}
                onChange={changeUserId}
              />
              <label for="user-id">이메일</label>
              {
                //   에러일 경우 메시지 출력
                // 조건문 && 출력요소
                // 조건추가 : userId가 입력전일때 안보임처리
                // userId가 입력전엔 false로 리턴됨!
                userIdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {idMsg}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              {/* 비밀번호 */}
              <input
                id="user-password"
                type="password"
                className="loginput"
                maxLength="20"
                placeholder=" "
                value={pwd}
                onChange={changePwd}
              />
              <label for="user-password">비밀번호</label>
              {
                // 에러일 경우 메시지 출력
                // 조건문 && 출력요소
                // 조건추가 : pwd가 입력전일때 안보임처리
                // pwd가 입력전엔 false로 리턴됨!
                pwdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {pwdMsg}
                    </small>
                  </div>
                )
              }
            </li>
            <li style={{ overflow: "hidden" }}>
              <button className="sbtn" onClick={onSubmit}>
                로그인
              </button>
            </li>
          </ul>
        </form>
      </section>
      <section className="login-right">
        <span className="logtit">고객님의 계정에 엑세스 하세요</span>
      </section>
    </div>
  );
}

export default Login;
