export const PROFILE_DATA = "PROFILE_DATA";

export const getProfileData = (data) => ({
  type: PROFILE_DATA,
  payload: data,
});
