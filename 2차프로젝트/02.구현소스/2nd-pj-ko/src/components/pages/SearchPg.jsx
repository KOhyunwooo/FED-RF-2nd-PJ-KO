import React, { useEffect } from 'react';
import SearchModule from '../modules/SearchModule';

//라우터 전달변수값을 받기위해 useLocation을 불러오기
import { useLocation } from 'react-router-dom';


function SearchPg(props) {
    
    let keyword = useLocation().state.keyword;
    console.log("searchPg 검색어:",keyword)


    return (
        <div>
            <h1 style={{fontSize:"50px",textAlign:"center",marginTop:"20vh"}}>내가 바로 서치페이지</h1>
            <SearchModule kword={keyword}/>
        </div>
    );
}

export default SearchPg;