
import "../css/FeaturedSystems.css";
import ProductDetailCard from "../ui/ProductDetailCard";
import Phenteks from "../assets/phanteks.png";
import kolnik from "../assets/kolink.png";
import System3 from "../assets/system-thumb.png";
import System4 from "../assets/system-1.png";
import rtx from "../assets/rtx-img.png";
import Rysen from "../assets/ryzen9.png";


const FeaturedSystems = () => {
    const profileMenuItems = [
        { label: "red"},
        { label: "blue"},
        { label: "green"},
      ];
    // Slider configuration options
    return (
        <section className="featured-systems">
            <div className="container">
                <div className="section-header-row">
                <h2 className="secondry-heading black"><span>Featured </span> Systems</h2>
                <a href="/" className="secondry-btn">Show Products</a>
                </div>
               <div className="featured-grid">
               <ProductDetailCard
                    imgSrc1={Phenteks}
                    imgSrc2={System4}
                    altText1="Main Headset"
                    altText2="Secondary Headset"
                    discountText="Save 17%"
                    title="MSI Mag Forge 100M"
                    rating={5}
                    selectOptions={profileMenuItems}
                    price="£81.00"
                    originalPrice="£10.00"
                    buttonLabel="Add to Cart"
                    linkUrl="/"
                    classBtn="secondry-btn"
                    />
                <ProductDetailCard
                    imgSrc1={System3}
                    imgSrc2={kolnik}
                    altText1="Main Headset"
                    altText2="Secondary Headset"
                    discountText="Save 17%"
                    title="Kolink Void RGB"
                    rating={4}
                    selectOptions={profileMenuItems}
                    price="£62.00"
                    originalPrice="£11.00"
                    buttonLabel="Add to Cart"
                    classBtn="secondry-btn"
                    linkUrl="/"
                    />
                <ProductDetailCard
                    imgSrc1={rtx}
                    imgSrc2={Rysen}
                    altText1="Main Headset"
                    altText2="Secondary Headset"
                    discountText="Save 17%"
                    title="Phanteks Eclipse G300A"
                    rating={5}
                    selectOptions={profileMenuItems}
                    price="£82.00"
                    originalPrice="£2.00"
                    buttonLabel="Add to Cart"
                    classBtn="secondry-btn"
                    linkUrl="/"
                    />
               </div>
            </div>
        </section>           
    );
};

export default FeaturedSystems;
