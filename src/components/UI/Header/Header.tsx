import {IconLogo} from "../../Icon/Icons";
import styles from "./header.module.scss";
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={"header__container"}>
          <div className={styles.header__wrapper}>
            <h1 className={styles.header__logo}><IconLogo/></h1>
            <nav className={styles.header__navigatio}>
              <ul className={styles.header__menu}>
                <li className={styles.header__menu_item}>Про додаток</li>
                <li className={styles.header__menu_item}>Учні</li>
                <li className={styles.header__menu_item}>Викладачі</li>
                <li className={styles.header__menu_item}>Адміністрація</li>
                <li className={styles.header__menu_item}>Контакти</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
