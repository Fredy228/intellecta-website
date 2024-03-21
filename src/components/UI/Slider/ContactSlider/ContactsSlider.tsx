import {type FC} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "../Slider/custom-style-swiper.module.scss";
import styles from "../Slider/slider.module.scss";
//list
import {slideHome, TSlideProps} from "../list";



export const ContactsSlider: FC = () => {
    const paginationTexts: string[] = ["","Нові можливості", "Нові заклади", "Огляд додатку"];
    return (
        <div className={styles.adSlider_innerGrid}>
            <div className={styles.adSlider_carouselWrap}>
                <Swiper
                    slidesPerView={1}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: function (index: number, className: string) {
                            index+=1
                            return `<span class="${className}">
                                  ${"0" + index}  ${paginationTexts[index]}
                                </span>`;
                        },
                    }}
                    modules={[Pagination]}
                    spaceBetween={20}
                    className={styles.adSlider}
                >
                    {slideHome.map((slide: TSlideProps) => (
                        <SwiperSlide key={slide.id}>
                            <div className={styles.adSlider_item}>
                                <img className={styles.adSlider_image} src={slide.image} alt={slide.image}/>
                                <div>{slide.image}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className={`swiper-pagination `}/>
                </Swiper>
            </div>
        </div>
    );
};
