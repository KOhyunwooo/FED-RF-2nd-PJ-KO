import { useEffect, useLayoutEffect, useState,useCallback, useRef } from "react";
import MainArea from "./MainArea";
import TopArea from "./TopArea";
import TopAreaMedia from "./TopAreaMedia";
import { Footer } from "./Footer";
import { useLocation,useNavigate } from "react-router-dom";

// 컨텍스트 API사용을 위한 불러오기
import { dCon } from "../func/dCon";
import CartList from "../modules/CartList";

//전체 레이아웃 컴포넌트
export default function Layout() {





    


    // [ 상태관리 변수 ] //////////////////////////////////////////////////////////////
    // 로그인 상태관리변수
    const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));

    // 상태관리변수 변경함수도 전달시 콜백처리해야 메모이제이션됨!
    // const 콜백처리함수 = useCallback((x)=>{setLoginSts(x)},[loginSts])

    // -> 초기값으로 세션스토리지 "minfo"를 할당함

    // 카트리스트 상태관리변수:true상태일때만 화면에 출력
    const [cartList, setCartList] = useState(false);

    // 로그인 환영 메시지 상태변수
    const [loginMsg, setLoginMsg] = useState(null);
    // console.log(loginMsg);

    // 옵션값 저장 상태변수
    const optVal = useRef(null);
    

    // 로컬스토리지 카트 데이터 상태변수(로컬스토리지-mycart-data)
    const [localsMycart,setLocalsMycart]=useState(localStorage.getItem("mycart-data"));

    // [ 공통 함수 ] //////////////////////////////////////////////////////////////////
    // 1. 라우팅 이동함수 : 라우터 이동후크인 useNavigate는
    // 다른 useCallback() 후크로 처리할 수 없다!
    const goNav = useNavigate();
    // 따라서 별도의 함수를 만들고 이것을 콜백처리해준다!
    // 함수메모처리 위해 useCallback()에 넣어준다!
    const goPage = useCallback((pm1, pm2) => {
        goNav(pm1, pm2);
    }, []);

    // 2. 로그인 환영메시지 생성함수
    const makeMsg = useCallback((name) => {
        // 유저아이콘
        let usrIcon = ["🙍‍♂️", "🧏‍♀️", "🦸‍♂", "👨‍🎤", "🦸‍♀"];
        // 랜덤수 : 0~4사이의 수
        let rdm = Math.floor(Math.random() * 5);
        // 로그인 메시지 상태변수 업데이트
        setLoginMsg(`Welcome ${name} ${usrIcon[rdm]}`);
    }, []); /////// makeMsg 함수 /////////

    // 3. 로그아웃 함수 /////////
    const logoutFn = useCallback(() => {
        // 1. 로그인 상태값 null
        setLoginSts(null);
        // 2. 세션스 지우기 : minfo
        sessionStorage.removeItem("minfo");
        // 3. 로그인 메시지 초기화
        setLoginMsg(null);
        // 4. 메인 페이지로 돌아가기
        goPage("/");
    }, []); //////// logoutFn 함수 /////////

    // 화면 랜더링 구역 ////////
    useEffect(() => {
        // -> 로그인 상태 체크 //////
        // 만약 세션스(minfo)의 값이 null이 아니면
        // 로그인 상태변수를 업데이트 한다!
        // -> null이 아니면 조건문이 true처리됨!
        if (sessionStorage.getItem("minfo")) {
            // 세션스 변수할당
            let ss = sessionStorage.getItem("minfo");
            // 로그인 상태값
            setLoginSts(ss);
            // 로그인 메시지 업데이트 :
            // -> 세션스의 unm(이름값)을 보내준다!
            makeMsg(JSON.parse(ss).unm);
        } ///// if ///////
    }, []);


    // 휠스크롤 성능 최적화/////////////////////////////////////////////////
    // useEffect(() => {
    //     // 이벤트 핸들러 함수
    //     const handleWheel = (event) => {
    //       // 스크롤 이벤트 처리 코드
    //       console.log('Wheel event detected');
    //     };    
    //     // 이벤트 리스너 추가
    //     window.addEventListener('wheel', handleWheel, { passive: true });    
    //     // 클린업 함수: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    //     return () => {
    //       window.removeEventListener('wheel', handleWheel);
    //     };
    //   }, []);
       
       

    // '/'에서만 <Footer />실행하지 않게 하기//////////////////////////////////////////////////
    const { pathname } = useLocation();
    console.log("Layout에서경로:", pathname);
    let sts = false;

    if (pathname == "/") sts = false;
    else sts = true;
    // '/'에서만 패딩탑 0적용 그외는 패딩탑 70px////////////////////////////////////////////////
    // useEffect(() => {
    //         document.body.style.paddingTop = pathname === "/" ? "0px" : "70px";
    //         return () => {
    //             document.body.style.paddingTop = ""; // 컴포넌트 언마운트 시 초기화
    //         };
    //     }, [pathname]);
    //가로1050이하일때 <TopAreaMedia /> 그렇지 않으면 <TopArea />호출//////////////////////////////////////////////////
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1050);
    useEffect(() => {
        const media = () => setIsMobile(window.innerWidth <= 1050);
        window.addEventListener("resize", media);
        return () => window.removeEventListener("resize", media);
    }, []);

    // 코드리턴 구역////////////////////////////////////////////////////////
    return (
        // Provider value={{전역으로 보낼 함수,변수}}
        <dCon.Provider
            value={{
                loginSts,
                setLoginSts,
                loginMsg,
                setLoginMsg,
                goPage,
                makeMsg,
                logoutFn,
                setCartList,
                optVal,
               
            }}
        >
            {/* 상단영역 */}
            {isMobile ? <TopAreaMedia /> : <TopArea />}

            {/* 메인영역 */}
            <MainArea />
            {/* 카트리스트:cartList상태관리변수가 true이면 <CartList/> 출력 */}
            {cartList && <CartList optVal={optVal}/>}



            {/* 하단영역? */}
            {sts && <Footer />}
            {/* sts가 true면 <Footer />실행 */}
        </dCon.Provider>
    );
} ////////////레이아웃////////////
