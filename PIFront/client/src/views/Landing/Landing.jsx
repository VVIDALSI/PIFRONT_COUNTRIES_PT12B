import React from "react";
import Footer from "../../components/Footer/Footer";
import stLanding from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={stLanding.contLanding}>
      <div className={stLanding.questions}>
        <h1>Do you want to travel?</h1>
        <h1>Do you know the destination?</h1>
        <h1>Do you know which continent it is on?</h1>
        <h1>Know and register your trip</h1>

        <Link to='/home'>
          <button className={stLanding.btn}>
            Click Here!!!
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
