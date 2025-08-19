import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./LuckyDrawSlider.scss";
import CommonButton from "@/components/common/CommonButton";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const LuckyDrawSlider = ({ campaigns }) => {
  console.log("sjghbiebge v", campaigns)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const enterNow = () => { };
  const item = campaigns || [];
  // console.log('Item Data:', item);
  return (
    <div className="lucky-draw-slider">
      <div className="custom-swiper-button-prev">‹</div>
      <div className="custom-swiper-button-next">›</div>
      <Swiper
  modules={[Navigation]}
  spaceBetween={24}
  slidesPerView={3}
  navigation={{
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  }}
  loop
  pagination={{ clickable: true }}
  className="lucky-draw-slider__swiper"
>
  {item.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="draw-card" onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)} >
        {/* IMAGE CONTAINER */}
        <div
          className="draw-card-image"
          style={{ backgroundImage: `url(${item.img})` }}
        />

        <div className="draw-card-content">
          <div className="top-label">
            <span>LUCKY DRAW COUNTDOWN</span>
            <div className="progress-bar">
              <span>{item.display_percentage}%</span>
              <div className="header__bar">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`bar-segment ${i < 6 ? "filled" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="details"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              borderRadius: "2px",
              background: "rgba(96, 94, 105, 0.3)",
              backdropFilter: "blur(12.5px)",
              WebkitBackdropFilter: "blur(12.5px)",
              padding: "8px 12px",
              color: "white",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {hoveredIndex === index ? `NEXT DRAW:${item.winner_announcement_date}` : item.title}
            </h3>
            <p
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "16px",
              }}
            >
             {hoveredIndex === index ? `` : item.tag1}
            </p>
          </div>

          <div className="actions">
            <button className={`draw-button ${item.locked ? "locked" : ""}`}>
              Draw Date
            </button>
         


                <a href="/campaign" >
                         <button className="lucky-draw__button">
              <FaArrowRight className="lucky-draw__button-icon" />
              Buy Now
            </button>
                      </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default LuckyDrawSlider;
