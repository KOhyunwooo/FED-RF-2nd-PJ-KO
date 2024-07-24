import React, { useContext, useEffect, useRef, useState } from "react";
import SwiperDetail from "../plugin/SwiperDetail";
import { useLocation } from "react-router-dom";
import $ from "jquery";
/* 디테일 pg scss 불러오기 */
import "../../css/detail_pg.scss";
import { dCon } from "../func/dCon";
import CareTxt from "../modules/CareTxt";
import { addComma } from "../func/common_fn";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"; // react-icons 추가

//데이터 불러오기 man
import { mBestSeller, mNew, mSale, mOrigins } from "../data/products_man";
//데이터 불러오기 woman
import { wNew, wSale } from "../data/products_woman";
import useFavoriteFn from "../func/useFavoriteFn";
import Recomend from "../modules/Recomend";

function DetailPg(props) {
    //컨텍스트 사용하기(Layout.jsx에서setCartList를 상태변경해서 화면에 띄우려고 사용함)
    const myCon = useContext(dCon);

    const loc = useLocation();
    const data = loc.state.v; //ProductList.jsx에서  <Link to="/detail" state={{v}}>로 받아온 선택 데이터
    console.log("useLocation", loc);
    console.log(
        "ProductList.jsx에서 loc.state로 넘어온 데이터:",
        data,
        data.idx
    );
    /////////////////////////////////////////2024-07-22//////////////////////////////////////////////////////
    //데이터 합쳐서 배열에 담기(sizeData)
    const sizeData = [
        ...mBestSeller,
        ...mNew,
        ...mOrigins,
        ...mSale,
        ...wNew,
        ...wSale,
    ];
    // console.log(sizeData);
    // 합친데이터로(sizeData) find 메서드를 사용하여 isrc 값이 data.isrc와 일치하는 객체를 찾음.
    let temp = sizeData.find((v) => {
        // v.isrc와 data.isrc가 일치하면 true를 반환 해당 객체를 찾음.
        if (v.isrc == data.isrc) return true;
    });
    // console.log("사이즈만:",temp.size);
    // console.log("넘어온 객체:",data);

    // 기존 data 의 "사이즈" 객체값 업데이트하기
    data.size = temp.size;
    // 기존 data 의 "이미지 데이터들" 객체값 업데이트하기
    data.dtsrc = temp.dtsrc;
    // 기존 data 의 "설명 데이터" 객체값 업데이트하기
    data.txt = temp.txt;
    /////////////////////////////////////////2024-07-22//////////////////////////////////////////////////////

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

    useEffect(() => {
        $(".care-box").scrollTop(0);
    }, [toggle]);

    //favorite, 하트버튼 사용을 위한 내가만든 커스텀 훅!
    const { favorites, toggleFavorite } = useFavoriteFn();

    /////////////////////////////////////////////////////////////////////////////
    const [isBottom, setIsBottom] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const detailTxtBoxRef = useRef(null); //
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 777);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        // 전체 페이지 클릭 이벤트 리스너 추가
        const handlePageClick = (e) => {
            if (
                isMobile &&
                isBottom &&
                detailTxtBoxRef.current &&
                !detailTxtBoxRef.current.contains(e.target)
            ) {
                setIsBottom(false);
                //isMobile: 모바일 환경일 때
                //isBottom: detail-txtbox가 열려 있을 때
                //detailTxtBoxRef.current: detail-txtbox 요소가 존재할 때
                //!detailTxtBoxRef.current.contains(e.target): 클릭된 요소가 detail-txtbox 외부일 때
            }
        };
        document.addEventListener("click", handlePageClick); //

        return () => {
            //소멸자~
            window.removeEventListener("resize", checkMobile);
            document.removeEventListener("click", handlePageClick);
        };
    }, [isMobile, isBottom]);

    const handleClick = (event) => {
        if (
            isMobile &&
            !event.target.closest("button") &&
            !event.target.closest(".heartbutton")
        ) {
            setIsBottom(!isBottom);
            //이 함수는 detail-txtbox 내부 클릭을 처리
            //모바일 환경에서, 클릭된 요소가 버튼이나 하트 버튼이 아닐 때 isBottom 상태를 토글합니다.
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////

    ////detail-txtbox 높이값 구하기/////////////////////////
   
    // const detailTxtBoxRef = useRef(null);//위에 있음
    const [dtTxtBoxHeight, setDtTxtBoxHeight] = useState(0);
  
    useEffect(() => {
      if (detailTxtBoxRef.current) {
        setDtTxtBoxHeight(detailTxtBoxRef.current.offsetHeight);
      }
    }, [data]); // data가 변경될 때마다 실행
    ///////////////////////////////////////////////////////


    return (
        <>
            <div className="detailpgmargintop"></div>
            {/* // 전체 박스//flex하였음//////////////////////////////////// */}
            <div className="detailbox">
                {/* 왼쪽 케어부분//////////////////////////////////// */}
                {/* <div className="care_imgbx"> */}
                <div className="care-box-wrap">
                    <div className={`care-box${toggle ? " on" : ""}`}>
                        <CareTxt />

                        <button
                            className="morebt"
                            onClick={() => {
                                //prevState => !prevState는 상태를 이전상태로 변경 시켜줌,toggle만들때 사용
                                setToggle((prevState) => !prevState);
                            }}
                            style={{
                                border: "none",
                                boxSizing: "border-box",
                                backgroundColor: "#fdfdfd",
                                position: toggle ? "relative" : "absolute",
                                bottom: toggle ? "1px" : "1px", // toggle 상태에 따라 top 위치 설정
                            }}
                        >
                            {toggle == true ? "감추기" : "더 보기"}
                        </button>
                    </div>
                </div>
                {/*중앙 스와이퍼 부분 ,detail-img */}
                <div className="detail-img">
                    <SwiperDetail data={data} />
                </div>
                {/* </div> */}

                {/* 오른쪽 디테일 부분///flex하였음//////////////////////////////////// */}
                <div
                    className="detail-txtbox"
                    onClick={handleClick}
                    style={isMobile ? { bottom: isBottom ? "0" : `${50 - dtTxtBoxHeight }px` } : {}}
                    ref={detailTxtBoxRef} //detail-txtbox DOM 요소와 detailTxtBoxRef 참조를 연결,detailTxtBoxRef.current를 통해 해당 요소에 접근가능
                >
                    <div className="dttxt-bx">
                        {/* 하트버튼:favorite버튼 **************** */}
                        <div
                            className="heartbutton"
                            onClick={(e) => {
                                if (isMobile) e.stopPropagation();
                                toggleFavorite(data);
                            }}
                        >
                            {favorites.some((fav) => fav.idx === data.idx) ? (
                                <IoMdHeart size={20} />
                            ) : (
                                <IoMdHeartEmpty size={20} />
                            )}
                        </div>
                        <div className="tit">{data.name}</div>
                        <div className="price">
                            {data.price[0] && (
                                <span>₩{addComma(data.price[0])}</span>
                            )}
                            {data.price[1] && (
                                <span>
                                    {data.price[1]}&nbsp;₩
                                    {addComma(data.price[2])}
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
                            {data.size &&
                                data.size.map((v, i) => (
                                    <button
                                        key={i}
                                        className={`${
                                            chgcolor === i ? "on" : ""
                                        }`}
                                        onClick={(e) => {
                                            if (isMobile) e.stopPropagation(); //모바일일때만e.stopPropagation()실행
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
                                            let dt3 =
                                                document.querySelector(
                                                    ".color"
                                                ).innerText; //색상
                                            let dt4 = e.target.innerText; //선택 사이즈
                                            myCon.optVal.current = [
                                                dt1,
                                                dt2,
                                                dt3,
                                                dt4,
                                            ]; //전역.useRef.자신 으로 dt1,dt2,dt3을 담기
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
                        onClick={(e) => {
                            e.stopPropagation(); // 이벤트 버블링 방지
                            if (isMobile) {
                                //모바일일때
                                if (isBottom) {
                                    // 기존의 추가하기 버튼 클릭 로직
                                    if (chgcolor === null) {
                                        alert("사이즈를 선택해주세요");
                                        return;
                                    }
                                } else {
                                    setIsBottom(true);
                                }
                            } else {
                                // 데스크톱 버전의 추가하기 버튼 로직
                                if (chgcolor === null) {
                                    alert("사이즈를 선택해주세요");
                                    return;
                                }
                            }

                            //추가하기 버튼: 클릭시 로컬스토리지에 넣기//////////////////////////////
                            //1. 로컬스토리지 만들기(로컬스 생성, 로컬스토리지 생성)///////////////
                            if (!localStorage.getItem("mycart-data")) {
                                //localStorage.getItem("mycart-data")가 없으면
                                localStorage.setItem("mycart-data", "[]"); // localStorage.setItem(키,값);해라. 키:mycart-data, 값[ ]
                            }
                            //2. 로컬스 파싱하기/////////???????????????????????????
                            let locals = JSON.parse(
                                localStorage.getItem("mycart-data")
                            );

                            //3. 기존 데이터중 동일한 데이터 거르기///////////////////
                            // 파싱된 로컬스 데이터중 idx항목을 검사하여
                            // gIdx로 넣을 상품 idx와 같은 것이 있으면
                            // 메시지와 함께 리턴처리하여 입력을 막아준다!

                            //******데이터 만들때 idx데이터 잘못만들어서 카테고리끼리 중복idx 가 있음
                            //******그래서 내 데이터의 idx는 사실 상품 고유번호가 아님
                            //******추후 수정 필요

                            // find로 중복검사하기
                            let aa = locals.find((v) => {
                                if (
                                    v.idx == data.idx &&
                                    v.size == myCon.optVal.current[3]
                                )
                                    return true;
                            }); //
                            if (aa) {
                                //(로컬스토리지에 들어간 배열.includes(선택데이터))
                                alert("이미 선택하신 상품입니다");
                                return;
                            }

                            //4. 로컬스에 '중복검사된' 들어가야할 데이터 푸시하기(푸시하고-저장해야 로컬스토리지에 저장됨)//////////
                            locals.push({
                                idx: data.idx, //idx
                                name: data.name, //이름
                                price: [
                                    data.price[0],
                                    data.price[1],
                                    data.price[2],
                                ], //[가격,할인율,할인된가격]
                                color: data.color, //색상
                                size: myCon.optVal.current[3], //선택된 색상
                                isrc: data.isrc, //이미지주소
                                cnt: 1,
                            });
                            //5. 로컬스토리지에 문자열(json형식)으로 변환하여 저장하기!!!
                            //넣을때:stringify, 불러올때:parse
                            localStorage.setItem(
                                "mycart-data",
                                JSON.stringify(locals)
                            );

                            // 최상위 로컬스 카트에 추가하기(:이게 없으면 MyCart.jsx에서 물건이1개 일때 지워질떄 렌더링이 제대로 되지 않음 ㅠㅠ)
                            myCon.setLocalsMycart(JSON.stringify(locals));

                            myCon.setCartList(true); // <CartList/> 생성 상태값 변경//true로 생성
                            setShowCart(true);
                        }}
                    >
                        추가하기
                    </button>

                    <div className="hidden-txt-box">
                        <p>{data.txt}</p>
                        <p>{data.color}</p>
                    </div>
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
            <div className="detailpg-recomend-wrap">
                <h3 style={{ margin: "50px 0 20px 20px" }}>추천 제품</h3>
                <Recomend />
            </div>
        </>
    );
}

export default DetailPg;
