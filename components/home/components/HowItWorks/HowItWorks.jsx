import "./HowItWorks.scss";
import React from "react";
import Image from "next/image";
import CommonButton from "@/components/common/CommonButton";

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
    title: "Shop & Sav",
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
  return (
    <div className="how-it-works-container">
      <h2 className="section-title">How Kutoot works</h2>
      <div className="steps-wrapper">
        {stepsData.map((step, index) => (
          <div className="step-card" key={step.number}>
            <div className="step-header">
              <Image
                src={step.numberImage}
                alt={`Step ${step.number}`}
                width={70}
                height={70}
                className="step-number-img"
              />
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>

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
      <CommonButton label="Enter Now" />
    </div>
  );
};

export default HowItWorks;
