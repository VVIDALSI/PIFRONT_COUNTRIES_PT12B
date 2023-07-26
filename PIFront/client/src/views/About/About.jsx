import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import stlAbout from "../About/About.module.css";

const About = () => {
  return (
    <div className={stlAbout.contAbout}>
      <NavBar />
      <div>
        <div className={stlAbout.aout}>
        <h1>ABOUT COUNTRIES</h1>
          <p>
            On this page you can find information about the countries, the area
            in km², population, information on tourism activities and create
            tourism activities to plan your trips.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
