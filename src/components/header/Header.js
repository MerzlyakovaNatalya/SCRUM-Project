import style from './Header.module.css';
import img from '../../images/Brend_4.png';
import svg from '../../images/reply-all-solid.svg';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export const Header = () => {

    return (
      <>
      <div className={style.wrap}>
          <section className={style.section}>
             <img src={img} alt="brend"/>
             <div className={style.wrapper}>
             <Button component={Link} to='layout' color='secondary' sx={{
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
             <p className={style.text}>Чтобы изменить мир, надо его увидеть... </p>
             <Link to="layout" className={style.button}>Войти</Link>
             <img src={svg} alt="войти" className={style.svg}/>
          </section>
          <Outlet></Outlet>
        </div>
      </>
    )
}