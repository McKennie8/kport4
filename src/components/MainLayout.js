import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";

const MainLayout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <MenuIcon onClick={toggleMobileMenu} />
      {showMobileMenu && <MobileMenu />}
      {/* Your main layout content goes here */}
    </div>
  );
};

export default MainLayout;
