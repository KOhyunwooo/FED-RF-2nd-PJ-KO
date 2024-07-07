import React, { useState } from "react";
import SwiperDetail from "../plugin/SwiperDetail";
import { useLocation } from "react-router-dom";

/* 디테일 pg scss 불러오기 */
import "../../css/detail_pg.scss";

function DetailPg(props) {
  const loc = useLocation();
  const data = loc.state; //ProductList.jsx에서  <Link to="/detail" state={selData}>로 받아온 데이터
  console.log("DetailPg: useLocation", loc);
  console.log("DetailPg: loc.state", data);

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
        <div className="detail-img" style={{ width: "488px", height: "736px" }}>
          <SwiperDetail />
        </div>
      </div>

      {/* 가장 오른쪽 디테일 부분///flex하였음//////////////////////////////////// */}
      <div className="detail-txtbox">
        <div className="dttxt-bx">
          <div className="tit">울 더블 브레스트 블레이저 ZW COLLECTION</div>
          <div className="price">₩ 89,900</div>
          <div className="desc">
            ZARA WOMAN COLLECTION 울 혼방 원사 소재로 제작한 블레이저. 버튼이
            달린 트임 마감 긴소매 라펠 칼라 디자인. 앞면 플랩 포켓과 가슴 부분
            파이핑 포켓. 톤온톤 내부 안감. 앞면 버튼 크로스 여밈.
          </div>
          <ul className="info">
            <li>오프라인 매장에 재고 상태 보기</li>
            <li>배송, 교환 및 반품</li>
          </ul>
        </div>
        <div className="dtsize-bx">
          <div className="color">도트 그레이 | 2208/425</div>
          <div className="size">
            <button>XS (KR 44)</button>
            <button>S (KR 55)</button>
            <button>M (KR 66)</button>
            <button>L (KR 77)</button>
            <button>XL (KR 88)</button>
          </div>
        </div>
        <button className="addbutton">추가하기</button>
      </div>
    </div>
  );
}

export default DetailPg;
