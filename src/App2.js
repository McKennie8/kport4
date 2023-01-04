import React, { useState } from "react";
import Nav from "./components/Nav";
import MenuIcon from "./components/MenuIcon";

function App2() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App2">
      {/* Nav element for desktop */}
      <Nav />
      {/* Menu icon element for mobile */}
      <button className="menu-icon" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      {/* Menu items */}
      <div className={showMenu ? "menu-items-visible" : "menu-items-hidden"}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      {/* Overlay */}
      <div
        className={showMenu ? "menu-overlay-visible" : "menu-overlay-hidden"}
      ></div>
    </div>
  );
}

export default App2;
