import React from 'react';
import style from "./feedback.module.css";

export const Feedback = () => {

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
    
    return (
        <div>{feedPosts}</div>
    )
    
    };
    
    
export default Feedback;