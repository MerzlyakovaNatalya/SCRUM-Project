import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../../store/form/actions";
import { getInfoAboutHotels } from "../../store/pageHotels/actions";
import { GeoCity, getInfoFromApi, HotelDesc } from "../../utils/constants";
import { Form } from "../Form";
import { CardHotel } from "./cardHotel";
import "./hotels.scss";

export const Hotels = () => {
  // const [hotels, setHotels] = useState([]);
  const hotels = useSelector((state) => state.hotels);
  const infoForm = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [notHotels, setNotHotels] = useState(false);

  const getHotels = () => {
    setLoading(true);
    getInfoFromApi(GeoCity())
      .then((data) => {
        const city = data.find((item) => item.name === infoForm.city);
        console.log(city);
        if (city === undefined) {
          setNotHotels(true);
        } else {
          setNotHotels(false);
          getInfoFromApi(HotelDesc(city.id))
            .then((data) => {
              if (data.length === 0) {
                setNotHotels(true);
              } else {
                setNotHotels(false);
                dispatch(getInfoAboutHotels(data));
                setLoading(false);
              }
            })
            .catch((err) => console.log(err))
            .finally(() => {
              setLoading(false);
            });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = (data) => {
    dispatch(getForm(data));
    dispatch(getInfoAboutHotels([]));
  };

  useEffect(() => {
    getHotels();
  }, [infoForm]);

  return (
    <>
      <section className="container-results">
        <div className="leftBlock"></div>
        <div className="rightBlock">
          <Form onSubmit={handleSubmit} />
          {loading && (
            <div className="loading">
              <CircularProgress size={100} />
            </div>
          )}
          {notHotels ? (
            <h2>Отелей в данном городе не найдено</h2>
          ) : (
            <ul className="hotel-list">
              {hotels?.map((item) => (
                <li className="hotel-item" key={item.id}>
                  <CardHotel hotel={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};
