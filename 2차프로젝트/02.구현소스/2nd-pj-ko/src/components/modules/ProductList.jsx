import React from "react";

import { wNew, wSale } from "../data/products_woman"; // 데이터 불러오기
import "../../css/ProductList.scss";
function ProductList(props) {
  
   return (
        <div className="product-list">
            {wNew.map((v, i) => (
                <div key={i} className="product-item">
                    <img src={v.isrc} alt={v.name} className="product-image" />
                    <div className="txt-box">
                        <p>{v.name}</p>
                        <p>{v.price}</p>
                    </div>
                  
                </div>
            ))}
        </div>
    );
}

export default ProductList;
