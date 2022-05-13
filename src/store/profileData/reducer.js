import { PROFILE_DATA } from "./action";

const initialState = {};

export const profileDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_DATA:
      return action.payload;
    default:
      return state;
  }
};
