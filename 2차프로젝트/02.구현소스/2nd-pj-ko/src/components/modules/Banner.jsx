import React from "react";
import "../../css/banner.scss";
import { banner_data } from "../data/banner_data";
import { Link } from "react-router-dom";

const Banner = ({ category }) => {
  const selData = banner_data[category];

  return (
    <div className="banner">
      <div className="first-div">
        {selData.map(
          (v, i) =>
            (v.sale_imgsrc || v.newarr_imgsrc) && (
              <div key={i}>
                <Link to={v.link}>
                  {v.sale_imgsrc && (
                    <img src={v.sale_imgsrc} alt={v.sale_txt} />
                  )}
                  <p>{v.sale_txt}</p>
                </Link>
                <Link to={v.link}>
                  {v.newarr_imgsrc && (
                    <img src={v.newarr_imgsrc} alt={v.newarr_txt} />
                  )}
                  <p>{v.newarr_txt}</p>
                </Link>
              </div>
            )
          //   <div key={i}>
          //     {v.sale_imgsrc && (
          //       <img src={v.sale_imgsrc} alt={v.sale_txt} />
          //     )}
          //     {v.newarr_imgsrc && (
          //       <img src={v.newarr_imgsrc} alt={v.newarr_txt} />
          //     )}

          //   </div>
        )}
      </div>
      <div className="second-div">
        {selData.map(
          (v, i) =>
            (v.first_imgsrc || v.second_imgsrc || v.third_imgsrc) && (
              <div key={i}>
                <Link to={v.link}>
                  {v.first_imgsrc && (
                    <img src={v.first_imgsrc} alt={v.first_txt} />
                  )}
                  <p>{v.first_txt}</p>
                </Link>
                <Link to={v.link}>
                  {v.second_imgsrc && (
                    <img src={v.second_imgsrc} alt={v.second_txt} />
                  )}
                  <p>{v.second_txt}</p>
                </Link>
                <Link to={v.link}>
                  {v.third_imgsrc && (
                    <img src={v.third_imgsrc} alt={v.third_txt} />
                  )}
                  <p>{v.third_txt}</p>
                </Link>
              </div>
            )
          //   <div key={i}>
          //     {v.first_imgsrc && (
          //       <img src={v.first_imgsrc} alt={v.first_txt} />
          //     )}
          //     {v.second_imgsrc && (
          //       <img src={v.second_imgsrc} alt={v.second_txt} />
          //     )}
          //     {v.third_imgsrc && (
          //       <img src={v.third_imgsrc} alt={v.third_txt} />
          //     )}
          //   </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
