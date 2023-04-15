import React, { useState } from "react";

export default function Header() {
  const [burgerActive, setBurgerActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const displayMenu = () => {
    const headerMenu = document.querySelector(".header-menu");
    const hamburgerIcon = document.querySelector(".hamburger");
    if (burgerActive) {
      headerMenu.classList.add("hidden");
      hamburgerIcon.style.backgroundImage =
        "url('./src/assets/hamburger-icon.svg')";
      setBurgerActive(false);
    } else {
      headerMenu.classList.remove("hidden");
      hamburgerIcon.style.backgroundImage =
        "url('./src/assets/close-icon.svg')";
      setBurgerActive(true);
    }
  };

  const displaySearchBar = () => {
    const headerSearch = document.querySelector(".header-search");
    if (searchActive) {
      headerSearch.classList.add("hidden");
      // hamburgerIcon.style.backgroundImage =
      //   "url('./src/assets/hamburger-icon.svg')";
      setSearchActive(false);
    } else {
      headerSearch.classList.remove("hidden");
      // hamburgerIcon.style.backgroundImage =
      //   "url('./src/assets/close-icon.svg')";
      setSearchActive(true);
    }
  };

  return (
    <div className="header-container">
      <header className="flex justify-center shadow-md items-center">
        <div className="header-logo font-extrabold text-3xl flex absolute z-10">
          <a href="#">PROJET</a>
        </div>
        <ul className="header-icons flex w-full relative justify-between">
          <li className="icon hamburger" onClick={displayMenu}></li>
          <li className="icon search mr-auto" onClick={displaySearchBar}></li>
          <li className="icon account ml-auto"></li>
          <li className="icon cart"></li>
        </ul>

        <div className="header-menu hidden">
          <div className="nav accueil">
            <a href="#">Accueil</a>
          </div>
          <div className="nav catalogue">
            <a href="#">Catalogue</a>
          </div>
          <div className="nav auteurs">
            <a href="#">Auteurs</a>
          </div>
          <div className="nav contacts">
            <a href="#">Contact</a>
          </div>
        </div>

        <label htmlFor="" className="header-search hidden w-full shadow-md">
          <div className="search-container ">
            <input
              placeholder="Recherche..."
              type="text"
              className="inputSearch p-2 border-2 border-gray-100"
            />
            <button className="buttonSearch bg-black text-white p-2">
              Rechercher
            </button>{" "}
          </div>
        </label>
      </header>
    </div>
  );
}
