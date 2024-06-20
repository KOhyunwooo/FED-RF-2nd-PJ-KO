import React from 'react';
import Footer from '../modules/Footer';

//제품데이터 불러오기
import ProductList from '../modules/ProductList';



function ProductPg(props) {
 
    return (
        <>
        <h1 style={{fontSize:"100px",lineHeight:"40vh"}}>각 항목에 맞는 제품들을 출력</h1>
        <ProductList/>
        <Footer/>
        
        </>
    );
}

export default ProductPg;