import { ADD_BOOKING } from "./actions";

const initialState = {
    offer: 0
};

export const bookingReduser = (state = initialState, action) => {
    switch(action.type) {
        case ADD_BOOKING:
            return action.payload
        default:
            return state;    
    }
}