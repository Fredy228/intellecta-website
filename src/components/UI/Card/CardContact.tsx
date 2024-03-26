import {motion} from "framer-motion";
import {cardContact, TCardContactProps} from "./list";
import styles from "./card-contact.module.scss";

export const CardContact = () => {
    return (
        <div className={styles.card__wrapper}>
            {cardContact.map((item:TCardContactProps) => (
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
                </motion.div>
            ))}
        </div>
    );
};

