import React, { useEffect } from "react";
import "./CSS/navigation.css";
import logo from "./Images/logo.png";
import menu from "./Images/icons/menu.png";
import close from "./Images/icons/close.png";

function Navigation() {
  useEffect(() => {
    const menuIco = document.getElementById("menu");
    const closeIco = document.getElementById("close");
    const menus = document.querySelector("#nav_options div");
    menuIco.addEventListener("click", () => {
      menus.style.top = "80px";
      setTimeout(() => {
        document.addEventListener("click", hidePopup);
        menuIco.style.display = "none";
        closeIco.style.display = "inline-block";
      }, 50);
    });

    function hidePopup() {
      menus.style.top = "-110px";
      menuIco.style.display = "inline-block";
      closeIco.style.display = "none";

      document.removeEventListener("click", hidePopup);
    }
  }, []);

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
        <img src={menu} alt="menu" id="menu" />
        <img src={close} alt="close" id="close" />
      </div>
    </nav>
  );
}

export default Navigation;
