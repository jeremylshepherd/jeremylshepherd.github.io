import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { navData, now } from '../utils';

const Footer = () => {
    let FooterLinks = [];
    navData.forEach((n, i) => {
        if (i === navData.length - 1) {
            FooterLinks.push(
                <li key={`${n}-footer`}>
                    <NavLink smooth to={`/#${n.toLowerCase()}`}>
                        {n}
                    </NavLink>
                </li>
            );
        } else {
            FooterLinks.push(
                <li key={`${n}-footer`}>
                    <NavLink smooth to={`/#${n.toLowerCase()}`}>
                        {n}
                    </NavLink>
                </li>
            );
            FooterLinks.push(
                <li key={`${i}-footer-icon`}>
                    <i className="fa fa-coffee" aria-hidden="true" />
                </li>
            );
        }
    });
    return (
        <footer className="footer">
            <div className="content">
                <ul className="footer-links">{FooterLinks}</ul>
                <h6>{`Copyright © Jeremy L. Shepherd ${now}. All Rights Reserved`}</h6>
            </div>
        </footer>
    );
};

export default Footer;
