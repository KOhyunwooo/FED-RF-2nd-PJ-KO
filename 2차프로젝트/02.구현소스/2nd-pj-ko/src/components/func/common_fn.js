// pilot PJ 공통함수/////////

// [1]//////////////////////////////////////////////////
// 숫자 세자리마다 콤마 추가 함수
function addComma(x) {
  if (x === undefined || x === null) {
    return '0'; // 기본값 설정
  }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
// 내보내기
export{addComma};