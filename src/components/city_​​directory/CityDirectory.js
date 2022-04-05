import style from "./CityDirectory.module.css";

export const CityDirectory = () => {
  return (
    <>
      <div className={style.wrap}>
        <p className={style.text}>
          Здесь представлены все города России, в которых есть аппартаменты
        </p>
      </div>
    </>
  );
};
