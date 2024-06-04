// DC.com 로고 컴포넌트
// 로고를 컴포넌트로 만든 이유: 여러번 사용 하려고
import React from "react";

// 이미지 경로 데이터 불러오기
import { isrc } from "../data/img_src";

export default function Logo({logoStyle}){
    // logoStyle: 상단, 하단 로고 구분코드
    // 코드 값 : top(상단), bottom(하단)
    console.log("로고 경로:",isrc.logo, logoStyle);


    // 객체형 스타일 적용
    const myStyle = {
        top:{
            width:"200px",
            height:"45px",
            marginRight:"30px",
            borderRadius:"50%",
            cursor:"pointer"
        },

        bottom:{
            height: "80px"
        }
    };
    // 로고 이미지 스타일 객체
    const imgStyle ={
        top:{width:"15vw"},
        bottom: {width:"80px"},
    };


    //코드 리턴구역//////////////////////////////////
    return(
        <h1 style={myStyle[logoStyle]}>
            <img
            style={imgStyle[logoStyle]}
            src={isrc.logo} alt="ZARAlogo" />
        </h1>
    );

}//////////////Logo컴포넌트+내보내기//////////////////////////