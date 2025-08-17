import { LotteryCard } from "./LotteryCard";
import "./ExclusiveCampaign.scss";
import { FaArrowRight } from "react-icons/fa";

const lotteryData = [
  {
    title: "Suzuki Hayabusa",
    worth: "Worth ₹20 Lakhs",
    coinPrice: 400,
    totalCoins: 1600,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80",
    progress: 65,
    gradient: "from-blue-900/20 to-blue-800/40",
    sponsorImage: "/sponsorImage.png",
    minimumPurchaseImage: "/minimum_purchase.png",
  },
  {
    title: "Buildiko Springwoods Designer Villa",
    worth: "Worth ₹5 Crore",
    coinPrice: 400,
    totalCoins: 1600,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80",
    progress: 65,
    gradient: "from-green-900/20 to-emerald-800/40",
    isFeatured: true,
    sponsorImage: "/sponsorImage.png",
    minimumPurchaseImage: "/minimum_purchase.png",
  },
  {
    title: "Jaguar F-Pace",
    worth: "Worth ₹1.10 Crores",
    coinPrice: 400,
    totalCoins: 1600,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80",
    progress: 65,
    gradient: "from-slate-900/20 to-gray-800/40",
    sponsorImage: "/sponsorImage.png",
    minimumPurchaseImage: "/minimum_purchase.png",
  },
  {
    title: "Luxury Maldives Trip",
    worth: "Worth ₹8 Lakhs",
    coinPrice: 400,
    totalCoins: 1600,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80",
    progress: 65,
    gradient: "from-cyan-900/20 to-teal-800/40",
    sponsorImage: "/sponsorImage.png",
    minimumPurchaseImage: "/minimum_purchase.png",
  },
  {
    title: "Gold Jewelry",
    worth: "Worth ₹12 Lakhs",
    coinPrice: 400,
    totalCoins: 1600,
    image:
      "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?q=80",
    progress: 65,
    gradient: "from-yellow-900/20 to-amber-800/40",
    sponsorImage: "/sponsorImage.png",
    minimumPurchaseImage: "/minimum_purchase.png",
  },
];

export function ExclusiveCampaign({campaigns}) {
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
            <div className="card-wrapper">
              <LotteryCard
                // {...lotteryData[0]}
                title={campaigns[0]?.title}
                worth={campaigns[0]?.tag1}
                coinPrice={campaigns[0]?.ticket_price}
                totalCoins={campaigns[0]?.coins_per_campaign}
                image={campaigns[0]?.img ?? "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80"}
                progress={campaigns[0]?.progress}
                gradient='from-cyan-900/20 to-teal-800/40'
                sponsorImage="/sponsorImage.png"
                minimumPurchaseImage="/minimum_purchase.png"
                hoverDirection="down"
                cardIndex={1}
              />
            </div>
            <div className="card-wrapper">
              <LotteryCard
                // {...lotteryData[1]}
                    title={campaigns[1]?.title}
                worth={campaigns[1]?.tag1}
                coinPrice={campaigns[1]?.ticket_price}
                totalCoins={campaigns[1]?.coins_per_campaign}
                image={campaigns[1]?.img ?? "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80"}
                progress={campaigns[1]?.progress}
                gradient='from-cyan-900/20 to-teal-800/40'
                sponsorImage="/sponsorImage.png"
                minimumPurchaseImage="/minimum_purchase.png"
                hoverDirection="up"
                cardIndex={2}
              />
            </div>
          </div>

          {/* Center Column: Featured */}
          <div className="lottery-column middle-column">
            <LotteryCard
              // {...lotteryData[2]}
                  title={campaigns[2]?.title}
                worth={campaigns[2]?.tag1}
                coinPrice={campaigns[2]?.ticket_price}
                totalCoins={campaigns[2]?.coins_per_campaign}
                image={campaigns[2]?.img ?? "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80"}
                progress={campaigns[2]?.progress}
                gradient='from-cyan-900/20 to-teal-800/40'
                sponsorImage="/sponsorImage.png"
                minimumPurchaseImage="/minimum_purchase.png"
              hoverDirection="static"
              cardIndex={3}
            />
          </div>

          {/* Right Column: 2 stacked cards */}
          <div className="lottery-column">
            <div className="card-wrapper">
              <LotteryCard
                // {...lotteryData[3]}
                title={campaigns[3]?.title}
                worth={campaigns[3]?.tag1}
                coinPrice={campaigns[3]?.ticket_price}
                totalCoins={campaigns[3]?.coins_per_campaign}
                image={campaigns[3]?.img ?? "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80"}
                progress={campaigns[3]?.progress}
                gradient='from-cyan-900/20 to-teal-800/40'
                sponsorImage="/sponsorImage.png"
                minimumPurchaseImage="/minimum_purchase.png"
                hoverDirection="down"
                cardIndex={4}
              />
            </div>
            <div className="card-wrapper">
              <LotteryCard
                // {...lotteryData[4]}
                title={campaigns[12]?.title}
                worth={campaigns[12]?.tag1}
                coinPrice={campaigns[12]?.ticket_price}
                totalCoins={campaigns[12]?.coins_per_campaign}
                image={campaigns[12]?.img ?? "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?q=80"}
                progress={campaigns[12]?.progress}
                gradient='from-cyan-900/20 to-teal-800/40'
                sponsorImage="/sponsorImage.png"
                minimumPurchaseImage="/minimum_purchase.png"
                hoverDirection="up"
                cardIndex={5}
              />
            </div>
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
