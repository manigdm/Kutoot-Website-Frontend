import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./LuckyDrawSlider.scss";
import CommonButton from "@/components/common/CommonButton";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    title: "Buildiko Springwoods Villa",
    worth: "₹5 Crore",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: true,
  },
  {
    title: "Jaguar F-Pace",
    worth: "₹1.1 Crore",
    image:
      "https://images.unsplash.com/photo-1713462714591-28a35a529b99?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: true,
  },
  {
    title: "Mahindra Thar ROXX",
    worth: "₹25 Lakh",
    image:
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: true,
  },
  {
    title: "Jaguar F-Pace",
    worth: "₹1.1 Crore",
    image:
      "https://images.unsplash.com/photo-1713462714591-28a35a529b99?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: true,
  },
  {
    title: "Buildiko Springwoods Villa",
    worth: "₹5 Crore",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: true,
  },
  {
    title: "Mahindra Thar ROXX",
    worth: "₹25 Lakh",
    image:
      "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: true,
  },
];

const LuckyDrawSlider = ({campaigns}) => {
  const enterNow = () => {};
const item= campaigns || {};
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
      >
        {item.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="draw-card"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="draw-card-content">
              <div className="top-label">
                <span>LUCKY DRAW COUNTDOWN</span>
                {/* <div className="progress">
                  <span>{item.progress}%</span>
                  <div className="bar">
                    <div
                      className="fill"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div> */}
                <div className="progress-bar">
                  <span>{item.progress}%</span>
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
              <div className="details">
                <h3>{item.title}</h3>
                <p className="text-white">worth {item.tag1}</p>
              </div>
              <div className="actions">
                <button
                  className={`draw-button ${item.locked ? "locked" : ""}`}
                >
                  {item.locked ? (
                    <IoLockClosedOutline className="lock-icon" />
                  ) : (
                    ""
                  )}{" "}
                  Draw Date
                </button>
                <button className="lucky-draw__button">
                  <FaArrowRight className="lucky-draw__button-icon" />
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LuckyDrawSlider;
