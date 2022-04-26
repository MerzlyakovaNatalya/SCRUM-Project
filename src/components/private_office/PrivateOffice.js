import style from "./PrivateOffice.module.css";
import { Outlet } from "react-router-dom";

export const PrivateOffice = () => {
  return (
    <>
    <div className={style.wrap_data}>
        <h3 className={style.text}>Мои данные</h3>
        <div className={style.wrapper_data}></div>
      </div>
      <div className={style.wrap}>
        <h3 className={style.text}>Мои брони</h3>
        <div className={style.wrapper}></div>
      </div>
    </>
  );
};
