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
        <div className="product-subtitle">{subtitle}</div>
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
