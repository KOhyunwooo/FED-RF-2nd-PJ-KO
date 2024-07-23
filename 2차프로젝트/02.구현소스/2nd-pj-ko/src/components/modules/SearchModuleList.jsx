import React from "react";
import { Link } from "react-router-dom";
//css불러오기
import "../../css/ProductList.scss";
import { addComma } from "../func/common_fn";
import Recomend from "./Recomend";
function SearchModuleList({ data }) {
    const total = data.length;
    console.log("데이터수가 왜이래", total);
    return (
        <>
            {total > 0 && (
                <div className="product-list">
                    {data.map((v, i) => (
                        <div key={i} className="product-item">
                            {/* 링크를 왜 보내야하지?: 디테일 페이지로 갈 링크임 */}
                            <Link to="/detail" state={{v}}>
                            <img
                                src={process.env.PUBLIC_URL+v.isrc}
                                alt={v.name}
                                className="product-image"
                                />
                                </Link>
                            <div className="txt-box">
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
            )}
            {total == 0 && (
                <h1 style={{ textAlign: "center", lineHeight:"20vh" }}>
                    해당되는 상품을 찾을 수 없습니다.
                </h1>
            )}

<h3 style={{margin:"50px 0 20px 20px"}}>추천 제품</h3>
<Recomend/>
        </>
    );
}

export default SearchModuleList;
