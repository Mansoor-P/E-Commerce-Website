import React from "react";
import { Link } from "react-router-dom";
import {tvdata } from "../../../data/tv";

const Tv = () => {
  const firstFiveImages = tvdata.slice(0, 10);
    
  return (
    <>
      <div className="proTitle">
        <h2>Men Fashion</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox" key={item.id}>
              <Link to="/men">
                <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <p className="float-right p-4 text-sky-500 ">
          Scroll Left To See More{" "}
        </p>
      </div>
    </>
  );
};

export default Tv;
