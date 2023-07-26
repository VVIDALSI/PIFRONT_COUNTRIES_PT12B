//Common
import React from "react";

// Commponents
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Countries from "../../components/Countries/Countries";
import Filtred from "../../components/Filtred/Filtred";

//CSS
import stlHome from "../Home/Home.module.css";

const Home = () => {

  return (
    <div className={stlHome.gnrCont}>

      <NavBar/>

      <div className={stlHome.fitZone}>
        <Filtred/>
      </div>

      <div className={stlHome.cardsZone}>
        <Countries/>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
