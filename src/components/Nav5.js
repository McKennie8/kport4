import { useLayoutEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./Nav";
import MenuIcon from "./MenuIcon";
import Nav3 from "./Nav3";
import NavAI3 from "./NavAI3";

const BSNav = ({ showBSNav }) => {
  return showBSNav && <div className="third-nav">Menu</div>;
};

const Nav5 = () => {
  const [showNav, setShowNav] = useState(false);
  const [showBSNav, setShowBSNav] = useState(false);

  // Toggle the value of showBSNav when the MenuIcon is clicked
  const toggleBSNav = () => {
    setShowBSNav(!showBSNav);
    console.log("WOOOOO!!!!!");
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
      {showNav ? <Nav5 /> : <MenuIcon onClick={toggleBSNav} />}
      {showBSNav ? <BSNav showBSNav={showBSNav} /> : null}
    </div>
  );
};

export default Nav5;
