// 상단영역 css 불러오기///
import "../../css/top_area.scss";

//제이쿼리 불러오기
import $ from "jquery";

/* 폰트어썸 불러오기 */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

//상단영역 컴포넌트//////
import { Link, useNavigate } from "react-router-dom";
/* gnb데이터 불러오기 */
import { gnbData } from "../data/gnb_data";
import Logo from "../modules/Logo";
import { useEffect } from "react";

export default function TopArea() {
  /* 우측상단 검색창: 이동함수 만들기 **************************************************/
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
      }
    }
  };

  //1. 검색페이지로 검색어와 함께 이동하기 함수
  const goSearch = (txt) => {
    console.log("검색할래 응애");

    goNav("search", { state: { keyword: txt } });
    $("#schin").focus();
  };

  useEffect(() => {
    /* gnb 슬라이드 관련 useEffect **************************************************/
    let tArea = document.querySelector(".gnb");
    let gnb = document.querySelectorAll(
      ".gnb li:nth-child(n+2):nth-child(-n+5)" //li요소중에 2번쨰부터 5번째 까지 선택, gnb메뉴 woman,man,kids,home선택
    );
    gnb.forEach(
      (ele) =>
        (ele.onmouseover = () => {
          tArea.classList.add("on");
        })
    );
    tArea.onmouseout = () => {
      tArea.classList.remove("on");
    };
  }, []);

  // 코드 리턴구역 /////////////
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 로그인 환영메시지 박스 */}

        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 1. 로고 컴포넌트 */}
            <li>
              <Link to="/">
                <Logo logoStyle="top" />
              </Link>
            </li>
            {/* 2. GNB메뉴 데이터 배열로 만들기///////////////////////////// */}
            {gnbData.map((v, i) => (
              <li key={i}>
                {/* gnb상위메뉴 링크 */}
                {<Link to={v.link}>{v.txt}</Link>}
                {
                  // 서브 메뉴 데이터가 있으면 하위 그리기/////////////////////
                  v.sub && (
                    <div className="smenu">
                      <aside className="smbx">
                        <div className="swrap">
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
                            <li>
                              <Link to={v.link}>
                                <img src={process.env.PUBLIC_URL+v.src} alt={v.txt} />
                                <div className="smenu-right-last-pbox">
                                  <p>{v.imagetxt}</p>
                                </div>
                              </Link>
                            </li>
                          </ol>
                        </div>
                      </aside>
                    </div>
                  )
                }
              </li>
            ))}

            {/* gnb오른쪽 끝에 검색창 */}
            <li>
              <div className="searchGnb">
                {/* <FontAwesomeIcon
                                    icon={faSearch}
                                    className="schbtnGnb"
                                    title="Open search"
                                /> */}
                <input
                  type="text"
                  name="schinGnb" /* name은 백엔드 개발자를 위한 약속, 보통id랑 같은이름으로 함 */
                  id="schinGnb"
                  placeholder=""
                  onKeyUp={enterKey}
                  
                />

                <span
                  className="gum"
                  style={{
                    whiteSpace: "nowrap",
                    marginLeft: "3px",
                  }}
                  onClick={(e) => {
                    let inp = e.target.previousElementSibling;
                    if (inp.value.trim() != "") {
                      goSearch(inp.value);
                      inp.value = "";
                    } else {
                      // alert("검색어를 넣으세요!");
                      // inp.focus();
                      goSearch("");
                     

                    }
                  }}
                >
                  검색
                </span>
                <span
                  style={{
                    whiteSpace: "nowrap",
                    marginLeft: "10px",
                  }}
                >
                  로그인
                </span>
                <span
                  style={{
                    whiteSpace: "nowrap",
                    marginLeft: "10px",
                  }}
                >
                  바스켓백(0)
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
