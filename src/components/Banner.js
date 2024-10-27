import React from "react";
import "../css/Banner.css";
import ProductCard from "../ui/ProductCard";
// import GameControl from "../assets/home-banner-img.webp";
import GameControl from "../assets/gaming-system.webp";
import Mice from "../assets/mouse.webp";
import Keyboard from "../assets/keyboard.jpg";
import Speaker from "../assets/speaker.jpg";
import PSUs from "../assets/PSUs.webp";
 
const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-grid">
                    <ProductCard
                        imgSrc={GameControl}
                        altText="Gaming Controller"
                        title="Best"
                        highlightText="Pro Gaming"
                        subtitle="Accessories"
                        buttonLabel="Show products"
                        linkUrl="/"
                        cardSize="big-card"
                    />
                    <ProductCard
                        imgSrc={Keyboard}
                        altText="Gaming Keyboard"
                        title="Best"
                        highlightText=" Gaming"
                        subtitle="Keyboard"
                        buttonLabel="View More"
                        linkUrl="/"
                        cardSize=""
                    />
                     <ProductCard
                        imgSrc={Speaker}
                        altText="Gaming Speakers"
                        title="Pro"
                        highlightText="Gaming "
                        subtitle="Speakers"
                        buttonLabel="View More"
                        linkUrl="/"
                    />
                    <ProductCard
                        imgSrc={Mice}
                        altText="Gaming Keyboard"
                        title="Best"
                        highlightText="Pro Gaming"
                        subtitle="Mice"
                        buttonLabel="View More"
                        linkUrl="/"
                        cardSize=""
                    />
                    <ProductCard
                        imgSrc={PSUs}
                        altText="Gaming PSUs"
                        title="Custom"
                        highlightText=" built gaming"
                        subtitle="PSUs"
                        buttonLabel="View More"
                        linkUrl="/"
                        cardSize=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
