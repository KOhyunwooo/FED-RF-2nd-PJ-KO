import React from 'react';
import { useState } from 'react';
// 로컬스토리지 생성 JS
import { initData } from "../func/mem_fn";

function MyPageModifyEml(props) {
    // [1] 입력요소 상태변수
 // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // [2] 에러상태관리 변수
 // -> 에러상태값 초기값은 에러아님(false)
   // 1. 아이디변수
   const [userIdError, setUserIdError] = useState(false);
 
   // [ 아이디관련 메시지 프리셋 ] ////
   const msgId = [
     "유효한 이메일 주소를 입력하십시오.",
 
     "이미 사용중인 이메일 주소 입니다.",
 
     " ",
   ];
 
   // [ 기타 메시지 프리셋 ]
   const msgEtc = {
     pwd: "8자 이상의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
 
     confPwd: "비밀번호가 일치하지 않습니다",
 
     req: "필수 입력란입니다.",
 
     phone: "올바른 전화번호 형식을 입력하십시오",
   }; ///// msgEtc ///////
 
   // [3] 에러메시지 상태변수 : 초기값 msgId[0]
   // -> 기본 메시지가 출력됨
   const [idMsg, setIdMsg] = useState(msgId[0]);
 
   // [ 유효성 검사 함수 ] ///////
   // 1. 아이디 유효성 검사 ////////////
   const changeUserId = (e) => {
     // 입력된 값읽기
     let val = e.target.value;
 
     // 1. 아이디 유효성 검사식(따옴표로 싸지 말것!)
     const valid =
       /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
     // 유효성 검사방법: 정규식.test(값)
 
     // 2. 입력값 확인 : e.target
     // console.log(val);
 
     // 3. 에러상태 분기하기
     // 3-1. 에러 아닐때 (유효성검사만 통과한 경우)
     if (valid.test(val)) {
       console.log("통과했지만...!");
       // 아이디 검사를 위해 기본 데이터 생성호출!
       initData();
       // 로컬스토리지에 "mem-data"가 없으면 초기셋팅함!
 
       // 이제 중복 아이디 검사를 실행한다!!!
       // 1. 로컬스 변수할당
       let memData = localStorage.getItem("mem-data");
       console.log(memData);
 
       // 2. 로컬스 객체변환 (왜? 문자형이니까!)
       memData = JSON.parse(memData);
       console.log(memData);
       // -> 배열데이터로 변환!
       // 주의: JSON 파싱할때 원본형식이 제이슨 파일형식으로
       // 엄격하게 작성되어야 에러가 없음(마지막콤마 불허용 등)
 
       // 3. 배열이니까 현재 입력데이터의 아이디가
       // 기존 배열값으로 있는지 검사함!
       // 있으면 true, 없으면 false
       let isT = memData.some((v) => v.uid === val);
       console.log("중복id있어?", isT);
 
       // 4. true 일 경우 중복데이터 메시지 표시
       if (isT) {
         // 에러 메시지 업데이트
         setIdMsg(msgId[1]);
         // 에러상태값 업데이트
         setUserIdError(true);
       } ///// if /////
       // 5. false 일 경우 [성공 메시지] 표시
       else {
         // 에러상태값 업데이트 : 에러가 아님!(false)
         setUserIdError(false);
       } ///// else //////
 
       // [ 새로운 배열메서드 : some() ]
       // -> 조건에 맞는 값이 하나만 나오면 true처리함
       // 비교참고) every() 는 하나만 false이면 false리턴
       // let isT = memData.some(v=>{
       //     console.log("돌아!",v.uid);
       //     return v.uid===val;
       // });
       // let isT = memData.every(v=>{
       //     console.log("돌아!",v.uid);
       //     return v.uid===val;
       // });
 
       // 아이디 에러상태 업데이트(false)
       //   setUserIdError(false);
     } /// if /////////////////////////
     // 3-2. 에러일때 : 유효성 검사 에러
     else {
       console.log("에러~!");
       // 에러 메시지 업데이트
       setIdMsg(msgId[0]);
       // 아이디 에러상태 업데이트(true)
       setUserIdError(true);
     } /// else ///
 
     // 실제 userId 상태변수값이 업데이트 돼야만
     // 화면에 출력된다!
     setUserId(val);
   }; ////////// changeUserId 함수 ////////////
    return (
        <div>
           
              {/* 1. 이메일 아이디**************************************************************************************************************** */}
              <input
                className="loginput"
                type="text"
                maxLength="30"
                placeholder=" "//placeholder에 공백값을 넣지 않으면 아이폰에서는 제대로 작동하지 않음.
                value={userId}
                onChange={changeUserId}
              />
              <label>이메일</label>
              {
                //   에러일 경우 메시지 출력
                // 조건문 && 출력요소
                userIdError && (
                  <div className="msg">
                    <small>{idMsg}</small>
                  </div>
                )
              }
              {
                // 통과시 메시지 출력
                // 조건문 && 출력요소
                // 조건추가 : userId가 입력전일때 안보임처리
                // userId가 입력전엔 false로 리턴됨!
                !userIdError && userId && (
                  <div className="msg">
                    <small>{msgId[2]}</small>
                  </div>
                )
              }
            
        </div>
    );
}

export default MyPageModifyEml;