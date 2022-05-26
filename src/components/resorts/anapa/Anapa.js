import style from "./Anapa.module.css";
import img from "../../../images/Anapa.jpg";

export const Anapa = () => {

  return (
    <>
    <div className={style.wrap}>
      <h3>Anapa</h3>
      <img src={img} alt="Sochi" className={style.img}/>
    </div>
    </>
  );
};