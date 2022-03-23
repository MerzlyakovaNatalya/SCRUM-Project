import style from './Main.module.css';
import { CITY } from '../../helpers/mock'

export const Main = () => {

    return (
        <>
        <div className={style.main}> 
            <h1>Раз в год отправляйся туда, где ты ещё ни разу не был!</h1>
            <div className={style.wrap}>
            {
             CITY.map((item) =>
                  <a className={style.city} href="#">Города</a>
            )   
            }
            </div>
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
        </div>
        </>
    )
}