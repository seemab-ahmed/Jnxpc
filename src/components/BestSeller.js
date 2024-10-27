
import Slider from "react-slick"; // Importing the slider
import "../css/BestSeller.css";
import ProductDetailCard from "../ui/ProductDetailCard";
// import GameControl from "../assets/gaming-system.webp";
// import Mice from "../assets/mouse.webp";
// import Keyboard from "../assets/keyboard.jpg";
// import Speaker from "../assets/speaker.jpg";
import Headset from "../assets/headset-prod.webp";
import Headset2 from "../assets/headset-prod-2.webp";
// import PSUs from "../assets/PSUs.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BestSeller = () => {
    const profileMenuItems = [
        { label: "red"},
        { label: "blue"},
        { label: "green"},
      ];
    // Slider configuration options
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite loop sliding
        speed: 500, // Transition speed in ms
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        centerMode: true, // Enable center mode
        centerPadding: "120px", // Add padding around centered slide
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true, // Keep center mode on smaller screens
                    centerPadding: "20px", // Adjust padding for smaller screens
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "15px",
                },
            },
        ],
    };
    
    return (
        <section className="best-seller">
            <div className="container">
                <div className="section-header-row">
                <h2 className="secondry-heading"><span>Best Seller</span> of the week</h2>
                <a href="/" className="primary-btn">Show roducts</a>
                </div>
            </div>
                <Slider className="best-slider" {...settings}>
                <ProductDetailCard
                    imgSrc1={Headset}
                    imgSrc2={Headset2}
                    altText1="Main Headset"
                    altText2="Secondary Headset"
                    discountText="Save 17%"
                    title="Cloud Alpha Gaming Headset"
                    rating={4}
                    selectOptions={profileMenuItems}
                    price="530.00$"
                    originalPrice="600.00$"
                    buttonLabel="Add to Cart"
                    linkUrl="/"
                    />
                <ProductDetailCard
                    imgSrc1={Headset}
                    imgSrc2={Headset2}
                    altText1="Main Headset"
                    altText2="Secondary Headset"
                    discountText="Save 17%"
                    title="Cloud Alpha Gaming Headset"
                    rating={4}
                    selectOptions={profileMenuItems}
                    price="530.00$"
                    originalPrice="600.00$"
                    buttonLabel="Add to Cart"
                    linkUrl="/"
                    />
                <ProductDetailCard
                    imgSrc1={Headset}
                    imgSrc2={Headset2}
                    altText1="Main Headset"
                    altText2="Secondary Headset"
                    discountText="Save 17%"
                    title="Cloud Alpha Gaming Headset"
                    rating={5}
                    selectOptions={profileMenuItems}
                    price="530.00$"
                    originalPrice="600.00$"
                    buttonLabel="Add to Cart"
                    linkUrl="/"
                    />
                <ProductDetailCard
                    imgSrc1={Headset}
                    imgSrc2={Headset2}
                    altText1="Main Headset"
                    altText2="Secondary Headset"
                    discountText="Save 17%"
                    title="Cloud Alpha Gaming Headset"
                    rating={4}
                    selectOptions={profileMenuItems}
                    price="530.00$"
                    originalPrice="600.00$"
                    buttonLabel="Add to Cart"
                    linkUrl="/"
                    />
                </Slider>
        </section>
    );
};

export default BestSeller;
