import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import APIURL from '../../../helpers/environment'
import './register.css';
import './register.css';

interface RegisterState{
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string
}

export default class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
      this.state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        sessionToken: localStorage.getItem('sessionToken')
      }

      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e: any) => {
      e.preventDefault();
      fetch(`${APIURL}/user/register`, {
        method: 'POST',
        body: JSON.stringify({
          user: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
          }
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('sessionToken', data.sessionToken)
        localStorage.setItem('username', data.user.username)
      })
    }

    render(){
      return(
        <div className="mainDiv">
          <div className="formDiv">
            <Form className='register' onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={this.state.firstName} onChange={(e) => this.setState({firstName: e.target.value})} />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={this.state.lastName} onChange={(e) => this.setState({lastName: e.target.value})} />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
              </Form.Group>
  
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
  
    <Button variant="primary" type="submit" className='submit'>
      Submit
    </Button>
    <br />
    <p>Already a member?</p>
    <Link className='loginLink' to='/login'>Login</Link>
  </Form>
  </div>
        </div>
      )
  }
  }
