import React from "react";
//마이카트 (장바구니)scss불러오기
import "../../css/my_cart.scss";
//임시데이터 불러오기
import { mOrigins } from "../data/products_man";
import { Link } from "react-router-dom";

function MyCart(props) {
    return (
        <>  <div style={{height:"50px"}}></div>
    
            <h1>나는 mycart 장바구니 페이지임</h1>

            <button className="mycart-button">바스켓백( )</button>
            <button className="favorite-button">마음에 드는 제품</button>
            <div className="mycart-txt">장바구니에 담긴 상품은 구매가 완료될 때까지 예약되지 않습니다.</div>
            <div className="mycart-box">
            <div className="product-list5">
                {mOrigins.map((v, i) => (//더미로 맵돌림 나중에 바스켓백 데이터 받아서 돌려야함.
                    <div key={i} className="product-item chgop">
                        <Link to="/">
                            <img
                                src={process.env.PUBLIC_URL + v.isrc}
                                alt={v.name}
                                className="product-image"
                                />
                                </Link>
                            <div className="txt-box">
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
            </div>

            <h1>여기에 추천상품 들어올것↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓</h1>
        </>
    );
}

export default MyCart;
