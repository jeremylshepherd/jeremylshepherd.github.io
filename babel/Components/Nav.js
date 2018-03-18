import React from 'react';

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
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <span className="navbar-brand">Jeremy L. Shepherd</span>
                    </div>
                    <div className="collapse navbar-collapse" id="right-nav">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
