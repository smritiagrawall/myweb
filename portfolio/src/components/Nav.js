import React from "react";
import { Link } from "react-router-dom";
// import portrait from "../img/logoBig.svg";
// import { Home, Mail, Activity } from "react-feather";
// import { Link } from "react-router-dom";

const Nav = () => {
  return(
  <nav className="navbar">
    <h1 className="portfoliohead"><Link to="/">Portfolio</Link></h1>
    <ul className="navheads">
      <li >
        <Link to="/" >About Me</Link>
      </li>
      <li>
        <Link to="/project" >My projects</Link>
      </li>
      <li>
        <Link to="/contact" >Contact me</Link>
      </li>
      <li>
        <Link to="/resume" >My Resume</Link>
      </li>
    </ul>
  </nav>
  );
}

export default Nav;