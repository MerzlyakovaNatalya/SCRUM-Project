import style from "./Sochi.module.css";
import img from "../../../images/sochi.jpg";

export const Sochi = () => {

  return (
    <>
    <div className={style.wrap}>
    <h3>Сочи</h3>
      <img src={img} alt="Sochi" className={style.img}/>
    </div>
    </>
  );
};