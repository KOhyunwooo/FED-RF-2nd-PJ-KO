import React, { useEffect } from 'react';

function Sorry() {
    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);
  
    return (
       <>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div style={{width:"80vw",margin:"0 auto"}}>
            <h1 style={{fontSize:"30px", textAlign:"center"}}>여기는 아직 준비되지 않았습니다만?!...</h1>
            <img style={{width:"100%",maxWidth:"500px",margin:'0 auto',display:"block"}} src={process.env.PUBLIC_URL+`./images/sorry${Math.floor(Math.random() * 3) + 1}.jpg`} alt="자라" />
        </div>
       </>
    );
}

export default Sorry;