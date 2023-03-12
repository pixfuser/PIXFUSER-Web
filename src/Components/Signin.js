import React, { useEffect } from "react";
import "./CSS/signin.css";
import login from "./Images/login.png";
import google from "./Images/icons/google.png";
import { signInWithGoogle } from "../firebase";

function Signin() {
  useEffect(() => {
    const popupChild = document.getElementById("loginPop");
    function hidePopup(event) {
      if (!popupChild.contains(event.target)) {
        popup.style.animation = "fadeOut 0.25s 0s";

        setTimeout(() => {
          popup.style.display = "none";
        }, 250);

        document.removeEventListener("click", hidePopup);
      }
    }

    const popup = document.getElementById("signinPopup");
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

  return (
    <section className="popup" id="signinPopup">
      <div className="popupBox" id="loginPop">
        <img src={login} alt="login" />
        <p>Sign in to apply for our Crypto Card*</p>
        <button onClick={signInWithGoogle}>
          <img src={google} alt="google" width={33} /> Sign in with Google
        </button>
      </div>
    </section>
  );
}

export default Signin;
