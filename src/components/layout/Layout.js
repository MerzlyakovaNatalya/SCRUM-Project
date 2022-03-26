import style from "./Layout.module.css";
import img from "../../images/Brend_4.png";
import Button from "@mui/material/Button";
import { Main } from "../main/Main";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Form } from "../Form";

export const Layout = () => {
  return (
    <>
      <div className={style.wrap}>
        <section className={style.section}>
          <img src={img} alt="brend" />
          <div className={style.wrapper}>
            <Button
              component={Link}
              to="layout"
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
              Войти
            </Button>
            <Button
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
          </div>
          <Main></Main>
          <Footer></Footer>
        </section>
      </div>
    </>
  );
};
