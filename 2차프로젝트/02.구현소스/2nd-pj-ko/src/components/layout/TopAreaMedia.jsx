import React, { useEffect, useRef, useState } from "react";

//ham_gnb.scss불러오기
import "../../css/top_area_media.scss";

// 제이쿼리불러오기
import $ from "jquery";

//gnb데이터 불ㄹ러오기
import { gnbData } from "../data/gnb_data";
import { Link, useNavigate } from "react-router-dom";


function TopAreaMedia() {
  ////////////.smenu-box의 높이 구하기(.mbox  -  .gnb-list)/////////////
   

  
  
  
  
  
  /* 우측상단 검색창: 이동함수 만들기 ************************************************* */
  const goNav = useNavigate(); //useNavigate를 사용하는 이동함수:goNav

  //1. 검색창에 엔터키 누르면 검색함수 생성
  const enterKey = (e) => {
    //e.keyCode는 숫자, e.key 문자로 리턴함.
    // console.log(e.key, e.keyCode);
    if (e.key == "Enter") {
      let txt = $(e.target).val().trim(); //입력창의 입력값 읽어오기:val()사용,trim() 은 앞뒤 공백지우기
      console.log("txt", txt);
      // 빈값이 아니면 검색함수 호출(검색어 전달)
      if (txt != "") {
        // txt가 빈값이 아니면
        goSearch(txt);
        $(e.target).val("").blur();
        $("#schin").focus();
        clickX();
        
      }
    }
  };
  //1. 검색페이지로 검색어와 함께 이동하기 함수
  const goSearch = (txt) => {
    console.log("검색할래 응애");

    goNav("search", { state: { keyword: txt } });
    // window.scrollTo(0,0); 이거 왜 안들어가지??
  };
  /* ********************************************************************************* */

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
                src={process.env.PUBLIC_URL+"/images/zara_logo.png"}
                alt="자라로고"
                onClick={clickX}
              />
            </div>
          </Link>
          <div className="loginbox">
            <Link to="#">
              <span
              
              >
                로그인
              </span>
            </Link>
            <Link to="#">
              <span
              
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
          <div className="mbox">
            {/* ------------------------------------------------------------------- */}
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
                                <img src={process.env.PUBLIC_URL+v.src} alt={v.txt} />
                              </Link>
                            </li>
                          </ol>
                        </aside>
                    
                      )}

                      {v.txt === "about ZARA" && (
                        <div className="mabout-zara">
                          <p>
                            ZARA는 세계 최대 규모의 패션 그룹인 Inditex의 대표
                            브랜드로 전세계에서 가장 큰 패션 브랜드 중
                            하나입니다. 고객은 디자인, 생산, 유통 및 판매를 모두
                            총괄하는 Zara의 비지니스 모델의 핵심입니다. 더 많은
                            정보를 원하시면 Inditex 그룹의 홈페이지를 참고하시기
                            바랍니다.
                            <a href="https://www.inditex.com" target="_blank">
                              www.inditex.com
                            </a>
                          </p>
                          <img src={process.env.PUBLIC_URL+"/images/about_zara_img/maboutzara001.jpg"} alt="자라이미지" />
                          <p>
                          ZARA에게 JOIN LIFE는 가장 지속 가능한 모델을 향해 나아가기 위해 무엇을 해야 하는지 끊임없이 스스로에게 질문하고 개선하는 과정을 의미합니다. 우리는 그 길이 쉽지 않다는 것을 알고 있지만, 업계의 변화를 이끄는 힘을 믿습니다. 이러한 이유로 ZARA의 사회적, 환경적 목표는 지속적인 개선을 위해 더욱 까다로워졌습니다.
                          </p>
                          <p>
                          ZARA는 제품 디자인, 소재 선택, 제품 생산, 물류 또는 창고와 매장 설계 및 관리에 이르기까지 가치 사슬의 모든 단계에서 전체적인 접근 방식으로 작업합니다. 이 모든 것은 수선, 재판매 및 더 이상 사용하지 않는 옷 기부 프로그램을 통해 의류의 수명을 연장하는 데 도움을 줍니다. 지속 가능성에 대한 ZARA의 약속을 달성하는 것은 공급망, 환경 전문가, 국제 기구, 노동조합 및 NGO와의 긴밀한 협력이 필요한 도전과제입니다. 이 모든 것은 업계의 진정한 변화를 이끌기 위한 것입니다. 우리는 완벽하진 않지만, 더 훌륭히 해내기 위해 노력을 다하고 있습니다.
                          </p>
                          
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="input-box">
                <div className="input-inbox">
                  <input
                    type="text"
                    name="schinGnb" /* name은 백엔드 개발자를 위한 약속, 보통id랑 같은이름으로 함 */
                    id="schinGnb"
                    maxlength="15"
                    onKeyUp={enterKey}
                  />
                  <div
                    className="sgum"
                  
                    onClick={(e) => {
                      let inp = e.target.previousElementSibling;
                      if (inp.value.trim() != "") {
                        goSearch(inp.value);
                        inp.value = "";
                        clickX();
                      } else {
                        /* alert창 띄우고 포커스넣기 */
                        // alert("검색어를 넣으세요!");
                        // inp.focus();
                        goSearch("");
                        clickX();
                      }
                    }}
                  >검색</div>
                </div>
              </div>
          </div>
          {/* ------------------------------------------------------------- */}
      </nav>
    </>
  );
}
export default TopAreaMedia;
