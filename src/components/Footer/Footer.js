import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="mt-4 pt-4">
            <footer class="text-center text-lg-start bg-dark text-muted footer-container">
                <section
                    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div class="me-5 d-none d-lg-block Copyright">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" class="me-4 text-reset">
                            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        </a>
                        <a href="" class="me-4 text-reset">
                            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                        </a>
                    </div>

                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                <a class="navbar-brand" href="#">Cloth<span className="logo-title">Store</span></a>
                                </h6>
                                <p className="footer-text pd-link">
                                    This company is doing business for long time, and it is been a successfull business for everyone. 
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 pd-link">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset pd-link">T-shirt</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset pd-link">Shoes</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset pd-link">Shirts</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset pd-link">Ladies and Men</a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 pd-link">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>


                            {/* contact */}
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 pd-link">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i class="fas fa-home me-3"></i> Dhaka, BariDhara-10012, BD</p>
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
                    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">ClothStore</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;