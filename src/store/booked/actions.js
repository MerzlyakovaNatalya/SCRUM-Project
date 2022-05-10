export const ADD_BOOKING = "BOOKING::ADD_BOOKING";

export const getBooking = (data) => ({
    type: ADD_BOOKING,
    payload: data,
})