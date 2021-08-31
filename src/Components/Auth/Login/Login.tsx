import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css'
import APIURL from '../../../helpers/environment'


interface LoginState{
  email: string,
  password: string
}

export default class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
      this.state = {
        email: '',
        password: '',
        sessionToken: localStorage.getItem('sessionToken')
      }

      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e: any) => {
      e.preventDefault();
      fetch(`${APIURL}/user/login`, {
        method: 'POST',
        body: JSON.stringify({
          user: {
            email: this.state.email,
            password: this.state.password
          }
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        localStorage.setItem('sessionToken', data.sessionToken)
        localStorage.setItem('username', data.user.username)
      })
    }

    render(){
      return(
        <div className="mainDiv">
          <div className="formDiv">
            <Form className='login' onSubmit={this.handleSubmit}>

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
    <p>Not a member yet?</p>
    <Link className='registerLink' to='/register'>Register</Link>
  </Form>
  </div>
        </div>
      )
  }
  }










// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import './login.css'

// const Login = () => {
// const [email, setEmail] = useState<string>('');
// const [password, setPassword] = useState<string>('');

//   let handleSubmit = (e: any) => {
//     e.preventDefault();
//     fetch(`${APIURL}/user/login`, {
//       method: 'Post',
//       body: JSON.stringify({
//         user: {
//           email,
//           password
//         }
//       }),
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     })
//     .then(res => res.json())
//     .then((data) => {
//       setEmail('')
//       setPassword('')
//     })
//   }

//     return(
//       <div className="mainDiv">
//         <div className="formDiv">
//           <Form className='login'>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </Form.Group>

//   {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group> */}

//   <Button variant="primary" type="submit" className='submit' onClick={handleSubmit}>
//     Submit
//   </Button>
//   <br />
//   <p>Not a member yet?</p>
//   <button>Register</button>
// </Form>
// </div>
//       </div>
//     )
// }

// export default Login;