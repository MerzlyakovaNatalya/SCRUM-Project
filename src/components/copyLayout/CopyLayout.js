import style from "./CopyLayout.module.css";
import img from "../../images/Brend_4.png";
import Button from "@mui/material/Button";
import { Main } from "../main/Main";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Form } from "../Form";

export const CopyLayout = () => {
  return (
    <>
      <div className={style.wrap}>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
};
