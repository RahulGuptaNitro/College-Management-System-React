import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Login from './components/login.component'
import Home from './components/home.component'
import Stdetails from './components/stdetails.component'
import Sthome from "./components/sthome.component";


function App() {

  return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              <b>College Management System</b>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {/* <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/admhome" element={<Home />} />
            <Route path="/stdetails" element={<Stdetails />} />
            <Route path="/sthome" element={<Sthome />} />
          </Routes>
          
      </div>
  );
}

export default App;
