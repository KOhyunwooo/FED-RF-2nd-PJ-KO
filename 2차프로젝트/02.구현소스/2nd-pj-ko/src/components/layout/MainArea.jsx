//메인영역 컴포넌트//////

import { Outlet } from "react-router-dom";

export default function MainArea(){
    return(
        <main className="cont">
            {/* 아웃렛 컴포넌트는 리엑트 라우터에서 컴포넌트를 "변경"하여 
            출력하는 자리를 잡아주는 역할을 한다*/}
            <Outlet/>
            
        </main>
    );

}