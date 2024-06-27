import React, { useEffect } from 'react';
import Footer from '../modules/Footer';

//프로덕트리스트 모듈 불러오기
import ProductList from '../modules/ProductList';

import { useLocation } from 'react-router-dom';
import Origins from '../modules/Origins';
import { useState } from 'react';

function ProductPg() {
    const loc = useLocation();
    let data = loc.state.data;

  
    return (
        <>
            <div style={{height:"200px"}}></div>
            <ProductList dbName={data} />
            <Origins />
            <Footer />
        </>
    );
}

export default ProductPg;