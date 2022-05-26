import style from "./Gelendzhik.module.css";
import img from "../../../images/Gelendzhik.jpg";

export const Gelendzhik = () => {

  return (
    <>
    <div className={style.wrap}>
    <h3>Геленджик</h3>
    <img src={img} alt="Sochi" className={style.img}/>
    </div>
    </>
  );
};