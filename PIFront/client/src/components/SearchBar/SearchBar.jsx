import React, { useState } from 'react';
import stlSB from './SearchBar.module.css';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import stlMdl from '../SearchBar/modalStyles.module.css';

const SearchBar = () => {
  const allCountries = useSelector((state) => state.countries);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    const countryById = allCountries.find((country) => country.id === searchInput);

    if (countryById) {
      navigate(`/detail/${countryById.id}`);
    } else {
      const countryByName = allCountries.find(
        (country) => country.name.toLowerCase() === searchInput.toLowerCase()
      );

      if (countryByName) {
        navigate(`/detail/${countryByName.id}`);
      } else {
        setShowModal(true);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    if (input === '') {
      setSuggestions([]);
    } else {
      const suggestions = allCountries.filter((country) =>
        country.name.toLowerCase().startsWith(input.toLowerCase())
      ).slice(0, 20);
      setSuggestions(suggestions);
    }
  };

  const handleSuggestionClick = (countryName) => {
    setSearchInput(countryName);
    setSuggestions([]); // Cerrar la lista de sugerencias después de hacer clic
  };

  return (
    <div className={stlSB.gnrlContSB}>
      <div className={stlSB.inputContainer}>
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className={stlSB.suggestionList}>
            {suggestions.map((country) => (
              <li
                key={country.id}
                onClick={() => handleSuggestionClick(country.name)}
              >
                {country.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleSearch}>Find</button>

      {/* Modal para mostrar el mensaje */}
      <Modal className={stlMdl.gnrMdl}
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Country not found"
      >
        <h2>¡Country not found!</h2>
        <h3>Please enter a valid Id value or country name</h3>
        <button onClick={closeModal}>Accept</button>
      </Modal>

    </div>
  );
};

export default SearchBar;
