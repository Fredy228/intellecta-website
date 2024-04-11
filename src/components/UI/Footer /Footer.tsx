import { IconInstagram, IconTikTok } from "components/Icon/Icons";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"footer__container"}>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer_top}>
            <ul className={styles.footer_top__list}>
              <h1 className={styles.footer_top__title}>Наші партнери</h1>
              <li>
                <a href="https://g-aggregator.com/g-incubator">G*Incubator</a>
              </li>
              <li>
                <a href="https://g-aggregator.com/">G*Aggregator</a>
              </li>
              <li>
                <a href="https://www.onua.edu.ua/ua/">НУ "ОЮА"</a>
              </li>
            </ul>
            <ul className={styles.footer_top__list}>
              <h1 className={styles.footer_top__title}>Сервіси</h1>
              <li>
                <a href="https://intellecta.com.ua/dashboard">Intellecta</a>
              </li>
            </ul>
            <ul className={styles.footer_top__list}>
              <h1 className={styles.footer_top__title}>Про нас</h1>

              <li>
                <a href="https://curious-scarer-95d.notion.site/Startup-Intellecta-aea1f2d8dc7246848ea80edc8d65fefb?pvs=4">
                  Стартап
                </a>
              </li>
              <li>
                <Link to={"/contacts"}>Команда</Link>
              </li>
            </ul>
            <ul className={styles.footer_top__list}>
              <h1 className={styles.footer_top__title}>Новини</h1>
              <li>
                <a href="https://www.instagram.com/_intellecta_/">Instagram</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@_intellecta_?_t=8kx2vQE9XGA&_r=1">
                  Tik-tok
                </a>
              </li>
            </ul>
            <ul className={styles.footer_top__list}>
              <h1 className={styles.footer_top__title}>Інформація</h1>
              <li>
                <Link to={"/students"}>Для учнів</Link>
              </li>
              <li>
                <Link to={"/teacher"}>Для викладачів</Link>
              </li>
              <li>
                <Link to={"/administration"}>
                  Для адміністрації <br /> навчальних закладів
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_copyright}>
            <span> © 2024 Intellecta</span>
            <span>Legal | Privacy Policy | Cookie Policy | Sitemap</span>
            <div className={styles.footer__social}>
              <a
                href={
                  "https://www.tiktok.com/@_intellecta_?_t=8kx2vQE9XGA&_r=1"
                }
              >
                <IconTikTok />
              </a>
              <a href={"https://www.instagram.com/_intellecta_/"}>
                <IconInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
