import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "./MenuIcon";

const MobMenu2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <MenuIcon onClick={toggleMenu} />
      <MenuList
        className={menuOpen ? "menu-items-visible" : "menu-items-hidden"}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </MenuList>
      <Overlay
        className={menuOpen ? "menu-overlay-visible" : "menu-overlay-hidden"}
      />
    </div>
  );
};

const MenuList = styled.ul`
  /* Add styles for the menu items */
  list-style-type: none;
  margin: 0;
  padding: 0;

  /* Show the menu items when the menu icon is clicked */
  &.menu-items-visible {
    display: block;
  }

  /* Hide the menu items when the menu icon is not clicked */
  &.menu-items-hidden {
    display: none;
  }
`;

const Overlay = styled.div`
  /* Add styles for the overlay */
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /* Show the overlay when the menu icon is clicked */
  &.menu-overlay-visible {
    display: block;
  }

  /* Hide the overlay when the menu icon is not clicked */
  &.menu-overlay-hidden {
    display: none;
  }
`;

export default MobMenu2;
