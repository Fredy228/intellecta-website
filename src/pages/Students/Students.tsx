import {SliderStudents} from "components/UI/Slider/StudentSlider/SliderStudent";
import {IconRobotbook} from "components/Icon/Icons";
import styles from "./students.module.scss"
export default function StudentsPage() {
    return (
        <main>
            <section className={styles.students}>
                <div className={"student__container"}>
                    <h1 className={styles.students__title}>Можливості для студентів та учнів</h1>
                    <div className={styles.students__top}>
                        <div className={styles.students__robot}>
                            <IconRobotbook />
                            <p>Повна версія <span className={styles.beta}>| Бета-версія</span></p>
                        </div>
                        <SliderStudents />
                    </div>
                    <div>
                        <ul className={styles.students__menu}>
                            <li className={styles.students__menu_item}>Розклад на тиждень, або відображення усього місяця із домашнім завданням</li>
                            <li className={styles.students__menu_item}>Посилання на домашні завдання та онлайн уроки</li>
                            <li className={styles.students__menu_item}>Уся інформація, щодо предмету та викладача</li>
                            <li className={styles.students__menu_item}>Налаштування іконок для предметів</li>
                            <li className={styles.students__menu_item}>Блок для нотатків та нагадувань</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}

