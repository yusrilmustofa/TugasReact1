import React, {Component} from 'react';
import {Link} from "react-router-dom";
class NavBar extends Component {
  render() {
    return(
      <div className="container">
      <div className="navbar navbar-expand-lg bg-dark" >
      <a  className="navbar-brand">
      </a>

      {/* Show and Hide Menu */}
      <button className="navbar-toggler" data-toggler="collapse" data-target="#menu">
      <span className="navabr-toggler-icon"></span>
      </button>

      {/*  Menu */}
      <div id="menu" className="navbar-collapse collpase">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item"> <Link to="/BodyIndex" className="nav-link">BodyIndex</Link> </li>
      <li className="nav-item"> <Link to="/Bank" className="nav-link">Bank</Link> </li>
      <li className="nav-item"> <Link to="/Ppn" className="nav-link">Ppn</Link> </li>
      </ul>
      <ul className="navbar-nav mr-auto">
      </ul>
      </div>
      </div>
      </div>
    )
  }
}
export default NavBar;
