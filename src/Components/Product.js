import React from "react";
import "./CSS/product.css";
import cryptoCard from "./Images/ourCard.png";

function Product() {
  return (
    <section id="product">
      <h1>Product and Pricing</h1>
      <div id="product_details">
        <img src={cryptoCard} alt="Crypto Card" />
        <div>
          <h1>PIXFUSER Crypto Card</h1>

          <div id="product_features">
            <h2>Features</h2>
            <ul>
              <li>Secure storage of Solana cryptocurrency</li>
              <li>Easy-to-use card for physical world transactions</li>
              <li>Accepted at merchants that accept Solana payments</li>
              <li>No need to convert cryptocurrency to fiat currency</li>
            </ul>
          </div>

          <div id="product_pricing">
            <h2>Pricing</h2>
            <p>
              PIXFUSER Crypto Card is available for a one-time fee of $99.{" "}
              <br />
              There are no hidden fees or monthly charges associated with the
              card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
