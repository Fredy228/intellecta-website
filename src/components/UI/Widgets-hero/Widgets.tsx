import { widgets, WidgetsProps, widgetsWork } from "./type";
import styles from "./widgetsHero.module.scss";
import { IconArrowWidgets } from "../../Icon/Icons";
export const Widgets = () => {
  return (
    <div className={styles.container}>
      {/*Top Widget*/}
      {widgets.map((item: WidgetsProps) => (
        <div className={styles.widget} key={item.id}>
          <h1 className={styles.widget__title}>{item.title}</h1>
          <p className={styles.widget__subtitle}>{item.subtitle}</p>
          <div className={styles.widget__bottom_wrapper}>
            {/*Bottom Widget*/}
            <div className={styles.widget__svg}>
              {item.svgArray?.map((svgItems) => (
                <span
                  key={svgItems.id}
                  className={styles.widget__svg_container}>
                  {svgItems.svgArr}
                </span>
              ))}
            </div>
            <div className={styles.widget__count}>{item.count}</div>
          </div>
        </div>
      ))}
      {widgetsWork.map((item) => (
        <div className={styles.wcontainer} key={item.id}>
          <div key={item.id} className={styles.widgets__seconds_inner}>
            <div className={styles.widgets__seconds_svg_container}>
              <span className={styles.widgets__seconds_svg__wrapper}>
                {item.svg}
              </span>
            </div>
            <div>
              <div className={styles.widgets__seconds_title}>{item.title}</div>
              <div className={styles.widgets__seconds_subtitle}>
                {item.subtitle}
              </div>
            </div>
            <IconArrowWidgets />
          </div>
        </div>
      ))}
    </div>
  );
};
