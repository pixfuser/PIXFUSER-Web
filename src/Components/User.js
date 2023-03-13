import React, { useEffect } from "react";
import "./CSS/signin.css";
import "./CSS/user.css";
import "./CSS/applyCard.css";

import { logOut, db } from "../firebase.js";

import namein from "./Images/icons/nameInput.png";
import emailin from "./Images/icons/emailInput.png";
import phonein from "./Images/icons/phoneInput.png";
import addressin from "./Images/icons/addressInput.png";
import applySuccess from "./Images/applySuccess.png";

function User({ user }) {
  useEffect(() => {
    const popup = document.getElementById("userPopup");
    const userPop = document.getElementById("userPop");
    const applyPop = document.getElementById("applyCard");
    const successPop = document.getElementById("successPop");

    function hidePopup(event) {
      if (!userPop.contains(event.target) && !applyPop.contains(event.target)) {
        popup.style.animation = "fadeOut 0.25s 0s";

        setTimeout(() => {
          popup.style.display = "none";
        }, 250);

        setTimeout(() => {
          userPop.style.display = "flex";
          applyPop.style.display = "none";
          successPop.style.display = "none";
        }, 1000);

        document.removeEventListener("click", hidePopup);
      }
    }

    document.querySelectorAll(".get_card").forEach((btn) => {
      btn.addEventListener("click", () => {
        popup.style.animation = "fadeIn 0.25s 0s";
        popup.style.display = "flex";

        setTimeout(() => {
          document.addEventListener("click", hidePopup);
        }, 100);
      });
    });

    applyPop.style.display = "none";
    successPop.style.display = "none";
  }, []);

  console.log(user?.photoURL);

  function handleApply() {
    const userPop = document.getElementById("userPop");
    const applyPop = document.getElementById("applyCard");
    userPop.style.display = "none";
    applyPop.style.display = "block";
  }

  function handleSubmit(e) {
    e.preventDefault();

    const inputFields = document.querySelectorAll(".input_field input");
    const name = inputFields[0];
    const phone = inputFields[2];
    const address = inputFields[3];

    if (
      !name.value ||
      !phone.value ||
      !address.value ||
      !inputFields[1].value
    ) {
      alert("Please fill the details!");
    } else {
      const data = {
        name: name.value,
        phone: parseInt(phone.value),
        address: address.value,
      };

      db.collection("users_applied").doc(user.email).set(data);
      console.log("Applied Successfully");
    }
    name.value = "";
    phone.value = "";
    address.value = "";

    const applyPop = document.getElementById("applyCard");
    const successPop = document.getElementById("successPop");
    applyPop.style.display = "none";
    successPop.style.display = "flex";
  }

  return (
    <section className="popup" id="userPopup">
      <div className="popupBox" id="userPop">
        <div id="userDetails">
          <img src={user?.photoURL} alt="user" />
          <p>{user?.displayName}</p>
          <span>{user?.email}</span>
        </div>

        <button className="default_button" onClick={handleApply}>
          Apply for Crypto Card
        </button>
        <button id="signout" onClick={logOut}>
          Sign out
        </button>
      </div>
      <div className="popupBox" id="applyCard">
        <h1>Fill Details</h1>
        <form id="apply_details" onSubmit={handleSubmit}>
          <div className="input_field">
            <img src={namein} alt="name" />
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="input_field">
            <img src={emailin} alt="name" />
            <input
              type="email"
              value={user ? user.email : "Please Sign in first "}
              readOnly
              required
            />
          </div>
          <div className="input_field">
            <img src={phonein} alt="name" />
            <input
              type="number"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="input_field">
            <img src={addressin} alt="name" />
            <input type="text" placeholder="Enter you address" required />
          </div>
          <button className="default_button" type="submit">
            Apply
          </button>
        </form>
      </div>
      <div className="popupBox" id="successPop">
        <img src={applySuccess} alt="successfully" />
        <p>Applied Successfully!</p>
      </div>
    </section>
  );
}

export default User;
