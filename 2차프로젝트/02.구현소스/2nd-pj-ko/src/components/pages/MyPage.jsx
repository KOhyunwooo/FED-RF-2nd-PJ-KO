import React, { useContext } from "react";
import { dCon } from "../func/dCon";
import { useState } from "react";
import "../../css/my_page.scss";
import MyPageModify from "../modules/MyPageModify";

function MyPage(props) {
    const myCon = useContext(dCon);
    ////////////////////////////////////////////////////////////////////
    const myPageButtons = [
        "구매내역",
        "바스켓백",
        "마음에 드는 제품",
        "프로필",
        "로그아웃",
    ];
    const [selButton, setSelButton] = useState("");
    const selectedButton = (v) => {
        if (v === "로그아웃") {
            myCon.logoutFn();
        }
        setSelButton(v);
    };
    //////////////////////////////////////////////////////////////////

    //장바구니 데이터 불러오기
    const localsDataMyCart =
        JSON.parse(localStorage.getItem("mycart-data")) || [];
    //위시리스트 데이터 불러오기
    const localsDataFavorite =
        JSON.parse(localStorage.getItem("favorite-data")) || [];
    //로그인된 데이터 불러오기
    const sesstionsDataI = JSON.parse(sessionStorage.getItem("minfo")) || [];

    // 비밀번호를 별표시로 바꾸는 함수
    const maskPassword = (password) => {
        return password ? "*".repeat(password.length) : "";
    };

    // 모드 상태 프롭스다운해주기 위한 상태변수
    const [profileMode, setProfileMode] = useState("");
    // 프로필모드 모달(MyPageModify.jsx) 보이기(true),안보이기(false)상태변수
    const [showProfileMode,setShowProfileMode] = useState(false);
    const [data,setData] = useState(null);

    const profileClick = (e,mode) => {
        setData(e.currentTarget.innerText);
        setProfileMode(mode);//모드 상태 업데이트용( "addr", "eml", "phone", "pass")
        setShowProfileMode(true);
    };



    return (
        <>
            <h1 style={{ paddingTop: "10vh" }}>나는 마이 페이지</h1>
            <div className="pdbutton-box mypage-pdbutton-box">
                {myPageButtons.map((v, i) => (
                    <button
                        key={i}
                        className={`pdbutton ${selButton === v ? "on" : ""}`}
                        onClick={() => selectedButton(v)}
                    >
                        {v}
                    </button>
                ))}
            </div>

            {/* ********************************************** */}
            <p>{sesstionsDataI.unm}</p>
            <div className="profile-box">
                <button onClick={() => profileClick("addr")}>
                    <div>주소</div>
                </button>

                <button onClick={() => profileClick("eml")}>
                    <div>이메일</div>
                    <p>{sesstionsDataI.eml || sesstionsDataI.uid}</p>
                </button>
                <button onClick={(e) => profileClick(e,"phone")}>
                    <div>전화번호</div>
                    <p>{sesstionsDataI.phone}</p>
                </button>
                <button onClick={() => profileClick("pass")}>
                    <div>비밀번호 변경</div>
                    <p>{maskPassword(sesstionsDataI.pwd)}</p>
                </button>
            </div>
            {showProfileMode&& <MyPageModify mode={profileMode} data={data} setShowProfileMode={setShowProfileMode} />}
            {/* showProfileMode true 일때 뒤에것 실행 */}
        </>
    );
}

export default MyPage;
