import React from "react";


import "../../css/ProductList.scss";
function ProductList({제품리스트}) {
  
   return (
        <div className="product-list">
            {제품리스트.map((v, i) => (
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
