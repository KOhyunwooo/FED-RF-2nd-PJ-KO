import React, { memo } from "react";
//box2 데이터 불러오기
import { footerbox2data } from "../data/footer_area_data";
// css불러오기
import "../../css/footer.scss";

export const Footer = memo(() => {
  console.log("나는 하단이야~~~~~")
  return (
    <>
      <div className="footer-area">
        <div className="footer-box1">
          {/* 박스11111111111111111111111111111111111111111111111111111111111111* */}

          <h3>뉴스레터에 가입하세요</h3>
          <div className="footer-input">
            <input type="text" id="finput" className="finput" placeholder=" " />
            {/* css에 인접선택자 '+'를 사용했기 때문에 input이 label의 상단에 와야함. */}
            <label htmlFor="finput"> 여기에 이메일을 입력하세요</label>
          </div>
          <ul className="sns">
            {footerbox2data[1].map((v, i) => (
              i > 1 &&
              <li key={i}> <a href={v.link}>{v.txt}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-box2">
          {/* 박스222222222222222222222222222222222222222222222222222222222222222222222222 */}

          <ul style={{ display: "flex" }}>
            {footerbox2data.map((v, i) => (
              <li key={i}>
                <ol>
                  {v.map((inv, ini) => (
                    <li key={ini} className="navtxt">
                      {ini == 0 ? inv.txt : <a href={inv.link}>{inv.txt}</a>}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-box3">
          {/* 박스3333333333333333333333333333333333333333333333333333333333333333333333333 */}

          <p>
          아이티엑스코리아 유한회사 ｜ 사업자등록번호: 120-88-14733 ｜ 대표자 : ROMAY DE LA COLINA JOSE MANUEL ｜ 서울시 강남구 영동대로 511 (삼성동, 트레이드타워 33층) ｜  대표번호: 080-479-0880  ｜  호스팅 서비스 사업자: ITX Merken, B.V.  ｜  통신판매업신고 : 제2014-서울강남-02297 (<a target="_blank" href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208814733">사업자정보확인</a>)  ｜ <a target="_blank" href="https://static.zara.net/static//pdfs/KR/privacy-policy/privacy-policy-ko_KR-20240524.pdf">개인정보처리방침</a> | <a target="_blank" href="https://static.zara.net/static//pdfs/KR/terms-and-conditions/terms-and-conditions-ko_KR-20240311.pdf">이용약관</a>
          </p>
        </div>
      </div>
    </>
  );
});

