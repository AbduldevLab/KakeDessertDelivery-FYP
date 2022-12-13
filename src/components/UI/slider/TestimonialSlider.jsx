import React from "react";
import Slider from "react-slick";

import s01 from "../../../assets/images/slider-1.jpg";
import s02 from "../../../assets/images/slider-2.jpg";
import s03 from "../../../assets/images/slider-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={s01} alt="avatar" className=" rounded" />
        </div>
      </div>
      <div>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={s02} alt="avatar" className=" rounded" />
        </div>
      </div>
      <div>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={s03} alt="avatar" className=" rounded" />
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
