import React from "react";
import "./styles/about.scss";

const About = () => {
  document.title = "About Petro Asia Cheme";
  return (
    <div className={`w-100 about`}>
      <div
        className="aboutImage"
        style={{
          backgroundImage:
            'url("https://drive.google.com/uc?id=1W4R_Q5K5XKtmywaX0giy36EXlry37e-u")'
        }}
      >
        <h1 className="text-center mt-6 mb-5 text-white" data-aos="zoom-in">
          About <span className="text-white">Petro Asia Cheme</span>
        </h1>
      </div>
      <div className="container mx-auto mt-5 mb-6">
        <div className="row justify-content-around">
          <div className="col-lg-6 mb-4" data-aos="fade-right">
            <h2 className="text-left text-dark  border-bottom border-primary px-2 py-2">
              Who We <span className="text-primary text-capitalize">are</span>
            </h2>
            <p className="text-dark text-justify px-3">
              We have been manufacturing, and exporting chemicals and
              petrochemical products from Iran since 2019 and have penetrated
              various markets in the world especially Middle East, Africa, CIS
              countries and Asia. With years of solid experience in chemicals
              and petrochemicals market, we mainly assist our customers with
              competitive price, foreign banking facilities, cost-effective and
              fast logistics services
            </p>
          </div>
          <div className="col-lg-6 mb-4" data-aos="fade-left">
            <h2 className="text-left text-dark border-bottom border-primary px-2 py-2">
              What We<span className="text-primary text-capitalize"> do</span>
            </h2>
            <p className="text-dark text-justify px-3">
              Part of what we do is traditional chemical distribution business,
              and we represent producers, hold inventory and sell in a
              traditional manner. We have the ability to offer quality chemicals
              and raw materials from our association with domestic and global
              chemical producers, providing access to thousands of chemicals and
              duplicate sourcing on numerous critical raw materials. We maintain
              packaged and bulk inventory around the country.
            </p>
          </div>
          <div className="col-lg-6 mb-4" data-aos="fade-right">
            <h2 className="text-left text-dark border-bottom border-primary px-2 py-2">
              Our <span className="text-primary text-capitalize"> mission</span>
            </h2>
            <p className="text-dark text-justify px-3">
              We provide our services globally in Petro chemical products with
              quality and control measures to meet out the requirements of our
              esteemed clients. We never compromise with the quality of our
              products and do our best to provide satisfaction to our
              distinguished buyers throughout the world.
            </p>
          </div>

          <div className="col-lg-6 mb-4" data-aos="fade-left">
            <h2 className="text-left text-dark border-bottom border-primary px-2 py-2">
              Why <span className="text-primary text-capitalize">choose</span>{" "}
              Us
            </h2>
            <p className="text-dark text-justify px-3">
              The goal of all we do is to ensure our customers are entirely
              satisfied through the high quality and the competitive prices, so
              they join us on the road to success. We believe in integrity
              through action and being transparent with our customers, partners,
              investors, and employees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
