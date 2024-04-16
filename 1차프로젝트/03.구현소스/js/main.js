// 1차 프로젝트:tap korea쉐도잉 - main.js //////////////

// 모듈로 호출된 JS에서는 다른 외부JS를 import로 호출가능!
// import하려는 파일에서 반드시 함수,변수 등을 export해야함!

//부드러운 스크롤 작동함수 호출!
import{startSS, setScrollPos} from "./smoothScroll23.js";
startSS();

import following from "./following_circle.js";
// slideFn 슬라이드 기능함수 호출!
following();

import following_drag from "./following_drag.js";
following_drag();

import show_letter from "./show_letter.js";
show_letter();

// 페이드 슬라이드 함수
import fadeFn from "./slide_fade.js";
fadeFn();

//비쥬얼섹션 스크롤 액션JS
import viScroll from "./scroll_visual.js";
viScroll();


// 저니섹션 스크롤 액션 JS
import scrollFn from "./scroll_jour.js";
scrollFn();

//저니섹션 스크롤 액션+텍스트
import jourtxt from "./show_letterjour.js";
jourtxt();

import jourtxt2 from "./show_letterjour2.js";
jourtxt2();

//스페셜스크롤 액션
import speScroll from "./scroll_special.js";
speScroll();