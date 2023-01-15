import Tappable from "react-tappable";
import React, { useState } from "react";
import styled from "styled-components";

const Toggle2 = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Tappable onTap={() => setToggle(!toggle)}>
      <ToggleDiv className="question">
        <h4>{title}</h4>
        {toggle ? children : ""}
        <div className="faq-line"></div>
      </ToggleDiv>
    </Tappable>
  );
};

const ToggleDiv = styled.div`
  font-size: 2rem;
  padding: 3rem 0rem;
  cursor: pointer;
  z-index: 10;
  background-color: #c4daff;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    cursor: pointer;
  }
`;

export default Toggle2;
