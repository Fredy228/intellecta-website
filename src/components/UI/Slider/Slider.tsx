import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

export const Slider = () => {
    return (
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            effect={"fade"}
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};