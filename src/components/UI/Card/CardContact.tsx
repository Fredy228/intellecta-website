import { cardContact, TCardContactProps } from "./list";
import styles from "./card-contact.module.scss";

export const CardContact = () => {
  return (
    <div className={styles.card__wrapper}>
      {cardContact.map((item: TCardContactProps) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.card__flag} style={{ background: item.bg }}>
            {item.role}
          </div>
          <div className={styles.card__svg}>{item.svg}</div>
          <h1 className={styles.card__title}>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};
