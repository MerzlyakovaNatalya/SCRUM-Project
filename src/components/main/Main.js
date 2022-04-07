import style from "./Main.module.css";
import Button from "@mui/material/Button";
import { Moscow } from "../cities/Moscow";
import { Peter } from "../cities/Peter";
import { Crimea } from "../cities/Crimea";
import { Sochi } from "../cities/Sochi";
import { Hotel_1 } from "../hotel/Hotel_1";
import { Hotel_2 } from "../hotel/Hotel_2";
import { Hotel_3 } from "../hotel/Hotel_3";
import { Hotel_4 } from "../hotel/Hotel_4";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../../store/form/actions";

export const Main = () => {

  const initialState = {
    city: "Москва",
    checkIn: new Date(),
    checkOut: new Date(),
    guest: "1",
  };

  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const onSubmit = (date) => {
    dispatch(getForm(date));
  };

  const handleClick = () => {
    onSubmit(values);
  };

  return (
    <>
      <div className={style.main}>
        <h1 className={style.textH1}>
          Раз в год отправляйся туда, где ты ещё ни разу не был!
        </h1>
        <ul className={style.wrap}>
          <li>
            <Link to="apartmentMoscow" onClick={handleClick}>
            <Moscow></Moscow>
            </Link>
          </li>
          <li>
            <Peter></Peter>
          </li>
          <li>
            <Crimea></Crimea>
          </li>
          <li>
            <Sochi></Sochi>
          </li>
        </ul>
        <div>
          <div className={style.wrapl_ink}>
            <Link to="cityDirectory" className={style.link}>
              Посмотреть другие города
            </Link>
          </div>
          <h2 className={style.textH2}>Поиск по типу размещения</h2>
          <ul className={style.wrap}>
            <li>
              <Link to="feedback">
                <Hotel_1></Hotel_1>
              </Link>
            </li>
            <li>
              <Hotel_2></Hotel_2>
            </li>
            <li>
              <Hotel_3></Hotel_3>
            </li>
            <li>
              <Hotel_4></Hotel_4>
            </li>
          </ul>
          <div className={style.wrapl_ink}>
            <Link to="apartmentDirectory" className={style.link}>
              Посмотреть ещё варианты
            </Link>
          </div>
        </div>
        <Button
          href="#text-buttons"
          color="secondary"
          sx={{
            fontSize: 12,
            fontWeight: "normal",
            minWidth: 100,
            backgroundColor: "#e7f1f1",
            marginRight: 15,
            borderRadius: 10,
            marginBottom: 3,
            marginLeft: 3,
            marginTop: 2,
          }}
        >
          Назад
        </Button>
      </div>
    </>
  );
};
