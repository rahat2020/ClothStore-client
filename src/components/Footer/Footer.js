import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="mt-4 pt-4">
            <footer class="text-center text-lg-start bg-dark text-muted footer-container">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block Copyright">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link to="https://facebook.com/kazirahat2020" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                        </Link>
                        <Link to="https://Twitter.com/kazirahat2020" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                        </Link>
                        <Link to="https://Google.com" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
                        </Link>
                        <Link to="https://Instagram.com/kazirahat2020" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                        </Link>
                        <Link to="https://facebook.com/kazirahat2020" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        </Link>
                        <Link to="https://youtube.com" className="me-4 text-reset">
                            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                        </Link>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <Link className="navbar-brand" href="#">Cloth<span className="logo-title">Store</span></Link>
                                </h6>
                                <p className="footer-text pd-link">Name
                                    This company is doing business for long time, and it is been a successfull business for everyone.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 pd-link">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset pd-link">T-shirt</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset pd-link">Shoes</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset pd-link">Shirts</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset pd-link">Ladies and Men</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 pd-link">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>


                            {/* contact */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 pd-link">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Dhaka, BariDhara-10012, BD</p>
                                <p>
                                    <FontAwesomeIcon icon={faEnvelope} className="email" /> {" "}
                                    ClothStore@example.com
                                </p>
                                <p> <FontAwesomeIcon icon={faPhone} className="phone" /> +8801 234 567 89</p>
                                <p> <FontAwesomeIcon icon={faPhone} className="phone" /> +8801 234 567 88</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center p-4 Copyright" style={{ backgroundColor: ' rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <Link class="text-reset fw-bold" to="/home">ClothStore</Link>
                </div>

            </footer>

        </div>
    );
};

export default Footer;