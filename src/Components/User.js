import React, { useEffect } from "react";
import "./CSS/signin.css";
import "./CSS/user.css";

import { logOut } from "../firebase.js";

function User({ user }) {
  useEffect(() => {
    const popup = document.getElementById("userPopup");
    const popupChild = document.getElementById("userPop");

    function hidePopup(event) {
      if (!popupChild.contains(event.target)) {
        popup.style.animation = "fadeOut 0.25s 0s";

        setTimeout(() => {
          popup.style.display = "none";
        }, 250);

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
  }, []);

  console.log(user?.photoURL);

  return (
    <section className="popup" id="userPopup">
      <div className="popupBox" id="userPop">
        <div id="userDetails">
          <img src={user?.photoURL} alt="user" />
          <p>{user?.displayName}</p>
          <span>{user?.email}</span>
        </div>

        <button className="default_button">Apply for Crypto Card</button>
        <button id="signout" onClick={logOut}>
          Sign out
        </button>
      </div>
    </section>
  );
}

export default User;
