import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './YouTubeCarousel.scss';

const VideoModal = ({ youtubeId, onClose }) => {
  if (!youtubeId) return null;

  return (
    <div className="video-modal">
      <div className="video-modal__overlay" onClick={onClose} />
      <div className="video-modal__content">
        <button className="video-modal__close" onClick={onClose}>×</button>
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

const PlayCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 drop-shadow-lg">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

const WinnerCard = ({ winner, isActive, onClick }) => (
  <div className="winner-card group cursor-pointer" onClick={onClick}>
    <img
      src={`https://img.youtube.com/vi/${winner.youtubeId}/maxresdefault.jpg`}
      alt={winner.prize}
      className="winner-card__bg group-hover:scale-110"
      onError={(e) => (e.target.src = 'https://placehold.co/800x600/333/FFF?text=Image+Error')}
    />
    <div className="winner-card__overlay" />
    <div className="winner-card__play group-hover:opacity-100">
      <PlayCircleIcon />
    </div>
    <div className="winner-card__footer">
      <div className="winner-card__info">
        <span className="winner-card__badge">GRAND PRIZE</span>
        <h3 className="winner-card__title">{winner.prize}</h3>
        <p className="winner-card__value">TOP DRAW: {winner.value}</p>
      </div>
      <div className="winner-card__user">
        <img
          src={winner.winnerImage}
          alt={winner.winnerName}
          onError={(e) => (e.target.src = 'https://placehold.co/100x100/ccc/FFF?text=User')}
        />
        <div>
          <p className="winner-card__user-label">WINNER</p>
          <p className="winner-card__user-name">{winner.winnerName}</p>
        </div>
      </div>
    </div>
  </div>
);

const winnersData = [
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
        <h1>
          Winners of the Month - <span className="text-yellow-400">Congratulations!</span>
        </h1>
        <p>Meet the lucky winners who made it big with Kutoot!</p>
      </header>
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        coverflowEffect={{ rotate:0, stretch:80, depth:200, modifier:1, slideShadows:false }}
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA button */}
      <VideoModal youtubeId={selectedYoutubeId} onClose={() => setSelectedYoutubeId(null)} />
    </div>
  );
};