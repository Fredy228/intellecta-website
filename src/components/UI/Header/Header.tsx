import {Link} from "react-router-dom";
import {IconLogo} from "components/Icon/Icons";
import styles from "./header.module.scss";
export const Header = () => {

  return (
    <>
      <header className={styles.header}>
        <div className={"header__container"}>
          <div className={styles.header__wrapper}>
            <h1 className={styles.header__logo}><Link to={'/'}><IconLogo/></Link></h1>
            <nav className={styles.header__navigatio}>
              <ul className={styles.header__menu}>
                <li className={styles.header__menu_item}><Link to={'/'}>Про додаток</Link></li>
                <li className={styles.header__menu_item}><Link to={'/students'}>Учні</Link></li>
                <li className={styles.header__menu_item}><Link to={'/teacher'}>Викладачі</Link></li>
                <li className={styles.header__menu_item}><Link to={'/administration'}>Адміністрація</Link></li>
                <li className={styles.header__menu_item}><Link to={'/contacts'}>Контакти</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
