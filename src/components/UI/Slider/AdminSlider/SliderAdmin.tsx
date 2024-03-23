import {type FC} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import style from "./admin-pagination.module.scss";
import styles from "./admin-slider.module.scss";
import {slideAdmins, TSlideProps} from "../list";

export const SliderAdmin: FC = () => {
    const paginationTexts: string[] = ["Головна","Розклад", "Завдання", "Чати","Оцінки","Профіль"];
    return (
        <div className={styles.adSlider_innerGrid}>
            <div className={styles.adSlider_carouselWrap}>
                <Swiper
                    slidesPerView={1}
                    pagination={{
                        el: `.${style['swiper-pagination']}`,
                        clickable: true,
                        renderBullet: function (index: number, className: string) {
                            return `<span class="${className}">${paginationTexts[index]}</span>`;
                        },
                    }}
                    modules={[Pagination]}
                    spaceBetween={20}
                    className={styles.adSlider}
                >
                    {slideAdmins.map((slide: TSlideProps) => (
                        <SwiperSlide key={slide.id}>
                            <div className={styles.adSlider_item}>
                                <img className={styles.adSlider_image} src={slide.image} alt={slide.image}/>
                                <div>{slide.image}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                  <div className={style['swiper-pagination-wrap']}>
                    <div className={style['swiper-pagination']}/>
                  </div>
                </Swiper>
            </div>
        </div>
    );
};
