import { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const ScrolledSkills = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const words = [
    "ReactJS(test)",
    "ES5/ES6",
    "Liquid",
    "Shopify",
    "HTML",
    "CSS",
    "framer-motion",
    "SASS",
    "REST",
    "npm",
    "JSON",
    "Git(test)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPos((prevScrollPos) => prevScrollPos + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollContainerRef.current.scrollTop = scrollPos;
  }, [scrollPos]);

  // ...

  return (
    <ScrollContainer ref={scrollContainerRef}>
      {words.map((word, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div style={{ marginBottom: "20px" }}>{word}</div>
        </div>
      ))}
    </ScrollContainer>
  );
};

const ScrollContainer = styled(motion.div)`
  height: 250px; // Set the height of the container
  overflow-y: scroll; // Enable vertical scrolling
`;
export default ScrolledSkills;
