import React, { useState } from "react";

//ham_gnb.scss불러오기
import "../../css/top_area_media.scss";

// 제이쿼리불러오기
import $ from "jquery";

//gnb데이터 불ㄹ러오기
import { gnbData } from "../data/gnb_data";
import { Link } from "react-router-dom";

function TopAreaMedia() {
  const [selectedIndex, setSelectedIndex] = useState(0); // 선택된 상위 메뉴 인덱스 상태 관리,상태를 통해 현재 선택된 메뉴의 인덱스를 저장.

  /* 클래스들 제거함수 */
  const clickX = () => {
    $(".mbox").removeClass("on");
    $(".ham").removeClass("on");
    $("html").removeClass("on");
  };

  const 클릭된순번 = (index) => {
    setSelectedIndex(index); // 메뉴 클릭 시 선택된 인덱스 업데이트,

    //클릭된순번 === "about ZARA"일때 clickX(); 해라.
    // if (gnbData[index].txt === "about ZARA") {
    //   clickX();
    // }
  };
  // 메뉴 여닫이 함수/////////////////////////////////////////////////////////////////////////////////
  const showHideMenu = (e) => {
    console.log("나는 showHideMenu", e.currentTarget); //<- 나 자신을 콘솔찍기
    // 1.전체메뉴 대상: .mbox
    $(".mbox").toggleClass("on");
    //fadeIn() 서서히 나타남
    //fadeOut() 서서히 사라짐 -> display:none
    //fadeToggle() 서서히 나타남/ 사라짐 전환

    // 2.햄버거 버튼에 클래스 "on"넣기/ 뺴기
    $(e.currentTarget).toggleClass("on");
    // addClass() 클래스 넣기
    // removeClass() 클래스 뺴기
    // toggleClass() 클래스 넣기/ 뺴기
    $("html").toggleClass("on");

    // console.log($(e.currentTarget).is(".on")); //<-e.currentTarget에 .on 이 있냐?
  };

  console.log(gnbData);
  return (
    <>
      <nav className="hamgnb">
        {/* 박스1: 자라로고, 로그인, 바스켓백, 햄버거버튼///////////////////////////////////////////// */}
        <div className="box1">
          <Link to="/">
            <div className="imgbox">
              <img
                src="/images/zara_logo.png"
                alt="자라로고"
                
                onClick={clickX}
              />
            </div>
          </Link>
          <div className="loginbox">
            <Link to="#">
              <span
                style={{
                  whiteSpace: "nowrap",
                  marginLeft: "10px",
                }}
              >
                로그인
              </span>
            </Link>
            <Link to="#">
              <span
                style={{
                  whiteSpace: "nowrap",
                  marginLeft: "10px",
                }}
              >
                바스켓백(0)
              </span>
            </Link>
          </div>
          {/* 햄버거 버튼 */}
          <div className="ham" onClick={showHideMenu}>
            <span></span> <span></span> <span></span>
          </div>
        </div>

        {/* 박스2: gnb메뉴/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="box2">
          <div className="mbox">
            {/* ------------------------------------------------------------------- */}
            <div className="minbox">
              <ul className="gnb-list">
                {gnbData.map((v, i) => (
                  <li key={i}>
                    <button
                      //selectedIndex 가 i 와 같으면 클래스네임gnblink에 on클래스 추가
                      className={`gnb-button ${
                        selectedIndex === i ? "on" : ""
                      }`}
                      onClick={() => 클릭된순번(i)} //button 온클릭시 클릭된순번(i)실행
                    >
                      {v.txt}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="smenu-box">
                <div
                  className="smenu-wrap" //순번 가로로 400vw 만듬
                  style={{
                    transform: `translateX(-${selectedIndex * 100}vw)`,
                  }} //선택된순번*100 해서 vw값 변환
                >
                  {gnbData.map((v, i) => (
                    <div key={i} className="sub-menu">
                      {v.sub && (
                        <aside className="sm-box">
                          <ol>
                            {v.sub.map((v, i) => (
                              <li key={i}>
                                <Link
                                  to={v.link}
                                  state={{
                                    data: v.data,
                                  }}
                                  style={{
                                    color: v.txt === "특가 상품" ? "red" : "",
                                  }}
                                  onClick={clickX}
                                >
                                  {v.txt}
                                </Link>
                              </li>
                            ))}
                            <li className="hideimg">
                              <Link to={v.link}>
                                <img src={v.src} alt={v.txt} />
                              </Link>
                            </li>
                          </ol>
                        </aside>
                      )}

                      {v.txt === "about ZARA" &&  (
                        <div className="about-zara">
                          <p style={{fontSize:"1.1rem",padding:"20px"}}>
                            ZARA는 세계 최대 규모의 패션 그룹인 Inditex의 대표
                            브랜드로 전세계에서 가장 큰 패션 브랜드 중
                            하나입니다. 고객은 디자인, 생산, 유통 및 판매를 모두
                            총괄하는 Zara의 비지니스 모델의 핵심입니다. 더 많은
                            정보를 원하시면 Inditex 그룹의 홈페이지를 참고하시기
                            바랍니다.
                            <a href="https://www.inditex.com" target="_blank">www.inditex.com</a>                                                       
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="schinGnb" /* name은 백엔드 개발자를 위한 약속, 보통id랑 같은이름으로 함 */
                  id="schinGnb"
                />
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------- */}
        </div>
      </nav>
    </>
  );
}
export default TopAreaMedia;
