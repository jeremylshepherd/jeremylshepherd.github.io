import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Nav = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top navbar-collapse">
            <div className="container-fluid">
                <div className="row">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#right-nav"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar ib-top" />
                            <span className="icon-bar ib-mid" />
                            <span className="icon-bar ib-bot" />
                        </button>
                        <span className="navbar-brand">Jeremy L. Shepherd</span>
                    </div>
                    <div className="collapse navbar-collapse" id="right-nav">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink smooth to="/#home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink smooth to="/#about">About</NavLink>
                            </li>
                            <li>
                                <NavLink smooth to="/#portfolio">Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink smooth to="/#contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
