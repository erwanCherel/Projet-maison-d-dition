import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    const navigationElement = document.querySelector(".navigation");
    const hamburgerElement = document.querySelector(".hamburger");
    if (hamburgerOpen) {
      navigationElement.style.display = "none";
    } else {
      navigationElement.style.display = "flex";
    }
  };

  useEffect(() => {
    const navListElement = document.querySelector(".navList");
    if (window.innerWidth < 768 && hamburgerOpen) {
      navListElement.style.display = "contents";
    } else if (window.innerWidth < 768 && !hamburgerOpen) {
      navListElement.style.display = "none";
    } else if (window.innerWidth > 768) {
      navListElement.style.display = "contents";
    }
  });

  return (
    <>
      <div className="navigation">
        <ul
          className="navList"
          style={{ display: !hamburgerOpen ? "contents" : "none" }}
        >
          <li>Accueil</li>
          <li>Catalogue</li>
          <li>Auteurs</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </>
  );
}
