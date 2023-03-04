import React from "react";
import ExplorCourses from "./components/ExplorCourses";
import CircleSlider from "./components/CircleSlider";
import CircleSliderBlack from "./components/CircleSliderBlack";
import "./index.css";
import pencilImage from "./components/Images/pencil.png";
import bookImage from "./components/Images/books.jpg";
import "./components/style1.css";

const Home = () => {
  return (
    <div>
      <ExplorCourses />

      <div className="yellow-container">
        <CircleSlider
          no1="223"
          achievements1="Courses"
          no2="12"
          achievements2="Events"
          no3="68"
          achievements3="Students Learned"
          no4="99"
          achievements4="Courses"
          no5="277"
          achievements5="Attributes"
          no6="44"
          achievements6="Done"
        />
      </div>
      <div className="black-container">
        <div>
          <img src={bookImage} alt="book" style={{ height: "200px" }} />
        </div>
        <CircleSliderBlack
          image1={pencilImage}
          image2={pencilImage}
          image3={pencilImage}
          image4={pencilImage}
          image5={pencilImage}
        />
      </div>
    </div>
  );
};

export default Home;
