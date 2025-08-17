import "./HowItWorks.scss";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const stepsData = [
  {
    number: "1",
    numberImage: "/images/landingpage/number-1.png",
    title: "Buy Coins",
    description: "Get coins via one-time or monthly plans.",
  },
  {
    number: "2",
    numberImage: "/images/landingpage/number-2.png",
    title: "Win Big",
    description: "Use Lucky Draw Coupons to win villas, cars & more.",
  },
  {
    number: "3",
    numberImage: "/images/landingpage/number-3.png",
    title: "Shop & Save",
    description: "Redeem coins for exclusive shopping discounts.",
  },
  {
    number: "4",
    numberImage: "/images/landingpage/number-4.png",
    title: "Give Back",
    description: "5% of proceeds go to verified charities.",
  },
];

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="how-it-works-container" id="how-kutoot-works">
      <h2 className="section-title capitalize">How Kutoot Works</h2>
      <div className="steps-wrapper">
        {stepsData.map((step, index) => (
          <div
            className="step-card"
            key={step.number}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ position: "relative" }}
          >
            <div className="step-header">
              <img
                src={step.numberImage}
                alt={`Step ${step.number}`}
                width={70}
                height={70}
                className="step-number-img"
              />
            </div>
            <div style={{ position: "relative", zIndex: 2 }}>
    <h3 className="step-title">{step.title}</h3>
    <p className="step-description">{step.description}</p>
  </div>


            {/* Hover GIF overlay */}
            {hoveredIndex === index && (
               <img
      src="/images/Coins-Floating.gif"
      alt="Coin Animation"
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: "100px",
        height: "100px",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        zIndex: 1, // below text but above card background
      }}
    />
            )}

            {/* Show arrow only if not last card */}
            {index < stepsData.length - 1 && (
              <img
                src="/images/landingpage/arrow-next.png"
                alt="Arrow"
                className={`step-arrow arrow-${index}`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="how-it-works__button-wrapper">
        <Link href="/campaign" passHref>
          <button className="how-it-works__button">
            <FaArrowRight className="how-it-works__button-icon" />
            Enter Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
