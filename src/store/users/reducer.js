import { ADD_USER } from "./action";

const initialState = [];

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER: 
          return action.payload
        default:
            return state
    }
}