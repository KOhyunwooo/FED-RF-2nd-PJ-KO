import React, { useState } from "react";

// searching.scss불러오기
import "../../css/search_module.scss";
//폰트어썸아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//캐릭터 리스트 결과 컴포넌트 불러오기
// import SearchingCat from "./SearchingCat";

// 우먼 데이터 불러오기
import { wNew, wSale } from "../data/products_woman";
import { mBestSeller } from "../data/products_man";
import SearchModuleList from "./SearchModuleList";

// import { wNew } from "../data/swiper_cat";

function SearchModule({ kword }) {
    //()안에 받는 키워드 해야함.
    // kword- 전달받은 키워드
    console.log("(내가 타이핑한)키워드:", kword);
    const [searchword,setSearchword] = useState(kword);

    // 데이터 모으기
    const selData = [...wNew,...wSale,...mBestSeller];
    console.log(selData);

    //검색어가 있는 데이터 필터하기
    ////////////filter///////////////////////////
    const newList = selData.filter((v) => {
        // name이 undefined가 아닌지 확인
        const itemName = v.name || "";

        // name 속성에 검색어가 포함된 경우
        return itemName.includes(searchword);

        // if (newVal.indexOf(key) !== -1) return true;
        // 문자열.indexOf(문자) 문자열 위치번호 리턴함
        // 그런데 결과가 없으면 -1을 리턴함
        // 그래서 -1이 아닐경우 true를 리턴하면
        // filter에서 변수에 저장할 배열로 수집된다!
    }); ////////////////filter////////////////////////

    // console.log("newList는?", newList);
    /*     
        배열.filter(v=>{
            if(v.속성명.indexOf(검색어)!=-1) retrun true   // indexOf로 검사 해서 있냐? 그럼 리턴
        })
        ->결과는 검색어가 있는 경우 변수에 모아서 담아준다.
        ->filter는 결과값도 배열, 결과가 없어도 빈배열. 항상 배열로 나옴.    
    */

    // 코드 리턴구역 ////////////////////////
    return (
        <>
            <h2 className="restit">
                여기가 서치 모듈↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
            </h2>
            <div className="search-module">
                <input
                    id="schin"
                    type="text"
                    placeholder="검색"
                    defaultValue={kword}
                    //엔터키를 눌렀을때 검색실행!
                    // 검색어 상태변수만 업데이트 하면 끝!
                    // ->setKw(검색어)
                    onKeyUp={(e) => {
                        if (e.key == "Enter") setSearchword(e.target.value);
                        //input의 값이 value
                    }}
                />
                <div className="listbx">
                    <aside className="sortbx">
                        <select name="sel" id="sel" className="sel">
                            <option value="0">신상품순</option>
                            <option value="1">낮은가격순</option>
                            <option value="2">높은가격순</option>
                            <option value="3">베스트상품순</option>
                        </select>
                    </aside>
                </div>
                <SearchModuleList data={newList} />
            </div>
        </>
    );
}

export default SearchModule;
