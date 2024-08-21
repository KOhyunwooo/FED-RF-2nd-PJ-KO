import React, { useEffect, useState } from "react";
import $ from "jquery";
import "jquery.cookie";
import "../../css/cookie-intro.scss";

//npm i jquery.cookie 해야함

function CookieIntro(props) {
  // 팝업의 표시 여부를 관리하는 상태
  const [isVisible, setIsVisible] = useState(false);
  // "다시 보지 않기" 체크박스의 상태를 관리
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 효과
    // 'popupSeen' 쿠키가 없으면 팝업을 표시
    if ($.cookie("popupSeen") !== "true") {
      setIsVisible(true);
    }
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행

  // 팝업 닫기 버튼 클릭 시 실행되는 함수
  const handleClose = () => {
    // 팝업과 배경을 서서히 사라지게 함
    $(".popup, .cookie-bgc").fadeOut(300, function () {
      // 애니메이션이 완료된 후 상태를 업데이트
      setIsVisible(false);
    });
    if (dontShowAgain) {
      // "다시 보지 않기"가 체크되었다면 1시간 동안 유효한 쿠키 설정
      $.cookie("popupSeen", "true", { expires: 1 / 24 });
    }
  };

  // PDF 파일 열기 함수
  const openPDF = () => {
    window.open(process.env.PUBLIC_URL + "/images/aaa.pdf", "_blank");
  };

  // 팝업이 보이지 않아야 할 때는 null 반환 (렌더링하지 않음)
  if (!isVisible) return null;

  return (
    <>
      <div className="popup">
         
        <span style={{display:"flex"}}>
          <h1 style={{whiteSpace:"nowrap",display:"flex",alignItems:"center",paddingLeft:"10px"}}>가이드</h1>
          <span style={{ color: "red", fontSize: "1.1rem" ,display:"flex",flexDirection:"column"}}>
            {" "}
            <p>&nbsp;&nbsp;※ React로 개발했습니다.</p>
            <p>&nbsp;&nbsp;※ Gnb 메뉴에 KIDS, HOME, aboutZARA는 구현하지 않았습니다.</p>
          </span>
        </span>
        {/* 클릭 시 PDF 파일을 여는 링크 */}
        <p
          onClick={openPDF}
          style={{
            cursor: "pointer",
            color: "blue",
            textDecoration: "underline",
            fontSize: "12px",
            padding: "10px",
          }}
        >
          여기를 클릭하여 PDF 파일을 열어보세요.
        </p>

        <div
          style={{
            border: "1px solid black",
            width: "100",
            padding: "10px",
            display: "flex",
            fontSize: "12px",
          }}
        >
          <div style={{ flex: 1 }}>
            <p>기본 로그인 정보1</p>
            <p>(주소Data 있음)</p>
            <p>아이디: admin</p>
            <p>비밀번호: 1111</p>
          </div>
          <div style={{ flex: 1 }}>
            <p>기본 로그인 정보2</p>
            <p>(주소Data 없음)</p>
            <p>아이디: ko</p>
            <p>비밀번호: 1111</p>
          </div>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              // fontWeight: "500",
              // whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            <p>
              <span style={{ color: "red", fontWeight: "bold" }}>
                로그인, 회원가입
              </span>{" "}
              가능합니다~~~!
            </p>
            <p>
              체크아웃페이지-편집에서{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                주소입력, 저장
              </span>{" "}
              가능!
            </p>
            <p>
              <span style={{ color: "red", fontWeight: "bold" }}>
                장바구니, 위시리스트
              </span>{" "}
              기능: 有
            </p>
            <p>
              프로필 편집(
              <span style={{ color: "red", fontWeight: "bold" }}>
                비밀번호,주소등 수정
              </span>
              ) 가능합니다!
            </p>
            <p>
              <span style={{ color: "red", fontWeight: "bold" }}>검색기능</span>
              : 有
            </p>
            {/* <p>메모이제이션(Footer): O</p> */}
          </div>
          {/* <div style={{ color: "grey", flex: 1 }}> */}
            {/* <p>메모이제이션(TopArea): X</p>
                        <p>메모이제이션(MainArea): X</p> */}
            {/* <p>DetailPg-이미지클릭시 이미지 확대: 미구현</p>
                        <p>ProductPg-버튼 기능: 미구현</p>
                        <p>aboutZaraPg: 미구현</p> */}
          {/* </div> */}
        </div>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: "12.5px",
            fontSize: "13px",
          }}
        >
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
          />{" "}
          1시간 동안 다시 보지 않기
        </label>
        <br />
        <br />
        <button
          style={{ cursor: "pointer" }}
          onClick={handleClose}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#030303";
            e.target.style.color = "#fdfdfd";
            e.target.style.transition = "0.3s ease";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#fdfdfd";
            e.target.style.color = "#030303";
          }}
        >
          닫기
        </button>
      </div>
      <div className="cookie-bgc"></div>
    </>
  );
}

export default CookieIntro;
