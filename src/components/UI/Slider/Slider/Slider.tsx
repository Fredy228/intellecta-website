import { type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import style from "./custom-style-swiper.module.scss";
import styles from "./slider.module.scss";

import { slideHome, TSlideProps } from "../list";

export const Slider: FC = () => {
  const paginationTexts = [
    "Для учнів",
    "Для викладачів",
    "Для адміністрації навчальних закладів",
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
          {slideHome.map((slide: TSlideProps) => (
            <SwiperSlide key={slide.id}>{slide.textElement}</SwiperSlide>
          ))}
          <div className={`${style["swiper-pagination"]}`}></div>
        </Swiper>
      </div>
    </div>
  );
};
