import { SliderStudents } from "components/UI/Slider/StudentSlider/SliderStudent";
import { IconRobotbook } from "components/Icon/Icons";
import styles from "../role.module.scss";
export default function StudentsPage() {
  return (
    <main>
      <section className={styles.role}>
        <div className={"role__container"}>
          <h1 className={styles.role__title}>
            Можливості для студентів та учнів
          </h1>
          <div className={styles.role__top}>
            <div className={styles.role__robot}>
              <IconRobotbook />
              <p>
                <span className={styles.beta}>Бета-версія</span>
              </p>
            </div>
            <SliderStudents />
          </div>
          <div>
            <ul className={styles.role__menu}>
              <li className={styles.role__menu_item}>
                Розклад на тиждень, або відображення усього місяця із домашнім
                завданням
              </li>
              <li className={styles.role__menu_item}>
                Посилання на домашні завдання та онлайн уроки
              </li>
              <li className={styles.role__menu_item}>
                Уся інформація, щодо предмету та викладача
              </li>
              <li className={styles.role__menu_item}>
                Налаштування іконок для предметів
              </li>
              <li className={styles.role__menu_item}>
                Блок для нотатків та нагадувань
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
