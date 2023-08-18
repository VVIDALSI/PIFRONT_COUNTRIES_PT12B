export const GET_COUNTRIES = "GET_COUNTRIES";
export const SET_SELECTED_CONTINENT = "SET_SELECTED_CONTINENT";
export const SET_SORT_TYPE = "SET_SORT_TYPE";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SET_SELECTED_ACTIVITY = "SET_SELECTED_ACTIVITY";

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

export const getActivities = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/activities")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_ACTIVITIES, payload: data.findAllActivities });
      })
      .catch((error) => console.error("Error fetching activities:", error));
  };
};

export const setSelectedActivity = (activity) => {
  return {
    type: SET_SELECTED_ACTIVITY,
    payload: activity,
  };
};