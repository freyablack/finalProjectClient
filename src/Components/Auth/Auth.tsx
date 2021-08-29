import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register'

export default class Auth extends React.Component<any, any> {

  render(){
    return(
      <div className="mainDiv">

        <Register/>

        <Login/>

      </div>
    )
  }
}