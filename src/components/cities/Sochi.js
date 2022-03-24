import style from './Sochi.module.css';
import img from '../../images/sochi.jpg';

export const Sochi = () => {
    
    const number = 50;

    return (
        <div className={style.wrap}>
          <img src={img} alt="Sochi"/>
          <h3>Сочи</h3>
          <p>Варианты размещения {number}</p>
        </div>
    )
}