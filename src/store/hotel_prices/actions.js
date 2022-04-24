export const ADD_HOTEL_PRICES= "HOTEL_PRICES::ADD_HOTEL_PRICES";

export const getHotelPrices = (data) => ({
  type: ADD_HOTEL_PRICES,
  payload: data,
});