import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid">
      <div id="contact" className="contact">
        <div className="col-xs-10 col-xs-offset-1">
          <h4>
            <a
              className="btn btn-danger radiate"
              href="mailto:jeremylshepherd@gmail.com?Subject=Inquiry"
              target="_top"
            >
              <i className="fa fa-envelope" aria-hidden="true" />{" "}
              jeremylshepherd@gmail.com
            </a>
          </h4>
        </div>
        <div className="row col-xs-10 col-xs-offset-1">
          <div className="contact-buttons">
            <button id="github">
              <a href="https://github.com/jeremylshepherd">
                <i className="fa fa-github" />
              </a>
            </button>
            <button id="twitter">
              <a href="https://twitter.com/jeremylshepherd">
                <i className="fa fa-twitter" />
              </a>
            </button>
            <button id="linkedin">
              <a href="https://www.linkedin.com/in/jeremylshepherd">
                <i className="fa fa-linkedin" />
              </a>
            </button>
            <button id="freecodecamp">
              <a href="https://freecodecamp.com/jeremylshepherd">
                <i className="fa fa-free-code-camp" />
              </a>
            </button>
            <button id="codepen">
              <a href="https://codepen.io/jeremylshepherd">
                <i className="fa fa-codepen" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;