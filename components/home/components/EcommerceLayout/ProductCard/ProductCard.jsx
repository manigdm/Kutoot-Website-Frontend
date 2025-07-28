import CommonButton from "@/components/common/CommonButton.jsx";
import "./ProductCard.scss";

export const ProductCard = ({
  title,
  subtitle,
  image,
  buttonText,
  buttonVariant,
  backgroundColor,
  onButtonClick,
}) => {
  return (
    <div className={`product-card ${backgroundColor}`}>
      <div className="product-content">
        <div className="product-subtitle">
          <img src="/star.png" height={12} width={12} className="product-star" />
          PRICE DROP
        </div>
        <h3 className="product-title">{title}</h3>
        <CommonButton
          label={buttonText}
          onClick={onButtonClick}
          className="product-button"
        />
      </div>
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
