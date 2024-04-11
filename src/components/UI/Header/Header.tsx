import { useState } from "react";
import { NavLink } from "react-router-dom";

import { IconLogo } from "components/Icon/Icons";
import styles from "./header.module.scss";
import noScroll from "../no-scroll";
export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) return;
    setIsShowMenu((prevState) => {
      noScroll(!prevState);
      return !prevState;
    });
  };

  return (
    <>
      <header className={styles.header}>
        <div className={"header__container"}>
          <div className={styles.header__wrapper}>
            <NavLink
              className={styles.header__logo}
              to={"/"}
              onClick={handleToggleMenu}
            >
              <IconLogo />
            </NavLink>
            <nav
              className={`${styles.header__navigation} ${isShowMenu ? styles.active : ""}`}
            >
              <ul className={styles.header__menu}>
                <li className={styles.header__menu_item}>
                  <NavLink
                    className={styles.header__menu_link}
                    to={"/"}
                    onClick={handleToggleMenu}
                  >
                    Про додаток
                  </NavLink>
                </li>
                <li className={styles.header__menu_item}>
                  <NavLink
                    className={styles.header__menu_link}
                    to={"/students"}
                    onClick={handleToggleMenu}
                  >
                    Учні
                  </NavLink>
                </li>
                <li className={styles.header__menu_item}>
                  <NavLink
                    className={styles.header__menu_link}
                    to={"/teacher"}
                    onClick={handleToggleMenu}
                  >
                    Викладачі
                  </NavLink>
                </li>
                <li className={styles.header__menu_item}>
                  <NavLink
                    className={styles.header__menu_link}
                    to={"/administration"}
                    onClick={handleToggleMenu}
                  >
                    Адміністрація
                  </NavLink>
                </li>
                <li className={styles.header__menu_item}>
                  <NavLink
                    className={styles.header__menu_link}
                    to={"/contacts"}
                    onClick={handleToggleMenu}
                  >
                    Контакти
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className={`${styles.header__wrapBurger}`}>
              <button
                className={`${styles.header__burger} ${isShowMenu ? styles.active : ""}`}
                type={"button"}
                onClick={handleToggleMenu}
              >
                <span className={styles.header__burgerIcon}></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
