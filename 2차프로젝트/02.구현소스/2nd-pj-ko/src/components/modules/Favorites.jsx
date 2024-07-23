import React, { useContext, useEffect, useState } from "react";

import $ from "jquery";
import { Link } from "react-router-dom";
import { dCon } from "../func/dCon";
import { addComma } from "../func/common_fn";

import "../../css/favorites.scss";

//https://www.npmjs.com/package/react-icons  불러오기
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import useFavoriteFn from "../func/useFavoriteFn";

function Favorite() {
    //컨텍스트 api 가져오기
    const myCon = useContext(dCon);

    //"즐겨찾기" 로컬스 데이터 가져오기(맵돌릴려고 가져옴)/////////////////////////////////////////
    const favLocalsData =JSON.parse(localStorage.getItem("favorite-data")) || [];
    console.log("이걸 마음에드는 제품에 뿌려야지", favLocalsData);
    
    //favorite, 하트버튼 사용을 위한 내가만든 커스텀 훅!
    const { favorites, toggleFavorite } = useFavoriteFn();


    return (
        <>
            <div className="favorites">
            <div
                    className="noitem"
                    style={{ display: favLocalsData.length > 0 && "none" }}
                >
                    <IoMdHeartEmpty className="bagimg" />
                    <p>장바구니가 비었습니다.</p>
                </div>
                <div className="product-list fav-pd-list">
                    {favLocalsData.map((v, i) => (
                        <div key={i} className="product-item chgop">
                            <Link to="/detail" state={{v:favLocalsData[i]}} >
                            {/* localsData[i]를 v라는 이름으로 보냄 */} 
                                <img
                                    src={process.env.PUBLIC_URL + v.isrc}
                                    alt={v.name}
                                    className="product-image"
                                />
                            </Link>
                            <div className="txt-box-wrap">
                                <div className="txt-box">
                                    {/* 하트버튼:favorite버튼 */}
                                    <div
                                        className="heartbutton"
                                        onClick={() => toggleFavorite(v)}
                                    >
                                        {/* 
                                        현재 아이템(v)이 즐겨찾기 목록에 있는지 확인
                                        some() 메서드는 배열의 요소 중 하나라도 조건을 만족하면 true를 반환
                                      */}
                                        {favorites.some(
                                            (fav) => fav.idx === v.idx
                                        ) ? (
                                            // 아이템이 즐겨찾기에 있으면 채워진 하트 아이콘 표시
                                            <IoMdHeart size={18} />
                                        ) : (
                                            // 아이템이 즐겨찾기에 없으면 빈 하트 아이콘 표시
                                            <IoMdHeartEmpty size={18} />
                                        )}
                                    </div>

                                    <span>{v.name}</span>
                                    {/* 가격 */}
                                    <span className="price">
                                        {v.price && (
                                            <p>₩{addComma(v.price[0] * v.cnt)}</p>
                                        )}
                                        {/* 가격 곱하기 v.cnt(갯수)해서 가격 변동되기 하기 */}
                                        {v.price[1] && (
                                            <p>
                                                {v.price[1]}&nbsp;₩
                                                {addComma(v.price[2] * v.cnt)}
                                                {/* 가격 곱하기 v.cnt(갯수)해서 가격 변동되기 하기 */}
                                            </p>
                                        )}
                                    </span>                                 
                                    <span>
                                        {v.size} {v.color}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Favorite;
