import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef, useCallback } from "react";
import "../styles/app.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import backVector from "../img/backVector.svg";
import nextVector from "../img/nextVector.svg";
import React from "react";
const BannerSlider = () => {
  const swiperRef = useRef();

  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="block">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1300}
              spaceBetween={200}
              pagination={false}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide>
                <h1>Building things is our mission.</h1>
                <div className="slider__projects">
                  <h3>Feature Projects</h3>
                  <h4>The National University of Architecture</h4>
                  <div className="buttons">
                    <button>
                      <img src={backVector} />
                      <span> Back</span>
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()}>
                      <span> Next </span>
                      <img src={nextVector} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h1>Building mission in my Life</h1>
                <div className="slider__projects">
                  <h3>Feature Projects</h3>
                  <h4>The National University of Lorem</h4>
                  <div className="buttons">
                    <button onClick={() => swiperRef.current?.slidePrev()}>
                      <img src={backVector} />
                      <span> Back</span>
                    </button>
                    <button>
                      <span> Next </span>

                      <img src={nextVector} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
