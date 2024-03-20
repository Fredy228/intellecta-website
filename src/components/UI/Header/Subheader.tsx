import { motion } from "framer-motion";
import styles from "./header.module.scss";

export default function Subheader() {
  return (
    <div className={styles.subheader}>
      <motion.h1
        className={styles.subheader__title}
        initial={{ x: "100%" }}
        animate={{ x: "-170%" }}
        transition={{
          duration: 20,
          loop: Infinity,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        НАРАЗІ ДІЄ БЕТА-ВЕРСІЯ ДОДАТКУ | ДОЛУЧАЙСЯ ДО ТЕСТУВАННЮ | НАРАЗІ ДІЄ БЕТА-ВЕРСІЯ ДОДАТКУ | ДОЛУЧАЙСЯ ДО ТЕСТУВАННЮ | НАРАЗІ ДІЄ БЕТА-ВЕРСІЯ ДОДАТКУ
      </motion.h1>
    </div>
  );
}
