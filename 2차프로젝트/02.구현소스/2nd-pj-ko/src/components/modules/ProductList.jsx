import React from "react";

import { wNew, wSale } from "../data/products_woman"; // 데이터 불러오기
import "../../css/ProductList.scss";
function ProductList(props) {
  
   return (
        <div className="product-list">
            {wNew.map((v, i) => (
                <div key={i} className="product-item">
                    <img src={v.isrc} alt={v.name} className="product-image" />
                    <h2 className="product-name">{v.name}</h2>
                    <p className="product-price">{v.price}</p>
                  
                </div>
            ))}
        </div>
    );
}

export default ProductList;
