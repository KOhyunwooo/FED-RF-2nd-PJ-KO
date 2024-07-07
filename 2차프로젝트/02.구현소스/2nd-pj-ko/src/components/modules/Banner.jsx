import React from "react";
import "../../css/banner.scss";
import { banner_data } from "../data/banner_data";
import { Link } from "react-router-dom";

const Banner = ({ category }) => {
  const selData = banner_data[category];

  return (
    <div className="banner">
      {/* 위에 사진 2개 부분*/}
      <div className="top-images">
      {/* {selData.slice(0, 2).map((v, i) => (
          <div key={i}>
            <Link to={v.link}>
              <img src={v.imgsrc} alt={v.txt} />
              <p>{v.txt}</p>
            </Link>
          </div>
        ))} 
        슬라이스로 셀데이터0~2까지 잘라도 가능,2는 포함x*/}
        {selData.map((v, i) => (
          i<2&&(<div key={i}>
            <Link to={v.link} state={{data:v.data}}>
              <img src={process.env.PUBLIC_URL+v.imgsrc} alt={v.txt} />
              <p>{v.txt}</p>
            </Link>
          </div>)
        ))}
      </div>
      {/* 아래 사진 3개 부분 */}
      <div className="bottom-images">
        {selData.map((v, i) => (
         i>=2&&( <div key={i}>
            <Link to={v.link}>
              <img src={process.env.PUBLIC_URL+v.imgsrc} alt={v.txt} />
              <p>{v.txt}</p>
            </Link>
          </div>)
        ))}
      </div>
    </div>
  );
};

export default Banner;