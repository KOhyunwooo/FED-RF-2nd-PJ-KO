// DC.com 로고 컴포넌트
// 로고를 컴포넌트로 만든 이유: 여러번 사용 하려고
import React from "react";

// 이미지 경로 데이터 불러오기
import { isrc } from "../data/img_src";

// 탑에이리어 css불러오기(로고파트 있음)
import "../../css/top_area.scss"

export default function Logo({ logoStyle }) {
    // logoStyle: 상단, 하단 로고 구분코드
    // 코드 값 : top(상단), bottom(하단)
    console.log("로고 경로:", process.env.PUBLIC_URL+isrc.logo, logoStyle);

    //코드 리턴구역//////////////////////////////////
    return (
        <div className="lgbx">
            <img src={process.env.PUBLIC_URL+isrc.logo} alt="ZARAlogo" />
        </div>
    );
} //////////////Logo컴포넌트+내보내기//////////////////////////
