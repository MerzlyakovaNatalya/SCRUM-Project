import { Button } from "@mui/material";
import "./cardHotel.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ADD_HOTEL_PRICES } from "../../../store/hotel_prices/actions";
import { useEffect, useState } from "react";

export const CardHotel = ({ hotel }) => {

  const hotelOffers = useSelector((state) => state.hotel_price);
  const [oneHotelOffer, setOneHotelOffer] = useState({});

  const getOneHotelOffer = () => {
   const filteredHotel = hotelOffers.find((item) => item.hotel_id === hotel.id);
   console.log("это filteredHotel");
  console.log(filteredHotel);
   setOneHotelOffer(filteredHotel)
  }
  console.log("это oneHotelOffer");
  console.log(oneHotelOffer);
  //const hotelPrice = useSelector((state) => state.hotel_price);

  //const hotelOffer = hotelPrice.find((item) => item.hotel_id === ////hotel.id);
  
 //if(hotel.id === hotelOffers.hotel_id)
 useEffect(() => {
  getOneHotelOffer();
 }, [])

  return (
    <>
      <div className="card-wrp">
        <div className="card-wrp__image">
          <img
            src={hotel.images[0]}
            alt="image"
            className="card_image"
          />
        </div>
        <div className="card-wrp__desc">
         <h2 className="card-wrp__title">
            {hotel.name}{" "}
            {hotel.desc["Звёздность"]
              ? `(${hotel.desc["Звёздность"]} звезды)`
              : "(нет звёзд)"}
          </h2>
          <hr className="hr"/>
          <p className="text">{hotel.desc["Адрес"]}</p>
          <p className="text">от <span className="price">{oneHotelOffer.price} </span><span>{oneHotelOffer.currency}</span></p>
          <p className="text">за <span>{oneHotelOffer.nights} </span>ночей для <span>{oneHotelOffer.acc_name}</span></p>
          <Button
            component={Link}
            to={`${hotel.id}`}
            color="secondary"
            sx={{
              width: 200,
              height: 50,
              borderRadius: 3,
              bgcolor: "background.purple",
            }}
            size="large"
            variant="contained"
            className="card-wrp__btn"
          >
            Показать номера
          </Button>
        </div>
      </div>
    </>
  );
};
