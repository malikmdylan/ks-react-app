import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Courses from "./Courses";
import "./index.css";
import "./index.js";


function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <nav className="navbar">
              <div className="navbar-left">
                <h1 className="comp"> Kashur Scientist..... </h1>{" "}
              </div>{" "}



              <div className="navbar-right">
                <ul className="navbar-links">
                  <li >
                    <Link to="/"> Home </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link to="/about"> About </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link to="/contact"> Contact </Link>{" "}
                  </li>{" "}
                  <li>
                    <Link to="/courses"> Courses </Link>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>{""}
              </div>{" "}
            </nav>{" "}
          </header>{" "}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/about" element={<About />} />{" "}
              <Route path="/contact" element={<Contacts />} />{" "}
              <Route path="/courses" element={<Courses />} />{" "}
            </Routes>{" "}
          </main>{" "}
        </div>{" "}
      </Router>
    </>
  );
}

export default App;
