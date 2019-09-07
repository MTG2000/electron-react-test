import React from "react";
import LandingImage from "./LandingImage";
import Products from "../Products";

const Home = () => {
  document.title = "Petro Asia Cheme";

  return (
    <React.Fragment>
      <LandingImage />
      <div className="container-fluid row justify-content-around mt-6">
        <div className="col-lg-3 align-self-center">
          <img
            src="https://drive.google.com/uc?id=1KLZliy-t4wjWlN7m_xuysMnND1vjxJX0"
            alt=""
            className="d-block mx-auto"
            data-aos="zoom-in"
          />
        </div>
        <div className="col-md-7">
          <h2
            className="text-center text-primary  mt-5 mb-4"
            data-aos="zoom-in-down"
          >
            About Petro Asia Cheme
          </h2>
          <h5
            className="text-justify text-dark px-3 mt-4 mb-5 mx-auto"
            style={{
              lineHeight: "1.5em",
              letterSpacing: ".04em"
            }}
            data-aos="fade-left"
          >
            Petro Asia Cheme have been manufacturing, and exporting chemicals
            and petrochemical products from Iran since 2019 and have penetrated
            various markets in the world especially Middle East, Africa, CIS
            countries and Asia. With years of solid experience in chemicals and
            petrochemicals market, we mainly assist our customers with
            competitive price, foreign banking facilities, cost-effective and
            fast logistics services
          </h5>
        </div>
      </div>
      <Products />
    </React.Fragment>
  );
};

export default Home;
