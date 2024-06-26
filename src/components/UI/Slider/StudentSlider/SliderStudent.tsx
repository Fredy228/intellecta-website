import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import style from "./student-pagination.module.scss";
import styles from "../role-slider.module.scss";
import { slideStudents, TSlideProps2 } from "../list";

export const SliderStudents: FC = () => {
  const paginationTexts: string[] = [
    "Головна",
    "Розклад",
    "Завдання",
    "Чати",
    "Оцінки",
    "Профіль",
  ];
  return (
    <div className={styles.adSlider_innerGrid}>
      <div className={styles.adSlider_carouselWrap}>
        <Swiper
          slidesPerView={1}
          pagination={{
            el: `.${style["swiper-pagination"]}`,
            clickable: true,
            bulletClass: `${style["swiper-bullet-custom"]}`,
            bulletActiveClass: `${style["swiper-bullet-custom-active"]}`,
            renderBullet: function (index: number, className: string) {
              return `<span class="${className}">${paginationTexts[index]}</span>`;
            },
          }}
          modules={[Pagination]}
          spaceBetween={20}
          className={styles.adSlider}
        >
          {slideStudents.map((slide: TSlideProps2) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.adSlider_item}>
                <img
                  className={styles.adSlider_image}
                  src={slide.image}
                  alt={slide.image}
                />
                <div>{slide.image}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style["swiper-pagination-wrap"]}>
          <div className={style["swiper-pagination"]} />
        </div>
      </div>
    </div>
  );
};
