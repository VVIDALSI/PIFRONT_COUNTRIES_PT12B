import React, { useState } from 'react';
import stlSB from './SearchBar.module.css';
import { useSelector  } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import stlMdl from '../SearchBar/modalStyles.module.css'

const SearchBar = () => {
  const allCountries = useSelector((state) => state.countries);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);

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

  return (
    <div className={stlSB.gnrlContSB}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
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
  )
}

export default SearchBar