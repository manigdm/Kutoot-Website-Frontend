import CommonButton from '@/components/common/CommonButton.jsx';
import './FeaturedBanner.scss';

export const FeaturedBanner = ({ 
  title, 
  brand, 
  image, 
  buttonText,
  onButtonClick 
}) => {
  return (
    <div className="featured-banner">
      <div className="brand-logo">
        <div className="brand-badge">
          <span>{brand}</span>
        </div>
      </div>
      <div className="banner-content">
        <h2 className="banner-title">
          {title}
        </h2>
        <CommonButton 
          onClick={onButtonClick}
          className="banner-button"
          label={buttonText}
        />
      </div>
      <div className="banner-image">
        <img 
          src={image} 
          alt={title}
        />
      </div>
    </div>
  );
};