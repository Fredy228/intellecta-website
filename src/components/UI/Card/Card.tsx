import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {cardContent, TCardProps} from "./list";
import styles from "components/UI/Card/card.module.scss";

export const Card = () => {
    return (
        <div className={styles.card__wrapper}>
            {cardContent.map((item:TCardProps) => (
                <motion.div
                    className={styles.card}
                    key={item.id}
                    whileHover={{ scale: 1.1, background:'linear-gradient(180.00deg, rgb(255, 255, 255),rgb(255, 255, 255) 100%)' }}
                    style={{
                        background: "linear-gradient(180.00deg, rgb(255, 255, 255),rgb(115, 135, 238) 100%)"
                    }}
                >
                    <div className={styles.card__flag} style={{background:item.bg}}>{item.role}</div>
                        <div className={styles.card__svg}>
                            {item.svg}
                        </div>
                        <h1 className={styles.card__title}>
                            {item.title}
                        </h1>
                        <p className={styles.card__subtitle}>
                            {item.subtitle}
                        </p>
                        <Link
                            to={item.link}
                            className={styles.card__link}
                        >{item.linkText}</Link>
                </motion.div>
            ))}
        </div>
    );
};

