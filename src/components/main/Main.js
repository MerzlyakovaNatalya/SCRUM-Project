import style from './Main.module.css';
import { CITY } from '../../helpers/mock';
import Button from '@mui/material/Button';
import { Moscow } from '../cities/Moscow';
import { Peter } from '../cities/Peter';
import { Crimea } from '../cities/Crimea';
import { Sochi } from '../cities/Sochi';

export const Main= () => {

    return (
        <>
        <div className={style.main}> 
            <h1>Раз в год отправляйся туда, где ты ещё ни разу не был!</h1>
            <ul className={style.wrap}>
                <li>
                    <Moscow></Moscow>
                </li>
                <li>
                    <Peter></Peter>
                </li>
                <li>
                    <Crimea></Crimea>
                </li>
                <li>
                    <Sochi></Sochi>
                </li>
            </ul>
            <div>
            <h2>Поиск по типу размещения</h2>
            <div className={style.wrap}>
            {
             CITY.map((item) =>
                  <a className={style.city} href="#">Отели</a>
            )   
            }
            </div>
        </div>
        <Button href="#text-buttons" color='secondary' sx={{
               fontSize: 16,
               fontWeight: 'bold',
               minWidth: 100,
               backgroundColor: "#e7f1f1",
               marginRight: 15,
               borderRadius: 10,
                }}
               >Назад</Button>
        </div>
        </>
    )
}