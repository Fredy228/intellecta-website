import {FC, useState} from "react";
import {TAccardionProps} from "./list-slides";
import {IconArrowAccardion} from "../../Icon/Icons";
import styles from "./accardion.module.scss";

export const Accardion:FC<TAccardionProps> = ({ title, subtitle, pageName, image, isOpen }) => {
    const [open, setOpen] = useState(isOpen);

    const toggleAccordion = () => {
        setOpen(!open);
    };

    return (
        <div className={`${styles.accordion} `}>
            <div className={`${styles.accordion_item} ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                {open && (
                    <div className={`${styles.accordion_content} ${isOpen ? 'open' : ''}`}>
                        <div className={styles.accordion_info}>
                            <h1 className={styles.accordion_title}><span>Intellecta</span> {title}</h1>
                            <p className={styles.accordion_subtitletitle}>{subtitle}</p>
                        </div>
                        <img src={image} alt={title}/>
                    </div>
                )}
                <div className={styles.accordion_header} >
                    <p>{pageName}</p>
                    <IconArrowAccardion />
                </div>
            </div>
        </div>
    );
};
