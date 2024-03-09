import {Slider} from "components/UI/Slider/Slider";
import {IconRobotbook} from "components/Icon/Icons";
import styles from "./students.module.scss"
export default function StudentsPage() {
    return (
        <main>
            <section className={styles.students}>
                <div className={"student__container"}>
                    <div>
                        <IconRobotbook />
                        <Slider/>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Розклад на тиждень, або відображення усього місяця із домашнім завданням</li>
                        <li>Посилання на домашні завдання та онлайн уроки</li>
                        <li>Уся інформація, щодо предмету та викладача</li>
                        <li>Налаштування іконок для предметів</li>
                        <li>Блок для нотатків та нагадувань</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

