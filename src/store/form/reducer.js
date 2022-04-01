import { ADD_FORM } from "./actions";

const initialState = {};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM:
      return action.payload;
    default:
      return state;
  }
};
