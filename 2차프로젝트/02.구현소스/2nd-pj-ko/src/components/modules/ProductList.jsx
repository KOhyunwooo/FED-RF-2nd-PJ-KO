import React from "react";

import { wNew,wSale } from "../data/products_woman";
import { mBestSeller } from "../data/products_man";


import "../../css/ProductList.scss";
function ProductList({dbName}) {

    const selData = {"wNew":wNew,"wSale":wSale,"mBestSeller":mBestSeller};//내가 사용하는 배열데이터랑 db데이터랑 일치하는 객체를 만들어준다.
    //selData
    console.log(selData);
    console.log(dbName);
console.log(selData[dbName]);
  
   return (
        <div className="product-list">
            {selData[dbName].map((v, i) => (
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
