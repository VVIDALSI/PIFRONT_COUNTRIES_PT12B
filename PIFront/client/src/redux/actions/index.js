export const GET_COUNTRIES = "GET_COUNTRIES";
export const SET_SELECTED_CONTINENT = "SET_SELECTED_CONTINENT";
export const SET_SORT_TYPE = "SET_SORT_TYPE";

export const getCountries = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/countries")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_COUNTRIES, payload: data }));
  };
};

export const setSelectedContinent = (continent) => {
  return {
    type: SET_SELECTED_CONTINENT,
    payload: continent,
  };
};

export const setSortType = (sortType) => {
  return {
    type: SET_SORT_TYPE,
    payload: sortType,
  };
};
