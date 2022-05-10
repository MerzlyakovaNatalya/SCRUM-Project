import axios from "axios";

const token = "9ca2449d91382adee964b679e98c246d";

const urlApiMultitur = "https://www.multitour.ru/api/v2/";

const idRussia = 3159;

export const getInfoFromApi = async (method) => {
  const info = await axios.post(
    urlApiMultitur,
    JSON.stringify(RequestData(method))
  );

  return info.data.response;
};

export const RequestData = (item) => ({
  header: { token: token, method: item.method },
  request: item.request,
});

export const GeoRegion = (country_id) => ({
  method: "Geo.Region",
  request: { country_id },
});

export const GeoResort = (country_id) => ({
  method: "Geo.Resort",
  request: { country_id },
});

export const GeoCity = (country_id, region_id, resort_id) => ({
  method: "Geo.City",
  request: { country_id: idRussia, region_id, resort_id },
});

export const HotelDesc = (city_id) => ({
  method: "Hotel.Desc",
  request: {
    city_id,
  },
});

export const HoteOffers = (city_id) => ({
  method: "Hotel.Offers",
  request: {
    city_id: city_id,
    date_begin: "2022-06-20",
    date_end: "2022-06-27",
    adult: 2,
  },
});
