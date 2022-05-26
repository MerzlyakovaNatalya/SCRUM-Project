import React from 'react';
import style from "./Pagination.module.css";

export const Pagination = ({citiesPerPage, totalCities, pagination}) => {

    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalCities/citiesPerPage); i++) {
      pageNumber.push(i)
    }

  return (
    <div className={style.wrap_pagination}>
      <ul className={style.pagination}>
        {
        pageNumber.map(number => (
          <li className={style.pag_item} key={number}>
            <a href="#" className={style.page_link} onClick={() => pagination(number)}>
              {number}
            </a>
          </li>
      ))
        }
      </ul>
    </div>
  )
}

