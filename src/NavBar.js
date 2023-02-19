import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a className="company" href=" "> Kashur Scientist </a>{" "}
      </div>{" "}
      <div className="navbar-right">
        <a href=" "> Courses </a> <a href="m"> About </a>{" "}
        <a href=" "> Contact </a> <a href=" "> Our Team </a>{" "}
      </div>{" "}
    </nav>
  );
}

export default Navbar;
