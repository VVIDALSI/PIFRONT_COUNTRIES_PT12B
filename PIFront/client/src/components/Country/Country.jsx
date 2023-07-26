import React from "react";
import stlCountry from "./Country.module.css";
import { Link } from "react-router-dom";

const Country = (props) => {
  const {id, name, flag, region } = props;

  return (
    <Link to={`/detail/${id}`}>
      <div className={stlCountry.countryCont}>
        <h2>{name}</h2>
        <img src={flag} alt="" />
        <h2>{region}</h2>
      </div>
    </Link>
  );
};

export default Country;
