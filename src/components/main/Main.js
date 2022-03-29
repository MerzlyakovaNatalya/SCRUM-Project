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

export const Main = () => {
  return (
    <>
      <div className={style.main}>
        <h1>Раз в год отправляйся туда, где ты ещё ни разу не был!</h1>
        <ul className={style.wrap}>
          <li>
            <Moscow></Moscow>
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
            <Link to="layout/cityDirectory" className={style.link}>
              Посмотреть другие города
            </Link>
          </div>
          <h2>Поиск по типу размещения</h2>
          <ul className={style.wrap}>
            <li>
              <Link to="layout/feedback">
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
            <Link to="layout/hotelDirectory" className={style.link}>
              Посмотреть ещё варианты
            </Link>
          </div>
        </div>
        <Button
          href="#text-buttons"
          color="secondary"
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            minWidth: 100,
            backgroundColor: "#e7f1f1",
            marginRight: 15,
            borderRadius: 10,
            marginBottom: 3,
          }}
        >
          Назад
        </Button>
      </div>
    </>
  );
};
