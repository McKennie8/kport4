import { useLayoutEffect, useState } from "react";
import Nav from "./Nav";
import MenuIcon from "./MenuIcon";
import Nav3 from "./Nav3";
import NavAI3 from "./NavAI3";
import BSNav from "./BSNav";

const Nav4 = () => {
  const [showNav, setShowNav] = useState(false);
  const [showBSNav, setShowBSNav] = useState(false);
  const toggleBSNav = () => {
    setShowBSNav(!showBSNav);
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {showNav ? <Nav /> : <MenuIcon onClick={toggleBSNav} />}
      {showBSNav ? <BSNav showBSNav={showBSNav} /> : null}
    </div>
  );
};

export default Nav4;
