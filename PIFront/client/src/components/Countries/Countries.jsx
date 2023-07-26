import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/index";
import Country from "../Country/Country";
import stlCountries from "../Countries/Countries.module.css";

const Countries = () => {
  const allCountries = useSelector((state) => state.countries);
  const selectedContinent = useSelector((state) => state.selectedContinent);
  const selectedSortType = useSelector((state) => state.sortType); // Obtener el tipo de ordenamiento
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const countriesPerPage = 10;

  // Filtrar los países según el continente seleccionado
  const filteredCountries = selectedContinent === "All"
    ? allCountries
    : allCountries.filter(c => c.continent === selectedContinent);

  // Realizar el ordenamiento de los países según el tipo seleccionado
  const sortedCountries = [...filteredCountries]; // Crear una copia para no modificar el estado original

  switch (selectedSortType) {
    case "ascendantAlf":
      sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "descendingAlf":
      sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "asendingPob":
      sortedCountries.sort((a, b) => a.population - b.population);
      break;
    case "descendingPob":
      sortedCountries.sort((a, b) => b.population - a.population);
      break;
    default:
      break;
  }

  const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className={stlCountries.CountriesGnrl}>
        {sortedCountries
          .slice(
            currentPage * countriesPerPage,
            (currentPage + 1) * countriesPerPage
          )
          .map((c) => (
            <Country
              key={c.id}
              id={c.id}
              name={c.name}
              flag={c.flag}
              region={c.subregion}
            />
          ))}
      </div>
      <div>
        <button className={stlCountries.btnprev} onClick={handlePrevious} disabled={currentPage === 0}>
          ←
        </button>
        <button className={stlCountries.btnpot}>Page {currentPage + 1} of {totalPages}</button>
        <button className={stlCountries.btnnext} onClick={handleNext} disabled={currentPage === totalPages - 1}>
          →
        </button>
      </div>
    </div>
  );
};

export default Countries;
