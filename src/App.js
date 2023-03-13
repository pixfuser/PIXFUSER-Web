import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Signin from "./Components/Signin";
import User from "./Components/User";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

import Product from "./Components/Product";
import Footer from "./Components/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user) {
        setTimeout(() => {
          const popup = document.getElementById("userPopup");
          const popupChild = document.getElementById("userPop");
          popup.style.display = "flex";
          popup.style.animation = "fadeIn 0.15s 0s";
          function hidePopup(event) {
            if (!popupChild.contains(event.target)) {
              popup.style.animation = "fadeOut 0.25s 0s";

              setTimeout(() => {
                popup.style.display = "none";
              }, 250);

              document.removeEventListener("click", hidePopup);
            }
          }
          document.addEventListener("click", hidePopup);
        }, 100);
      }
    });
  }, []);

  return (
    <>
      <Navigation />
      <Home />
      <Features />
      {currentUser ? <User user={currentUser} /> : <Signin />}

      <Product />
      <Footer />
    </>
  );
}

export default App;
