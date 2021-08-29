import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Navigation from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Register from './Components/Auth/Register/Register';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import AddPin from './Components/Add/AddPin';
import AddPatch from './Components/Add/AddPatch';
import Account from './Components/Account/Account';
import PinTable from './Components/Account/PinTable';


function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      
      {/* <Landing/> */}

      <Account/>

      {/* <PinTable/> */}

      {/* <Login/> */}

      {/* <Register/> */}
      
      {/* <AddPin/> */}

      {/* <AddPatch/> */}

      </Router>
    <div className='footdiv'>
      <Footer/>
    </div>
    </div>
  );
}

export default App;