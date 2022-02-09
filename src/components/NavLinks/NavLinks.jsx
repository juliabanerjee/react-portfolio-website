import { Link } from "react-router-dom";

const NavLinks = () =>{

  return <div>
    <nav className="nav-links">
      <Link to="/" className="nav__menu-item">Home</Link>
      <Link to="/about" className="nav__menu-item">About Me</Link>
      <Link to="/experience" className="nav__menu-item">Experience</Link>
      <Link to="/projects" className="nav__menu-item">My Projects</Link>
      <Link to="/contact" className="nav__menu-item">Contact</Link>
    </nav>
  </div>
  
  }
  export default NavLinks