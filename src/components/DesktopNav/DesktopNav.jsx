import { Link } from "react-router-dom";

import "./DesktopNav.scss";


const DesktopNav = () =>{

return <div>
  <nav className="desktop-nav">
    <Link to="/" className="desktop-nav__menu-item">Home</Link>
    <Link to="/about" className="desktop-nav__menu-item">About Me</Link>
    <Link to="/experience" className="desktop-nav__menu-item">Experience</Link>
    <Link to="/projects" className="desktop-nav__menu-item">My Projects</Link>
    <Link to="/contact" className="desktop-nav__menu-item">Contact</Link>
  </nav>
</div>

}
export default DesktopNav