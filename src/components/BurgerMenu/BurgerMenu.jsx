import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./BurgerMenu.scss";
import { useState } from "react";

import NavLinks from "../NavLinks/NavLinks";

const BurgerMenu = () => {
  
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav)
  };




  return (
    <div className="burger-menu">
      <FontAwesomeIcon
        icon={faBars}
        className="burger-menu__icon"
        onClick={toggleNav}
        
      />
    {showNav &&  <NavLinks/> }
    </div>
  );
};
export default BurgerMenu;
