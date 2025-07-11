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
      {/* Brand Logo */}
      <div className="brand-logo">
        <div className="brand-badge">
          <span>{brand}</span>
        </div>
      </div>
      
      {/* Content */}
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
      
      {/* Product Image */}
      <div className="banner-image">
        <img 
          src={image} 
          alt={title}
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="decoration-dot-1"></div>
      <div className="decoration-dot-2"></div>
      <div className="decoration-circle"></div>
    </div>
  );
};