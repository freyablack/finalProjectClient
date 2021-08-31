import React, {Component} from 'react';
import {NavItem, NavLink, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './navbar.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Landing from '../Landing/Landing';

export default class Navigation extends Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  logout = () => {
    localStorage.clear()
  }

  // username = () => {

  // }

  render() {
    return(
      <div className="mainDiv">
      <Navbar className='nav' expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/trade">Trade</Nav.Link>
        <Nav.Link as={Link} to='/pins'>Pins</Nav.Link>
        <Nav.Link as={Link} to='/patches'>Patches</Nav.Link>
      </Nav>
      <NavDropdown title={localStorage.getItem('username')}>
        <NavDropdown.Item as={Link} to='/account'>Account</NavDropdown.Item>
        <NavDropdown.Item onClick={() => localStorage.clear()}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
  {/* <Route path='/'> */}
    {/* <Landing/> */}
  {/* </Route> */}
  {/* <Route path='/trade'> */}
    {/* <Trade/> */}
  {/* </Route> */}
  {/* <Route path='/pins'> */}
    {/* <Pins/> */}
  {/* </Route> */}
  {/* <Route path='/patches'> */}
    {/* <Patches/> */}
  {/* </Route> */}
</Switch>
</div>
    )
  }
}