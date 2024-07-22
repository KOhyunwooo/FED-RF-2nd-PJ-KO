import React, { useContext } from 'react';
import { dCon } from '../func/dCon';

function MyPage(props) {
    const myCon=useContext(dCon);
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1 style={{paddingTop:"10vh"}}>나는 마이 페이지</h1>
            <button onClick={()=>myCon.logoutFn()}>나를 누르면 로그아웃</button>
        </div>
    );
}

export default MyPage;