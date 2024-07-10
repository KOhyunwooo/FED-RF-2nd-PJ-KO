import React, { useContext, useState } from "react";
import SwiperDetail from "../plugin/SwiperDetail";
import { useLocation } from "react-router-dom";

/* 디테일 pg scss 불러오기 */
import "../../css/detail_pg.scss";
import { dCon } from "../func/dCon";
import CareTxt from "../modules/CareTxt";

function DetailPg(props) {
  //컨텍스트 사용하기(Layout.jsx에서setCartList를 상태변경해서 화면에 띄우려고 사용함)
  const myCon = useContext(dCon);

  const loc = useLocation();
  const data = loc.state.v; //ProductList.jsx에서  <Link to="/detail" state={{v}}>로 받아온 데이터
  console.log("useLocation", loc);
  console.log("ProductList.jsx에서 loc.state로 넘어온 데이터:", data);

  //토글 상태변수 만들기: 왼쪽 더보기,접기 버튼 부분
  const [toggle, setToggle] = useState(false);
  //사이즈버튼 클릭시 색상 변경을 위한 상태관리변수
  const [chgcolor, setChgcolor] = useState(null);
  

  return (
    // 왼쪽 두개+오른쪽 디테일 부분///flex하였음////////////////////////////////////
    <div className="detailbox">
      {/* 왼쪽 두개 부분///flex하였음//////////////////////////////////// */}
      <div className="care_imgbx">
        <div className="care-box-wrap">
        <div className={`care-box${toggle ? " on" : ""}`}>
          
           <CareTxt/>
          
          <button
            className="morebt"
            onClick={() => setToggle((prevState) => !prevState)}
          >
            {/* prevState => !prevState는 상태를 이전상태로 변경 시켜줌,toggle만들때 사용 */}
            {toggle == true ? "접기" : "더보기"}
          </button>
        </div>
        </div>
        {/* 스와이퍼 디테일 부분 ,detail-img */}
        <div className="detail-img">
          <SwiperDetail data={data}/>
        </div>
      </div>

      {/* 가장 오른쪽 디테일 부분///flex하였음//////////////////////////////////// */}
      <div className="detail-txtbox">
        <div className="dttxt-bx">
         
          <div className="tit">{data.name}</div>
          <div className="price">{data.price}</div>
          <div className="desc">{data.txt}</div>
          
          

        
          <ul className="info">
            <li>오프라인 매장에 재고 상태 보기</li>
            <li>배송, 교환 및 반품</li>
          </ul>
        </div>
        <div className="dtsize-bx">
          <div className="color">{data.color}</div>
          <div className="size">
            {data.size.map((v,i)=>
            <button key={i}
            
            onClick={(e)=>{
              setChgcolor(i);
              
              //e.자신의.부모요소의.부모요소의.nextElementSibling( 선택요소의 다음요소).style.backgroundColor주기
              e.currentTarget.parentElement.parentElement.nextElementSibling.style.backgroundColor = "black";
              
              //데이터 전역.useRef에 저장하기
              let dt3 = data.isrc;
              let dt1 = e.target.innerText;
              let dt2 = document.querySelector(".color").innerText;
              myCon.optVal.current = [dt1,dt2,dt3];//전역.useRef.자신 으로 dt1,dt2,dt3을 담기
            }}
            style={{
              backgroundColor: chgcolor === i ? 'black' : 'transparent',
              color: chgcolor === i ? 'white' : 'black',
              transition: '0.3s ease, 0.3s ease'
            }}
            >{v}</button>
          
          )}
            
          </div>
        </div>
        <button
          className="addbutton"
          onClick={() => {
            myCon.setCartList(true);
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
}

export default DetailPg;
