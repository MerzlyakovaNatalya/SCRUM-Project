import style from "./apartmentDirectory.module.css";

export const ApartmentDirectory = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.apartment}>
          <h3 className={style.textH3}>Отели</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все отели</p>
          </div>
        </div>
        <div className={style.apartment}>
          <h3>Квартиры</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все квартиры</p>
          </div>
        </div>
        <div className={style.apartment}>
          <h3>Курортные отели</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все курортные отели</p>
          </div>
        </div>
        <div className={style.apartment}>
          <h3>Коттеджи</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все коттеджи</p>
          </div>
        </div>
        <div className={style.apartment}>
          <h3>Кемпинг</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все кемпинги</p>
          </div>
        </div>
        <div className={style.apartment}>
          <h3>Апарт-отели</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все апарт-отели</p>
          </div>
        </div>
        <div className={style.apartment}>
          <h3>Гостевые дома</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все гостевые дома</p>
          </div>
        </div>
        <div className={style.apartment}>
          <h3>Хостелы</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все хостелы</p>
          </div>
        </div>
        <div className={style.apartment}>
          <h3>Мотели</h3>
          <div className={style.wrap}>
            <p className={style.text}>Ссылка на все мотели</p>
          </div>
        </div>
      </div>
    </>
  );
};
