import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import stlCreate from "./Create.module.css";
import stlModal from "./CrateModal.module.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import LevelOfDifficult from "../../components/LevelOfDifficult/LevelOfDifficult";
import {
  validateTour,
  validateDuration,
  validateCountries,
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

  const refreshPage = () => {
    window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.index !== undefined) {
      // Si el input tiene un atributo "data-index", significa que es un input de país
      const index = parseInt(dataset.index, 10);
      const updatedCountries = [...formData.countries];
      updatedCountries[index] = value;
      setFormData((prevFormData) => ({
        ...prevFormData,
        countries: updatedCountries,
      }));
    } else {
      // Si no tiene "data-index", se actualiza normalmente
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza las validaciones antes de enviar el formulario
    if (!validateTour(formData.tour)) {
      alert("Tour Name is required.");
      return;
    }

    if (!validateDuration(formData.duration)) {
      alert("Duration should be a positive integer.");
      return;
    }

    if (!validateCountries(formData.countries)) {
      alert("All country fields are required and must be valid countries.");
      return;
    }

    axios
      .post("http://localhost:3001/activities/", formData)
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

        <div className={stlCreate.divDuration}>
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

        <div className={stlCreate.divSeason}>
          <label htmlFor="season">Season:</label>
          <select name="season" value={formData.season} onChange={handleChange}>
            <option>Spring</option>
            <option>Summer</option>
            <option>Autumn</option>
            <option>Winter</option>
          </select>
        </div>

        <div className={stlCreate.divCountry}>
          <label htmlFor="country1">Country 1:</label>
          <input
            type="text"
            name="countries"
            data-index="0"
            placeholder="Enter a country to visit..."
            value={formData.countries[0]}
            onChange={handleChange}
            className="country-input"
          />
        </div>

        <div className={stlCreate.divCountry}>
          <label htmlFor="country2">Country 2:</label>
          <input
            type="text"
            name="countries"
            data-index="1"
            placeholder="Enter a country to visit..."
            value={formData.countries[1]}
            onChange={handleChange}
            className="country-input"
          />
        </div>

        <div className={stlCreate.divCountry}>
          <label htmlFor="country3">Country 3:</label>
          <input
            type="text"
            name="countries"
            data-index="2"
            placeholder="Enter a country to visit..."
            value={formData.countries[2]}
            onChange={handleChange}
            className="country-input"
          />
        </div>

        <div className={stlCreate.divCountry}>
          <label htmlFor="country4">Country 4:</label>
          <input
            type="text"
            name="countries"
            data-index="3"
            placeholder="Enter a country to visit..."
            value={formData.countries[3]}
            onChange={handleChange}
            className="country-input"
          />
        </div>

        <button type="submit">Submit</button>

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
