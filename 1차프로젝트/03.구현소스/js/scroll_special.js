// 나의 함수
import myFn from './dom.js';



// 스크롤 액션 JS

export default function speScroll(){

    // 대상:.scrollspebox
    const scrSpebox = myFn.qsa(".scrollspebox");
    

    // 기준값:
    const CRITERIA = window.innerHeight/3*2;
    // console.log(scrSpebox);

    // 이벤트 설정하기
    myFn.addEvt(window,'scroll',showIt);

    // 스크롤 이벤트 함수
    function showIt(){

        scrSpebox.forEach(ele=>{
            // 대상위치값
            let tgPos = myFn.getBCR(ele);
            // console.log(tgPos);
    
            if(tgPos < CRITERIA){
                ele.classList.add('on');
            }
            else{
                ele.classList.remove('on');
            }

        }); //////// forEach ///////


    } //////// showIt 함수 ////////////





} //////////// scrollFn 함수 //////////////