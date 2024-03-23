import styles from "./cube-small.module.scss";

export default function CubeSmall() {
    return (
        <div className={`${styles.cube_wrapper_second}`}>
            <div className={styles.cube_second}>
                <div className={`${styles.front_second} ${styles.side}`}></div>
                <div className={`${styles.top_second} ${styles.side}`}></div>
                <div className={`${styles.right_side_second} ${styles.side}`}></div>
            </div>
        </div>
    );
}

