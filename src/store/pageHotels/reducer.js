import { ADD_HOTELS } from "./actions";

const initialState = [];

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOTELS:
      return action.payload;
    default:
      return state;
  }
};
