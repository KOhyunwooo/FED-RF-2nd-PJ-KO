import React from "react";

//데이터들 불러오기////////////////////////////////
import { wOrigins } from "../data/products_woman";
import { mOrigins } from "../data/products_man";
//css불러오기
import "../../css/Origins.scss";
function Origins() {
    ///데이터 합치기
    const selData = [...mOrigins];

    return (
        <>
        <h1 className="origins-title">ZARA ORIGINS</h1>
        <div className="origins-list">
            {selData.map((v, i) => (
                <div key={i} className="origins-item">
                    <img src={v.isrc} alt={v.name} className="product-image" />
                    <div className="origin-txt-box">
                        <span>{v.name}</span>
                        <span className="price">
                            {v.price[0] && <p>{v.price[0]}</p>}
                            {v.price[1] && (
                                <p>
                                    {v.price[1]}&nbsp;{v.price[2]}
                                </p>
                            )}
                        </span>
                    </div>
                </div>
            ))}
        </div>
            </>
    );
}

export default Origins;
