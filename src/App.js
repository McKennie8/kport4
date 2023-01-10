import React from "react";

//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

//import components
import Nav from "./components/Nav";

import Nav3 from "./components/Nav3";

//Router
import { Routes, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Nav3 />

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />

          <Route path="/work" element={<OurWork />} />

          <Route path="/work/:id" element={<MovieDetail />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
