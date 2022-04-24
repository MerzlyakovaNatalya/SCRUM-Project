import style from "./HotelPrice.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHotelPrices } from "../../store/hotel_prices/actions";
import Button from "@mui/material/Button";
import { Link} from 'react-router-dom';
import { Booking } from '../booking/Booking';
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from '../hoc/RequireAuth';

export const HotelPrice = ({hotelId}) => {

    const dispatch = useDispatch();
    const [oneHotel, setOneHotel] = useState({});
    const cityId = useSelector((state) => state.city_id);
    const idPrice = useSelector((state) => state.hotel_price.id);
    
    const idHotel = Number(hotelId.id);


    const getHotelPrice = async() => {

        const response = await fetch('https://www.multitour.ru/api/v2/', {
            method: "post",
            //headers: {
            //    'content-type': 'application/json'
           // },
            body: JSON.stringify({
                "header":{
                    "token":"9ca2449d91382adee964b679e98c246d",
                    "method": "Hotel.Offers"
                },
                "request": {
                    "city_id": cityId,
                    "date_begin": "2022-06-20",
                    "date_end": "2022-06-27",
                    "adult": 2,
                    }
            })
        })

            const hotelPrice = await response.json();
            const arrayHotelPrice = hotelPrice.response;
            console.log(arrayHotelPrice);
            const priceOneHotel = arrayHotelPrice.find((item) => item.hotel_id === idHotel);

            setOneHotel(priceOneHotel);

            dispatch(getHotelPrices(priceOneHotel));
        
    }

    


        {/*setLoading(true);
        const responsPrice = async (jsonHotelName) => {
            const info = await axios.post(
                urlApiMultitur,
                JSON.stringify({
                    header: { token: token, method: hotelName },
                    request: request,
                }
                  )
              ).then((info) => {
                console.log(info)
            });
        }*/}


    useEffect(() => {
        getHotelPrice();
      }, []);

  return (
      <>
       <div className={style.wrap}>
      <h3>Цены отеля</h3>
      {
          <div>
              <p>id Отеля ___{oneHotel.hotel_id}</p>
              <p>price Отеля ___{oneHotel.price}</p>
              <p>Питание ___{oneHotel.meal_name}</p>
              <p>Дата заезда ___{oneHotel.date_begin}</p>
              <p>Дата выезда ___{oneHotel.date_end}</p>
              <p>Количество ночей ___{oneHotel.nights}</p>
              <Button
                component={Link}
                to='boking'
                href="#"
                color="secondary"
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  minWidth: 150,
                  boxShadow: 3,
                  marginRight: 1,
                  borderRadius: 2,
                  marginTop: 2,
                }}
              >
                Забронировать
              </Button>
          </div>
      }
    </div>
    <Routes>
        <Route path="boking" element={
        <RequireAuth>
          <Booking />
        </RequireAuth>
        } />
    </Routes>
      </>
  );
};