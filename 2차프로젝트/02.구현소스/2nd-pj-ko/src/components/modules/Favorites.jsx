import React, { useContext, useEffect, useState } from "react";

import $ from "jquery";
import { Link } from "react-router-dom";
import { dCon } from "../func/dCon";
import { addComma } from "../func/common_fn";

import "../../css/favorites.scss";

//https://www.npmjs.com/package/react-icons  불러오기
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

function Favorite({ chgNum }) {
    //컨텍스트 api 가져오기
    const myCon = useContext(dCon);
    //"즐겨찾기" 로컬스 데이터 가져오기///////////////////////////////////////////////////////////
    const favLocalsData =
        JSON.parse(localStorage.getItem("favorite-data")) || [];
    console.log("이걸 마음에드는 제품에 뿌려야지", favLocalsData);

    /////////////////////////즐겨찾기 시작/////////////////////////////////////////////////////
    // 즐겨찾기 목록을 관리하기 위한 상태
    const [favorites, setFavorites] = useState([]);

    // 컴포넌트가 마운트될 때 로컬 스토리지에서 즐겨찾기 데이터를 불러옴
    useEffect(() => {
        // 로컬 스토리지에서 "favorite-data" 키로 저장된 데이터를 가져옴
        const storedFavorites = localStorage.getItem("favorite-data");
        // 저장된 데이터가 있으면 파싱하여 상태에 설정
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행

    // 즐겨찾기 토글 함수
    const toggleFavorite = (data) => {
        // 현재 즐겨찾기 목록을 복사
        const newFavorites = [...favorites];
        // 현재 아이템이 즐겨찾기에 있는지 확인
        const index = newFavorites.findIndex((item) => item.idx === data.idx);

        if (index !== -1) {
            // 이미 즐겨찾기에 있으면 제거
            newFavorites.splice(index, 1);
        } else {
            // 즐겨찾기에 없으면 추가
            newFavorites.push({
                idx: data.idx,
                name: data.name,
                price: data.price,
                price1: data.price1,
                price2: data.price2,
                color: data.color,
                isrc: data.isrc,
                cnt: 1, // 기본 수량을 1로 설정
            });
        }

        // 새로운 즐겨찾기 목록으로 상태 업데이트
        setFavorites(newFavorites);
        // 업데이트된 즐겨찾기 목록을 로컬 스토리지에 저장
        localStorage.setItem("favorite-data", JSON.stringify(newFavorites));
    };

    /////////////////////즐겨찾기 끝///////////////////////////////////////////////////
    return (
        <>
            <div className="favorites">
                <div className="product-list fav-pd-list">
                    {favLocalsData.map((v, i) => (
                        <div key={i} className="product-item chgop">
                            {/* <Link to="/detail" state={{data: favLocalsData}}> */}
                            {/* <Link to="/detail" state={ favLocalsData[i]} > */}
                            <Link to="/" state={{}}>
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
                                            <p>₩{addComma(v.price * v.cnt)}</p>
                                        )}
                                        {/* 가격 곱하기 v.cnt(갯수)해서 가격 변동되기 하기 */}
                                        {v.price1 && (
                                            <p>
                                                {v.price1}&nbsp;₩
                                                {addComma(v.price2 * v.cnt)}
                                                {/* 가격 곱하기 v.cnt(갯수)해서 가격 변동되기 하기 */}
                                            </p>
                                        )}
                                    </span>
                                    {/* 계산된 합계금액 숫자만 히든필드에 넣어놓기(foreach돌려서 계산에 사용하기 위함,히든필드는 화면에 표시 안됨) */}
                                    <input
                                        type="hidden"
                                        className="hiddenprice"
                                        defaultValue={
                                            v.price1
                                                ? v.price2 * v.cnt
                                                : v.price * v.cnt
                                        }
                                    />
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
