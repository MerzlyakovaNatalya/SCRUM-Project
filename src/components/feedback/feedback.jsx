import React from 'react';
import style from "./feedback.module.css";
import { useSelector } from "react-redux";
import { useParams, Link, Outlet } from 'react-router-dom';
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import { HotelPrice } from "../hotel_price/HotelPrice";
import {Slider} from './Slider/Slider';
import { RequireAuth } from "../hoc/RequireAuth";
import { Booking } from '../booking/Booking';

export const Feedback = () => {

    const hotels = useSelector((state) => state.hotels);
    const hotelPrice = useSelector((state) => state.hotel_price);
    const hotelId = useParams();


    let feedback =  [
                 {id: 1, name: 'Павел', messageText: 'Adipisicing exercitation cupidatat adipisicing deserunt enim aute non dolor pariatur qui ad.', location: {city: 'Москва', country: 'Россия'} },
                 {id: 2, name: 'Сергей', messageText: 'Ex sit reprehenderit sit occaecat anim cillum tempor.', location: {city: 'Санкт-Петербург', country: 'Россия'} },
                 {id: 3, name: 'Ирина', messageText: 'Adipisicing labore esse ipsum sint sit non ut commodo eiusmod ullamco commodo magna consequat proident..', location: {city: 'Екатеринбург', country: 'Россия'} }
             ]
    
    const feedPosts = feedback.map((item) => {
        return (
            <div key={item.id}>
                    <div className = {style.feed}>
                <span>
                    <p className = {style.h1name}>
                        {item.name}
                    </p>
                    <div>
                        Город: {item.location.country}, {item.location.city}
                    </div>
                </span>
                <span>
                     <div className = {style.messageText}>{item.messageText}</div>
                </span>         
                </div> 
            </div>
        )
    })

    const roomBooked = () => {

    }

    const newHotel = hotels.find((item) => hotelId.id == item.id);
    const offer = hotelPrice.filter((item) => hotelId.id == item.hotel_id);

    const offers = newHotel.rooms.map((item,index) => {
       const description = offer.filter((i) => item.name === i.room_name);
       console.log(description);
         return (
            <div key={index} className={style.wrap_offers}>
            <h3 className={style.title_room}>{item.name}</h3> 
           {
              description.map((n) => {
                  return (
                    <div key={n.id} className={style.wrap_offer}>
                        <div className={style.blok_offer}>
                           <p className={style.text_offer}>Питание по системе <span className={style.meal_name}>"{n.meal_name}"</span></p>
                           <p className={style.text_offer}>Гости: <span className={style.meal_name}>{n.acc_name}</span></p>
                           <p className={style.text_offer}>Ночи: {n.nights} </p>
                        </div>
                        <div>
                            <p className={style.text_offer}><span className={style.price}>{n.price}</span> руб</p>
                            <p className={style.text_offer}>цена за номер с {n.date_begin} по {n.date_end}</p>
                        </div>
                        <div>
                        <Button
                          component={Link}
                          to={`${n.id}`}
                           href="#"
                           color="secondary"
                            sx={{
                               fontSize: 16,
                               fontWeight: "bold",
                               minWidth: 150,
                               boxShadow: 3,
                               marginRight: 1,
                               borderRadius: 2,
                               marginTop: 2,
                            }}
                          >
                         Забронировать
                        </Button>
                        </div>  
                </div>
                  )
        })  
    }  
            </div>
            
        )
        })

    return (
        <>
          <div className={style.wrap}>
            <h1 className={style.name}>{newHotel.name}</h1>
          <div className={style.slider}>
            <Slider newHotel={newHotel}/>
          </div>
          <div className={style.wrapper}>
          <p className={style.address}>{newHotel.address}</p>
            <p className={style.text}>{newHotel.desc.Расположение}</p>
        
            <Routes>
              <Route path=":booking" element={
                <RequireAuth>
                  <Booking />
                </RequireAuth>
                } />
            </Routes>
        
           <h4 className={style.textH4}>Номера</h4>
             <div className={style.wrap_rooms}>
             <div>{offers}</div>
             </div>
           <h2 className={style.reviews}>Отзывы</h2>
           <div className={style.wrapper_feedPosts}>{feedPosts}</div>
            </div>
          </div>
        </>
    )
    
    };
    
    
export default Feedback;