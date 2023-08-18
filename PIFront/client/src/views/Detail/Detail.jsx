import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import stlDetail from "./Detail.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getCountries } from "../../redux/actions/index";

const Detail = (props) => {
  const { id } = useParams();
  const allCountries = useSelector((state) => state.countries);
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    // Realizar llamada a la API para obtener actividades del país
    fetch(`http://localhost:3001/activities/countries-activities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setActivities(data.relatedActivities);
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
      });
  }, [id]);

  const countryFound = allCountries.find((country) => country.id === id);

  if (!countryFound) {
    return <div>País no encontrado</div>;
  }

  const handleSelectActivity = (event) => {
    const selectedActivityId = parseInt(event.target.value, 10);
    const activity = activities.find(
      (activity) => activity.id === selectedActivityId
    );
    setSelectedActivity(activity);
  };

  console.log(activities);

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

          <div className={stlDetail.resCont}>
            <div>
              <h2>Activities:</h2>
              <select onChange={handleSelectActivity}>
                <option value="">Seleccione una actividad</option>
                {activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.name}
                  </option>
                ))}
              </select>
            </div>
            {selectedActivity && (
              <div>
                <h2>Summary of the selected activity:</h2>
                <p><label htmlFor="Tour"><b>Tour:</b> {selectedActivity.name}</label></p>
                <p><label htmlFor=""><b>Diffcult:</b> {selectedActivity.difficult}</label></p>
                <p><label htmlFor=""><b>Duration:</b> {selectedActivity.duration} Hrs</label></p>
                <p><label htmlFor=""><b>Season:</b> {selectedActivity.season}</label></p>
                <p><label htmlFor=""><b>Countries:</b> {selectedActivity.countries.join(", ")}</label></p>
  
              </div>
            )}
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
