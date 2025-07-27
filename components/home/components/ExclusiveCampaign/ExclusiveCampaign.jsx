import { LotteryCard } from "./LotteryCard";
import "./ExclusiveCampaign.scss";
import CommonTitle from "@/components/common/CommonTitle";

const lotteryData = [
  {
    title: "Suzuki Hayabusa",
    worth: "Worth ₹20 Lakhs",
    coinPrice: 400,
    totalCoins: 1600,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80",
    progress: 65,
    gradient: "from-blue-900/20 to-blue-800/40",
    sponsor: "Sargeetha",
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
    sponsor: "Sargeetha",
  },
  {
    title: "Jaguar F-Pace",
    worth: "Worth ₹1.10 Crores",
    coinPrice: 400,
    totalCoins: 1600,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80",
    progress: 65,
    gradient: "from-slate-900/20 to-gray-800/40",
    sponsor: "Sargeetha",
  },
  {
    title: "Luxury Maldives Trip",
    worth: "Worth ₹8 Lakhs",
    coinPrice: 400,
    totalCoins: 1600,
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80",
    progress: 65,
    gradient: "from-cyan-900/20 to-teal-800/40",
    sponsor: "Sargeetha",
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
    sponsor: "Sargeetha",
  },
];

export function ExclusiveCampaign() {
  return (
    <div className="lottery-cards-container">
      <div className="lottery-cards-wrapper">
        {/* Header */}
        <div className="lottery-cards-header">
          {/* <h1 className="lottery-cards-title">Premium Lottery</h1> */}
          <CommonTitle title="Exclusive Campaigns. Real Rewards." />
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
                {...lotteryData[0]}
                hoverDirection="down"
                cardIndex={1}
              />
            </div>
            <div className="card-wrapper">
              <LotteryCard
                {...lotteryData[1]}
                hoverDirection="up"
                cardIndex={2}
              />
            </div>
          </div>

          {/* Center Column: Featured */}
          <div className="lottery-column middle-column">
            <LotteryCard
              {...lotteryData[2]}
              hoverDirection="static"
              cardIndex={3}
            />
          </div>

          {/* Right Column: 2 stacked cards */}
          <div className="lottery-column">
            <div className="card-wrapper">
              <LotteryCard
                {...lotteryData[3]}
                hoverDirection="down"
                cardIndex={4}
              />
            </div>
            <div className="card-wrapper">
              <LotteryCard
                {...lotteryData[4]}
                hoverDirection="up"
                cardIndex={5}
              />
            </div>
          </div>
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
