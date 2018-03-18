import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                    <footer>
                        <div className="col-lg-6 hidden-md hidden-sm hidden-xs">
                            <ul className="footer-links">
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <i className="fa fa-coffee" aria-hidden="true" />
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <i className="fa fa-coffee" aria-hidden="true" />
                                </li>
                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <i className="fa fa-coffee" aria-hidden="true" />
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12 copyright">
                            <h6>Copyright © Jeremy L. Shepherd 2017. All Rights Reserved</h6>
                        </div>
                    </footer>
            </div>
        </div>
    );
};

export default Footer;
