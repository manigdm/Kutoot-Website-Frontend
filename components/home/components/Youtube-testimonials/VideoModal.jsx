import React from 'react';
import './YouTubeCarousel.scss';

export const VideoModal = ({ youtubeId, onClose }) => {
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