import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Courses from "./Courses";
import "./index.css";
import "./index.js";

=======
import Slider from "./aima";
import TeacherImage from "./Images/teacher1.png";
import TeacherImage2 from "./Images/teacher2.jpg";
// In order to add images as prop to slider ,add the image to Images folder,then import it
// next add it as  a prop to slider
>>>>>>> 7105642deec0640c19aecfff36c4a9fe00de001c

// Note : all the css related to slider is written inside style.css
// Done nothing in index.css, its default

export default function App() {
  return (
<<<<<<< HEAD
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
=======
    <div>
      {/* There are a total of 10 slides each slide takes 3 props ie image,name and faculty 
      image1 name1 and faculty1 stand for the 3 props of slide1
       Same is the case for rest of the slides*/}
      <Slider
        image1={TeacherImage}
        name1="Mr Imtiyaz"
        faculty1="Physics"
        image2={TeacherImage2}
        name2="Mr Faheem"
        faculty2="Chemistry"
        image3={TeacherImage}
        name3="Mr Imtiyaz"
        faculty3="Physics"
        image4={TeacherImage}
        name4="Mr Imtiyaz"
        faculty4="Physics"
        image5={TeacherImage}
        name5="Mr Imtiyaz"
        faculty5="Physics"
        image6={TeacherImage}
        name6="Mr Imtiyaz"
        faculty6="Physics"
        image7={TeacherImage}
        name7="Mr Imtiyaz"
        faculty7="Physics"
        image8={TeacherImage}
        name8="Mr Imtiyaz"
        faculty8="Physics"
        image9={TeacherImage}
        name9="Mr Imtiyaz"
        faculty9="Physics"
        image10={TeacherImage}
        name10="Mr Imtiyaz"
        faculty10="Physics"
      />
    </div>
>>>>>>> 7105642deec0640c19aecfff36c4a9fe00de001c
  );
}
