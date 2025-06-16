"use client"
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import contest_b1 from "/public/images/contest/b1.png";
import contest_s1 from "/public/images/contest/s1.png";

import "slick-carousel/slick/slick.css";

const NextBtn = ({ onClick }) => {
  return (
    <button type="button" className="slick-arrow prev" onClick={onClick}>
      <i className="las la-angle-left"></i>
    </button>
  );
};

const PrevBtn = ({ onClick }) => {
  return (
    <button type="button" className="slick-arrow next" onClick={onClick}>
      <i className="las la-angle-right"></i>
    </button>
  );
};

const ContestSlider = ({campaignData}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log('campaignData--->', campaignData)

  return (
    <div className="contest-cart__left">
      <div className="contest-cart__slider-area">
        <Slider
          asNavFor={nav2}
          arrows={false}
          ref={(slider1) => setNav1(slider1)}
          className="contest-cart__thumb-slider max-h-400"
        >
          <div style={{ minWidth: '700px' }}>
            <Image src={campaignData?.img} alt={campaignData.title} width={700} height={400} />
          </div>
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          {...settings}
          className="contest-cart__nav-slider"
        >
          {[].map((itm) => (
            <div key={itm} className="single">
              <div className="single-slide">
                <Image src={contest_s1} alt="image" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ContestSlider;
