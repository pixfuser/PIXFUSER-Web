import React from "react";
import "./CSS/home.css";
import cryptoCard from "./Images/cryptocard.png";
function Home() {
  return (
    <section id="home_section">
      <div id="home_details">
        <ul>
          <li>New Digital Crypto Card</li>
        </ul>
        <p>
          Experience the Future of Payments with Our <span>Crypto Card</span>
        </p>

        <div id="home_options">
          <button className="get_card">Get Your Card &nbsp;&#10230;</button>
        </div>
      </div>

      <img src={cryptoCard} alt="Crypto Card" />
    </section>
  );
}

export default Home;
