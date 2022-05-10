import style from "./PrivateOffice.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const PrivateOffice = () => {

  const offerBooked = useSelector((state) => state.booked);

  const offer = useMemo(() => {
    if(offerBooked.offer === 0) {
     return false;
    }else {
      return true;
    }
  }, [])

  return (
    <>
    <div className={style.wrap_data}>
        <h3 className={style.title}>Мои данные</h3>
        <div className={style.wrapper_data}></div>
      </div>
      <div className={style.wrap}>
        <h3 className={style.title}>Мои брони</h3>
        <div className={style.wrapper}>
        {
          offer ? (
            <div className={style.wrap_text}>
              <p>{offerBooked.room_name}</p>
              <p>Цена за проживание: {offerBooked.price} руб</p>
              <p>Гости: {offerBooked.acc_name}</p>
              <p>{offerBooked.tariff_name}</p>
              <p>Дата заезда: {offerBooked.date_begin}</p>
              <p>Дата выезда: {offerBooked.date_end}</p>
              <p>Время заселение: {offerBooked.check_in}</p>
              <p>Время выезда: {offerBooked.check_out}</p>
              <p>Ночи: {offerBooked.nights}</p>
            </div>
          ) : (
              <p className={style.text}>Забронированных отелей нет</p>
          )
        }
        </div>
      </div>
    </>
  );
};
