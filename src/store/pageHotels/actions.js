export const ADD_HOTELS = "PAGEHOTELS::ADD_HOTELS";

export const getInfoAboutHotels = (hotels) => ({
  type: ADD_HOTELS,
  payload: hotels,
});
