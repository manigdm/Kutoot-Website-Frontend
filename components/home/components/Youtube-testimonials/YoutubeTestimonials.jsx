import React, { useEffect, useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import "./YouTubeCarousel.scss";

const carouselItems = [
  {
    id: 1,
    image: "https://placehold.co/300x400/007a7e/ffffff?text=Video+1",
    name: "Ritika S.",
    location: "Pune",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    image: "https://placehold.co/300x400/004d4f/ffffff?text=Video+2",
    name: "Rahul V.",
    location: "Mumbai",
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
  },
  {
    id: 3,
    image: "https://placehold.co/300x400/007a7e/ffffff?text=Video+3",
    name: "Sneha P.",
    location: "Delhi",
    youtubeUrl: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
  },
  {
    id: 4,
    image: "https://placehold.co/300x400/004d4f/ffffff?text=Video+4",
    name: "Amit K.",
    location: "Bangalore",
    youtubeUrl: "https://www.youtube.com/watch?v=21X5lGlDOfg",
  },
  {
    id: 5,
    image: "https://placehold.co/300x400/007a7e/ffffff?text=Video+5",
    name: "Pooja R.",
    location: "Chennai",
    youtubeUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  },
];

const YouTubeCarousel = () => {
  const [animated, setAnimated] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentYouTubeUrl, setCurrentYouTubeUrl] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (url) => {
    setCurrentYouTubeUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentYouTubeUrl("");
  };

  const redirectToYouTube = () => {
    if (currentYouTubeUrl) {
      window.open(currentYouTubeUrl, "_blank");
      closeModal();
    }
  };

  const duplicatedItems = [...carouselItems, ...carouselItems];

  return (
    <div className="yt-carousel">
      {/* Decorative Shapes */}
      <div className="yt-carousel__shape yt-carousel__shape--top"></div>
      <div className="yt-carousel__shape yt-carousel__shape--bottom"></div>

      <div className="yt-carousel__container">
        <h2 className="yt-carousel__heading">
          Watch Our <span>Stories</span>
        </h2>

        <div className="yt-carousel__viewport">
          <div
            className={`yt-carousel__track ${
              animated ? "yt-carousel__track--animated" : ""
            }`}
          >
            {duplicatedItems.map((item, i) => (
              <div
                key={i}
                className={`yt-carousel__card ${
                  hoveredCard === item.id ? "yt-carousel__card--hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="yt-carousel__image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/300x250/CCCCCC/666666?text=Video+Thumbnail";
                    }}
                  />
                  <button
                    className="yt-carousel__play-button"
                    onClick={() => openModal(item.youtubeUrl)}
                  >
                    <AiFillYoutube size={30} fill="currentColor" />
                  </button>
                </div>
                <div className="yt-carousel__info">
                  <h5>{item.name}</h5>
                  <p>{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="yt-carousel__modal-backdrop" onClick={closeModal}>
          <div
            className="yt-carousel__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="yt-carousel__modal-close" onClick={closeModal}>
              &times;
            </button>
            <h3>Watch on YouTube</h3>
            <p>Click the button below to open the video on YouTube.</p>
            <button
              className="yt-carousel__modal-button"
              onClick={redirectToYouTube}
            >
              <AiFillYoutube size={24} style={{ marginRight: "10px" }} /> Go to
              YouTube
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeCarousel;
