const Contact = () => {
    return(
        <div className="container-fluid">
            <div id="contact" className="contact row">
                <div className="row col-xs-10 col-xs-offset-1">
                    <h2>Contact</h2>
                    <h4><a href="mailto:jeremylshepherd@gmail.com?Subject=Inquiry" target="_top">
                        <i className="fa fa-envelope" aria-hidden="true"></i> jeremylshepherd@gmail.com</a></h4>
                </div>
                <div className="row col-xs-10 col-xs-offset-1">
                    <div className="contact-buttons">
                        <button>
                            <a href="https://github.com/jeremylshepherd">
                                <i className="fa fa-github"></i>
                                <span className="conText">Github</span>
                            </a>
                        </button>
                        <button>
                            <a href="https://twitter.com/jeremylshepherd">
                                <i className="fa fa-twitter"></i>
                                <span className="conText"> Twitter</span>
                            </a>
                        </button>
                        <button>
                            <a href="http://www.linkedin.com/in/jeremylshepherd">
                                <i className="fa fa-linkedin"></i>
                                <span className="conText"> LinkedIN</span>
                            </a>
                        </button>
                        <button>
                            <a href="http://freecodecamp.com/jeremylshepherd">
                                <i className="fa fa-free-code-camp"></i>
                                <span className="conText"> FreeCodeCamp</span>
                            </a>
                        </button>
                        <button>
                            <a href="http://codepen.io/jeremylshepherd">
                                <i className="fa fa-codepen"></i>
                                <span className="conText"> Codepen</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
