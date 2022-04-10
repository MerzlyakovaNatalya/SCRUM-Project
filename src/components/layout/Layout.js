import style from "./Layout.module.css";
import img from "../../images/Brend_4.png";
import Button from "@mui/material/Button";
import { Main } from "../main/Main";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Form } from "../Form";

export const Layout = () => {
  return (
    <>
      <div className={style.wrap}>
        <section className={style.section}>
          <div className={style.box}>
            <img className={style.img} src={img} alt="brend" />
            <div className={style.wrapper}>
              <Button
                component={Link}
                to="/"
                color="secondary"
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  minWidth: 100,
                  backgroundColor: "#e7f1f1",
                  opacity: 0.6,
                  marginRight: 15,
                  borderRadius: 10,
                }}
              >
                Главная
              </Button>
              <Button
              component={Link}
              to="register"
                href="#"
                color="secondary"
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  minWidth: 200,
                  backgroundColor: "#e7f1f1",
                  opacity: 0.6,
                  marginRight: 15,
                  borderRadius: 10,
                }}
              >
                Регистрация
              </Button>
              <Button
                component={Link}
                to="login"
                href="#"
                color="secondary"
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  minWidth: 150,
                  backgroundColor: "#fbf9fc",
                  opacity: 0.8,
                  marginRight: 15,
                  borderRadius: 2,
                }}
              >
                Войти
              </Button>
              <Button
                component={Link}
                variant="contained"
                to="private"
                color="secondary"
                sx={{ borderRadius: 3, marginRight: 15 }}
              >
                Личный кабинет
              </Button>
            </div>
          </div>
          <Outlet></Outlet>
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};
