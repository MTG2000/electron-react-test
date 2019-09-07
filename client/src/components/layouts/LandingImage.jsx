import React from "react";
import "./styles/Landing.scss";

const LandImage = () => {
  return (
    <div className={`landing w-100 d-flex`}>
      <div data-aos="zoom-in">
        <h1 className="text-white text-center display-1">
          <span className="text-primary">P</span>etro
          <span className="text-primary"> A</span>sia
          <span className="text-primary"> C</span>heme
        </h1>
      </div>
    </div>
  );
};

export default LandImage;
