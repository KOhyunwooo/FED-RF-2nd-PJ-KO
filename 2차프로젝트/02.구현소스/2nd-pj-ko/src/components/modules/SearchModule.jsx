import React, { useRef, useState } from "react";

// search_module.scss불러오기
import "../../css/search_module.scss";
//폰트어썸아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//캐릭터 리스트 결과 컴포넌트 불러오기
// import SearchingCat from "./SearchingCat";

// 우먼 데이터 불러오기
import { wNew, wSale } from "../data/products_woman";
import { mBestSeller, mNew, mOrigins, mSale } from "../data/products_man";
import SearchModuleList from "./SearchModuleList";

// import { wNew } from "../data/swiper_cat";

function SearchModule({ kword }) {
  //체크(topcate 버튼)상태관리 변수
  const [check, setCheck] = useState([true, true, true, true]); //useState기본값:true,ture,ture(체크됨,체크됨,체크됨)
  console.log("^^^^^^^^^", check);
  // 데이터 모으기
  const selData = [
    ...wNew,
    ...wSale,
    ...mBestSeller,
    ...mNew,
    ...mSale,
    ...mOrigins,
  ];
  // console.log("데이터가 selData에 잘 모아졌나?",selData);

  //버튼 배열로 만들기
  const mybutton = ["여성", "남성", "어린이", "HOME"];
  //버튼에 클래스 넣기
  const [onbutton, setOnbutton] = useState(""); //초깃값 빈문자열
  console.log("^^^^^", onbutton);

  // 정렬 상태관리 변수
  const [sort, setSort] = useState("newpd");
  // console.log(sortState);
  // 상단메뉴 검색창에서 검색한 검색어를 참조변수에 저장한다!

  //()안에 받는 키워드 해야함.
  // kword- 전달받은 키워드
  console.log("(내가 타이핑한)키워드:", kword);
  const [searchword, setSearchword] = useState(kword);

  const beforeWord = useRef(kword);
  console.log(kword, "==?", beforeWord.current);
  // 만약 다음에 상단메뉴 검색창에서 검색한 경우 기존 검색어와 다른 경우
  // 상태값 검색변수를 업데이트 한다! -> 검색결과가 변경됨!
  if (kword != beforeWord.current) {
    console.log("같지않다!!!");
    // 검색어 상태값 업데이트 : 결과 리랜더링
    setSearchword(kword);
    // 다음을 위해 검색 참조값 업데이트
    beforeWord.current = kword;
    // 검색어 현재 검색창에 넣기
    document.querySelector("#schin").value = kword;
    // 상단 검색창 검색어 지우기
    document.querySelector("#schinGnb").value = "";
    document.querySelector("#schinGnb").blur();
  }

  //검색어가 있는 데이터 필터하기
  ////////////filter///////////////////////////
  const newList = selData.filter((v) => {
    // 데이터의 v.name도 소문자로 바꾸기
    let lowerVname = v.name.toLocaleLowerCase();

    //내가 타이핑한 키워드(전달받은 키워드) 소문자로 만들기
    let lowerSearchWord = searchword.toLocaleLowerCase();

    // name이 undefined가 아닌지 확인
    const itemName = lowerVname || "";

    if (
      // name 속성에 검색어가 포함된 경우
      itemName.includes(lowerSearchWord) && //<-&&로 연결하면 둘다true여야함.
      ((check[0] ? v.topcate == "woman" : false) || //check[0]이 트루냐? v.topcate=="woman" 아니면 false)
        (check[1] ? v.topcate == "man" : false) || //check[1]이 트루냐? v.topcate=="man" 아니면 false)
        (check[2] ? v.topcate == "kids" : false) || //check[2]이 트루냐? v.topcate=="kids" 아니면 false)
        (check[3] ? v.topcate == "home" : false)) //check[3]이 트루냐? v.topcate=="home" 아니면 false)
    )
      return true;

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

  //[[정렬기능 추가하기]]// //////////////////////////////////////////////////////////////////////////////
  //(1) 신상품순일 경우
  if (sort == "newpd") {
    newList.sort(
      (
        a,
        b //중괄호 없으면 바로 리턴
      ) => (a.idx > b.idx ? -1 : a.idx < b.idx ? 1 : 0)
      //a.idx > b.idx보다 크냐? 그럼 1(일)단 바꿔 a.idx < b.idx보다 작냐? 그럼 -1(마)꾸지마
    );
  }

  //(2)오름차순일 경우
  else if (sort == "uppd") {
    newList.sort(
      (
        a,
        b //중괄호 없으면 바로 리턴
      ) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
      //a.name > b.name보다 크냐? 그럼 1(일)단 바꿔 a.name < b.name보다 작냐? 그럼 -1(마)꾸지마
    );
  }
  //(3)내림차순일 경우
  else if (sort == "downpd") {
    newList.sort(
      (
        a,
        b //중괄호 없으면 바로 리턴
      ) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
    );
  }
  //(4)저렴한순일 경우
  else if (sort == "chpd") {
    newList.sort(
      (
        a,
        b //중괄호 없으면 바로 리턴
      ) =>
        (a.price[2] ? a.price[2] : a.price[0]) >
        (b.price[2] ? b.price[2] : b.price[0])
          ? 1
          : (a.price[2] ? a.price[2] : a.price[0]) <
            (b.price[2] ? b.price[2] : b.price[0])
          ? -1
          : 0
      //a.price > b.price보다 크냐? 그럼 1(일)단 바꿔 a.price < b.price보다 작냐? 그럼 -1(마)꾸지마
    );
  }
  //(5)비싼순일 경우
  else if (sort == "expd") {
    newList.sort(
      (
        a,
        b //중괄호 없으면 바로 리턴
      ) =>
        (a.price[2] ? a.price[2] : a.price[0]) >
        (b.price[2] ? b.price[2] : b.price[0])
          ? -1
          : (a.price[2] ? a.price[2] : a.price[0]) <
            (b.price[2] ? b.price[2] : b.price[0])
          ? 1
          : 0
      //a.price > b.price보다 크냐? 그럼 1(일)단 바꿔 a.price < b.price보다 작냐? 그럼 -1(마)꾸지마
    );
  } ////////////////////////////////////////////////////////////////////////////////////////////////////

  // 코드 리턴구역 ////////////////////////
  return (
    <>
      <div className="sticky-search-box">
        {/* ///////////////////카테고리 박스: 여성,남성,어린이,HOME/////////////////// */}
        <div className="catebox">
          {mybutton.map((v, i) => (
            <button
              key={i}
              onClick={() => {
                setOnbutton(v);
                let temp = [false, false, false, false];
                temp[i] = true;
                setCheck(temp);
              }}
              className={onbutton == v ? "on" : ""}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="resultandsort">
            {/*  //////////////////////검색 결과 ??개 /////////////////////////////////// */}
            <p >
              검색 결과 {newList.length}개&nbsp;&nbsp;|&nbsp;
            </p>
            {/* ///////////////////정렬부분sort//////////////////////////////////////// */}
            <div className="listbx">
              <aside className="sortbx">
                <select
                  name="sel"
                  id="sel"
                  className="sel"
                  onChange={(e) => {
                    setSort(e.target.value);
                  }}
                >
                  <option value="newpd">&nbsp;신상품순&nbsp;</option>
                  <option value="uppd">&nbsp;오름차순&nbsp;</option>
                  <option value="downpd">&nbsp;내림차순&nbsp;</option>
                  <option value="expd">&nbsp;높은가격순&nbsp;</option>
                  <option value="chpd">&nbsp;낮은가격순&nbsp;</option>
                </select>
              </aside>
            </div>
        </div>

        {/* ////////////////////검색창///////////////////////////////////// ///*/}
        <div className="search-module">
          <input
            id="schin"
            type="text"
            placeholder="상품, 색상, 컬렉션 등을 입력하세요"
            defaultValue={kword}
            //엔터키를 눌렀을때 검색실행!
            // 검색어 상태변수만 업데이트 하면 끝!
            // ->setKw(검색어)
            onKeyUp={(e) => {
              if (e.key == "Enter")
                //검색어 상태값 변경
                setSearchword(e.target.value);
              //input의 값이 value

              //처음 검색시(엔터시) 모두 체크
              setCheck([true, true, true, true]);
            }}
          />
            </div>
            </div>
          <SearchModuleList data={newList} />
        
      
    </>
  );
}

export default SearchModule;
