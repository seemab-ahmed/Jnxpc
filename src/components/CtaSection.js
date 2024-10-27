import React, {  } from "react";
import "../css/CtaSection.css";
import CtaImg1 from "../assets/story-left-img.webp";
import CtaImg2 from "../assets/story-right-img.webp";
const CtaSection = () => {

  return (
    <section className="cta-section">
        <div className="container">
            <div className="cta-inner">
                <div className="cta-col-img">
                    <div className="cta-img-wrapper img-front">
                        <img src={CtaImg1} alt="cta-img"/>
                    </div>                    
                    <div className="cta-img-wrapper img-back">
                        <img src={CtaImg2} alt="cta-img"/>
                    </div>                    
                </div>
                <div className="cta-col-content">
                    <h2 className="secondry-heading">From Pixels To Play: Sharing Our Story</h2>
                    <p className="default-text">
                       With hardware, tools are what enable a person to install, remove, or perform other actions on the components within their computer.
                    </p>
                    <ul className="cta-content-list">
                        <li>We work with you to create the perfect system for your needs.</li>
                        <li>We offer free UK shipping on all of our custom computers.</li>
                        <li>We offer free UK shipping on all of our custom computers.</li>
                        <li>We're here to answer your questions and help you choose the right parts for your needs.</li>
                        <li>You won't find a better deal on a custom computer anywhere else.</li>
                    </ul>
                    <a className="primary-btn" href="/">Code of Ethics and Conduct</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CtaSection;
