// PromoSection.jsx
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PromoSection.scss";

import theHindu from "/public/images/landingpage/the-hindu.png";
import indiaToday from "/public/images/landingpage/india-today.png";
import valueForMoney from "/public/images/landingpage/value-for-money.png";
import primeLocation from "/public/images/landingpage/prime-location.png";
import fullyFurnished from "/public/images/landingpage/fully-furnished.png";
import impactfulGiving from "/public/images/landingpage/impactful-giving.png";
import CommonButton from "@/components/common/CommonButton";
import left_arrow from "/public/images/landingpage/left-arrow.png";
import right_arrow from "/public/images/landingpage/right-arrow.png";

const SLIDES = Array(9).fill(
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0"
);

const FEATURE_POINTS = [
  "4500+ sq. ft. | 4 Beds | 5 Baths",
  "Sky-lit living, Italian marble, modular kitchen",
  "Private lawn, smart home features",
  "Prime location near Wipro HQ & top schools",
];

const BENEFITS = [
  {
    title: "Value for money",
    text: `All legal documentation is meticulously verified, offering a ready-to-move-in luxury residence. Alternatively, opt for the $4 crore tax-free cash price and instantly become a crorepati – with complete peace of mind.`,
    img: valueForMoney,
  },
  {
    title: "Prime location",
    text: `Situated in the heart of Bangalore, the property enjoys excellent connectivity via major highways and metro lines, along with proximity to premier shopping avenues, green parks, and lifestyle conveniences.`,
    img: primeLocation,
  },
  {
    title: "Fully furnished",
    text: `Move in immediately to a tastefully designed, fully furnished home. Or choose the equivalent cash alternative and curate your ideal lifestyle on your terms, from day one.`,
    img: fullyFurnished,
  },
  {
    title: "Impactful giving",
    text: `Celebrate your win with impact. Contribute a portion of your reward to our trusted charity partner directly at checkout. Empower communities while living your best life.`,
    img: impactfulGiving,
  },
];

const PromoSection = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const enterNow = () => {
    //
  };

  return (
    <div className="promo-section">
      <header className="promo-header">
        <h1 className="pt-5">Win the 5 Crore Buildiko Springwoods Designer Villa</h1>
        <div className="featured-in">
          <span>As featured in</span>
          <div className="publications">
            {[theHindu, indiaToday].map((src, i) => (
              <div className="mt-2" key={i}>
                <Image src={src} alt="publication-logo" />
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="promo-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 relative">
              <div
                className={`custom-swiper-button-prev ${
                  isBeginning ? "disabled-cursor" : ""
                }`}
              >
                <Image src={left_arrow} alt="Left" />
              </div>
              <div
                className={`custom-swiper-button-next ${
                  isEnd ? "disabled-cursor" : ""
                }`}
              >
                <Image src={right_arrow} alt="Right" />
              </div>
              <Swiper
                // navigation
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                className="mySwiper"
                navigation={{
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
                }}
              >
                {SLIDES.map((url, i) => (
                  <SwiperSlide key={i}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "450px",
                      }}
                    >
                      <Image
                        src={url}
                        alt="slide"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4 text-left">
              <p className="tagline">
                Live like royalty in Sarjapur Road's most luxurious estate.
              </p>
              <p className="call-to-action">
                Buy coins, enter the lucky draw, and this dream villa could be
                yours.
              </p>

              <div className="features">
                <p className="features-title">Live in style with:</p>
                <ul>
                  {FEATURE_POINTS.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <CommonButton label="Enter Now" onClick={enterNow} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="deadline-notice">
        <p>The earlier you buy, the luckier you get – before June 30</p>
      </footer>

      <section className="benefits-grid">
        {BENEFITS.map((b, i) => (
          <div className="benefit-card" key={i}>
            <Image src={b.img} alt={b.title} width={50} height={50} />
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PromoSection;
