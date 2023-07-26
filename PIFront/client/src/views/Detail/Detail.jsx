import React from "react";
import { connect, useSelector  } from "react-redux";
import { useParams } from "react-router-dom";
import stlDetail from "./Detail.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getCountries } from "../../redux/actions/index";


const Detail = (props) => {
  const { id } = useParams();
  const allCountries = useSelector((state) => state.countries);

  const countryFound = allCountries.find((country) => country.id === id);

  if (!countryFound) {
    return <div>País no encontrado</div>;
  }

  const { name, continent, capital, subregion, area, population, flag } =
    countryFound;

  return (
    <div>
      <NavBar />

      <div className={stlDetail.detailCont}>
        <div className={stlDetail.nameidCont}>
          <h1>Country: {name}</h1>
        </div>

        <div className={stlDetail.coutryDetail}>
          <div className={stlDetail.infoCont}>
            <div>
              <h2>Id: {id}</h2>
              <h2>Area: {area.toLocaleString()} Km²</h2>
              <h2>Capital: {capital}</h2>
              <h2>Continent: {continent}</h2>
              <h2>Subregion: {subregion}</h2>
              <h2>Population: {population.toLocaleString()}</h2>
            </div>
          </div>

          <div className={stlDetail.flagCont}>
            <img src={flag} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
