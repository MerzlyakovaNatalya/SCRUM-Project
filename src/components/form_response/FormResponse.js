import style from "./FormResponse.module.css";
import { useState, useEffect } from "react";

export const FormResponse = (props) => {
  const [othels, setOthels] = useState([]);

  /* const searchInfo = {
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
  };*/

  //const onSubmit = () => {
  //console.log(124);
  //};

  /*useEffect(() => {
    fetch("https://www.multitour.ru/api/v2/", {
      method: "POST",
      body: JSON.stringify(searchInfo),
    })
      .then((res) => res.json())
      .then((result) => setOthels(result.response));

    console.log(othels);
  }, [infoForm]);*/

  const info = props.info;

  useEffect(() => {
    fetch("https://www.multitour.ru/api/v2/", {
      method: "POST",
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.header.token == null) {
          return <div></div>;
        }
        const copyOthels = [...othels, result];
        setOthels(copyOthels);
      });
  }, [info]);

  console.log(info);
  console.log(othels);

  return (
    <div className={style.wrap}>
      <div className={style.search}>
        {othels.map((item, index) => (
          <div className={style.search_item} key={index}>
            <h1 className={style.text_hotel}>{item.header.method}</h1>
            <h2 className={style.text_city}>Город{item.request.city_id}</h2>
            <p className={style.description}>
              дата приезда {item.request.date_begin}
            </p>
            <p className={style.description}>
              дата отъезда {item.request.date_end}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
