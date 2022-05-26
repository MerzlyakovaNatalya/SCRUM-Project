import React, { useEffect } from 'react';
import style from "./PopularCities.module.css";
import { Link } from "react-router-dom";
import { Crimea } from "../../resorts/crimea/Crimea";
import { Sochi } from "../../resorts/sochi/Sochi";
import { Anapa } from "../../resorts/anapa/Anapa";
import { Gelendzhik } from "../../resorts/gelendzhik/Gelendzhik";
import img from "../../../images/test.jpg";



export const PopularCities = ({citys}) => {

    //useEffect(() => {

   // }, [])

  return (
    <div className={style.wrap_popular_cities}>
      <h2 className={style.title_popular_cities}>Не знаете куда поехать? Мы подскажем! Самые популярные направления</h2>
      <h3 className={style.text_popular_cities}>Курорты</h3>
      <ul className={style.wrap_ul}>
            <li className={style.li}>
              <Link to="layout/apartmentMoscow">
              <Crimea></Crimea>
              </Link>
            </li>
            <li className={style.li}>
            <Sochi></Sochi>
            </li>
            <li className={style.li}>
              <Anapa></Anapa>
            </li>
            <li className={style.li}>
              <Gelendzhik></Gelendzhik>
            </li>
          </ul>
          <h3 className={style.text_popular_cities}>Самые красивые города</h3>
          <ul className={style.wrap_ul}>
            <li className={style.li}>
              <h3>Москва</h3>
            <img src={img} alt="Москва" className={style.img}/>
            </li>
            <li className={style.li}>
            <h3>Санкт-Петербург</h3>
            <img src={img} alt="Санкт-Петербург" className={style.img}/>
            </li>
            <li className={style.li}>
            <h3>Казань</h3>
            <img src={img} alt="Казань" className={style.img}/>
            </li>
            <li className={style.li}>
            <h3>Ростов-на-Дону</h3>
            <img src={img} alt="Ростов-на-Дону" className={style.img}/>
            </li>
          </ul>
          <h3 className={style.text_popular_cities}>Подмосковье</h3>
          <ul className={style.wrap_ul}>
            <li className={style.li}>
              <h3>Медвежьи озера загородный клуб</h3>
            <img src={img} alt="Москва" className={style.img}/>
            </li>
            <li className={style.li}>
            <h3>Фореста Фестиваль парк-отель</h3>
            <img src={img} alt="Санкт-Петербург" className={style.img}/>
            </li>
            <li className={style.li}>
            <h3>Царский лес парк-отель</h3>
            <img src={img} alt="Казань" className={style.img}/>
            </li>
            <li className={style.li}>
            <h3>Тучково загородный клуб</h3>
            <img src={img} alt="Ростов-на-Дону" className={style.img}/>
            </li>
          </ul>
    </div>
  )
}

