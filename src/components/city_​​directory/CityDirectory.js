import style from "./CityDirectory.module.css";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../../store/form/actions";
import { getInfoAboutHotels } from "../../store/pageHotels/actions";
import { GeoCity, getInfoFromApi, HotelDesc } from "../../utils/constants";
import { Form } from "../Form";
import { CardHotel } from "../pageHotels/cardHotel";
import "../pageHotels/hotels.scss";

export const CityDirectory = () => {

  const [loading, setLoading] = useState(false);
  const [citys, setCitys] = useState([]);

  const getHotels = () => {
    
    setLoading(true);
    getInfoFromApi(GeoCity())
    .then((data) => {
      const city = data;
      setCitys(city);
      setLoading(false);
    })
    .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }
  console.log(citys);

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <>
      <div className={style.wrap}>
        <p className={style.text}>
          Здесь представлены все города России, в которых есть аппартаменты
        </p>
        {loading && (
               <div className="loading">
                 <CircularProgress size={100} />
               </div>
      )}
      <ul className={style.city_list}>
            {citys.map((item) => (
              <li className={style.city_item} key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
      </div>
       {/*citys ? (
          <h2>Города не найдены</h2>
        ) : (
          <ul className="hotel-list">
            {citys?.map((item) => (
              <li className="hotel-item" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
            )*/}        
    </>
  );
};
