// 나의 함수
import myFn from './dom.js';



// 스크롤 액션 JS

export default function viScroll(){

    // 대상:.visect-right
    const viRight = myFn.qs(".visect-right");
    

    // 기준값:
    const CRITERIA = window.innerHeight/3*2;

    // 이벤트 설정하기
    myFn.addEvt(window,'scroll',showIt);

    // 스크롤 이벤트 함수
    function showIt(){
        // 대상위치값
        let tgPos = myFn.getBCR(viRight);
        console.log(tgPos);

        if(tgPos < CRITERIA){
            viRight.classList.add('on');
        }
        else{
            viRight.classList.remove('on');
        }

    } //////// showIt 함수 ////////////





} //////////// scrollFn 함수 //////////////