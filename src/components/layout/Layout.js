import style from './Layout.module.css';
import img from '../../images/Brend_4.png';
import Button from '@mui/material/Button';
import { Main } from '../main/Main';

export const Layout = () => {

    return (
      <>
      <div className={style.wrap}>
          <section className={style.section}>
             <img src={img} alt="brend"/>
             <div className={style.wrapper}>
             <Button href="#text-buttons" color='secondary' sx={{
               fontSize: 16,
               fontWeight: 'bold',
               minWidth: 100,
               backgroundColor: "#e7f1f1",
               opacity: .6,
               marginRight: 15,
               borderRadius: 10,
                }}
               >Войти</Button>
             <Button href="#text-buttons" color='secondary' sx={{
               fontSize: 16,
               fontWeight: 'bold',
               minWidth: 200,
               backgroundColor: "#e7f1f1",
               opacity: .6,
               marginRight: 15,
               borderRadius: 10,
               }}>Регистрация</Button>
             </div>
             <Main></Main>
          </section>
        </div>
      </>
    )
}