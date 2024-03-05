import {FC} from "react";
import {TAccardionProps} from "./list-slides";
import {IconArrowAccardion} from "../../Icon/Icons";
import styles from "./accardion.module.scss";

export const Accardion:FC<TAccardionProps> = ({ title, subtitle, pageName, image, isOpen }) => {

    return (
        <div className={styles.accordion_wrapper}>
            <div className={styles.accordion}>
                <div className={styles.accordion_content}>
                    <div className={styles.accordion_info}>
                        <h1 className={styles.accordion_title}><span>Intellecta</span>{title}</h1>
                        <p className={styles.accordion_subtitle}>{subtitle}</p>

                    </div>
                    <div className={styles.accordion_img}>
                        <img src={image} alt={title}/>
                    </div>
                </div>
                <div className={styles.accordion_header}>
                    <p>{pageName}</p>
                    <IconArrowAccardion/>
                </div>
            </div>
        </div>

    );
};
