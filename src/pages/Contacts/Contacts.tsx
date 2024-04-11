import { CardContact } from "components/UI/Card/CardContact";
import styles from "./contacts.module.scss";

import teams_img from "assets/img/teams.webp";

export default function ContactsPage() {
  return (
    <main>
      <section className={styles.contacts__section}>
        <div className={"__container"}>
          <h2 className={styles.contacts__title}>наші партнери</h2>
          <CardContact />
        </div>
      </section>
      <section className={styles.contacts__section}>
        <div className={"__container"}>
          <h2 className={styles.contacts__title}>наша команада</h2>
          <ul className={styles.team__list}>
            <li className={styles.team__item}>
              <ul className={styles.team__sublist}>
                <li className={styles.team__subitem}>CEO</li>
                <li className={styles.team__subitem}>Олексій Кармазін</li>
              </ul>
            </li>
            <li className={styles.team__item}>
              <ul className={styles.team__sublist}>
                <li className={styles.team__subitem}>PM</li>
                <li className={styles.team__subitem}>Софія Данілова</li>
              </ul>
            </li>
            <li className={styles.team__item}>
              <ul className={styles.team__sublist}>
                <li className={styles.team__subitem}>Design</li>
                <li className={styles.team__subitem}>Антоніна Свіріденко</li>
                <li className={styles.team__subitem}>Юлія Іванова</li>
              </ul>
            </li>
            <li className={styles.team__item}>
              <ul className={styles.team__sublist}>
                <li className={styles.team__subitem}>Full-stack developer</li>
                <li className={styles.team__subitem}>Олексій Смагрович</li>
              </ul>
            </li>
            <li className={styles.team__item}>
              <ul className={styles.team__sublist}>
                <li className={styles.team__subitem}>Front-end developer</li>
                <li className={styles.team__subitem}>Максим Іванов</li>
              </ul>
            </li>
          </ul>
          <img src={teams_img} alt="Team" width={2174} height={710} />
        </div>
      </section>
      <section className={`${styles.contacts__section} __container`}>
        <h2 className={styles.contacts__title}>Контакти</h2>
        <p className={styles.contacts__text}>У вас залишилися питання?</p>
        <a
          className={styles.contacts__link}
          href={"mailto:support@intellecta.ua"}
        >
          support@intellecta.ua
        </a>
        <p className={styles.contacts__text}>
          Хочете спробувати платформу для дистанційного навчання?
        </p>
        <a className={styles.contacts__link} href={"tel:+380 97 907 1001"}>
          +380 97 907 1001
        </a>
      </section>
    </main>
  );
}
