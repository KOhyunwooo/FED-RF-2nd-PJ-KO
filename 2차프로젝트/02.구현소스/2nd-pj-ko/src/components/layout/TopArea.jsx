// 상단영역 css 불러오기///
import "../../css/top_area.scss";

//상단영역 컴포넌트//////
import { Link } from "react-router-dom";
/* gnb데이터 불러오기 */
import { gnbData } from "../data/gnb_data";
import Logo from "../modules/Logo";

export default function TopArea() {
  
    return (
        <>
            {/* 1.상단영역 */}
            <header className="top-area">
                {/* 로그인 환영메시지 박스 */}

                {/* 네비게이션 GNB파트 */}
                <nav className="gnb">
                    <ul>
                        {/* 1. 로고 컴포넌트 */}
                        <div>
                            <Link to="/">
                                <Logo logoStyle="top" />
                            </Link>
                        </div>
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
                                                                    style={{
                                                                        color:
                                                                            v.txt ==
                                                                            "특가 상품"
                                                                                ? "red"
                                                                                : "",
                                                                    }}
                                                                >
                                                                    {v.txt}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                        <li>
                                                            <Link to={v.link}>
                                                                <img
                                                                    src={v.src}
                                                                    alt={v.txt}
                                                                />
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
                    </ul>
                </nav>
            </header>
        </>
    );
}
