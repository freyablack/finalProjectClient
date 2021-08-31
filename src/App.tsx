import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Navigation from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Register from './Components/Auth/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import AddPin from './Components/Add/AddPin';
import AddPatch from './Components/Add/AddPatch';
import Account from './Components/Account/Account';
import PinTable from './Components/Account/PinTable';
import EditPins from './Components/Account/Edit/EditPins';


function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <div className="pages">
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/pins'>
            <AddPin />
          </Route>
          <Route exact path='/patches'>
            <AddPatch />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/account'>
            <Account />
          </Route>
        </Switch>
      </div>

      </Router>
    <div className='footdiv'>
      <Footer/>
    </div>
    </div>
  );
}

export default App;