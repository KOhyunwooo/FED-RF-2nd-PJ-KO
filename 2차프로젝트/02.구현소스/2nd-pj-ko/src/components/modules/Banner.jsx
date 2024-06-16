import React from "react";
import "../../css/banner.scss";
import { banner_data } from "../data/banner_data";
import { Link } from "react-router-dom";

const Banner = ({ category }) => {
  const selData = banner_data[category];

  return (
    <div className="banner">
      <div className="top-images">
        {selData.slice(0, 2).map((v, i) => (
          <div key={i}>
            <Link to={v.link}>
              <img src={v.imgsrc} alt={v.txt} />
              <p>{v.txt}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="bottom-images">
        {selData.slice(2).map((v, i) => (
          <div key={i}>
            <Link to={v.link}>
              <img src={v.imgsrc} alt={v.txt} />
              <p>{v.txt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;