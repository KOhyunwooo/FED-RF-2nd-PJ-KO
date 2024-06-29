import React, { useEffect } from 'react';
import SearchModule from '../modules/SearchModule';

//라우터 전달변수값을 받기위해 useLocation을 불러오기
import { useLocation } from 'react-router-dom';
import Footer from '../modules/Footer';
import Origins from '../modules/Origins';


function SearchPg(props) {
  
    
    let keyword = useLocation().state.keyword;
    console.log("searchPg 검색어:",keyword)


    return (
        <div>
            
            <SearchModule kword={keyword}/>
            <Footer/>
            
        </div>
    );
}

export default SearchPg;