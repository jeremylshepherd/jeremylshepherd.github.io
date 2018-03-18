import React from 'react';

const Banner = () => {
    return (
        <div className="container-fluid" id="jumbo-container">
            <div className="row">
                <div id="home" className="jumbotron col-sm-12 col-md-12">
                    <div className="main">
                        <h1>Jeremy L. Shepherd</h1>
                        <h3>Full-Stack JavaScript Developer</h3>
                        <ul className="social">
                            <li title="Github">
                                <a href="https://github.com/jeremylshepherd">
                                    <i className="fa fa-github" />
                                    <span className="label">Github</span>
                                </a>
                            </li>
                            <li title="Twitter">
                                <a href="https://twitter.com/jeremylshepherd">
                                    <i className="fa fa-twitter-square" />
                                    <span className="label">Twitter</span>
                                </a>
                            </li>
                            <li title="LinkedIn">
                                <a href="https://www.linkedin.com/in/jeremylshepherd">
                                    <i className="fa fa-linkedin-square" />
                                    <span className="label">LinkedIN</span>
                                </a>
                            </li>
                            <li title="Free Code Camp">
                                <a href="https://freecodecamp.com/jeremylshepherd">
                                    <i className="fa fa-free-code-camp" />
                                    <span className="label">FreeCodeCamp</span>
                                </a>
                            </li>
                            <li title="Codepen">
                                <a href="https://codepen.io/jeremylshepherd">
                                    <i className="fa fa-codepen" />
                                    <span className="label">Codepen</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
