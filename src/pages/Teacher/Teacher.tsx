import styles from "./teacher.module.scss";
import {IconRobotbook} from "components/Icon/Icons";
import {SliderTeacher} from "../../components/UI/Slider/TeacherSlider/SliderTeacher";

export default function TeacherPage() {
    return(
        <main>
            <section className={styles.teacher}>
                <div className={"student__container"}>
                    <h1 className={styles.teacher__title}>Можливості для викладачів</h1>
                    <div className={styles.teacher__top}>
                        <div className={styles.teacher__robot}>
                            <IconRobotbook/>
                            <p>Повна версія <span className={styles.beta}>| Бета-версія</span></p>
                        </div>
                        <SliderTeacher/>
                    </div>
                    <div>
                        <ul className={styles.teacher__menu}>
                            <li className={styles.students__menu_item}>Розклад на тиждень, або відображення усього
                                місяця із домашнім завданням
                            </li>
                            <li className={styles.teacher__menu_item}>Посилання на домашні завдання та онлайн уроки
                            </li>
                            <li className={styles.teacher__menu_item}>Уся інформація, щодо предмету та викладача</li>
                            <li className={styles.teacher__menu_item}>Налаштування іконок для предметів</li>
                            <li className={styles.teacher__menu_item}>Блок для нотатків та нагадувань</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}