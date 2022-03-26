import style from "./Hotel_3.module.css";
import img from "../../images/hotel_3.jpg";

export const Hotel_3 = () => {

  return (
    <div className={style.wrap}>
      <img src={img} alt="Moscow" />
      <h3>Апартаменты</h3>
    </div>
  );
};