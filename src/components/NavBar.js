import React, {Component} from 'react'
import logo from '../logo.svg';
export default class NavBar extends Component {
  render() {
    return (
      <nav className="row">
        <img className="App-logo" src={logo} alt="ReactJS Logo"/>
        <h1 className="title">Song Share</h1>
      </nav>
    )
  }
}
