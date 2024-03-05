import {Link} from "react-router-dom";
import {cardContent, TCardProps} from "./list";
import styles from "components/UI/Card/card.module.scss";

export const Card = () => {
    return (
        <div className={styles.card__wrapper}>
            {cardContent.map((item:TCardProps) => (
                <div className={styles.card} key={item.id}>
                    <div className={styles.card__flag} style={{background:item.bg}}>{item.role}</div>
                    <div className={styles.card__svg}>{item.svg}</div>
                    <h1 className={styles.card__title}>{item.title}</h1>
                    <p className={styles.card__subtitle}>{item.subtitle}</p>
                    <Link to={'/'} className={styles.card__link}>{item.linkText}</Link>
                </div>
            ))}
        </div>
    );
};

