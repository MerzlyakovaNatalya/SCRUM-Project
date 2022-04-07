import style from "./Crimea.module.css";
import img from "../../images/Crimea.jpg";

export const Crimea = () => {
  const number = 50;

  return (
    <>
    <div className={style.wrap}>
      <img src={img} alt="Moscow" />
      <h3>Крымский полуостров</h3>
      <p className={style.description}>Варианты размещения {number}</p>
    </div>
    </>
  );
};
