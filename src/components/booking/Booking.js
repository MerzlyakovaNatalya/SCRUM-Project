import { useSelector } from "react-redux";
import style from "./Booking.module.css";
import { useEffect } from "react";

export const Booking = () => {

 const offerId = useSelector((state) => state.hotel_price.id);
 const token = useSelector((state) => state.users);

 const getBooking = async() => {
 
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
      getBooking();
    }, []);

  return (
      <>
      <div className={style.wrap}>
        <h3>Вы успешно забронировали номер.</h3>
        <p>Ваши брони находятся в личном кабинете</p>
    </div>
      </>
  );
};