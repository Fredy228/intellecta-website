import styles from "./not-found.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFound__title}>404</h1>
      <p className={styles.notFound__text}>Not found page</p>
    </div>
  );
};
