import { Link } from "react-router-dom";
import { Widgets } from "../../components/UI/Widgets-hero/Widgets";
import styles from "pages/Home/home.module.scss";
export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={"hero__container"}>
          <div className={styles.hero__wrapper}>
            <div>
              <h1 className={styles.hero__title}>
                <span>Intellecta</span> - онлайн платформа, що робить навчання
                легшим.
              </h1>
              <p className={styles.hero__subtitle}>
                Ідеальний інструмент для навчання, що дозволяє вам складати,
                делегувати та керувати процесом навчання безпосередньо з вашими
                одногрупниками та викладачами.
              </p>
              <button className={styles.hero__btn}>
                <Link to={"/"}>Зареєструватися</Link>
              </button>
            </div>
            <div>
              <Widgets />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
