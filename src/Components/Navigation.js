import React from "react";
import "./CSS/navigation.css";
import logo from "./Images/logo.png";

function Navigation() {
  return (
    <nav>
      <div id="nav_title">
        <img src={logo} alt="logo" />
        <h1>PIXFUSER</h1>
      </div>

      <div id="nav_options">
        <div>
          <span className="nav_option">Home</span>
          <span className="nav_option">Features</span>
          <span className="nav_option">Product</span>
        </div>
        <button className="get_card">Get Your Card</button>
      </div>
    </nav>
  );
}

export default Navigation;
