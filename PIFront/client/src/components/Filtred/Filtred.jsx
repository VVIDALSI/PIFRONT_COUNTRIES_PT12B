import React from "react";
import stlFiltred from "./Filtred.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedContinent, setSortType } from "../../redux/actions/index";

const Filtred = () => {
  const selectedContinent = useSelector((state) => state.selectedContinent);
  const dispatch = useDispatch();

  const handleContinentChange = (event) => {
    const selectedContinent = event.target.value;
    dispatch(setSelectedContinent(selectedContinent));
  };

  const handleSortChange = (event) => {
    const selectedSortType = event.target.value;
    dispatch(setSortType(selectedSortType));
  };

  return (
    <div className={stlFiltred.gnrlCont}>
      <div className={stlFiltred.filSortCont}>
        <label htmlFor="FilterBy">Filter by continent: </label>
        <select id="continent" value={selectedContinent} onChange={handleContinentChange}>
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

      <div className={stlFiltred.filSortCont}>
        <label htmlFor="SortBy">Sort By: </label>
        <select name="SortBy" id="" onChange={handleSortChange}>
          Sort by:
          <option value="ascendantAlf">Ascendant (Z-A)↑</option>
          <option value="descendingAlf">Descending (A-Z)↓</option>
          <option value="asendingPob">Ascendant (Poblation)↑</option>
          <option value="descendingPob">Descending (Poblation)↓</option>
        </select>
      </div>
    </div>
  );
};

export default Filtred;