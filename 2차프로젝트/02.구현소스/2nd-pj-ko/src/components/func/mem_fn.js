// 회원가입을 위한 로컬스토리지 생성 JS
/************************************ 
    [ 회원가입 기본 데이터 구조 ]
    1. 기본키(유일키) : idx
    2. 아이디 : uid
    3. 비밀번호 : pwd
    4. 사용자이름 : unm
    5. 이메일 : eml
************************************/

// [ 로컬쓰 클리어 ] /////////
const clearData = () => {
  localStorage.clear();
  console.log("로컬쓰 클리어!");
}; /////////// clearData //////////////

// [ 로컬쓰 초기체크셋팅! ] ////////////
const initData = () => {
  // 만약 로컬스 "mem-data"가 null이면 만들어준다!
  if (localStorage.getItem("mem-data") === null) {
    localStorage.setItem(
      "mem-data",
      `
        [
            {
                "idx": "1",
                "uid":"admin",
                "pwd":"1111",
                "unm":"Administrator",
                "phone":"01012345678",
                "eml":"admin@admin.com",
                "address": [
                    {   
                        "unm":"admin(집)",
                        "phone":"01011111111",
                        "address":"서울시 가나다마바사 1234-5번지",
                        "address2":"아자차 아파트 101동 809호",
                        "zipcode":"12345"
                    },
                    {
                        "unm":"admin(회사)",
                        "phone":"01022222222",
                        "address":"부산시 해운대구 마린시티 1로",
                        "address2":"마린파크 A동 1505호",
                        "zipcode":"48120"
                    },
                    {
                        "unm":"admin(별장)",
                        "phone":"01033333333",
                        "address":"제주특별자치도 서귀포시 중문관광로 72번길",
                        "address2":"제주 휴양리조트",
                        "zipcode":"63535"
                    }
                ]
           
            },
          
            {
                "idx": "2",
                "uid":"tomtom",
                "pwd":"1111",
                "unm":"Tom",
                "phone":"01012345678",
                "eml":"tom@gmail.com",
                "address": ""
            } ,
            {
                "idx": "3",
                "uid":"ko",
                "pwd":"1111",
                "unm":"고현우",
                "phone":"01012345678",
                "eml":"ko@ko.com",
                "address": ""
            }
        ]
    `
    );
  }
}; ///////////// initData /////////////////

export { clearData, initData };
