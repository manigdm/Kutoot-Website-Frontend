import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import "./PartnersSection.scss";

const PartnerCarousel = ({ title, backgroundColor, partnerLogos }) => {
  return (
    <section className="partners-section" style={{ backgroundColor }}>
      <div className="partners-wrapper">
        <h2 className="partners-heading">{title}</h2>
        <div className="carousel-container">
          <Swiper
            slidesPerView={4.2}
            spaceBetween={32}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={{ enabled: true }}
            grabCursor={true}
            modules={[Autoplay, FreeMode]}
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="partner-logo">
                  <Image
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

// ✅ Use public path references (DON'T use imports for next/image here)
const partners = [
  "/images/landingpage/thaagam_foundation.png",
  "/images/landingpage/narayana_health.png",
  "/images/landingpage/narayana_netralaya.png",
  "/images/landingpage/toi.png",
  "/images/landingpage/the_hindu.png",
];

const PartnersSection = () => {
  return (
    <div className="partners-container">
      <PartnerCarousel
        title="Our Charity Partners"
        backgroundColor="#362f2a"
        partnerLogos={partners}
      />
      <PartnerCarousel
        title="Our Partners"
        backgroundColor="#b5233e"
        partnerLogos={partners}
      />
    </div>
  );
};

export default PartnersSection;
