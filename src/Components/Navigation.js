import React from "react";
import "./CSS/navigation.css";
import logo from "./Images/logo.png";

function Navigation() {
  function scrollScreen(val) {
    window.scrollTo({
      top: window.innerHeight * (val - 0.1),
      behavior: "smooth",
    });
  }

  return (
    <nav>
      <div id="nav_title">
        <img src={logo} alt="logo" />
        <h1>PIXFUSER</h1>
      </div>

      <div id="nav_options">
        <div>
          <span
            className="nav_option"
            onClick={() => {
              scrollScreen(0);
            }}
          >
            Home
          </span>
          <span
            className="nav_option"
            onClick={() => {
              scrollScreen(1);
            }}
          >
            Features
          </span>
          <span
            className="nav_option"
            onClick={() => {
              scrollScreen(2);
            }}
          >
            Product
          </span>
        </div>
        <button className="get_card">Get Your Card</button>
      </div>
    </nav>
  );
}

export default Navigation;
