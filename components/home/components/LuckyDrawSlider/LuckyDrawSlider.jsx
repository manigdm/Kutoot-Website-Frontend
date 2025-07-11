import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./LuckyDrawSlider.scss";
import CommonButton from "@/components/common/CommonButton";

const data = [
  {
    title: "Buildiko Springwoods Villa",
    worth: "₹5 Crore",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: false,
  },
  {
    title: "Jaguar F-Pace",
    worth: "₹1.1 Crore",
    image:
      "https://images.unsplash.com/photo-1713462714591-28a35a529b99?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: false,
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
    locked: false,
  },
  {
    title: "Buildiko Springwoods Villa",
    worth: "₹5 Crore",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    progress: 65,
    locked: false,
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

const LuckyDrawSlider = () => {
  const enterNow = () => {};

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
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="draw-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="top-label">
                <span>LUCKY DRAW COUNTDOWN</span>
                <div className="progress">
                  <span>{item.progress}%</span>
                  <div className="bar">
                    <div
                      className="fill"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="details">
                <h3>{item.title}</h3>
                <p>worth {item.worth}</p>
              </div>

              <div className="actions">
                <button
                  className={`draw-button ${item.locked ? "locked" : ""}`}
                >
                  {item.locked ? "🔒" : ""} Draw Date
                </button>
                <CommonButton label="Buy Now" onClick={enterNow} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LuckyDrawSlider;
