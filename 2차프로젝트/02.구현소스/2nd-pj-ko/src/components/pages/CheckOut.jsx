import React, { useContext, useState } from "react";
import { dCon } from "../func/dCon";
import Login from "./Login";
import "../../css/check-out.scss";

// 제이쿼리불러오기
import $ from "jquery";

import { FaRegBuilding } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useEffect } from "react";
import { addComma } from "../func/common_fn";
import { Link, useLocation } from "react-router-dom";
import AddressList from "../modules/AddressList";

function CheckOut() {
    //세션스토리지에서 현재로그인한 데이터 가져오기
    const mySessionData = JSON.parse(sessionStorage.getItem("minfo"));
    // console.log(mySessionData.uid);

    //링크 스테이트값으로 mycart.jsx에서 받아오기 위한 useLocation
    const loc = useLocation();
    // console.log("받아 왔니?", loc.state.totalPrice);
    // 가져온값
    const totalPrice2=loc.state.totalPrice;

    //전역(LayOut.jsx)에서 가져오기 위한컨텍스트
    const myCon = useContext(dCon);

    // 편집 클릭시 addresslist나오기 위한 상태변수만들기
    const [addressList, setAddressList] = useState(false);
    const showAddresslist = () => {
        setAddressList(true);
    };

    return (
        <>
            {!myCon.loginSts && <Login />}

            {myCon.loginSts && (
                <>
                    <div className="check-out-box">
                        <h1>물품을 배송 받을 장소</h1>
                        <div className="where-delivery">
                            <div className="get-hz-wrap">
                                <div className="gethome">
                                    <p>
                                        <IoHomeOutline fontSize={"15px"} />
                                    </p>
                                    <p>자택</p>
                                </div>
                                <div className="getzara">
                                    <p>
                                        <FaRegBuilding fontSize={"15px"} />
                                    </p>
                                    <p>ZARA 매장</p>
                                </div>
                            </div>
                            <div className="getaddress">
                            <h3>{mySessionData.unm}</h3>
                            <p>{mySessionData.address && mySessionData.address[0] ? mySessionData.address[0].address : ''}</p>
                            <p>{mySessionData.address && mySessionData.address[0] ? mySessionData.address[0].address2 : ''}</p>
                                {mySessionData.address === "" ? (
                                    <Link to="/addaddresspg" state={{totalPrice2}}>
                                        <span>추가하기</span>
                                    </Link>
                                ) : (
                                    <span onClick={showAddresslist}>편집</span>//클릭시 addressList 를 true로 바꿔줌
                                )}
                                {
                                addressList &&<AddressList addressListDelete={() => setAddressList(false)}/>
                                // addressListDelete는 addressListDelete를 false 하는 함수: 자식컴포넌트로 보내줌
                                // addressListDelete는 addressListDelete를 false 하면 AddressList를 삭제함
                                    }
                            </div>
                        </div>
                        <div className="payment">{/* 결제 관련 내용 */}</div>
                    </div>
                    {/* 최하단 fixed된 계속버튼 있는곳 //MyCart.jsx에서 재사용*/}
                    <div className="buybar">
                        <span className="buytxt" style={{justifySelf:"end"}}>
                            {(totalPrice2)>50000 ? "배송비 무료":  <>
    <span>상품 ₩{addComma(totalPrice2)}</span>
    <span> + 배송 ₩3000</span>
  </>}
                            </span>
                        <span>
                            <p>
                                총&nbsp;&nbsp;&nbsp;&nbsp;₩&nbsp;
                                {(totalPrice2)>50000?addComma(totalPrice2):addComma(totalPrice2 + 3000)}
                            </p>
                            <p>*&nbsp;부가세 포함</p>
                        </span>

                        <button className="buybutton">결제 승인</button>
                    </div>
                </>
            )}
        </>
    );
}

export default CheckOut;
