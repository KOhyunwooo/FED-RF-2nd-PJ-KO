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
    // 전체 박스//flex하였음////////////////////////////////////
    <div className="detailbox">
      {/* 왼쪽 케어부분//////////////////////////////////// */}
      {/* <div className="care_imgbx"> */}
      <div className="care-box-wrap">
        <div className={`care-box${toggle ? " on" : ""}`}>
          <CareTxt />

          <button
            className="morebt"
            onClick={() =>
              //prevState => !prevState는 상태를 이전상태로 변경 시켜줌,toggle만들때 사용
              setToggle((prevState) => !prevState)
            }
            style={{
              position: toggle ? "relative" : "absolute",
              bottom: toggle ? "0px" : "0px", // toggle 상태에 따라 top 위치 설정
            }}
          >
            {toggle == true ? "접기" : "더보기"}
          </button>
        </div>
      </div>
      {/*중앙 스와이퍼 부분 ,detail-img */}
      <div className="detail-img">
        <SwiperDetail data={data} />
      </div>
      {/* </div> */}

      {/* 오른쪽 디테일 부분///flex하였음//////////////////////////////////// */}
      <div className="detail-txtbox">
        <div className="dttxt-bx">
          <div className="tit">{data.name}</div>
          <div className="price">
            {data.price[0] && <span>{data.price[0]}</span>}
            {data.price[1] && (
              <span>
                {data.price[1]}&nbsp;{data.price[2]}
              </span>
            )}
          </div>
          <div className="desc">{data.txt}</div>

          <ul className="info">
            <li>오프라인 매장에 재고 상태 보기</li>
            <li>배송, 교환 및 반품</li>
          </ul>
        </div>
        <div className="dtsize-bx">
          <div className="color">{data.color}</div>
          <div className="size">
            {data.size.map((v, i) => (
              <button
                key={i}
                className={`${chgcolor === i ? "on" : ""}`}
                onClick={(e) => {
                  //순번:i 담아서 적용되게 하기
                  setChgcolor(i);

                  //e.자신의.부모요소의.부모요소의.nextElementSibling( 선택요소의 다음요소).style주기: 여기에 주는 이유는 size버튼 클릭시 실행되게 하기 위해
                  e.currentTarget.parentElement.parentElement.nextElementSibling.style.backgroundColor =
                    "black";
                  e.currentTarget.parentElement.parentElement.nextElementSibling.style.color =
                    "#fdfdfd";
                  e.currentTarget.parentElement.parentElement.nextElementSibling.style.transition =
                    "0.3s 0.2s ease-in";

                  //데이터 전역.useRef에 저장하기/////////////////
                  let dt3 = data.isrc;
                  let dt1 = e.target.innerText;
                  let dt2 = document.querySelector(".color").innerText;
                  myCon.optVal.current = [dt1, dt2, dt3]; //전역.useRef.자신 으로 dt1,dt2,dt3을 담기
                }}
              >
                {v}
              </button>
            ))}
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
