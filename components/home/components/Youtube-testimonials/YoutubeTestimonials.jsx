import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./YouTubeCarousel.scss";
import CommonTitle from "@/components/common/CommonTitle";
import CommonButton from "@/components/common/CommonButton";

const VideoModal = ({ youtubeId, onClose }) => {
  if (!youtubeId) return null;

  return (
    <div className="video-modal">
      <div className="video-modal__overlay" onClick={onClose} />
      <div className="video-modal__content">
        <button className="video-modal__close" onClick={onClose}>
          ×
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const WinnerCard = ({ winner, isActive, onClick }) => (
  <div className="winner-card group cursor-pointer" onClick={onClick}>
    <img
      src={`https://img.youtube.com/vi/${winner.youtubeId}/maxresdefault.jpg`}
      alt={winner.prize}
      className="winner-card__bg group-hover:scale-110"
      onError={(e) =>
        (e.target.src = "https://placehold.co/800x600/333/FFF?text=Image+Error")
      }
    />
    <div className="winner-card__overlay" />
    <div className="winner-card__play">
      <img src="/images/landingpage/youtube.png" alt="YouTube Logo" />
    </div>
  </div>
);

const WinnerCardFooter = ({ winner }) => (
  <div className="winner-card__footer">
    <div className="winner-card__info">
      <span className="winner-card__badge">GRAND PRIZE</span>
      <h3 className="winner-card__title">{winner.prize}</h3>
      <p className="winner-card__value">TOP DRAW: {winner.value}</p>
    </div>
    <div
      className="winner-card__user"
      style={{
        backgroundImage: `url(${winner.winnerImage || "https://placehold.co/100x100/ccc/FFF?text=User"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <p className="winner-card__user-label">WINNER</p>
        <p className="winner-card__user-name">{winner.winnerName}</p>
      </div>
    </div>
  </div>
);

const winnersData = [
  {
    prize: "Buildiko Springwoods Designer Villa",
    value: "₹5 CRORE",
    winnerName: "Ritika S.",
    youtubeId: "dQw4w9WgXcQ",
    winnerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
  {
    prize: 'Buildiko Springwoods Designer Villa',
    value: '₹5 CRORE',
    winnerName: 'Ritika S.',
    youtubeId: 'dQw4w9WgXcQ',
    winnerImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  },
  {
    prize: 'Buildiko Springwoods Designer Villa',
    value: '₹5 CRORE',
    winnerName: 'Ritika S.',
    youtubeId: 'dQw4w9WgXcQ',
    winnerImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  },
  {
    prize: 'Buildiko Springwoods Designer Villa',
    value: '₹5 CRORE',
    winnerName: 'Ritika S.',
    youtubeId: 'dQw4w9WgXcQ',
    winnerImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  },
  {
    prize: 'Buildiko Springwoods Designer Villa',
    value: '₹5 CRORE',
    winnerName: 'Ritika S.',
    youtubeId: 'dQw4w9WgXcQ',
    winnerImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  },
];

export const YoutubeTestimonials = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedYoutubeId, setSelectedYoutubeId] = useState(null);

  return (
    <div className="winners-carousel">
      <header className="winners-carousel__header">
        <CommonTitle titleClass="text-white" title="Winners of the Month - Congratulations!" />
        <p>Meet the lucky winners who made it big with Kutoot!</p>
      </header>
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        spaceBetween={250}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        // pagination={{ clickable: false, dynamicBullets: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
        className="winners-carousel__swiper"
      >
        {winnersData.map((winner, idx) => (
          <SwiperSlide key={idx}>
            <WinnerCard
              winner={winner}
              isActive={idx === activeSlideIndex}
              onClick={() => setSelectedYoutubeId(winner.youtubeId)}
            />
            <WinnerCardFooter winner={winner} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="d-flex justify-content-center align-items-center gap-4 background-cream-color next-winner-section">
        <h3>Be the Next Big Winner!</h3>
        <CommonButton label="Enter Now" />
      </div>
      {/* CTA button */}
      <VideoModal
        youtubeId={selectedYoutubeId}
        onClose={() => setSelectedYoutubeId(null)}
      />
    </div>
  );
};
