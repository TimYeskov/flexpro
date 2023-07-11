import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles/app.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import brand1 from "../img/brand1.png";
import brand2 from "../img/brand2.png";
import brand3 from "../img/brand3.png";
import brand4 from "../img/brand4.png";
import brand5 from "../img/brand5.png";
import brand6 from "../img/brand6.png";
import brand7 from "../img/brand7.png";

const BrendSlider = () => {
  return (
    <section className="brand">
      <div className="container">
        <h2>Our Brands</h2>
        <h3>We have been working with some Fortune 500+ clients</h3>
      </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={100}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={brand1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BrendSlider;
