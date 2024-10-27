import React from "react";
import "../css/ProductCard.css";

const ProductCard = ({ imgSrc, altText, title, highlightText, subtitle, buttonLabel, linkUrl, cardSize }) => {
    return (
        <div className={`banner-prod-card ${cardSize}`}>
            <div className="prod-img-wrapper">
                <img src={imgSrc} alt={altText} />
            </div>
            <div className="prod-card-body">
                <h4 className="prod-title">
                    {title} <span>{highlightText}</span> {subtitle}
                </h4>
                <a href={linkUrl} className="primary-btn">{buttonLabel}</a>
            </div>
        </div>
    );
};

export default ProductCard;
