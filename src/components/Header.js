// import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/Header.css"; 
import Logo from "../assets/jnx-logo.png";
import DropdownMenu from "../ui/DropdownMenu";

const Header = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  const profileMenuItems = [
    { label: "Login", link: "/login" },
    { label: "Register", link: "/register" },
    { label: "Checkout", link: "/checkout" },
    { label: "Logout", link: "/logout" },
  ];

  const settings = {
    vertical: true,
    verticalSwiping: true, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    infinite: true, 
    arrows: true, 
    slidesToShow: 1, 
    slidesToScroll: 1,
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 260) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header className="header">
      <div className="anouncment-bar">
        <div className="container">
          <Slider {...settings} className="anouncment-slider">
            <div className="anouncment-slide">
              <span className="anouncment-text">
                Winter Sale! Get up to 30% off on selected items. Shop Now!
              </span>
            </div>
            <div className="anouncment-slide">
              <span className="anouncment-text">
                Free Shipping on orders over $50. Don't miss out!
              </span>
            </div>
            <div className="anouncment-slide">
              <span className="anouncment-text">
                New Arrivals! Check out the latest collections.
              </span>
            </div>
          </Slider>
        </div>
      </div>
      {/* ${isScrolled ? "top" : ""} */}
      <div className={`main-header`}>
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo">
              <img src={Logo} alt="JNX" />
            </a>
            <nav>
              <ul className="nav-list">
                <li className="nav-link-item">
                  <a href="/" className="nav-link">
                    About us
                  </a>
                </li>
                <li className="nav-link-item">
                  <a href="/" className="nav-link">
                    Support
                  </a>
                </li>
                <li className="nav-link-item">
                  <a href="/" className="nav-link">
                    Financing
                  </a>
                </li>
                <li className="nav-link-item">
                  <a href="/" className="nav-link">
                    Shop
                  </a>
                </li>
                <li className="nav-link-item">
                  <a href="/" className="nav-link">
                    Components
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-right">
              <div className="search-box">
                <button className="btn-search">
                  <i className="fas fa-search"></i>
                </button>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Type to Search..."
                />
              </div>
              {/* <a href="/" className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a> */}
              <a href="/" className="cart-icon">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-item-no">1</span>
              </a>
              <DropdownMenu
                iconClass="fa-solid fa-user"
                menuItems={profileMenuItems}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header-btm">
        <div className="container">
          <ul className="shop-item-list">
            <li>
              <a href="/">Headsets</a>
            </li>
            <li>
              <a href="/">Keyboards</a>
            </li>
            <li>
              <a href="/">Mouse</a>
            </li>
            <li>
              <a href="/">Gaming controllers</a>
            </li>
            <li>
              <a href="/">Monitors</a>
            </li>
            <li>
              <a href="/">Microphones</a>
            </li>
            <li>
              <a href="/">Power</a>
            </li>
            <li>
              <a href="/">Accessories</a>
            </li>
            <li>
              <a href="/">Sale</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
