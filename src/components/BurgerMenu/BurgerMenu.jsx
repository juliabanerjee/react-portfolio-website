import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./BurgerMenu.scss";
import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";



const BurgerMenu = () => {
  
  const [showNav, setShowNav] = useState(false);

  const toggleMobileNav = () => {
    setShowNav(!showNav)
  };

  
  
  
  

  return (
    <div className="burger-menu" >
      {showNav && <NavLinks handleClick={toggleMobileNav}/>}
      
      <FontAwesomeIcon
        size = "3x"
        icon={faBars}
        className="burger-menu__icon"
        onClick={toggleMobileNav}

      />
    
    </div>
  );
};
export default BurgerMenu;

