import style from "./Crimea.module.css";
import img from "../../../images/Crimea.jpg";

export const Crimea = () => {

  return (
    <>
    <div className={style.wrap}>
    <h3>Крым</h3>
      <img src={img} alt="Crimea" className={style.img}/>
    </div>
    </>
  );
};