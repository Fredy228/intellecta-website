import { Link } from "react-router-dom";
import { Card } from "components/UI/Card/Card";
import heroImg from "assets/img/hero-comp.png";
import styles from "pages/Home/home.module.scss";
import { IconRobotTeacher } from "components/Icon/Icons";
import { Slider } from "components/UI/Slider/Slider/Slider";

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={"hero__container"}>
          <div className={styles.hero__wrapper}>
            <h1 className={styles.hero__title}>
              <span>Intellecta</span> - онлайн платформа, що робить навчання
            </h1>
            <p className={styles.hero__subtitle}>
              Ідеальний інструмент для навчання, що дозволяє вам складати,
              делегувати та керувати процесом навчання безпосередньо з вашими
              одногрупниками, викладачами та колегами.
            </p>
            <Link to={"/join_us"} className={styles.hero__btn}>
              Приєднатися
            </Link>
          </div>
          <div>
            <img src={heroImg} alt={"Laptop"} className={styles.hero__img} />
          </div>
        </div>
      </section>
      <section className={styles.opportunities}>
        <div className={"opportunities__container"}>
          <div className={styles.opportunities__wrapper}>
            <Card />
          </div>
        </div>
      </section>
      <section className={styles.slider}>
        <div className={"accardion__container"}>
          <div>
            <Slider />
          </div>
        </div>
      </section>
      <section className={styles.reg}>
        <div className={"reg__container"}>
          <div className={styles.reg__wrapper}>
            <div className={styles.reg__content}>
              <h1 className={styles.reg__content_title}>
                Відкрий для себе безмежні можливості дистанційного навчання
                разом з Intellecta
              </h1>
              <p className={styles.reg__content_subtitle}>
                Скоро у навчальних закладах ти матимеш змогу насолоджуватися
                повним спектром наших інновацій. А поки це стає реальністю,
                реєструйся вже зараз, формуй свій унікальний профіль та отримай
                винагороду у ролі Тестувальника. Залишайся на зв'язку з друзями
                та стань першим, хто дізнається про всі гарячі новини.
                Приєднуйся до Intellecta, реєструйся, і відчуй атмосферу нового
                зручного виду дистанційного навчання
              </p>
              <Link
                target={"_blank"}
                to={"https://intellecta.com.ua"}
                className={styles.reg__content_link}
              >
                Зареєструватися
              </Link>
            </div>
            <IconRobotTeacher />
          </div>
        </div>
      </section>
    </main>
  );
}
