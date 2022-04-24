import { ADD_HOTEL_PRICES } from "./actions";

const initialState = [];

export const hotelPricesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_HOTEL_PRICES: 
          return action.payload
        default:
            return state
    }
}