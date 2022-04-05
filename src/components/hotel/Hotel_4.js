import style from "./Hotel_4.module.css";
import img from "../../images/hotel_4.jpg";

export const Hotel_4 = () => {
  return (
    <div className={style.wrap}>
      <img src={img} alt="Moscow" />
      <h3>Коттеджи</h3>
    </div>
  );
};
