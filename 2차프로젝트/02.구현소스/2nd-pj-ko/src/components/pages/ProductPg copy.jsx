import React, { useEffect, useLayoutEffect } from 'react';
import Footer from '../modules/Footer';

//프로덕트리스트 모듈 불러오기
import ProductList from '../modules/ProductList';

import { useLocation } from 'react-router-dom';
import Origins from '../modules/Origins';
import { useState } from 'react';

function ProductPg() {
    const loc = useLocation();
    let data = loc.state.data;

    useLayoutEffect(() => {
        const changeBGC = () => {
            const origins = document.getElementById('origins');
            const cont = document.querySelector('.cont');
            
            if (origins && cont) {
                const originsTop = origins.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (originsTop < windowHeight) {
                    cont.classList.add('change');
                } else {
                    cont.classList.remove('change');
                }
            }
        };

        window.addEventListener('scroll', changeBGC);
        //삭제~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        return () => {
            window.removeEventListener('scroll', changeBGC);
        };
    }, []);


    return (
        <>
            <div style={{height:"200px"}}></div>
            <ProductList dbName={data} />
            <Origins id="origins" />
            <Footer />
        </>
    );
}

export default ProductPg;