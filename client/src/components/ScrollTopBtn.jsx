import React from "react";
import { default as ScrollToTopBtn } from "react-scroll-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/scrollTopBtn.scss";

const ScrollTopBtn = () => {
  return (
    <ScrollToTopBtn showUnder={160}>
      <span
        className={`bg-primary d-block d-flex justify-content-center align-items-center text-white rounded 
   scrollBtn`}
      >
        {" "}
        <FontAwesomeIcon icon="arrow-up" />{" "}
      </span>
    </ScrollToTopBtn>
  );
};

export default ScrollTopBtn;
