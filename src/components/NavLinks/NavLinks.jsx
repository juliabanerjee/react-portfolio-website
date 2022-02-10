import { Link } from "react-router-dom";

import "./NavLinks.scss";

const NavLinks = (props) =>{

  const {handleClick} = props

  return <div>
    <nav className="nav-links">
      <Link to="/" className="nav__menu-item" onClick={handleClick}>Home</Link>
      <Link to="/about" className="nav__menu-item" onClick={handleClick}>About Me</Link>
      <Link to="/experience" className="nav__menu-item"   onClick={handleClick}>Experience</Link>
      <Link to="/projects" className="nav__menu-item" onClick={handleClick}>My Projects</Link>
      <Link to="/contact" className="nav__menu-item"   onClick={handleClick}>Contact</Link>
    </nav>
  </div>
  
  }
  export default NavLinks