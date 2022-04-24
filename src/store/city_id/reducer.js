import { ADD_CITY_ID } from "./actions";

const initialState = {};

export const cityIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY_ID:
      return action.payload;
    default:
      return state;
  }
};