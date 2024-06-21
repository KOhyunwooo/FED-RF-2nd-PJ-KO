import React from 'react';
import Footer from '../modules/Footer';

//프로덕트리스트 모듈 불러오기
import ProductList from '../modules/ProductList';

import { useLocation } from 'react-router-dom';

function ProductPg() {
    const loc = useLocation();

    let data = loc.state.data;
    console.log("전달값:",data);


    return (
        <>
        <h1 style={{fontSize:"50px",lineHeight:"40vh",textAlign:"center"}}>각 항목에 맞는 제품들을 출력</h1>
        <ProductList dbName={data}/>
        <Footer/>
        
        </>
    );
}

export default ProductPg;