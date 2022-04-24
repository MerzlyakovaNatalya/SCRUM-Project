export const ADD_USER= "USER::ADD_USER";

export const getUser = (data) => ({
  type: ADD_USER,
  payload: data,
});