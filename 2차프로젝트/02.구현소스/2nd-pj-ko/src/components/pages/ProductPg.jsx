import React from 'react';
import Footer from '../modules/Footer';

//프로덕트리스트 모듈 불러오기
import ProductList from '../modules/ProductList';

import { wNew, wSale } from "../data/products_woman"; // 데이터 불러오기

function ProductPg(props) {
 let 제품 = wNew;
    return (
        <>
        <h1 style={{fontSize:"50px",lineHeight:"40vh",textAlign:"center"}}>각 항목에 맞는 제품들을 출력</h1>
        <ProductList 제품리스트={제품}/>
        <Footer/>
        
        </>
    );
}

export default ProductPg;