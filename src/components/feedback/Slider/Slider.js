import React from "react";
import { useState } from "react";
import style from "./slider.module.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export const Slider = ({ newHotel }) => {
  const [imgIndex, setImgIndex] = useState(1);

  const nextSlide = () => {
    if (imgIndex !== newHotel.images.length) {
      setImgIndex(imgIndex + 1);
    } else if (imgIndex === newHotel.images.length) {
      setImgIndex(1);
    }
  };

  const prevSlide = () => {
    if (imgIndex !== 1) {
      setImgIndex(imgIndex - 1);
    } else if (imgIndex === 1) {
      setImgIndex(newHotel.images.length);
    }
  };

  //   return newHotel.images.map((img, idx) => {
  //     return (
  //       <>
  //         <div className={style.slider__container}>
  //           <div
  //             className={imgIndex === idx + 1 ? style.active : style.slider__img}
  //           >
  //             <img src={img} alt="" />
  //           </div>
  //         </div>
  //
  //       </>
  //     );
  //   });
  return (
    <div className={style.slider__container}>
      {newHotel.images.map((img, idx) => {
        return (
          <div
            className={imgIndex === idx + 1 ? style.active : style.slider__img} key={idx}
          >
            <img className={style.slider__img__new} src={img} alt="" />
          </div>
        );
      })}

      <ArrowBack
        sx={{ color: grey[300], fontSize: "xxx-large" }}
        className={style.btn__prev}
        onClick={prevSlide}
      />
      <ArrowForward
        sx={{ color: grey[300], fontSize: "xxx-large" }}
        className={style.btn__next}
        onClick={nextSlide}
      />
    </div>
  );
};
