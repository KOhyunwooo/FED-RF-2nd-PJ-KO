import React, { useState } from "react";

//ham_gnb.scss불러오기
import "../../css/top_area_media.scss";

// 제이쿼리불러오기
import $ from "jquery";

//gnb데이터 불ㄹ러오기
import { gnbData } from "../data/gnb_data";
import { Link } from "react-router-dom";

function TopAreaMedia() {
  const [openIndex, setOpenIndex] = useState(null); // 열린 메뉴의 인덱스를 관리

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index); // 동일한 메뉴 클릭 시 닫힘
  };

  // 메뉴 여닫이 함수/////////////////////////////////////////////////////////////////////////////////
  const showHideMenu = (e) => {
    console.log("나는 showHideMenu", e.currentTarget); //<- 나 자신을 콘솔찍기
    // 1.전체메뉴 대상: .mbox
    $(".mbox").fadeToggle(200);
    //fadeIn() 서서히 나타남
    //fadeOut() 서서히 사라짐 -> display:none
    //fadeToggle() 서서히 나타남/ 사라짐 전환

    // 2.햄버거 버튼에 클래스 "on"넣기/ 뺴기
    $(e.currentTarget).toggleClass("on");
    // addClass() 클래스 넣기
    // removeClass() 클래스 뺴기
    // toggleClass() 클래스 넣기/ 뺴기

    console.log($(e.currentTarget).is(".on")); //<-e.currentTarget에 .on 이 있냐?
  };

  console.log(gnbData);
  return (
    <>
      <nav className="hamgnb">
        {/* 박스1: 자라로고, 로그인, 바스켓백, 햄버거버튼 */}
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
          <div className="ham" onClick={showHideMenu}>
            <span></span> <span></span> <span></span>
          </div>
        </div>
        {/* 박스2: gnb상위메뉴 */}
        <div className="box2">
          <div className="mbox">
          {/* ------------------------------------------------------------------- */}
            {gnbData.map((v, i) => (
              <li className="mmenu" key={i}>
                {/* gnb상위메뉴 링크 */}
                {<button to={v.link}>{v.txt}</button>}
                {
                  // 서브 메뉴 데이터가 있으면 하위 그리기/////////////////////
                  v.sub && (
                    <div className="smenu">
                      <aside className="smbx">
                        <ol>
                          {v.sub.map((v, i) => (
                            <li key={i}>
                              {/* v.txt가 특가상품일때 글자색 빨강으로 */}
                              <Link
                                to={v.link}
                                state={{ data: v.data }}
                                style={{
                                  color: v.txt == "특가 상품" ? "red" : "",
                                }}
                              >
                                {v.txt}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </aside>
                    </div>
                  )
                }
              </li>
            ))}
          </div>
          {/* ------------------------------------------------------------- */}
        </div>
        {/* 박스3: gnb하위메뉴 */}
        <div>


        </div>

        {/* 박스4: 검색 창 */}
            <input
              type="text"
              name="schinGnb" /* name은 백엔드 개발자를 위한 약속, 보통id랑 같은이름으로 함 */
              id="schinGnb"
              placeholder="검색"
              
            />
        <div className="box4">
        </div>
      </nav>
    </>
  );
}
export default TopAreaMedia;
