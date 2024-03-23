import {type FC} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import style from "./custom-style-swiper.module.scss";
import styles from "./slider.module.scss";
//list
import {slideHome, TSlideProps} from "../list";

const paginationTexts = ["Для учнів", "Для викладачів", "Для адміністрації навчальних закладів"];

export const Slider: FC = () => {
    return (
        <div className={styles.adSlider_innerGrid}>
            <div className={styles.adSlider_carouselWrap}>
                <Swiper
                    slidesPerView={1}
                    pagination={{
                        el: `.${style["swiper-pagination"]}`,
                        clickable: true,
                        renderBullet: function (index: number, className: string) {
                            return `<span class="${className}">${paginationTexts[index]}</span>`;
                        },
                    }}
                    modules={[Pagination]}
                    spaceBetween={20}
                    className={styles.adSlider}
                >
                    {slideHome.map((slide:TSlideProps) => (
                        <SwiperSlide key={slide.id}>
                          <div className={styles.adSlider_item + (slide.reverse ? ` ${styles["--reversed"]}` : "")}>
                            <div className={styles.adSlider_content}>{slide.textElement}</div>
                            <img className={styles[`adSlider_image_${slide.id}`]} src={slide.image} alt={slide.image} />
                          </div>
                        </SwiperSlide>
                    ))}
                  <div className={`${style["swiper-pagination"]}`}/>
                </Swiper>
            </div>
        </div>
    );
};
