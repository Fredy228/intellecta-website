import { Link } from "react-router-dom";
import { Card } from "components/UI/Card/Card";
import heroImg from "assets/img/hero-comp.png"
import styles from "pages/Home/home.module.scss";
import {Accardion} from "../../components/UI/Accardion/Accardion";
import {AccardionProps} from "../../components/UI/Accardion/list-slides";
import {useState} from "react";
export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };
  return (
      <main>
          <section className={styles.hero}>
              <div className={"hero__container"}>
                  <div className={styles.hero__wrapper}>
                      <h1 className={styles.hero__title}><span>Intellecta</span> - онлайн платформа, що робить навчання
                      </h1>
                      <p className={styles.hero__subtitle}>Ідеальний інструмент для навчання, що дозволяє вам складати,
                          делегувати та керувати процесом навчання безпосередньо з вашими одногрупниками, викладачами та
                          колегами.</p>
                      <Link to={'/'} className={styles.hero__btn}>Приєднатися</Link>
                      <img src={heroImg} alt={'Laptop'} className={styles.hero__img}/>
                  </div>
              </div>
          </section>
          <section className={styles.opportunities}>
              <div className={"opportunities__container"}>
                  <div className={styles.opportunities__wrapper}>
                    <Card/>
                  </div>
              </div>
          </section>
          <section>
              <div className={"accardion__container"}>
                  {AccardionProps.map((item, index) => (
                      <Accardion
                          key={item.id}
                          title={item.title}
                          subtitle={item.subtitle}
                          pageName={item.pageName}
                          image={item.image}
                          isOpen={activeIndex === index}
                          onToggle={() => handleToggle(index)}
                      />
                  ))}
              </div>
          </section>
      </main>
  );
}
