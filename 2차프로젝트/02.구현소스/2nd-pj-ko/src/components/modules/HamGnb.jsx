import React from "react";

//ham_gnb.scss불러오기
import "../../css/ham_gnb.scss";
//로고 모듈 불러오기
import Logo from "./Logo";
//gnb데이터 불ㄹ러오기
import { gnbData } from "../data/gnb_data";

const HamGnb = () => {
    return (
        <>
            <nav className="hamgnb">
                {/* 박스1: 자라로고, 로그인, 바스켓백, 햄버거버튼 */}
                <div className="box1">
                    <img src="/images/zara_logo.png" alt="자라로고" />
                    <span style={{ whiteSpace: "nowrap", marginLeft: "10px" }}>
                        로그인
                    </span>
                    <span style={{ whiteSpace: "nowrap", marginLeft: "10px" }}>
                        바스켓백(0)
                    </span>
                </div>
                {/* 박스2: gnb상위메뉴 */}
                <div>
                    <ul>
                        {gnbData.map((v, i) => {
                            <li>{v.txt}</li>;
                        })}
                    </ul>
                </div>
                {/* 박스3: gnb하위메뉴 */}
                <div></div>

                {/* 박스4: 검색 창 */}
                <div>
                    <input
                        type="text"
                        name="schinGnb" /* name은 백엔드 개발자를 위한 약속, 보통id랑 같은이름으로 함 */
                        id="schinGnb"
                        placeholder="Filter by keyword"
                    />
                </div>
            </nav>
        </>
    );
};
export default HamGnb;
