import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo, useCallback } from "react";
import style from "./Booking.module.css";
import { useParams } from "react-router-dom";
import { getBooking } from "../../store/booked/actions";


export const Booking = () => {

 const Offer = useParams();
 const [priceOneHotel, setPriceOneHotel] = useState({});
 const token = useSelector((state) => state.users);
 const hotelPrice = useSelector((state) => state.hotel_price);
 const dispatch = useDispatch();

 console.log(Offer)

 const offerId = useMemo(() => {
   const idOfferBooking = Offer.booking;
   return idOfferBooking;
 }, [Offer]);

 console.log("это useMemo offerId")
 console.log(offerId)

 const oneOffer = useMemo(() => {
    const offerFound = hotelPrice.find((item) => item.id === offerId);
    dispatch(getBooking(offerFound));
    return offerFound;
 }, [hotelPrice])


 console.log("это useMemo oneOffer")
 console.log(oneOffer)

 const booking = async() => {
 
  const response = await fetch('http://46.17.248.74:58235/api/hotels/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
			},
			body: JSON.stringify({
           "m_offer_id": offerId
          }),
		})

		const data = await response.json();
    console.log(data);
 }

    useEffect(() => {
      booking();
    }, []);
    

  return (
      <>
      <div className={style.wrap}>
        <div>
        <h3 className={style.text_title}>Вы успешно забронировали номер.</h3>
        <p className={style.text}>Ваши брони находятся в личном кабинете</p>
        </div>
    </div>
      </>
  );
};