import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./UseScroll";
import { fade } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} initial="hidden" animate={controls} ref={element}>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Are Your Communication Skills?">
          <div className="answer">
            <p>
              Top notch. I ran my own company for 15 years and learned how to
              effectively and efficiently communicate with clients. I also have
              a degree in Communication.
            </p>
            <p>
              Please see "My Work" for walk-through videos which show off my
              work and my people skills.
            </p>
          </div>
        </Toggle>
        <Toggle title="Can You Create Apps That Are Both Fast and Beautiful?">
          <div className="answer">
            <p>
              Absolutely. I create most of my apps using React which produces
              incredibly fast apps.
            </p>
          </div>
        </Toggle>
        <Toggle title="Where Are You From?">
          <div className="answer">
            <p>
              I grew up in Kettering, Ohio. I've also lived in New York City,
              San Francisco, Los Angeles, Virginia, and El Salvador.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Are Your Passions Aside From Web Development?">
          <div className="answer">
            <p>I love to surf and play tennis.</p>
            <p>I really enjoy playing and teaching all kinds of sports. </p>
          </div>
        </Toggle>
        <Toggle title="Do You Have A Sense Of Humor?">
          <div className="answer">
            <p>Does the Pope wear a funny hat?</p>
          </div>
        </Toggle>
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
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      color: #ffba66;
    }
  }
`;

export default FaqSection;
