import './App.scss';
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/AboutPage/Aboutpage";
import ExperiencePage from "./containers/ExperiencePage/ExperiencePage";
import ProjectPage from "./containers/ProjectPage/ProjectPage";
import ContactPage from "./containers/ContactPage/ContactPage";


import {BrowserRouter as Router, Routes, Route} from 
"react-router-dom";
import DesktopNav from './components/DesktopNav/DesktopNav';

function App() {
  return (
    <>
    <DesktopNav/>
    <Router> 
    <div className="App">
      <Routes>
        <Route path ="/" element={HomePage}/>
      </Routes>
      <Routes>
        <Route path ="/about" element={AboutPage}/>
      </Routes>
      <Routes>
        <Route path ="/experience" element={ExperiencePage}/>
      </Routes>
      <Routes>
        <Route path ="/projects" element={ProjectPage}/>
      </Routes>
      <Routes>
        <Route path ="/contact" element={ContactPage}/>
      </Routes>
      
      
    </div>
    </Router>
    </>
  );
}

export default App;
