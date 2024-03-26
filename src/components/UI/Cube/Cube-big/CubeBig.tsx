import styles from "./cube-big.module.scss";
export const CubeBig = () => {
    return (
                <div className={`${styles.cube__wrapper}`}>
                    <div className={styles.cube}>
                        <div className={`${styles.front} ${styles.side}`}></div>
                        <div className={`${styles.top} ${styles.side}`}></div>
                        <div className={`${styles.right_side} ${styles.side}`}></div>
                    </div>
        </div>
    );
};