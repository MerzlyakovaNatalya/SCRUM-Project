import style from "./FormResponse.module.css";
import { useState, useEffect } from "react";

export const FormResponse = (infoForm) => {
  const [othels, setOthels] = useState([]);

  const searchInfo = {
    header: {
      token: "9ca2449d91382adee964b679e98c246d",
      method: "Hotel.Offers",
    },
    request: {
      city_id: 4094,
      date_begin: "2022-06-20", //infoForm.infoForm.checkIn    тут дату в инфоформ надо форматировать чтобы была в формате "2022-06-20"
      date_end: "2022-06-29", //infoForm.infoForm.checkOut     тут дату в инфоформ надо форматировать чтобы была в формате "2022-06-20"
      adult: infoForm.infoForm.guest,
      //children: [3, 8],
      //meal_code: ["AI", "FB"],
    },
  };

  useEffect(() => {
    fetch("https://www.multitour.ru/api/v2/", {
      method: "POST",
      body: JSON.stringify(searchInfo),
    })
      .then((res) => res.json())
      .then((result) => setOthels(result.response));

    console.log(othels);
  }, [infoForm]);

  return (
    <div className={style.wrap}>
      <h1 className={style.text}>Результат поиска</h1>
      <div className={style.search}>
        {othels.map((item) => (
          <div className={style.search_item}>
            <h3>{item.id}</h3>
            <p>{item.room_name}</p>
            <p>цена {item.price} рублей</p>
          </div>
        ))}
      </div>
    </div>
  );
};
