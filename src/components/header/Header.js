import style from "./Header.module.css";
import img from "../../images/Brend_4.png";
import svg from "../../images/reply-all-solid.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Form } from "../Form";
import { useState } from "react";
import { CopyLayout } from "../copyLayout/CopyLayout";

export const Header = () => {
  const [dateForm, setDateForm] = useState({});

  const handleSubmit = (date) => {
    setDateForm(date);
    console.log(date);
  };

  return (
    <>
      <div className={style.wrap}>
        <section className={style.section}>
          <img className={style.logo} src={img} alt="brend" />
          <div className={style.wrapper}>
            <Button
              component={Link}
              variant="contained"
              to="private"
              color="secondary"
              sx={{ borderRadius: 3, marginRight: 15, bgcolor: "#b91bf8" }}
            >
              Личный кабинет
            </Button>
            {/*<Button
              component={Link}
              variant="contained"
              to="layout"
              color="secondary"
              sx={{ borderRadius: 3, marginRight: 15, bgcolor: "#b91bf8" }}
            >
              Войти
            </Button>
            <Button
              href="#text-buttons"
              color="secondary"
              variant="contained"
              sx={{ borderRadius: 3, marginRight: 15, bgcolor: "#b91bf8" }}
            >
              Регистрация
            </Button>*/}
          </div>
          <Form onSubmit={handleSubmit} />
          <div className={style.wrp}>
            <p className={style.text}>
              Чтобы изменить мир, надо его увидеть...{" "}
            </p>
            <Link to="layout/main" className={style.button}>
              Войти
            </Link>
            {/* <img src={svg} alt="войти" className={style.svg} />*/}
          </div>
        </section>
        <Outlet></Outlet>
      </div>
      <div>
        <CopyLayout></CopyLayout>
      </div>
    </>
  );
};
