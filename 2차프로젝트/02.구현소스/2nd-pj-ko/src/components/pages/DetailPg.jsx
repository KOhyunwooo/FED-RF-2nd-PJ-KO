import React from 'react';
import SwiperDetail from '../plugin/SwiperDetail';

function DetailPg(props) {
    return (
        <div>
            <h1>나는 디테일 페이지</h1>
            <div className="detail-img" style={{width:"488px", height:"736px"}}><SwiperDetail/></div>
        </div>
    );
}

export default DetailPg;