"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import "./PartnersSection.scss";

const PartnerCarousel = ({ title, backgroundColor, partnerLogos, reverse }) => {
  return (
    <section className="partners-section" style={{ backgroundColor }}>
      <div className="partners-wrapper">
        <h2 className="partners-heading">{title}</h2>
        <div className="carousel-container">
          <Swiper
            slidesPerView={4.2}
            spaceBetween={32}
            loop={true}
            speed={5000} // higher speed = smoother continuous scroll
            autoplay={{
              delay: 0, // 👈 continuous autoplay (no waiting)
              disableOnInteraction: false,
              reverseDirection: reverse, // left-to-right or right-to-left
            }}
            freeMode={true} // 👈 enables continuous "marquee" effect
            freeModeMomentum={false} // 👈 prevents sudden stopping
            grabCursor={true}
            modules={[Autoplay, FreeMode]}
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="partner-logo">
                  <img
                    src={logo}
                    alt={`partner-logo-${index}`}
                    width={150}
                    height={80}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// Mock partner data
const partners = [
  "/images/landingpage/thaagam_foundation.png",
  "/images/landingpage/narayana_health.png",
  "/images/landingpage/narayana_netralaya.png",
  "/images/landingpage/toi.png",
  "/images/landingpage/the_hindu.png",
   "/images/landingpage/thaagam_foundation.png",
  "/images/landingpage/narayana_health.png",
  "/images/landingpage/narayana_netralaya.png",
  "/images/landingpage/toi.png",
  "/images/landingpage/the_hindu.png",
];

const charityPartners = [
  "/images/landingpage/thaagam_foundation.png",
  "/images/landingpage/narayana_health.png",
  "/images/landingpage/narayana_netralaya.png",
  "/images/landingpage/toi.png",
  "/images/landingpage/the_hindu.png",
   "/images/landingpage/thaagam_foundation.png",
  "/images/landingpage/narayana_health.png",
  "/images/landingpage/narayana_netralaya.png",
  "/images/landingpage/toi.png",
  "/images/landingpage/the_hindu.png",
];

const PartnersSection = () => {
  return (
 <div
  className="partners-container"
  id="charity-partners"
  style={{ scrollMarginTop: "100px" }}
>
  {/* 👈 left → right */}
  <PartnerCarousel
    title="Our Partners"
    backgroundColor="#b5233e"
    partnerLogos={partners}
    reverse={false}
  />

  {/* 👈 right → left */}
  <PartnerCarousel
    title="Our Charity Partners"
    backgroundColor="#362f2a"
    partnerLogos={charityPartners}
    reverse={true}
  />
</div>

  );
};

export default PartnersSection;
