import {
  GET_COUNTRIES,
  SET_SELECTED_CONTINENT,
  SET_SORT_TYPE,
  GET_ACTIVITIES,
  SET_SELECTED_ACTIVITY,
} from "../actions/index";

const inicitalState = {
  countries: [],
  selectedContinent: "All",
  sortType: "ascendantAlf",
  activities: [],
  selectedActivity: "All",
};

const rootReducer = (state = inicitalState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case SET_SELECTED_CONTINENT:
      return {
        ...state,
        selectedContinent: action.payload,
      };

    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case SET_SELECTED_ACTIVITY:
      return { ...state, selectedActivity: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
