import styles from  './header.module.scss'
export const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__wrapper}>
                    <h1>Intellecta</h1>
                    <nav className={styles.header__navigatio}>
                        <ul className={styles.header__menu}>
                            <li className={styles.header__menu_item}>Про додаток</li>
                            <li className={styles.header__menu_item}>Для користувачів</li>
                            <li className={styles.header__menu_item}>Контакти</li>
                            <li className={styles.header__menu_item}>Увійти</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}