// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./BurgerMenu.scss";
const BurgerMenu = () =>{

return(
<div className="burger-menu">

<FontAwesomeIcon icon={faBars} className="burger-menu__icon"/>

</div>)

};
export default BurgerMenu;
