import React, { useContext, useEffect, useState } from "react";
import SwiperDetail from "../plugin/SwiperDetail";
import { useLocation } from "react-router-dom";
import $ from "jquery";
/* 디테일 pg scss 불러오기 */
import "../../css/detail_pg.scss";
import { dCon } from "../func/dCon";
import CareTxt from "../modules/CareTxt";

function DetailPg(props) {
  //컨텍스트 사용하기(Layout.jsx에서setCartList를 상태변경해서 화면에 띄우려고 사용함)
  const myCon = useContext(dCon);

  const loc = useLocation();
  const data = loc.state.v; //ProductList.jsx에서  <Link to="/detail" state={{v}}>로 받아온 선택 데이터
  console.log("useLocation", loc);
  console.log("ProductList.jsx에서 loc.state로 넘어온 데이터:", data);

  //토글 상태변수 만들기: 왼쪽 더보기,접기 버튼 부분
  const [toggle, setToggle] = useState(false);
  //사이즈버튼 클릭시 색상 변경, 사이즈 선택안하고 추가하기 버튼을 위한 상태관리변수
  const [chgcolor, setChgcolor] = useState(null);

  //카트리스트 안보이게->보이게 하기////////////////////////////////////////////
  const [showCart, setShowCart] = useState(false); //초깃값false안보이는 상태임
  useEffect(() => {
    if (showCart) {
      document.querySelector("html").style.overflow = "hidden";
      $(".addedcart-box").animate({ right: "0" });
      $(".cartlist-bg").fadeIn(300);
    } else {
      document.querySelector("html").style.overflow = "auto";
      $(".addedcart-box").animate({ right: "-100%" });
      $(".cartlist-bg").fadeOut(300);
    }
    return () => {
      //소멸자~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      $(".addedcart-box").stop(true, true); //.addedcart-box 애니매이션 소멸
      $(".cartlist-bg").stop(true, true); //.cartlist-bg 애니매이션 소멸
      document.querySelector("html").style.overflow = "auto"; //html오버플로우 오토로 복귀
    };
  }, [showCart]);

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
                  let dt1 = data.name; //데이터 이름
                  let dt2 = data.isrc; //데이터 이미지주소
                  let dt3 = document.querySelector(".color").innerText; //색상
                  let dt4 = e.target.innerText; //선택 사이즈
                  myCon.optVal.current = [dt1, dt2, dt3, dt4]; //전역.useRef.자신 으로 dt1,dt2,dt3을 담기
                  console.log(
                    "사이즈 버튼 클릭하는 순간, 사이즈는??",
                    myCon.optVal.current[3]
                  );
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        {/* ******************추가하기 버튼****************** */}
        <button
          className="addbutton"
          onClick={() => {
            if (chgcolor === null) {
              alert("사이즈를 선택해주세요");
              return;
            }

            //추가하기 버튼: 클릭시 로컬스토리지에 넣기//////////////////////////////
            //1. 로컬스토리지 만들기///////////////
            if (!localStorage.getItem("mycart-data")) {
              //localStorage.getItem("mycart-data")가 없으면
              localStorage.setItem("mycart-data", "[]"); // localStorage.setItem(키,값);해라. 키:mycart-data, 값[ ]
            }
            //2. 로컬스 파싱하기/////////???????????????????????????
            let locals = JSON.parse(localStorage.getItem("mycart-data"));

            //3. 기존 데이터중 동일한 데이터 거르기///////////////////
            // 파싱된 로컬스 데이터중 idx항목을 검사하여
            // gIdx로 넣을 상품 idx와 같은 것이 있으면
            // 메시지와 함께 리턴처리하여 입력을 막아준다!

            //******데이터 만들때 idx데이터 잘못만들어서 카테고리끼리 중복idx 가 있음
            //******그래서 내 데이터의 idx는 사실 상품 고유번호가 아님
            //******추후 수정 필요

            // find로 중복검사하기
            let aa = locals.find((v) => {
              if (v.idx == data.idx && v.size == myCon.optVal.current[3])
                return true;
            }); //
            if (aa) {
              //(로컬스토리지에 들어간 배열.includes(선택데이터))
              alert("이미 선택하신 상품입니다");
              return;
            }

            //4. 로컬스에 '중복검사된' 들어가야할 데이터 푸시하기(푸시하고-저장해야 로컬스토리지에 저장됨)//////////
            locals.push({
              idx: data.idx,
              name: data.name,
              price: data.price[0],
              price1: data.price[1],
              price2: data.price[2],
              color: data.color,
              size: myCon.optVal.current[3],
              isrc: data.isrc,
              /********************** 
                        [로컬스에 푸시할 데이터]
                        1.상품고유번호: idx
                        2.이름: name
                        3.가격: price
                        4.price2:할인율
                        5.price3:할인율적용된 가격
                        5.색상:color
                        4.사이즈:size
                        5.이미지주소:isrc
                        **********************/
            });
            //5. 로컬스토리지에 문자열(json형식)으로 변환하여 저장하기!!!
            //넣을때:stringify, 불러올때:parse
            localStorage.setItem("mycart-data", JSON.stringify(locals));

            myCon.setCartList(true); // <CartList/> 생성 상태값 변경//true로 생성
            setShowCart(true);
          }}
        >
          추가하기
        </button>
      </div>
      {/* 왜 되는지는 모르지만 777일때 footer-area 디스플레이 none하기 */}
      <style jsx="true">{`
        @media (max-width: 777px) {
          body {
            padding-top: 0;
          }
          .footer-area {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default DetailPg;
