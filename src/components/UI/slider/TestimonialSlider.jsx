// Description: Slider for testimonials
import React from "react";
//This is used to import the reactstrap components
import Slider from "react-slick";

import s01 from "../../../assets/images/slider-1.jpg";
import s02 from "../../../assets/images/slider-2.jpg";
import s03 from "../../../assets/images/slider-3.jpg";

import "../../../styles/slider.css";

//This is the TestimonialSlider component
const TestimonialSlider = () => {
  //This is used to set the slider settings
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
  //This is used to display the slider
  return (
    //This is used to display the slider
    <Slider {...settings}>
      <div>
        <div className="slider__content d-flex align-items-center gap-3">
          {/* //This is used to display the slider */}
          <img src={s01} alt="avatar" className="w-100" style={{ objectFit: 'cover', borderRadius: '8px!important' }} />
        </div>
      </div>
      <div>
        <div className="slider__content d-flex align-items-center gap-3">
          {/* //This is used to display the slider */}
          <img src={s02} alt="avatar" className="w-100" style={{ objectFit: 'cover', borderRadius: '8px!important' }} />
        </div>
      </div>
      <div>
        <div className="slider__content d-flex align-items-center gap-3">
          {/* //This is used to display the slider */}
          <img src={s03} alt="avatar" className="w-100" style={{ objectFit: 'cover', borderRadius: '8px!important' }} />
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
