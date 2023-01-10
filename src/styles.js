import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;

  display: flex;

  justify-content: space-around;
  padding: 5rem 5rem 5rem 20rem;
  color: white;
  z-index: 1;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  @media (max-width: 480px) {
    display: block;

    width: 100vw;
    overflow: hidden;
    margin: 0 auto;
    padding: 2rem 0rem;
  }
`;

export const Description = styled.div`
  flex: 1;
  min-width: 70vh;
  max-width: 80vh;

  padding-right: 1rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
      border-radius: 30px;
    }
  }
  @media (max-width: 480px) {
    display: block;
    min-width: 30vh;
    max-width: 40vh;
    align-items: center;
    align-content: center;
    margin: 0 auto;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
  h3 {
    font-size: 4rem;
  }
  h2 {
    font-size: 5rem;
  }
  @media (max-width: 480px) {
    h3 {
      font-size: 3rem;
    }
    h2 {
      font-size: 4rem;
    }
  }
`;
export const HideTitle = styled.div`
  overflow: hidden;
  h5 {
    font-size: 4rem;
    padding-top: 4rem;
  }
  @media (max-width: 480px) {
    h5 {
      font-size: 3rem;
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
  }
`;

export const Question = styled.div``;

export const Answer = styled.div``;

export const Faq = styled.div``;
