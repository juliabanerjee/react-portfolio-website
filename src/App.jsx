import './App.scss';
import HomePage from "./containers/HomePage/Homepage";

import {BrowserRouter as Router, Routes, Route} from 
"react-router-dom";

function App() {
  return (
    <Router> 
    <div className="App">
      <Routes>
<Route path ="/" element={HomePage}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
