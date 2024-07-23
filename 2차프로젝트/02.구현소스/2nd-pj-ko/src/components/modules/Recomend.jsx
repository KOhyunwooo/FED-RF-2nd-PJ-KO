import React from 'react';

import { mNew } from '../data/products_man';
import { Link } from 'react-router-dom';
import useFavoriteFn from '../func/useFavoriteFn';
import { addComma } from '../func/common_fn';

import "../../css/recomend.scss";

//https://www.npmjs.com/package/react-icons  불러오기
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

function Recomend(props) {
     //favorite 사용을 위한 내가만든 커스텀 훅!
     const { favorites, toggleFavorite } = useFavoriteFn();
    return (
      <>
       
      <div className="recomend-box">
          <div className="product-list">
            {mNew.map((v, i) => (
              <div key={i} className="product-item chgop">
                <Link to="/detail" state={{ v }}  onClick={() => window.scrollTo(0, 0)}>
                  {/* state={{키:값}}//**state는 객체형식으로만 보낼 수 있다 */}
                  {/* DetailPg.jsx로 selData보내기 */}
                  <img
                    src={process.env.PUBLIC_URL + v.isrc}
                    alt={v.name}
                    className="product-image"
                  />
                </Link>
                <div className="txt-box">
                  {/* 하트버튼:favorite버튼 */}
                  <div className="heartbutton" onClick={() => toggleFavorite(v)}>
                    {/*
                      현재 아이템(v)이 즐겨찾기 목록에 있는지 확인
                      some() 메서드는 배열의 요소 중 하나라도 조건을 만족하면 true를 반환
                    */}
                    {favorites.some((fav) => fav.idx === v.idx) ? (
                      // 아이템이 즐겨찾기에 있으면 채워진 하트 아이콘 표시
                      <IoMdHeart size={20} />
                    ) : (
                      // 아이템이 즐겨찾기에 없으면 빈 하트 아이콘 표시
                      <IoMdHeartEmpty size={20} />
                    )}
                  </div>
                  <span>{v.name}</span>
                  <span className="price">
                    {v.price[0] && <p>₩&nbsp;{addComma(v.price[0])}</p>}
                    {v.price[1] && (
                      <p>
                        {v.price[1]}&nbsp;₩&nbsp;{addComma(v.price[2])}
                      </p>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
      </div>
      </>
    );
}

export default Recomend;