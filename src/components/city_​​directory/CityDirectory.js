import style from "./CityDirectory.module.css";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GeoCity, getInfoFromApi } from "../../utils/constants";
import { Pagination } from "./Pagination";
import { PopularCities } from "./popularCities/PopularCities";
import "../pageHotels/hotels.scss";

export const CityDirectory = () => {
  const [loading, setLoading] = useState(false);
  const [citys, setCitys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //текущая страница
  const [citiesPerPage] = useState(50); //города на странице
  const [available, setAvailable] = useState(false); //показать или скрыть кнопки пагинации
  const dispatch = useDispatch();

  const getHotels = () => {
    setLoading(true);
    getInfoFromApi(GeoCity())
      .then((data) => {
        const city = data;
        const newCitys = city.map((item) => item.name);
        const sortCity = newCitys.sort();
        setCitys(sortCity);
        setLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const getfilterCitys = () => {
    const newCitys = citys.map((item) => item.name )
    //const newCitys = citys.sort();

    console.log("newCitys");
    console.log(newCitys);
  }

  useEffect(() => {
    getHotels();
  }, []);

 

  const lastCityIndex = currentPage * citiesPerPage; //высчитываем последний индекс
  const firstityIndex = lastCityIndex - citiesPerPage; //высчитываем первый индекс
  const currentCity = citys.slice(firstityIndex, lastCityIndex); // получаем текущие города

  const pagination = (pageNumber) => setCurrentPage(pageNumber);
  const toggle = () => setAvailable(!available);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  console.log(citys)

  return (
    <>
      <div className={style.wrap}>
        <p className={style.text}>
          Города России:
        </p>
        {loading && (
          <div className="loading">
            <CircularProgress size={100} />
          </div>
        )}
        <ul className={style.city_list}>
          {currentCity.map((item, i) => (
            <li className={style.city_item} key={i}>
              {item}
            </li>
          ))}
        </ul>
        <div className={style.wrap_button}>
          <button className={style.prev_button} onClick={prevPage}></button>
          <button className={style.next_button} onClick={nextPage}></button>
          <button className={style.button} onClick={toggle}>
            Показать/скрыть все страницы
          </button> 
            <button className={`${style.current_page_button} ${style.gradient}`}>{currentPage} страница</button>
        </div>
        {available && (
          <Pagination
            citiesPerPage={citiesPerPage}
            totalCities={citys.length}
            pagination={pagination}
          />
        )}
        <PopularCities citys={citys}/>
      </div>
    </>
  );
};
