import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../../store/form/actions";
import { getInfoAboutHotels } from "../../store/pageHotels/actions";
import { GeoCity, getInfoFromApi, HotelDesc, HoteOffers } from "../../utils/constants";
import { Form } from "../Form";
import { CardHotel } from "./cardHotel";
import { getCityId } from "../../store/city_id/actions";
import { getHotelPrices } from "../../store/hotel_prices/actions";
import "./hotels.scss";
import { style } from "@mui/system";

export const Hotels = () => {
  const [filteredHotels, setFilteredHotels] = useState([]);
  const hotelOffers = useSelector((state) => state.hotel_price);
  const hotels = useSelector((state) => state.hotels);
  const infoForm = useSelector((state) => state.form);
  const [loading, setLoading] = useState(false);
  const [notHotels, setNotHotels] = useState(false);
  const dispatch = useDispatch();



  const getHotels = () => {
    setLoading(true);
    getInfoFromApi(GeoCity())
      .then((data) => {
        const city = data.find((item) => item.name === infoForm.city);
        if (city === undefined) {
          setNotHotels(true);
        } else {
          setNotHotels(false);
          dispatch(getCityId(city.id))
          getInfoFromApi(HotelDesc(city.id))
            .then((data) => {
              if (data.length === 0) {
                setNotHotels(true);
              } else {
                setNotHotels(false);
                dispatch(getInfoAboutHotels(data));
                getInfoFromApi(HoteOffers(city.id))
                  .then((data) => {
                     if (data.length === 0) {
                      setNotHotels(true);
                     } else {
                       setNotHotels(false);
                       dispatch(getHotelPrices(data));
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

  useEffect(() => {
    const filteredId = hotelOffers.map((item) => item.hotel_id);
    const idHotelOffers = hotels.filter((i) => filteredId.includes(i.id)
  );
  setFilteredHotels(idHotelOffers);
}, [hotelOffers]);
  
  return (
    <>
      <section className="container-results">
        <div className="leftBlock"></div>
        <div className="rightBlock">
          <div className="wrap_form">
          <Form onSubmit={handleSubmit}/>
          </div>
          {loading && (
            <div className="loading">
              <CircularProgress size={100} />
            </div>
          )}
          {notHotels ? (
            <h2>Отелей в данном городе не найдено</h2>
          ) : (
            <>
            <div className="wrap_arrow">
              <div>
               <div className="arrow-5 arrow-5-bottom">
                 Результат поиска на выбранные даты
               </div>
               <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
               </div>
              </div>
              <div>
              <a href="#" className="arrow-5">
                Посмотреть все отели данного города
              </a>
             </div>
           </div>
            <ul className="hotel-list">
             {filteredHotels?.map((item) => (
                <li className="hotel-item" key={item.id}>
                  <CardHotel hotel={item} />
                </li>
             ))}
            </ul>
            </>
          )}
        </div>
      </section>
    </>
  );
};
