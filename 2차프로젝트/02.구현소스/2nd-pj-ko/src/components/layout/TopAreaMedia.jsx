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

  const 클릭된순번 = (index) => {
    setSelectedIndex(index); // 메뉴 클릭 시 선택된 인덱스 업데이트,
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
    // $(e.currentTarget).toggleClass("on");
    // addClass() 클래스 넣기
    // removeClass() 클래스 뺴기
    // toggleClass() 클래스 넣기/ 뺴기

    // console.log($(e.currentTarget).is(".on")); //<-e.currentTarget에 .on 이 있냐?
  };

  console.log(gnbData);
  return (
    <>
      <nav className="hamgnb">
        {/* 박스1: 자라로고, 로그인, 바스켓백, 햄버거버튼///////////////////////////////////////////// */}
        <div className="box1">
          <Link to="/">
            <img
              src="/images/zara_logo.png"
              alt="자라로고"
              style={{ width: "100px" }}
            />
          </Link>
          <div className="loginbox">
            <Link to="#">
              <span style={{ whiteSpace: "nowrap", marginLeft: "10px" }}>
                로그인
              </span>
            </Link>
            <Link to="#">
              <span style={{ whiteSpace: "nowrap", marginLeft: "10px" }}>
                바스켓백(0)
              </span>
            </Link>
          </div>
          {/* 햄버거 버튼 */}
          <div className="ham" onClick={showHideMenu}>
            <span></span> <span></span> <span></span>
          </div>
        </div>

        {/* 박스2: gnb메뉴////////////////////////////////////////////////////////////////////////////// */}
        <div className="box2">
          <div className="mbox">
            {/* ------------------------------------------------------------------- */}
            <div className="menu-container">
              <ul className="gnb-list">
                {gnbData.map((v, i) => (
                  <li key={i} className="gnb-item">
                    <button
                      //selectedIndex 가 i 와 같으면 클래스네임gnblink에 on클래스 추가
                      className={`gnb-link ${selectedIndex === i ? "on" : ""}`}
                      onClick={() => 클릭된순번(i)} //button 온클릭시 클릭된순번(i)실행
                    >
                      {v.txt}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="sub-menu-container">
                <div
                  className="sub-menu-wrapper" //순번 가로로 400vw 만듬
                  style={{ transform: `translateX(-${selectedIndex * 100}vw)` }} //선택된순번*100 해서 vw값 변환
                >
                  {gnbData.map((v, i) => (
                    <div key={i} className="sub-menu">
                      {v.sub && (
                        <aside className="smbx">
                          <ol>
                            {v.sub.map((v, i) => (
                              <li key={i}>
                                <Link
                                  to={v.link}
                                  state={{ data: v.data }}
                                  style={{
                                    color: v.txt === "특가 상품" ? "red" : "",
                                  }}
                                >
                                  {v.txt}
                                </Link>
                              </li>
                            ))}
                          </ol>
                        </aside>
                      )}
                    </div>
                  ))}
                </div>
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
