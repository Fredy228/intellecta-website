import {IconRobotbook} from "components/Icon/Icons";
import {SliderAdmin} from "components/UI/Slider/AdminSlider/SliderAdmin";
import styles from "./admin.module.scss";

export default function AdministationPage() {
    return(
        <main>
            <section className={styles.admin}>
                <div className={"admin__container"}>
                    <h1 className={styles.admin__title}>Можливості для адміністрації навчальних закладів</h1>
                    <div className={styles.admin__top}>
                        <div className={styles.admin__robot}>
                            <IconRobotbook/>
                            <p>Повна версія <span className={styles.beta}>| Бета-версія</span></p>
                        </div>
                        <SliderAdmin/>
                    </div>
                    <div>
                        <ul className={styles.admin__menu}>
                            <li className={styles.admin__menu_item}>Розклад на тиждень, або відображення усього
                                місяця із домашнім завданням
                            </li>
                            <li className={styles.admin__menu_item}>Посилання на домашні завдання та онлайн уроки
                            </li>
                            <li className={styles.admin__menu_item}>Уся інформація, щодо предмету та викладача</li>
                            <li className={styles.admin__menu_item}>Налаштування іконок для предметів</li>
                            <li className={styles.admin__menu_item}>Блок для нотатків та нагадувань</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}