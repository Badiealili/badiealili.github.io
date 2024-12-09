import RobotCard from "./RobotCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function RobotCardSlider({ robotList }) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={"auto"}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
        >
            {robotList.map((item) => {
                return (
                    <SwiperSlide>
                        <RobotCard name={item.name} image={item.image} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
