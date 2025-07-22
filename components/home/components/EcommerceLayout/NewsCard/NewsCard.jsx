import "./NewsCard.scss";

export const NewsCard = ({ title, description, image, onReadMore }) => {
  return (
    <div className="news-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="news-image">
        {/* <img src={image} alt={title} /> */}
        <div className="news-overlay"></div>
      </div>

      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-description">{description}</p>
      </div>
    </div>
  );
};
