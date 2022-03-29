import style from "./FormResponse.module.css";

export const FormResponse = (infoForm) => {
  console.log(infoForm);

  return (
    <div className={style.wrap}>
      <h1 className={style.text}>Результат поиска</h1>
    </div>
  );
};
