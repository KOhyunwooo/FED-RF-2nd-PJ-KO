import React, { useEffect } from 'react';
import SearchModule from '../modules/SearchModule';

//라우터 전달변수값을 받기위해 useLocation을 불러오기



function SearchPg(props) {
    
    


    return (
        <div>
            <h1 style={{fontSize:"50px",textAlign:"center",marginTop:"20vh"}}>내가 바로 <br />서치페이지</h1>
            <SearchModule/>
        </div>
    );
}

export default SearchPg;