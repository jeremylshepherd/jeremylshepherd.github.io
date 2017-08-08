const Banner = (props) => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div id="home" className="jumbotron col-sm-12 col-md-12">
                    <div className="main">
                        <h1>Jeremy L. Shepherd</h1>
                        <h3>Full-Stack JavaScript Developer</h3>
                        <ul className="social">
                            <li title="Github">
                                <a href="https://github.com/jeremylshepherd">
                                    <i className="fa fa-github"></i>
                                    <span className="label">Github</span>
                                </a>
                            </li>
                            <li title="Twitter">
                                <a href="https://twitter.com/jeremylshepherd">
                                    <i className="fa fa-twitter-square"></i>
                                    <span className="label">Twitter</span>
                                </a>
                            </li>
                            <li title="LinkedIn">
                                <a href="http://www.linkedin.com/in/jeremylshepherd">
                                    <i className="fa fa-linkedin-square"></i>
                                    <span className="label">LinkedIN</span>
                                </a>
                            </li>
                            <li title="Free Code Camp">
                                <a href="http://freecodecamp.com/jeremylshepherd">
                                    <i className="fa fa-free-code-camp"></i>
                                    <span className="label">FreeCodeCamp</span>
                                </a>
                            </li>
                            <li title="Codepen">
                                <a href="http://codepen.io/jeremylshepherd">
                                    <i className="fa fa-codepen"></i>
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
