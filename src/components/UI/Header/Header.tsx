import { NavLink } from "react-router-dom";
import { IconLogo } from "components/Icon/Icons";
import styles from "./header.module.scss";
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={"header__container"}>
          <div className={styles.header__wrapper}>
            <NavLink className={styles.header__logo} to={"/"}>
              <IconLogo />
            </NavLink>
            <nav className={styles.header__navigatio}>
              <ul className={styles.header__menu}>
                <li className={styles.header__menu_item}>
                  <NavLink className={styles.header__menu_link} to={"/"}>
                    Про додаток
                  </NavLink>
                </li>
                <li className={styles.header__menu_item}>
                  <NavLink
                    className={styles.header__menu_link}
                    to={"/students"}
                  >
                    Учні
                  </NavLink>
                </li>
                <li className={styles.header__menu_item}>
                  <NavLink className={styles.header__menu_link} to={"/teacher"}>
                    Викладачі
                  </NavLink>
                </li>
                <li className={styles.header__menu_item}>
                  <NavLink
                    className={styles.header__menu_link}
                    to={"/administration"}
                  >
                    Адміністрація
                  </NavLink>
                </li>
                <li className={styles.header__menu_item}>
                  <NavLink
                    className={styles.header__menu_link}
                    to={"/contacts"}
                  >
                    Контакти
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
