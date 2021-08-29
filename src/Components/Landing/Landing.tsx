import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './landing.css';

export default class Landing extends Component {
  render(){
    return(
      <div className="mainDiv">
        <h3>Welcome to the Pin & Patch trading post!</h3>
      <br />
      <p className='intro'>Here you can digitally store your collection of pins and patches, as well as list them for trade and have others offer to trade with you!</p>
      <div className='start'>
      <button className='startbttn'><Link to='/register'>Start Here</Link></button>
      </div>
      </div>
    )
  }
}