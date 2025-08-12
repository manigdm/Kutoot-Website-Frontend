import { useState } from "react";
import "./ExclusiveCampaign.scss";
import Image from "next/image";
import LockButton from "../../../common/LockButton";

export function LotteryCard({
  title,
  worth,
  coinPrice,
  totalCoins,
  image,
  progress,
  gradient = "from-card to-card/80",
  hoverDirection = "static",
  cardIndex = 0,
  isFeatured = false,
  sponsorImage,
  minimumPurchaseImage,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getCardClasses = () => {
    let classes = "lottery-card";

    if (isFeatured) classes += " featured";
    if (isHovered) classes += " glow";

    if (hoverDirection === "static") {
      classes += " static";
    } else if (hoverDirection === "down") {
      classes += " expand-down origin-top";
    } else if (hoverDirection === "up") {
      classes += " expand-up origin-bottom";
    }

    return classes;
  };

  return (
    <div
      className={getCardClasses()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        zIndex: isHovered && hoverDirection !== "static" ? 50 : cardIndex,
        isolation: "isolate",
      }}
    >
      <div className="lottery-card-image-container">
        <img
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="lottery-card-image"
        />

        <div className="lottery-card-overlay" />

        <div className="lottery-card-price-badge">
          <img src={minimumPurchaseImage} width={100} height={100} />
        </div>

        <div className="lottery-card-title-section">
          {{sponsorImage} && (
            <div className="lottery-card-sponsor d-flex">
              <p className="lottery-card-sponsor-badge d-flex align-items-center">
                SPONSORED BY
              </p>
              <img src={sponsorImage} height={32} width={100} className="lottery-card-sponsor-image" />
            </div>
          )}
          <h3 className="lottery-card-title mt-2">{title}</h3>
          <p className="lottery-card-worth">{worth}</p>
        </div>

        {/* <div className="lottery-card-bottom">
          <div className="lottery-card-progress">
            <div className="lottery-card-progress-header">
              <span className="lottery-card-progress-label">
                Lucky Draw Countdown
              </span>
              <span className="lottery-card-progress-value">{progress}%</span>
            </div>
            <div className="lottery-card-progress-bar">
              <div
                className="lottery-card-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="lottery-card-bottom-row">
            <div className="lottery-card-coins">
              <Coins className="lottery-card-coins-icon" />
              <span className="lottery-card-coins-value">{totalCoins}</span>
              <span className="lottery-card-coins-label">Total Coins</span>
            </div>

            <div className="lottery-card-buttons">
              {(isFeatured || (isHovered && hoverDirection !== "static")) && (
                <button className="lottery-card-button primary">
                  Buy Coins •
                </button>
              )}
              <button className="lottery-card-button secondary">
                <CalendarDays className="lottery-card-button-icon" />
                Draw Date
              </button>
            </div>
          </div>
        </div> */}
        <div className="lottery-card-bottom">
          <div>
            <div className="d-flex gap-2 align-items-center">
              <span className="text-white">{progress}%</span>
              <div className="header__bar">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`bar-segment ${i < 6 ? "filled" : ""}`}
                  />
                ))}
              </div>
            </div>
            <p className="lucky-draw-countdown text-white">
              Lucky Draw Countdown
            </p>
          </div>
          <div className="lottery-coin">
            <Image src="/coin.png" width={80} height={80} />
            <p>{totalCoins}</p>
          </div>
          <LockButton tooltipText="Unlocks once the goal is reached" />
        </div>
      </div>

      <div className="lottery-card-float-1" />
      <div className="lottery-card-float-2" />
    </div>
  );
}
