import style from "./Peter.module.css";
import img from "../../images/Peter.jpg";

export const Peter = () => {
  const number = 50;

  return (
    <div className={style.wrap}>
      <img src={img} alt="Moscow" />
      <h3>Санкт‑Петербург</h3>
      <p className={style.description}>Варианты размещения {number}</p>
    </div>
  );
};
