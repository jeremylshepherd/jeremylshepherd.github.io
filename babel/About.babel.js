const About = () => {
    let date = () => {
        let start = new Date(1998, 2, 30).getFullYear();
        let now = new Date(Date.now()).getFullYear();
        return now - start;
    };
    return (
        <div id="about-container" className="container-fluid">
            <div id="about" className="about-me container">
                <div className="col-sm-6 hidden-xs">
                    <div className="polaroid">
                        <img
                            id="self"
                            className="self"
                            src="https://gravatar.com/avatar/28acf74786d34d55ddbba649aab086c5.jpg?s=360&r=pg"
                            alt="Jeremy L. Shepherd"
                        />
                        <span className="gutter">Jeremy 2017</span>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <p>
                        {`I am a self-taught full-stack developer. In 2014, I began teaching myself front-end development in order to start a new career. I have spent the past ${date()} years working in law enforcement. I have a passion for building functional and beautiful web applications that enhance people's lives and free them to spend their focus and energy on following their passions.`}
                        <br />
                        <br />
                        <span>Compentencies:</span>
                        <br /> "MEAN" stack (MongoDB, ExpressJS, AngularJS, NodeJS)
                        <br /> Ruby on Rails, ERB, HAML, SASS, RSPEC,
                        <br /> React, d3, Jade, EJS, HTML5, CSS3, Vanilla JS, jQuery,
              MongooseJS, and Bootstrap
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
