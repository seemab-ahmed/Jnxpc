import React from "react";
import "../css/AboutShop.css";
const AboutShop = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="secondry-heading black">About our shop</h2>
        <p className="default-text black">JNX PC, based in London, connects with a diverse tech community and stays at the forefront of innovation. Our location enables collaboration with top suppliers and personalized customer service across the UK.</p>
        <div className="about-grid">
        <div className="about-card">
            <div className="about-card-body">
                <span className="card-no">01</span>
                <h4 className="card-title">
                Free UK shipping
                </h4>
                <p className="card-text">We offer free UK shipping on all of our custom computers.</p>
            </div>
        </div>
        <div className="about-card">
            <div className="about-card-body">
                <span className="card-no">02</span>
                <h4 className="card-title">
                Satisfaction guarantee
                </h4>
                <p className="card-text">We stand behind our products and services with a satisfaction guarantee.</p>
            </div>
        </div>
        <div className="about-card">
            <div className="about-card-body">
                <span className="card-no">03</span>
                <h4 className="card-title">
                Competitive prices
                </h4>
                <p className="card-text">You won't find a better deal on a custom computer anywhere else.</p>
            </div>
        </div>
        <div className="about-card">
            <div className="about-card-body">
                <span className="card-no">04</span>
                <h4 className="card-title">
                Commitment
                </h4>
                <p className="card-text">We're here to assist with selecting components, building, and testing your system.</p>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShop;
