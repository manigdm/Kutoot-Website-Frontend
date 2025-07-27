import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./PromoSection.scss";
import { useHomePage } from "@/context/HomePageContext";
import theHindu from "/public/images/landingpage/the-hindu.png";
import indiaToday from "/public/images/landingpage/india-today.png";
import CommonButton from "@/components/common/CommonButton";
import CommonTitle from "@/components/common/CommonTitle";
import left_arrow from "/public/images/landingpage/left-arrow.png";
import right_arrow from "/public/images/landingpage/right-arrow.png";

const FEATURE_POINTS = [
  "4500+ sq. ft. | 4 Beds | 5 Baths",
  "Sky-lit living, Italian marble, modular kitchen",
  "Private lawn, smart home features",
  "Prime location near Wipro HQ & top schools",
];

const features = [
  {
    title: "Value for money",
    description:
      "All legal documentation is meticulously verified, offering a ready-to-move-in luxury residence. Alternatively, opt for the ₹4 Crore tax-free cash prize and instantly become a crorepati — with complete peace of mind.",
    icon: "/images/landingpage/value-for-money.png",
  },
  {
    title: "Prime Location",
    description:
      "Situated in the heart of Banashankari, the property enjoys excellent connectivity via metro and bus lines, along with proximity to premier shopping avenues, green parks, and lifestyle conveniences.",
    icon: "/images/landingpage/prime-location.png",
  },
  {
    title: "Fully Furnished",
    description:
      "Move in immediately to a tastefully designed, fully furnished home. Or choose the equivalent cash alternative and curate your ideal lifestyle on your terms, from day one.",
    icon: "/images/landingpage/fully-furnished.png",
  },
  {
    title: "Impactful Giving",
    description:
      "Celebrate your win with impact. Contribute a portion of your reward to our trusted charity partners directly at checkout. Empower communities while living your best life.",
    icon: "/images/landingpage/impactful-giving.png",
  },
];

const extractPropertyDetails = (str) => {
  if (!str) return null;

  const regex = /(\d+)\s*bedrooms.*?(\d+)\s*bathrooms.*?([\d,]+)\s*sqft/i;
  const matches = str.match(regex);

  return matches
    ? {
        bedrooms: parseInt(matches[1]),
        bathrooms: parseInt(matches[2]),
        sqft: parseInt(matches[3].replace(/,/g, "")),
      }
    : null;
};

const PromoSection = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const homepageData = useHomePage();

  const enterNow = () => {};

  const slides = homepageData?.data?.banner
    ? [homepageData.data.banner.image1, homepageData.data.banner.image2].filter(
        Boolean
      )
    : [];

  console.log("slides", slides);

  const propertyDescriptionMemoized = useMemo(() => {
    return {
      __html: homepageData?.data?.banner?.description || "",
    };
  }, [homepageData?.data?.banner?.description]);

  const propertyDescription = homepageData?.data?.banner?.description;

  const propertyDetails = useMemo(() => {
    return extractPropertyDetails(propertyDescription);
  }, [propertyDescription]);

  return (
    <div className="promo-section">
      <header className="promo-header">
        <CommonTitle title="Win the ₹5 Crore Buildiko Springwoods Designer Villa" />
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
            <div className="col-lg-8 relative">
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
                className="mySwiper rounded-20"
                navigation={{
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
                }}
              >
                {slides?.map((url, i) => (
                  <SwiperSlide key={i}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "450px",
                      }}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}` + url}
                        alt="slide"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="property-details-overlay d-flex gap-4">
                        <div className="d-flex justify-content-between align-items-center gap-2">
                          <img src="/images/landingpage/bed-room.png" alt="" />
                          <span className="text-white">{propertyDetails?.bedrooms} bedrooms</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center gap-2">
                          <img src="/images/landingpage/bath-room.png" alt="" />
                          <span className="text-white">{propertyDetails?.bathrooms} bathrooms</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center gap-2">
                          <img src="/images/landingpage/sqft.png" alt="" />
                          <span className="text-white">{propertyDetails?.sqft} sqft</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-4 text-left">
              <p className="tagline">
                {/* Live like royalty in Sarjapur Road's most luxurious estate. */}
                {homepageData?.data?.banner?.short_description}
              </p>

              <div className="features">
                <p className="features-title">Live in style with:</p>
                {/* <ul>
                  {FEATURE_POINTS.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul> */}
                <div
                  style={{ color: "#3B322B" }}
                  dangerouslySetInnerHTML={propertyDescriptionMemoized}
                />
                <p className="call-to-action">
                  Buy coins, enter the lucky draw, and this dream villa could be
                  yours.
                </p>
                <CommonButton label="Enter Now" onClick={enterNow} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="deadline-notice">
        <p>
          The earlier you buy, the luckier you get
          <div>– before July 30</div>
        </p>
      </footer>
      <div className="feature-cards">
        {features.map((item, index) => (
          <div
            key={index}
            className={`feature-card ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="feature-card__inner">
              <div className="feature-card__icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="feature-card__title">{item.title}</h3>
              {activeIndex === index && (
                <p className="feature-card__description">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;
