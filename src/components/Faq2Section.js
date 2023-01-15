import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";

import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./UseScroll";
import { fade } from "../animation";

const CustomToggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const handleTouchStart = () => setIsOpen(!isOpen);
  const handleTouchEnd = (e) => {
    if (e.targetTouches.length !== 0) setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className="question"
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {title}
      </div>
      {isOpen && <div className="answer">{children}</div>}
    </div>
  );
};

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} initial="hidden" animate={controls} ref={element}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <CustomToggle title="How Are Your Communication Skills?">
          <div className="answer">
            <p>
              Top notch. I ran my own video/photo company for 15 years and
              learned how to effectively and efficiently communicate with
              clients. My 15 years of working to arrange images on a screen in a
              beautiful and logical manner inform my ability to do the same in
              web development.
            </p>
            <p>
              Please see{" "}
              <a href="/work" style={{ color: "#4e8183", fontSize: "1.75rem" }}>
                My Work
              </a>{" "}
              for walk-through videos which show off my work and my people
              skills.
            </p>
          </div>
        </CustomToggle>
        <CustomToggle title="Can You Create Apps That Are Both Fast and Beautiful?">
          <div className="answer">
            <p>
              Absolutely. I create most of my apps using React which produces
              incredibly fast apps.
            </p>
          </div>
        </CustomToggle>
        <CustomToggle title="Where Are You From?">
          <div className="answer">
            <p>
              I grew up in Kettering, Ohio. I've also lived in New York City,
              San Francisco, Los Angeles, Virginia, and El Salvador.
            </p>
          </div>
        </CustomToggle>
        <CustomToggle title="What Are Your Passions Aside From Web Development?">
          <div className="answer">
            <p>
              I love to surf and play tennis. And I love exploring different
              cultures.
            </p>
          </div>
        </CustomToggle>
        <CustomToggle title="Do You Have A Sense Of Humor?">
          <div className="answer">
            <p>Does the Pope wear a funny hat?</p>
          </div>
        </CustomToggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    font-size: 2rem;
    padding: 3rem 0rem;
    cursor: pointer;
    @media (max-width: 480px) {
      font-size: 1.5rem;
      padding: 1rem 0rem;
      cursor: pointer;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      color: #dadbdd;
    }
  }
  @media (max-width: 480px) {
    padding: 1rem 0rem;
    p {
      font-size: 1.25rem;
    }
  }
`;

export default FaqSection;
