import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const JSToggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  function handleOnClick() {
    console.log("onClick event fired");
    setToggle(!toggle);
  }
  function handleOnTouchStart() {
    console.log("onTouchStart event fired");
    setToggle(!toggle);
  }

  function handleOnTouchEnd() {
    console.log("onTouchEnd event fired");
    setToggle(!toggle);
  }

  return (
    <ToggleDiv
      layout
      className="question"
      onClick={handleOnClick}
      onPointerEnter={handleOnTouchStart}
      onTouchEnd={handleOnTouchEnd}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </ToggleDiv>
  );
};
const ToggleDiv = styled(motion.div)`
  font-size: 2rem;
  padding: 3rem 0rem;
  cursor: pointer;
  z-index: 10;
  background-color: #ffea00;
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    cursor: pointer;
  }
`;

export default JSToggle;
