import React from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faPhoneFlip, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    // const currentYear = new Date().getFullYear();

    return (
        <>
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                <FontAwesomeIcon icon={faLocation} className="linkedin-bg" size="xl" color="blue" />
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>SMVITA Vidyanidhi Marg, JUHU,Mumbai</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                <FontAwesomeIcon icon={faPhone} className="linkedin-bg" size="xl" color="blue" />
                                <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>9765167306</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                <a href="#">
                                            <FontAwesomeIcon icon={faEnvelopeOpen} className="email-bg" size="xl" />
                                            <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>group4@gmail.com</span>
                                    </div>
                                        </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html"><img src="/Images/tour.png" class="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>"To be the foremost curator of extraordinary travel experiences, weaving together moments of exploration, wonder, and connection that resonate for a lifetime."</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-bg" size="xl" />
                                        </a>
                                        <a href="#">
                                            <FontAwesomeIcon icon={faGithub} className="github-bg" size="xl" />
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <div class="form-group">
                                                <input type="text" placeholder="Email Address" />
                                                <button type="submit" class="btn-subscribe">
                                                    <i className="fab fa-telegram-plane">Submit</i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class>
                                <div class="copyright-text">
                                    {/* <p style={{textAlign:'center'}}>Copyright &copy; 2023, All Rights Reserved</p> */}
                                    <p style={{textAlign:'center'}}>Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer></>
    );
};

export default Footer;