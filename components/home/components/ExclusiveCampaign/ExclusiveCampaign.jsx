import { LotteryCard } from "./LotteryCard";
import "./ExclusiveCampaign.scss";
import { FaArrowRight } from "react-icons/fa";

export function ExclusiveCampaign({ campaigns }) {
  if (!campaigns || campaigns.length === 0) {
    return <div>No campaigns available</div>;
  }

  const leftColumn = campaigns.slice(0, 2);
  const middleColumn = campaigns.slice(2, 3);
  const rightColumn = campaigns.slice(3, 5);
  console.log("left column", leftColumn);
  console.log("middle column", middleColumn);

  return (
    <div className="lottery-cards-container">
      <div className="lottery-cards-wrapper">
        {/* Header */}
        <div className="lottery-cards-header">
          <h2 className="lottery-cards-title">
            Exclusive Campaigns. Real Rewards.
          </h2>
          <p className="lottery-cards-subtitle mt-2">
            Deals You Want. Rewards You Deserve. Coins Make It Happen.
          </p>
        </div>

        {/* ✅ 3-column Layout */}
        <div className="lottery-cards-columns">
          {/* Left Column: 2 stacked cards */}
          <div className="lottery-column">
            {leftColumn.map((c, index) => (
              <div className="card-wrapper" key={c.id || `left-${index}`}>
                {c?.baseplans?.slice(0, 1).map((bp, bpIndex) => (
                  <LotteryCard
                    key={`${c.id || index}-bp-${bpIndex}`}
                    title={c?.title}
                    worth={c?.tag1}
                    coinPrice={c?.ticket_price}
                    totalCoins={bp?.coins_per_campaign}
                    image={
                      c?.img ??
                      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80"
                    }
                    progress={c?.marketing_start_percent}
                    gradient="from-cyan-900/20 to-teal-800/40"
                    sponsorImage="/sponsorImage.png"
                    minimumPurchaseImage="/minimum_purchase.png"
                    hoverDirection={index % 2 === 0 ? "down" : "up"}
                    cardIndex={index + 1}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Center Column: Featured */}
          <div className="lottery-column middle-column">
            {middleColumn.map((c, index) => (
              <div>
                {c?.baseplans?.slice(0, 1).map((bp, bpIndex) => (
                  <LotteryCard
                    key={c.id || `middle-${index}`}
                    title={c?.title}
                    worth={c?.tag1}
                    coinPrice={c?.ticket_price}
                    totalCoins={bp?.coins_per_campaign}
                    image={
                      c?.img ??
                      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80"
                    }
                    progress={c?.marketing_start_percent}
                    gradient="from-cyan-900/20 to-teal-800/40"
                    sponsorImage="/sponsorImage.png"
                    minimumPurchaseImage="/minimum_purchase.png"
                    hoverDirection="static"
                    cardIndex={2 + index + 1}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Right Column: 2 stacked cards */}
          <div className="lottery-column">
            {rightColumn.map((c, index) => {
              const totalCoins =
                c?.baseplans?.[0]?.coins_per_campaign ?? c?.coins_per_campaign;

              return (
                <div className="card-wrapper" key={c.id || `right-${index}`}>
                  <LotteryCard
                    title={c?.title}
                    worth={c?.tag1}
                    coinPrice={c?.ticket_price}
                    totalCoins={totalCoins}
                    image={
                      c?.img ??
                      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80"
                    }
                    progress={c?.marketing_start_percent}
                    gradient="from-cyan-900/20 to-teal-800/40"
                    sponsorImage="/sponsorImage.png"
                    minimumPurchaseImage="/minimum_purchase.png"
                    hoverDirection={index % 2 === 0 ? "down" : "up"}
                    cardIndex={3 + index + 1}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="lottery-view-more-button">

          <a href="/campaign">
            <button className="lottery-cards__button">
              <FaArrowRight className="lottery-cards__button-icon" />
              View more
            </button>
          </a>
        </div>

        {/* Footer Info */}
        <div className="lottery-footer">
          <div className="lottery-footer-badge">
            <div className="lottery-footer-indicator" />
            <span className="lottery-footer-text">
              {/* All draws are conducted fairly and transparently */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
