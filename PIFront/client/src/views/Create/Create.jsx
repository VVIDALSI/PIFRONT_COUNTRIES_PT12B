import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import stlCreate from "./Create.module.css";
import stlModal from "./CrateModal.module.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import LevelOfDifficult from "../../components/LevelOfDifficult/LevelOfDifficult";
import { continents, validCountries } from "../../vallidations/contries";
import {
  validateTour,
  validateDuration,
} from "../../vallidations/vallidations";

const Create = () => {
  const [formData, setFormData] = useState({
    tour: "",
    difficult: "Level 1",
    duration: "",
    season: "Spring",
    countries: [],
  });

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [selectedContinents, setSelectedContinents] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const refreshPage = () => {
    window.location.reload();
  };

  const handleContinentChange = (continent) => {
    if (selectedContinents.includes(continent)) {
      setSelectedContinents(selectedContinents.filter((c) => c !== continent));
    } else {
      setSelectedContinents([...selectedContinents, continent]);
    }
  };

  const handleCountryChange = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredCountries = validCountries.filter(
    (country) =>
      selectedContinents.length === 0 ||
      selectedContinents.includes(country.continent)
  );

  const durationLong = selectedCountries.length;
  console.log(durationLong);

  console.log(formData);
  console.log(selectedCountries);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateTour(formData.tour);
    const durationValidationError = validateDuration(formData.duration, durationLong);

    const updatedFormData = {
      ...formData,
      countries: selectedCountries,
    };

    if (validationError !== true) {
      alert(validationError); // Mostrar el mensaje de error si no pasó la validación
      return;
    }

    if (durationValidationError !== true) {
      alert(durationValidationError); // Mostrar el mensaje de error si no pasó la validación de la duración
      return;
    }

    axios
      .post("http://localhost:3001/activities/", updatedFormData)
      .then(() => {
        setIsModalOpen2(true);
      })
      .catch((error) => {
        console.error("Error al crear la actividad:", error);
      });
  };

  return (
    <div className={stlCreate.gnrlContCT}>
      <NavBar />

      <form className={stlCreate.formCont} onSubmit={handleSubmit}>
        <h1>CREATE A TOUR</h1>
        <div className={stlCreate.contPrinc}>
          {/* Enter your activity information */}
          <div className={stlCreate.contInf}>
            <h2>Enter your activity information below</h2>

            {/* Tour Name */}
            <div className={stlCreate.divName}>
              <label htmlFor="tour">Tour Name:</label>
              <input
                type="text"
                name="tour"
                placeholder="name of tour..."
                value={formData.tour}
                onChange={handleChange}
              />
            </div>

            {/* Difficult */}
            <div className={stlCreate.divDifficult}>
              <label>Difficult:</label>
              <select
                name="difficult"
                value={formData.difficult}
                onChange={handleChange}
              >
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
                <option>Level 4</option>
                <option>Level 5</option>
              </select>
              <Link onClick={() => setIsModalOpen1(true)}>
                <span>Definition of Difficult</span>
              </Link>
              <Modal
                className={stlModal.mdlstl}
                isOpen={isModalOpen1}
                onRequestClose={() => setIsModalOpen1(false)}
              >
                <div>
                  <h2>Definition of Difficult</h2>
                </div>
                <LevelOfDifficult />
                <button onClick={() => setIsModalOpen1(false)}>Close</button>
              </Modal>
            </div>

            {/* season */}
            <div className={stlCreate.divSeason}>
              <label htmlFor="season">Season:</label>
              <select
                name="season"
                value={formData.season}
                onChange={handleChange}
              >
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
                <option>Winter</option>
              </select>
            </div>

            {/* countries */}
            <div className={stlCreate.divCount}>
              <label htmlFor="">Countries:</label>
              <button type="button" onClick={() => setIsModalOpen3(true)}>
                Add
              </button>

              <Modal
                className={stlModal.mdlstl}
                isOpen={isModalOpen3}
                onRequestClose={() => setIsModalOpen3(false)}
              >
                <div className={stlModal.slcCountries}>
                  <h2>Select the contries of the Tour</h2>
                  <div className={stlModal.compSlecCountries}>
                    <div className={stlModal.gnrCont}>
                      <div className={stlModal.divContinents}>
                        <h2>Continents</h2>
                        <div className={stlModal.divContinentsUnit}>
                          {continents.map((continent) => (
                            <div className={stlModal.boxContinents}>
                              <input
                                type="checkbox"
                                checked={selectedContinents.includes(continent)}
                                onChange={() =>
                                  handleContinentChange(continent)
                                }
                              />
                              <label key={continent}>{continent}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={stlModal.divCountries}>
                        <h2>Countries</h2>
                        <div className={stlModal.countBox}>
                          {filteredCountries.map((country, index) => (
                            <div className={stlModal.miniBox} key={index}>
                              <input
                                type="checkbox"
                                checked={selectedCountries.includes(
                                  country.name
                                )}
                                onChange={() =>
                                  handleCountryChange(country.name)
                                }
                              />
                              <label>{country.name}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" onClick={() => setIsModalOpen3(false)}>
                  Accept
                </button>
              </Modal>
            </div>

            {/* Duration */}
            <div className={stlCreate.divDuration}>
              <div className={stlCreate.subDivDuration}>
                <label htmlFor="duration">Duration of tour:</label>
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration of the tour..."
                  value={formData.duration}
                  onChange={handleChange}
                />
                <span>Hrs</span>
              </div>
              <span>
                duration range (min 168 Hrs - max {durationLong * 730} Hrs)
              </span>
            </div>
          </div>

          <hr />

          {/* Selected countries */}
          <div className={stlCreate.contSelectCount}>
            <h2>Selected countries</h2>
            <div className={stlCreate.contCountList}>
              <ul>
                {selectedCountries.map((country) => (
                  <li>{country}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>

        {/* Activity created successfully */}
        <Modal
          className={stlModal.mdlstl2}
          isOpen={isModalOpen2}
          onRequestClose={() => {
            setIsModalOpen2(false);
          }}
        >
          <div>
            <h2>Activity created successfully</h2>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsModalOpen2(false);
              refreshPage();
            }}
          >
            Accept
          </button>
        </Modal>
      </form>

      <Footer />
    </div>
  );
};

export default Create;
