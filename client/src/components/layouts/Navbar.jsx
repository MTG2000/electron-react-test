import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.scss";
import Logo from "./styles/malik logo.png";
// import throttle from "lodash.throttle";

const Navbar = () => {
  // useEffect(() => {
  //   const logo = document.querySelector(".navbar-brand img");
  //   if (window.scrollY < 100) {
  //     logo.classList.add("big");
  //   } else {
  //     logo.classList.remove("big");
  //   }
  //   window.addEventListener(
  //     "scroll",
  //     throttle(() => {
  //       if (window.scrollY < 150) {
  //         logo.classList.add("big");
  //       } else {
  //         logo.classList.remove("big");
  //       }
  //     }, 300)
  //   );
  // }, []);

  return (
    <div className="navWrapper">
      <nav className="navbar navbar-expand-md navbar-light bg-light w-100">
        <div className="d-flex w-25 order-0 justify-content-between links-wrapper px-2">
          <Link className="navbar-brand mr-1 text-primary" to="/">
            <img src={Logo} alt="" className="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsingNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div
          className="navbar-collapse collapse justify-content-center order-2"
          id="collapsingNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link mr-5 text-primary " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5 text-primary" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5 text-primary" href="/#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5 text-primary" to="/news">
                News & Exhibition
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5 text-primary" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
