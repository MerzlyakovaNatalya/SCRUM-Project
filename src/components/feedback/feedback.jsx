import React from 'react';
import style from "./feedback.module.css";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

export const Feedback = () => {

    const hotels = useSelector((state) => state.hotels);
    const hotelId = useParams();
    console.log(hotelId);

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
    
    console.log(hotels);

    const newHotel = hotels.find((item) => hotelId.id == item.id);
    console.log("это newHotel");
    console.log(newHotel);

    return (
        <>
        <div className={style.wrap}>
        <h1 className={style.name}>{newHotel.name}</h1>
        <img className={style.hotel_big_img} src={newHotel.images[1]} alt="hotel"/>
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
            newHotel.rooms.map((item)=> {
                return (
                    <p>{item.name}</p>
                )
            })
        }
         <p>{newHotel.address}</p>
         <h2 className={style.reviews}>Отзывы</h2>
        <div>{feedPosts}</div>
        </div>
        </>
    )
    
    };
    
    
export default Feedback;