import style from "./Footer.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const number = 50;

  return (
    <div className={style.footer}>
      <Button
        href="#"
        color="secondary"
        className={style.button}
        sx={{
          fontSize: 16,
          fontWeight: "bold",
          minWidth: 100,
          backgroundColor: "#e7f1f1",
          marginRight: 15,
          borderRadius: 10,
          justifyContent: "space-between",
        }}
      >
        Мобильная версия
      </Button>
      <Button
        href="#"
        color="secondary"
        sx={{
          fontSize: 16,
          fontWeight: "bold",
          minWidth: 100,
          backgroundColor: "#e7f1f1",
          marginRight: 15,
          borderRadius: 10,
        }}
      >
        Зарегистрироваться
      </Button>
      <Button
        href="#"
        color="secondary"
        sx={{
          fontSize: 16,
          fontWeight: "bold",
          minWidth: 100,
          backgroundColor: "#e7f1f1",
          marginRight: 15,
          borderRadius: 10,
        }}
      >
        Ваш аккаунт
      </Button>
      <Button
        href="#"
        color="secondary"
        sx={{
          fontSize: 16,
          fontWeight: "bold",
          minWidth: 100,
          backgroundColor: "#e7f1f1",
          marginRight: 15,
          borderRadius: 10,
        }}
      >
        Связаться с нами
      </Button>
    </div>
  );
};
