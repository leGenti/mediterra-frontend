import React from "react";
import { Link } from 'gatsby';

import '../styles/opmaak.css';

export default () => {
  return(
    <div className="header">
        <img src='' alt="logo"/>
        <ul className="nav" >
            <li className="navi"><Link className="navlink" to="/">Home</Link></li>
            <li className="navi"><Link className="navlink" to="/about">About us</Link></li>
            <li className="navi"><Link className="navlink" to="/events">Events</Link></li>
            <li className="navi"><Link className="navlink" to="/offerte">Offerte</Link></li>
            <li className="navi"><Link className="navlink" to="/contact">Contact</Link></li>
            <li className="navi"><Link className="navlink" to="/login">Login</Link></li>
        </ul>
    </div>
  ) 
}