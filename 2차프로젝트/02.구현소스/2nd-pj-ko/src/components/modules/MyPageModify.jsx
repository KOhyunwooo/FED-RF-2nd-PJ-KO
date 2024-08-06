import React from "react";


//카트리스트 scss 불러오기
import "../../css/address_list.scss";
import { dCon } from "../func/dCon";
//제이쿼리 불러오기
import $, { data } from "jquery";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import MyPageModifyAddr from "./MyPageModifyAddr";
import MyPageModifyEml from "./MyPageModifyEml";
import MyPageModifyPhone from "./MyPageModifyPhone";
import MyPageModifyPass from "./MyPageModifyPass";


function MyPageModify({ mode, setShowProfileMode }) {
    //mode:MyPage.jsx에서 프롭스다운 해서 가져온 모드( "addr", "eml", "phone", "pass")
    //setShowProfileMode: MyPage.jsx에서 프롭스다운 해서 가져온 MyPageModify 보이기(true),안보이기(false)상태변수
    const loc = useLocation(); //링크 스테이트값으로 mycart.jsx에서 받아오기 위한 useLocation

    //세션스토리지에서 현재로그인한 데이터 가져오기
    const mySessionData = JSON.parse(sessionStorage.getItem("minfo"));

    //컨텍스트 API 불러오기
    const myCon = useContext(dCon);

    //로컬스 데이터 가져오기
    const localsData = JSON.parse(localStorage.getItem("mycart-data"));

    console.log("보낼거", mySessionData.address);

    //카트리스트 보이게->안보이게 하기////////////////////////////////////////////
    const [showCart, setShowCart] = useState(true); //초깃값true로 보이는 상태임
    useEffect(() => {
        if (showCart) {
            $(".addedcart-box").animate({ right: "0" });
            document.querySelector("html").style.overflow = "hidden";
            $(".cartlist-bg").fadeIn(300);
        } else {
            $(".addedcart-box").animate({ right: "-100%" });
            document.querySelector("html").style.overflow = "auto";
            $(".cartlist-bg").fadeOut(300);
            setTimeout(() => {
                setShowProfileMode(false);
            }, 300);
        }
        return () => {
            //소멸자~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            $(".addedcart-box").stop(true, true); //.addedcart-box 애니매이션 소멸
            $(".cartlist-bg").stop(true, true); //.cartlist-bg 애니매이션 소멸
            document.querySelector("html").style.overflow = "auto"; //html오버플로우 오토로 복귀
            clearTimeout(); //클리어 타임아웃
        };
    }, [showCart]);

    return (
        <>
           {mode === "addr" && (
                <div className="addresslist-box">
                    <div className="cartlist-bg" onClick={()=>{setShowCart(false);}}></div>
                    <div className="addedcart-box">
                        {/* 오른쪽 상단 X엑스 버튼 */}
                        <button
                            className="cbtn"
                            onClick={() => {
                                setShowCart(false);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/icons/x.svg"
                                }
                                alt="x"
                            />
                        </button>
                        <div className="modal-tit">주소수정</div>
                        <MyPageModifyAddr/>
                    </div>





                </div>
            )}
            {mode === "eml" && (
                <div className="addresslist-box">
                    <div className="cartlist-bg" onClick={()=>{setShowCart(false);}}></div>
                    <div className="addedcart-box">
                        {/* 오른쪽 상단 X엑스 버튼 */}
                        <button
                            className="cbtn"
                            onClick={() => {
                                setShowCart(false);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/icons/x.svg"
                                }
                                alt="x"
                            />
                        </button>
                        <div className="modal-tit">이메일 수정</div>
                        <p style={{paddingLeft:'10%',fontSize:"1.1rem"}}>현재 이메일: {mySessionData.eml||mySessionData.uid}</p>



                                <MyPageModifyEml setShowCart={setShowCart}/>





                    </div>
                </div>
            )}
            {mode === "phone" && (
                <div className="addresslist-box">
                    <div className="cartlist-bg" onClick={()=>{setShowCart(false);}}></div>
                    <div className="addedcart-box">
                        {/* 오른쪽 상단 X엑스 버튼 */}
                        <button
                            className="cbtn"
                            onClick={() => {
                                setShowCart(false);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/icons/x.svg"
                                }
                                alt="x"
                            />
                        </button>
                        <div className="modal-tit">전화번호 수정</div>
                        <p style={{paddingLeft:'10%',fontSize:"1.1rem"}}>현재 전화번호: {mySessionData.phone}</p>
                        <MyPageModifyPhone setShowCart={setShowCart}/>
                    </div>
                </div>
            )}
            {mode === "pass" && (
                <div className="addresslist-box">
                    <div className="cartlist-bg" onClick={()=>{setShowCart(false);}}></div>
                    <div className="addedcart-box">
                        {/* 오른쪽 상단 X엑스 버튼 */}
                        <button
                            className="cbtn"
                            onClick={() => {
                                setShowCart(false);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/icons/x.svg"
                                }
                                alt="x"
                            />
                        </button>
                        <div className="modal-tit">비밀번호 변경</div>
                        <MyPageModifyPass setShowCart={setShowCart}/>
                        
                    </div>
                </div>
            )}
        </>
    );
}

export default MyPageModify;
