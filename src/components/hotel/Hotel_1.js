import style from "./Hotel_1.module.css";
import img from "../../images/hotel_1.jpg";

export const Hotel_1 = () => {
  return (
    <div className={style.wrap}>
      <img src={img} alt="Moscow" />
      <h3 className={style.text}>Отели</h3>
    </div>
  );
};
