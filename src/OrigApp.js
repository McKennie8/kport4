import React from "react";

//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

//import components
import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";
import MenuIcon from "./components/MenuIcon";

//Router
import { Routes, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />

          <Route path="/work" element={<OurWork />} />

          <Route path="/work/:id" element={<MovieDetail />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
