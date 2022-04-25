import React from 'react';
import style from "./feedback.module.css";
import { useSelector } from "react-redux";
import { useParams, Link, Outlet } from 'react-router-dom';
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import { HotelPrice } from "../hotel_price/HotelPrice";
import {Slider} from './Slider/Slider'

export const Feedback = () => {

    const hotels = useSelector((state) => state.hotels);
    const hotelId = useParams();
    const token = useSelector((state) => state.users);


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
                    <div className = {style.h1name}>
                        {item.name}
                    </div>
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

    const newHotel = hotels.find((item) => hotelId.id == item.id);

    return (
        <>
        <div className={style.wrap}>
        <h1 className={style.name}>{newHotel.name}</h1>
        <div><Slider newHotel={newHotel}/></div>
        {/* <img className={style.hotel_big_img} src={newHotel.images[1]} alt="hotel"/> */}
        <h3>{newHotel.desc.Расположение}</h3>
        {/* {
            newHotel.images.map((img) => {
                return (
                <div>
                    <img src={img} alt="" />
                </div>)
                
            })
        } */}
        <h4>Номера</h4>
        {
            newHotel.rooms.map((item,index)=> {
                return (
                    <p key={index}>{item.name}</p>
                )
            })
        }
         <p>{newHotel.address}</p>
         <Button
                component={Link}
                to='price'
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
                Посмотреть цены
              </Button>
              <Routes>
                  <Route path="price/*" element={<HotelPrice hotelId={hotelId} />}/>
              </Routes>
         <h2 className={style.reviews}>Отзывы</h2>
        <div>{feedPosts}</div>
        </div>
        </>
    )
    
    };
    
    
export default Feedback;