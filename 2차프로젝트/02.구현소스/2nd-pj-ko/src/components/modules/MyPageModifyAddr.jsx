import React from "react";
import { Link } from "react-router-dom";



//어드레스리스트 scss 불러오기
import "../../css/address_list.scss";



function MyPageModifyAddr(props) {
    //세션스토리지에서 현재로그인한 데이터 가져오기
    const mySessionData = JSON.parse(sessionStorage.getItem("minfo"));
    //로컬스토리지 멤버들 데이터 가져오기
    const tgData = JSON.parse(localStorage.getItem("mem-data"));
    
    // const totalPrice2=0;
    
  

  return (
    <>
      <div className="address-txt-wrap">
        {mySessionData.address && mySessionData.address.length > 0 ? (
          mySessionData.address.map((v, i) => (
            <div className="address-box" key={i}>
              <div
                className="addresses"
                onClick={() => {// ()=> 이거 꼭 해줄것
                  
               
                  //   console.log(tgData);
                  // 해당 주소 순서 바꾸기
                  tgData.find((v) => {
                    // 사용자전체 정보중 uid가 세셔정보와 일치하는 데이테만 선택
                    if (v.uid == mySessionData.uid) {
                      //   console.log(v.uid, "/", mySessionData.uid);
                      // 임시변수에 현재 변경할 주소속성값 저장
                      let temp = v.address[i];
                      //   console.log(temp);
                      // 실제 객체 정보중 해당순번의 주소데이터 삭제!
                      v.address.splice(i, 1);
                      // 주소 배열중 맨 앞에 저장된 주소넣기(순번을 맨앞으로 이동)
                      v.address.unshift(temp);
                      //   console.log("결과:", v.address);
                      //   console.log("결과전체:", v);

                      // 세션정보도 업데이트하기(현재 로그인 사용자 정보 업데이트)
                      sessionStorage.setItem("minfo", JSON.stringify(v));
                      return true;
                    } /// if ////
                  }); // find 내부함수 ///
                  // 실제 사용자 주소정보 반영하기 (전체 회원정보중 현재사용자 정보 업데이트)
                  //   console.log(sessionStorage.getItem("minfo"));
                  localStorage.setItem("mem-data", JSON.stringify(tgData));
                  // 서브컴포넌트 리랜더링
                //   setSelAddr(0);
                }}
              >
                <p>{v.unm}</p>
                <p>{v.address}</p>
                <p>{v.address2}</p>
                <p>{v.zipcode}</p>
                <p>대한민국</p>
                <p>{v.phone}</p>
              </div>
              <Link
                to={"/addaddresspg"}
                state={{
                  addressIndex: i, //선택된 순번넘기기
                  addressData: v, //선택된 값(주소1,주소2,우편번호,어드레스안에 이름,어드레스안에 번호)넘기기
                  totalPrice2: 0, //총합계값 넘기기,0을 넘겨서 AddAddressPg.jsx에서 0일때조건 다르게 출력
                }}
              >
                <span>편집</span>
              </Link>
            </div>

          ))
        ) : (
          <p>등록된 주소가 없습니다.</p>
        )}
      </div>
      
      <Link to={"/addaddresspg"} state={{ totalPrice2:0 }}>
            <div className="newaddress">새로운 주소 추가</div>
          </Link>
    </>
  );
}

export default MyPageModifyAddr;
