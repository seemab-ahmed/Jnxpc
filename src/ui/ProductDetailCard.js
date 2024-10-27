import React from "react";
import "../css/ProductCard.css"; // Ensure this file is styled for flexibility
import DropdownMenu from "./DropdownMenu";


const ProductDetailCard = ({
  imgSrc1,
  imgSrc2,
  altText1,
  altText2,
  discountText,
  title,
  rating,
  selectOptions,
  price,
  originalPrice,
  buttonLabel,
  linkUrl,
  onSelectOption,
  classBtn,
}) => {
  // Create a function to render stars based on the rating value
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={`star fa-${
          index < rating ? "solid" : "regular"
        } fa-star`}
      ></i>
    ));
  };

  return (
    <div className="prod-detail-card">
      <div className="inner">
        <div className="img-wrapper">
          <img className="img-1" src={imgSrc1} alt={altText1} />
          <img className="img-2" src={imgSrc2} alt={altText2} />
          {discountText && <span className="off-price">{discountText}</span>}
        </div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <div className="star-rating">{renderStars(rating)}</div>

          {selectOptions && (
            <DropdownMenu
              iconClass="fa-solid fa-caret-down"
              menuItems={selectOptions}
              selectText="Select Color"
              className="prod-dropdown"
              onSelectOption={onSelectOption}
            />
          )}

          <div className="card-footer">
            <div className="price-block">
              <span className="price">{price}</span>
              {originalPrice && (
                <span className="cut-price">{originalPrice}</span>
              )}
            </div>
            <a href={linkUrl} className={`primary-btn ${classBtn}`} >
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
