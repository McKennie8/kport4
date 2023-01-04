import React from "react";
import MobMenu2 from "./MobMenu2";
import Nav from "./Nav";
import styled from "styled-components";
import { motion } from "framer-motion";

const NewNav1 = () => {
  return (
    <div>
      <NavCont>
        <Nav />
      </NavCont>
      <MenuCont>
        <MobMenu2 />
      </MenuCont>
    </div>
  );
};

const NavCont = styled.div`
  /* Default styles for the nav bar */

  @media (max-width: 600px) {
    /* Styles to hide the nav bar on small screens */
    display: none;
  }
`;

const MenuCont = styled.div`
  /* Default styles for the mobile menu */

  @media (min-width: 601px) {
    /* Styles to hide the mobile menu on large screens */
    display: none;
  }
`;

export default NewNav1;
