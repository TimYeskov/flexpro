import { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef, useCallback } from "react";
import backVector from "../img/backVector.svg";
import nextVector from "../img/nextVector.svg";
import "../styles/app.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import React from "react";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";

const ProjectsSlider = () => {
  const swiperRef = useRef();

  const [activeSlider, setActiveSlider] = useState(0);
  const handleTabClick = (sliderIndex) => {
    setActiveSlider(sliderIndex);
    swiperRef.current.slideTo(sliderIndex); // Переход к выбранному слайду
  };

  // const loremClick = () => {
  //   handleTabClick("Lorem");
  //   handleTabSlider(0);
  // };
  // const commercialClick = () => {
  //   handleTabClick("Commercial");
  //   handleTabSlider(1);
  // };
  // const residentialClick = () => {
  //   handleTabClick("Residential");
  //   handleTabSlider(2);
  // };
  // const otherClick = () => {
  //   handleTabClick("Other");
  //   handleTabSlider(3);
  // };
  return (
    <>
      <h2>Projects</h2>
      <div className="projects__wrapper">
        <div className="projects__left">
          <h3
            className={activeSlider === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            Lorem1
          </h3>
          <h3
            className={activeSlider === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Commercial
          </h3>
          <h3
            className={activeSlider === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Residential
          </h3>
          <h3
            className={activeSlider === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            Other
          </h3>
        </div>
        <div className="projects__right">
          <div className="right__container">
            <Swiper
              //   autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              //   }}
              width={600}
              speed={1300}
              spaceBetween={700}
              modules={[Pagination, Navigation]}
              pagination={false}
              className="mySwiper"
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              activeIndex={activeSlider}
              onSlideChange={(swiper) => {
                setActiveSlider(swiper.activeIndex); // Обновление состояния активного слайдера при изменении
              }}
            >
              <SwiperSlide>
                <div className="container__1">
                  <div className="container__block">
                    <img src={project1} alt="project" />
                    <div className="block__text">
                      <h3>Lorem1 Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project2} alt="project" />
                    <div className="block__text">
                      <h3>Lorem1 Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                </div>
                <div className="container__2">
                  <div className="container__block">
                    <img src={project3} alt="project" />
                    <div className="block__text">
                      <h3>Lorem1 Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project4} alt="project" />
                    <div className="block__text">
                      <h3>Lorem1 Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jose, South Dakota</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container__1">
                  <div className="container__block">
                    <img src={project1} alt="project" />
                    <div className="block__text">
                      <h3>Commercial Infra Hotel</h3>
                      <h4>2715 Ash Dr. Sanjbbjbb Jose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project2} alt="project" />
                    <div className="block__text">
                      <h3>Commercial Infra Hotel</h3>
                      <h4>2715 Ash Dr. Sannnkn Jose, South Dakota</h4>
                    </div>
                  </div>
                </div>
                <div className="container__2">
                  <div className="container__block">
                    <img src={project3} alt="project" />
                    <div className="block__text">
                      <h3>Commercial Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jnkknknose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project4} alt="project" />
                    <div className="block__text">
                      <h3>Commercial Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Joknknse, South Dakota</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container__1">
                  <div className="container__block">
                    <img src={project1} alt="project" />
                    <div className="block__text">
                      <h3>Residental Infra Hotel</h3>
                      <h4>2715 Ash Dr. Sanjbbjbb Jose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project2} alt="project" />
                    <div className="block__text">
                      <h3>Residental Infra Hotel</h3>
                      <h4>2715 Ash Dr. Sannnkn Jose, South Dakota</h4>
                    </div>
                  </div>
                </div>
                <div className="container__2">
                  <div className="container__block">
                    <img src={project3} alt="project" />
                    <div className="block__text">
                      <h3>Residental Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jnkknknose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project4} alt="project" />
                    <div className="block__text">
                      <h3>Residental Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Joknknse, South Dakota</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container__1">
                  <div className="container__block">
                    <img src={project1} alt="project" />
                    <div className="block__text">
                      <h3>Other Infra Hotel</h3>
                      <h4>2715 Ash Dr. Sanjbbjbb Jose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project2} alt="project" />
                    <div className="block__text">
                      <h3>Other Infra Hotel</h3>
                      <h4>2715 Ash Dr. Sannnkn Jose, South Dakota</h4>
                    </div>
                  </div>
                </div>
                <div className="container__2">
                  <div className="container__block">
                    <img src={project3} alt="project" />
                    <div className="block__text">
                      <h3>Other Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Jnkknknose, South Dakota</h4>
                    </div>
                  </div>
                  <div className="container__block">
                    <img src={project4} alt="project" />
                    <div className="block__text">
                      <h3>Other Infra Hotel</h3>
                      <h4>2715 Ash Dr. San Joknknse, South Dakota</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="right__buttons">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <img src={backVector} />
              <h4>Back</h4>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <h4>Next</h4>
              <img src={nextVector} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSlider;
