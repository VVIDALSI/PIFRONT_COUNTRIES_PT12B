import React, { useEffect } from "react";
import stlFiltred from "./Filtred.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedContinent,
  setSortType,
  setSelectedActivity,
  getActivities,
} from "../../redux/actions/index";

const Filtred = () => {
  const selectedContinent = useSelector((state) => state.selectedContinent);
  const selectedActivity = useSelector((state) => state.selectedActivity);
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleContinentChange = (event) => {
    const selectedContinent = event.target.value;
    dispatch(setSelectedContinent(selectedContinent));
  };

  const handleSortChange = (event) => {
    const selectedSortType = event.target.value;
    dispatch(setSortType(selectedSortType));
  };

  const handleActivityChange = (event) => {
    const selectedActivity = event.target.value;
    dispatch(setSelectedActivity(selectedActivity));
  };

  return (
    <div className={stlFiltred.gnrlCont}>
      <div className={stlFiltred.filSortCont}>
        <label htmlFor="FilterBy">Filter by continent: </label>
        <select
          id="continent"
          value={selectedContinent}
          onChange={handleContinentChange}
        >
          Filter by Continent:
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Américas</option>
          <option value="Antartica">Antartica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Agregar la sección para filtrar por actividad */}
      <div className={stlFiltred.filSortCont}>
        <label htmlFor="FilterByActivity">Filter by activity: </label>
        <select
          id="activity"
          value={selectedActivity.name}
          onChange={handleActivityChange}
        >
          <option value="All">All</option>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>

      <div className={stlFiltred.filSortCont}>
        <label htmlFor="SortBy">Sort By: </label>
        <select name="SortBy" id="" onChange={handleSortChange}>
          Sort by:
          <option value="ascendantAlf">Ascendant (A-Z)↓</option>
          <option value="descendingAlf">Descending (Z-A)↑</option>
          <option value="asendingPob">Ascendant (Poblation)↑</option>
          <option value="descendingPob">Descending (Poblation)↓</option>
        </select>
      </div>
    </div>
  );
};

export default Filtred;
