
import "../css/Footer.css";
import Logo from "../assets/jnx-logo.png";

const FeaturedSystems = () => {

    return (
        <footer>
        <div className="footer-top">
            <div className="container">
                <a href="/" className="footer-logo"><img src={Logo} alt="logo" /></a>
                <div className="footer-content">
                    <div className="link-list">
                        <h4>Product</h4>
                        <ul className="footer-links">
                            <li><a href="/">Overview</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Marketplace</a></li>
                            <li><a href="/"> Features</a></li>
                            <li><a href="/">Integrations</a></li>
                        </ul>
                    </div>
                    <div className="link-list">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/"> Blog</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="link-list social-list">
                        <h4>Social</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-instagram"></i>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-twitter"></i>
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa-brands fa-linkedin"></i>
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="link-list connect-list">
                        <h4>Connect</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="tel:+123456789">
                                    <i className="fa-solid fa-phone"></i>
                                    <span>+123456789</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:test@test.gmail.com">
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>test@test.gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>1234 Aviation Way, Suite 567</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-btm">
            <span>© 2024 Company. All rights reserved.</span>
        </div>
    </footer>          
    );
};

export default FeaturedSystems;
