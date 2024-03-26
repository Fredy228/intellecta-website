import {IconInstagram, IconTikTok} from "components/Icon/Icons";
import styles from "./footer.module.scss";
export const Footer = () => {
  return(
      <footer className={styles.footer}>
        <div className={"footer__container"}>
          <div className={styles.footer__wrapper}>
              <div className={styles.footer_top}>
                  <ul className={styles.footer_top__list}>
                      <h1 className={styles.footer_top__title}>Наші партнери</h1>
                      <li>G*Incubator</li>
                      <li>G*Aggregator</li>
                      <li>НУ "ОЮА"</li>
                  </ul>
                  <ul className={styles.footer_top__list}>
                      <h1 className={styles.footer_top__title}>Сервіси</h1>
                      <li>Intellecta</li>
                  </ul>
                  <ul className={styles.footer_top__list}>
                      <h1 className={styles.footer_top__title}>Про нас</h1>
                      <li>Стартап</li>
                      <li>Команда</li>
                  </ul>
                  <ul className={styles.footer_top__list}>
                      <h1 className={styles.footer_top__title}>Новини</h1>
                      <li>Що нового?</li>
                      <li>Instagram</li>
                      <li>Tik-tok</li>
                  </ul>
                  <ul className={styles.footer_top__list}>
                      <h1 className={styles.footer_top__title}>Інформація</h1>
                      <li>Для учнів</li>
                      <li>Для викладачів</li>
                      <li>Для адміністрації
                          навчальних закладів
                      </li>
                  </ul>
              </div>
              <div className={styles.footer_copyright}>
                  <span> ©  2024 Intellecta</span>
                  <span>Legal | Privacy Policy | Cookie Policy | Sitemap</span>
                  <div className={styles.footer__social}>
                      <a href={'/'}><IconTikTok/></a>
                      <a href={'/'}><IconInstagram /></a>
                  </div>
            </div>
          </div>
        </div>
      </footer>
  );
};
