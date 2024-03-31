import style from "./sliderStyle.module.scss";
import homeThirdImg from "assets/img/homeSlide2.webp";

export const ForAdmins = () => {
  return (
    <div className={style.for_teachers}>
      <div className={style.for_admin__image}>
        <img src={homeThirdImg} alt="Laptop with web-application" />
      </div>
      <div className={style.for_teachers__info}>
        <h2 className={style.slider_title}>
          <span>Intellecta</span> - спрощує процес створення розкладу,
          забезпечуючи зрозумілу та просту структуру, що дозволяє ефективно
          вести організацію та слідкувати за навчальним процесом.
        </h2>
        <p className={style.slider_description}>
          Розклад, надання оцінок, автоматичний журнал відвідувань, чати із
          колегами та учнями доступні для кожного викладача. Автоматична
          розсилка новин та оголошень - це базові інструменти для полегшення
          дистанційного навчання у застосунку.
        </p>
        <p className={style.slider_description}>
          З Intellecta викладачі можуть легко управляти всіма аспектами
          дистанційного навчання, зосереджуючись на наданні якісної освіти.
        </p>
      </div>
    </div>
  );
};
