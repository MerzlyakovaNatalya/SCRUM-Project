import style from "./Hotel_2.module.css";
import img from "../../images/hotel_2.jpg";

export const Hotel_2 = () => {
  return (
    <div className={style.wrap}>
      <img src={img} alt="Moscow" />
      <h3>Квартиры</h3>
    </div>
  );
};
