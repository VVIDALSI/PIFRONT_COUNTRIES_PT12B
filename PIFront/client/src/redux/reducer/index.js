import {
  GET_COUNTRIES,
  SET_SELECTED_CONTINENT,
  SET_SORT_TYPE,
} from "../actions/index";

const inicitalState = {
  countries: [],
  selectedContinent: "All",
  sortType: "ascendantAlf",
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

    default:
      return { ...state };
  }
};

export default rootReducer;
