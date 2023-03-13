import React from "react";
import "./CSS/footer.css";
import logo from "./Images/logo.png";
import discord from "./Images/icons/discord.svg";
import twitter from "./Images/icons/twitter.svg";

function Footer() {
  return (
    <section id="footer">
      <div id="footer_title">
        <img src={logo} alt="logo" />
        <h1>PIXFUSER</h1>
      </div>

      <div id="footer_middle">
        <div id="footer_option">
          <div className="footer_options">
            <h2>Product</h2>
            <ul>
              <li>Crypto Card</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div className="footer_options">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Contribute</li>
            </ul>
          </div>
        </div>
        <div id="footer_contact">
          <p>pixfuser@gmail.com</p>
          <div className="footer_socials">
            <img src={discord} alt="discord" />
            <span>Discord</span>
          </div>
          <div className="footer_socials">
            <img src={twitter} alt="twitter" />
            <span>Twitter</span>
          </div>
        </div>
      </div>

      <div id="footer_bottom">
        <p>&#169; Copyright 2023 PIXFUSER. All rights reserved.</p>
        <div>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
