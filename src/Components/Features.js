import React from "react";
import "./CSS/features.css";
import featureImg from "./Images/features.png";
import secure from "./Images/icons/secure.png";
import instant from "./Images/icons/instant.png";
import realtime from "./Images/icons/realtime.png";
import contactless from "./Images/icons/contactless.png";
import solana from "./Images/icons/solana.png";

function Features() {
  return (
    <section id="features">
      <h1>Our top Features & Benefits</h1>

      <div className="feature">
        <div className="feature_title">
          <img src={secure} alt="secure" />
          <h2>Secure wallet storage</h2>
        </div>
        <p>
          The cryptocurrency funds are stored securely in a digital wallet that
          is protected by multi-factor authentication and encryption.
        </p>
      </div>
      <div id="feature_box">
        <div>
          <div className="feature">
            <div className="feature_title">
              <img src={instant} alt="secure" />
              <h2>Instant transactions</h2>
            </div>
            <p>
              Transactions are processed instantly, so users don't have to wait
              for confirmations before their payments are completed.
            </p>
          </div>
          <div className="feature">
            <div className="feature_title">
              <img src={realtime} alt="secure" />
              <h2>Real-time exchange rates</h2>
            </div>
            <p>
              The card uses real-time exchange rates to ensure that users are
              always aware of the current value of their cryptocurrencies.
            </p>
          </div>
        </div>
        <img src={featureImg} alt="features" />
        <div>
          <div className="feature">
            <div className="feature_title">
              <img src={contactless} alt="secure" />
              <h2>Contactless payments</h2>
            </div>
            <p>
              The card supports contactless payments, enabling users to quickly
              and easily pay for goods and services in physical stores.
            </p>
          </div>
          <div className="feature">
            <div className="feature_title">
              <img src={solana} alt="secure" />
              <h2>Low transaction fees</h2>
            </div>
            <p>
              We charge low transaction fees, making it affordable for users to
              spend their cryptocurrencies in the real world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
