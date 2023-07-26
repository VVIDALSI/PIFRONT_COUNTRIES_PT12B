import React from "react";
import stlNavBar from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom"

const NavLinkMe = ({ to, children, ...props }) => {
  return (
      <NavLink {...props} to={to} className={({ isActive }) => (isActive ? stlNavBar.active : stlNavBar.disable)}>
          {children}
      </NavLink>
  );
};

const NavBar = (props) => {
  return (
    <div className={stlNavBar.gnrlCont}>
      <div className={stlNavBar.countriesCont}>
        <h2>Countries</h2>
      </div>

      <div className={stlNavBar.navigatorCont}>
        
        <NavLinkMe to="/">LANDING</NavLinkMe>
        <NavLinkMe to="/home">HOME</NavLinkMe>
        <NavLinkMe to="/create">CREATE TOUR</NavLinkMe>
        <NavLinkMe to="/about">ABOUT</NavLinkMe>

      </div>

      <div className={stlNavBar.searchCont}>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
