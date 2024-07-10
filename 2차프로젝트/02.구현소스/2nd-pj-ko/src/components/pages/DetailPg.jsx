import React, { useContext, useState } from "react";
import SwiperDetail from "../plugin/SwiperDetail";
import { useLocation } from "react-router-dom";

/* 디테일 pg scss 불러오기 */
import "../../css/detail_pg.scss";
import { dCon } from "../func/dCon";

function DetailPg(props) {
  //컨텍스트 사용하기(Layout.jsx에서setCartList를 상태변경해서 화면에 띄우려고 사용함)
  const myCon = useContext(dCon);

  const loc = useLocation();
  const data = loc.state.v; //ProductList.jsx에서  <Link to="/detail" state={{v}}>로 받아온 데이터
  console.log("useLocation", loc);
  console.log("ProductList.jsx에서 loc.state로 넘어온 데이터:", data);

  //토글 상태변수 만들기: 왼쪽 더보기,접기 버튼 부분
  const [toggle, setToggle] = useState(false);

  

  return (
    // 왼쪽 두개+오른쪽 디테일 부분///flex하였음////////////////////////////////////
    <div className="detailbox">
      {/* 왼쪽 두개 부분///flex하였음//////////////////////////////////// */}
      <div className="care_imgbx">
        <div className={`care-box${toggle ? " on" : ""}`}>
          <p>
            혼용률, 세탁 방법 및 원산지 혼용률 ZARA는 제품에 대한 사회적,
            환경적, 안전 및 건강 관련 표준을 준수하기 위해 모니터링 프로그램을
            운영합니다. 규정 준수 여부를 평가하기 위해 감사 프로그램과 지속적인
            개선 계획을 개발하였습니다.혼용률, 세탁 방법 및 원산지 혼용률 ZARA는
            제품에 대한 사회적, 환경적, 안전 및 건강 관련 표준을 준수하기 위해
            모니터링 프로그램을 운영합니다. 규정 준수 여부를 평가하기 위해 감사
            프로그램과 지속적인 개선 계획을 개발하였습니다.혼용률, 세탁 방법 및
            원산지 혼용률 ZARA는 제품에 대한 사회적, 환경적, 안전 및 건강 관련
            표준을 준수하기 위해 모니터링 프로그램을 운영합니다. 규정 준수
            여부를 평가하기 위해 감사 프로그램과 지속적인 개선 계획을
            개발하였습니다.혼용률, 세탁 방법 및 원산지 혼용률 ZARA는 제품에 대한
            사회적, 환경적, 안전 및 건강 관련 표준을 준수하기 위해 모니터링
            프로그램을 운영합니다. 규정 준수 여부를 평가하기 위해 감사
            프로그램과 지속적인 개선 계획을 개발하였습니다.혼용률, 세탁 방법 및
            원산지 혼용률 ZARA는 제품에 대한 사회적, 환경적, 안전 및 건강 관련
            표준을 준수하기 위해 모니터링 프로그램을 운영합니다. 규정 준수
            여부를 평가하기 위해 감사 프로그램과 지속적인 개선 계획을
            개발하였습니다.
          </p>
          <button
            className="morebt"
            onClick={() => setToggle((prevState) => !prevState)}
          >
            {/* prevState => !prevState는 상태를 이전상태로 변경 시켜줌,toggle만들때 사용 */}
            {toggle == true ? "접기" : "더보기"}
          </button>
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
          <div className="color">도트 그레이 | 2208/425</div>
          <div className="size">
            {data.size.map((v,i)=>
            <button key={i}>{v}</button>
          
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
