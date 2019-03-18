import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <footer>
                    <div className="col-lg-6 hidden-md hidden-sm hidden-xs">
                        <ul className="footer-links">
                            <li>
                                <NavLink to="/#home">Home</NavLink>
                            </li>
                            <li>
                                <i
                                    className="fa fa-coffee"
                                    aria-hidden="true"
                                />
                            </li>
                            <li>
                                <NavLink smooth to="/#about">About</NavLink>
                            </li>
                            <li>
                                <i
                                    className="fa fa-coffee"
                                    aria-hidden="true"
                                />
                            </li>
                            <li>
                                <NavLink smooth to="/#portfolio">Portfolio</NavLink>
                            </li>
                            <li>
                                <i
                                    className="fa fa-coffee"
                                    aria-hidden="true"
                                />
                            </li>
                            <li>
                                <NavLink smooth to="/#contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 copyright">
                        <h6>
                            {`Copyright © Jeremy L. Shepherd ${new Date(Date.now()).getFullYear()}. All Rights
                            Reserved`}
                        </h6>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
