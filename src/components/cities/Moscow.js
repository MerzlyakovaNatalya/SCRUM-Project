import style from "./Moscow.module.css";
import img from "../../images/moscow.jpg";

export const Moscow = () => {
  const number = 50;

  return (
    <div className={style.wrap}>
      <img src={img} alt="Moscow" />
      <h3>Москва</h3>
      <p className={style.description}>Варианты размещения {number}</p>
    </div>
  );
};
