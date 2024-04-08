

// 나의 함수
import myFn from './dom.js';

// 스크롤 액션 JS

export default function jourtxt(){

    // 대상:.jourtxt
    const jourTxt = myFn.qs(".jourtxt");
    const jourtxtStyle = myFn.qs(".jourtxt-style");



    const myText = 'Our Journey Towwards';
    
  
    // 4. 데이터 글자 한 글자씩 태그로 싸기
    // for of 사용!
  
    // html태그 변수
    let hcode = '';
    // 지연시간 계산을 위한 순번변수
    let seqNum = 0;
  
    for(let x of myText){
      // console.log(x);
      if(x===' '){ // 스페이스 공백처리
          hcode += '&nbsp;';
      } /// if ///
      else{ // 글자일 경우 span태그 랩핑처리
          hcode += `
          <span
          style="transition-delay: ${seqNum*0.08}s"
          >
          ${x}</span>`;
      } /// else ///
  
      // 중요!!! 지연시간에 곱해질 순번증가하기!
      seqNum++;
    } //////// for of /////////////
  
    // 5. 스테이지에 코드 출력하기 /////
    stage.innerHTML = hcode;
  


/****************************************** * 




// 기준값:
const CRITERIA = window.innerHeight/3*2;

// 이벤트 설정하기
myFn.addEvt(window,'scroll',showIt);

// 스크롤 이벤트 함수
function showIt(){
    // 대상위치값
    let tgPos = myFn.getBCR(jourtxt);
    // console.log(tgPos);
    
    if(tgPos < CRITERIA){
        jourtxtStyle.classList.add('on');
    }
    else{
        jourtxtStyle.classList.remove('on');
    }
    
} //////// showIt 함수 ////////////


****************************************/



} //////////// jourtxt함수 //////////////