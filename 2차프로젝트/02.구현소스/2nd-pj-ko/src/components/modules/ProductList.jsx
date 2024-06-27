import React from "react";

//데이터들 불러오기////////////////////////////////
import { wNew, wSale } from "../data/products_woman";
import { mBestSeller,mNew,mSale,mOrigins } from "../data/products_man";
//css불러오기
import "../../css/ProductList.scss";
function ProductList({ dbName }) {
  const selData = { wNew: wNew, wSale: wSale, mBestSeller: mBestSeller,mNew:mNew,mSale:mSale,mOrigins:mOrigins };
  //모아진 셀데이터를 역순으로만들기(이유: 신상품순으로 돌게 하기 위해서)
  const reversedData = selData[dbName].slice().reverse();
  //내가 사용하는 배열데이터랑 db데이터랑 일치하는 객체를 만들어준다.
  //selData
  console.log(selData);
  console.log(dbName);
  console.log(selData[dbName]);

  return (
    <div className="product-list">
      {reversedData.map((v, i) => (
        <div key={i} className="product-item">
          <img src={v.isrc} alt={v.name} className="product-image" />
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
  );
}

export default ProductList;
