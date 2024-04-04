export default function following_drag(){

// 1-1. 움직일 대상 : .dPointer
const dPointer = document.querySelector(".dragpointer");
const newsB = document.querySelector(".newsbox");
// 1-2. 이벤트 대상 : journeymain


// console.log('대상:', dPointer, journeymain);

// 2. 이벤트 대상에 마우스무브 이벤트가 발생할때
// 무버가 마우스 포인터 따라다니기 기능구현
newsB.onmousemove = (e) => {
//   console.log("마우스무브!!!");

  // 1. 마우스 포인터 위치값 알아오기
  // event객체에 모두 셋업됨 -> e변수로 받음
  // e.pageX : X축위치
  // e.pageY : Y축위치

  // 2. 무버에 위치값 적용하기
  // -> 무버에는 트랜지션이 적용되어 있음!
//   dPointer.style.top = e.pageY + 'px';
// dPointer가 fixed이면 Y축은 보이는 화면 기준해야함!
// -> 그래서 clientY를 사용함!
  dPointer.style.top = e.clientY + 'px';
  dPointer.style.left = e.pageX + 'px';


}; /////////// mousemove //////////////

// 3. 이벤트 대상 구역에 들어올때만 보이기 / 나가면 숨기기
newsB.onmouseenter = ()=>{
    dPointer.style.opacity = 1;
}; // mouseenter //////////
newsB.onmouseleave = ()=>{
    dPointer.style.opacity = 0;
}; // mouseleave //////////



}

/* 
    ★[[ 이벤트발생시 위치값 ]]★

    1. clientX, clientY
        -> 현재 보이는 브라우저 화면이 기준
        -> 화면을 기준한 fixed 포지션에서 주로 사용!

    2. offsetX, offsetY
        -> 이벤트 대상이 기준
        -> 특정박스이 부모자격박스로 부터 위치를 사용할 경우

    3. pageX, pageY
        -> 전체 문서를 기준(스크롤 화면을 포함)
        -> 화면을 기준한 absolute 포지션에서 주로 사용!

    4. screenX, screenY
        -> 모니터 화면을 기준
*/
