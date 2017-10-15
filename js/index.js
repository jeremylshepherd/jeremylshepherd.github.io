"use strict";

//New api for my portfolio projects, free server so may take a moment to wake up

var projectData = "https://jeremylshepherd.herokuapp.com/api/jeremylshepherd/projects";

var Portfolio = React.createClass({
  displayName: "Portfolio",

  loadProjects: function loadProjects() {
    this.setState({ isLoading: true });
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({
          data: data,
          isLoading: false
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function getInitialState() {
    return { data: [], isLoading: false };
  },
  componentDidMount: function componentDidMount() {
    this.loadProjects();
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(PortfolioNav, null),
      React.createElement(PortfolioBanner, null),
      React.createElement(PortfolioAbout, null),
      React.createElement(PortfolioProjects, { data: this.state.data, loading: this.state.isLoading }),
      React.createElement(PortfolioContact, null),
      React.createElement(PortfolioFooter, null)
    );
  }
});

var PortfolioNav = React.createClass({
  displayName: "PortfolioNav",

  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-default navbar-fixed-top navbar-collapse" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-6 navbar-header" },
            React.createElement(
              "button",
              { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
              React.createElement(
                "span",
                { className: "sr-only" },
                "Toggle navigation"
              ),
              React.createElement("span", { className: "icon-bar" }),
              React.createElement("span", { className: "icon-bar" }),
              React.createElement("span", { className: "icon-bar" })
            ),
            React.createElement(
              "h1",
              { id: "brand" },
              "Jeremy L. Shepherd"
            )
          ),
          React.createElement(
            "div",
            { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
            React.createElement(
              "ul",
              { className: "nav navbar-nav navbar-right" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#home" },
                  "Home"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#about" },
                  "About"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#portfolio" },
                  "Portfolio"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#contact" },
                  "Contact"
                )
              )
            )
          )
        )
      )
    );
  }
});

var PortfolioBanner = React.createClass({
  displayName: "PortfolioBanner",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { id: "home", className: "jumbotron col-sm-12 col-md-12" },
          React.createElement(
            "div",
            { className: "main" },
            React.createElement(
              "h1",
              null,
              "Jeremy L. Shepherd"
            ),
            React.createElement(
              "h3",
              null,
              "Full-Stack JavaScript Developer"
            ),
            React.createElement(
              "ul",
              { className: "social" },
              React.createElement(
                "li",
                { title: "Github" },
                React.createElement(
                  "a",
                  { href: "https://github.com/jeremylshepherd" },
                  React.createElement("i", { className: "fa fa-github" }),
                  React.createElement(
                    "span",
                    { className: "label" },
                    "Github"
                  )
                )
              ),
              React.createElement(
                "li",
                { title: "Twitter" },
                React.createElement(
                  "a",
                  { href: "https://twitter.com/jeremylshepherd" },
                  React.createElement("i", { className: "fa fa-twitter-square" }),
                  React.createElement(
                    "span",
                    { className: "label" },
                    "Twitter"
                  )
                )
              ),
              React.createElement(
                "li",
                { title: "LinkedIn" },
                React.createElement(
                  "a",
                  { href: "http://www.linkedin.com/in/jeremylshepherd" },
                  React.createElement("i", { className: "fa fa-linkedin-square" }),
                  React.createElement(
                    "span",
                    { className: "label" },
                    "LinkedIN"
                  )
                )
              ),
              React.createElement(
                "li",
                { title: "Free Code Camp" },
                React.createElement(
                  "a",
                  { href: "http://freecodecamp.com/jeremylshepherd" },
                  React.createElement("i", { className: "fa fa-free-code-camp" }),
                  React.createElement(
                    "span",
                    { className: "label" },
                    "FreeCodeCamp"
                  )
                )
              ),
              React.createElement(
                "li",
                { title: "Codepen" },
                React.createElement(
                  "a",
                  { href: "http://codepen.io/jeremylshepherd" },
                  React.createElement("i", { className: "fa fa-codepen" }),
                  React.createElement(
                    "span",
                    { className: "label" },
                    "Codepen"
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});

var PortfolioAbout = React.createClass({
  displayName: "PortfolioAbout",

  render: function render() {
    return React.createElement(
      "div",
      { id: "about-container", className: "container-fluid" },
      React.createElement(
        "div",
        { id: "about", className: "about-me row" },
        React.createElement(
          "div",
          { className: "col-md-6" },
          React.createElement("img", { id: "self", className: "self img-responsive center-block", src: "https://gravatar.com/avatar/28acf74786d34d55ddbba649aab086c5.jpg?s=360&r=pg", alt: "Jeremy L. Shepherd" })
        ),
        React.createElement(
          "div",
          { className: "about col-md-6 col-xs-12" },
          React.createElement(
            "p",
            null,
            "I am a self-taught full-stack developer. In 2014, I began teaching myself front-end development in order to start a new career. I have spent the past 18 years working in law enforcement. I have a passion for building functional and beautiful web applications that enhance people's lives and free them to spend their focus and energy on following their passions.",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
              "span",
              null,
              "Compentencies:"
            ),
            React.createElement("br", null),
            " \"MEAN\" stack (MongoDB, Express.JS, Angular.JS, Node.JS)",
            React.createElement("br", null),
            " Ruby on Rails, ERB, HAML, SASS, RSPEC,",
            React.createElement("br", null),
            " React, Jade, EJS, HTML5, CSS3, Vanilla JS, jQuery, MongooseJS, and Bootstrap"
          )
        )
      )
    );
  }
});

var PortfolioProjects = React.createClass({
  displayName: "PortfolioProjects",

  getInitialState: function getInitialState() {
    return { query: '' };
  },

  handleQuery: function handleQuery(e) {
    this.setState({ query: e.target.value });
  },

  clearQuery: function clearQuery() {
    this.setState({ query: '' });
  },

  render: function render() {
    var _this = this;

    function queryCheck(r, q) {
      q = q.toLowerCase();
      var tech = r.technologies.join(', ');
      if (r.title.toLowerCase().indexOf(q) !== -1 || tech.toLowerCase().indexOf(q) !== -1 || r.type.toLowerCase().indexOf(q) !== -1) {
        return true;
      } else {
        return false;
      }
    }
    var filtered = void 0;
    if (this.state.query) {
      filtered = [];
      this.props.data.map(function (r) {
        if (queryCheck(r, _this.state.query)) {
          filtered.push(r);
        }
      });
    } else {
      filtered = this.props.data;
    }
    var ThumbNodes = filtered.map(function (project) {
      var technologies = project.technologies.join(', ');
      return React.createElement(
        "div",
        { className: "col-sm-4 col-xs-12 frame" },
        React.createElement(
          "a",
          { href: project.url },
          React.createElement(
            "span",
            { className: "overlay" },
            React.createElement(
              "p",
              null,
              project.title + ':',
              " ",
              React.createElement("br", null),
              " ",
              technologies,
              React.createElement("br", null),
              "Project type: " + project.type
            )
          ),
          React.createElement("img", {
            className: "image img-responsive",
            src: project.img
          }),
          React.createElement(
            "h5",
            null,
            project.title
          )
        )
      );
    });
    var Main = this.props.loading ? React.createElement("i", { className: "fa fa-spinner fa-3x" }) : { ThumbNodes: ThumbNodes };
    return React.createElement(
      "div",
      { id: "portfolio", className: "container-fluid portfolio" },
      React.createElement(
        "div",
        { className: "constrain row" },
        React.createElement(
          "h2",
          null,
          "Projects"
        ),
        React.createElement(
          "form",
          { className: "form-group col-xs-12" },
          React.createElement(
            "div",
            { className: "input-group" },
            React.createElement("input", { type: "text", className: "form-control", value: this.state.query, placeholder: "Search...", onChange: this.handleQuery }),
            React.createElement(
              "div",
              { className: "input-group-addon", onClick: this.clearQuery },
              "Clear"
            )
          )
        ),
        Main
      )
    );
  }
});
var PortfolioContact = React.createClass({
  displayName: "PortfolioContact",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { id: "contact", className: "contact row" },
        React.createElement(
          "div",
          { className: "row col-xs-10 col-xs-offset-1" },
          React.createElement(
            "h2",
            null,
            "Contact"
          ),
          React.createElement(
            "h4",
            null,
            React.createElement(
              "a",
              { href: "mailto:jeremylshepherd@gmail.com?Subject=Inquiry", target: "_top" },
              React.createElement("i", { className: "fa fa-envelope", "aria-hidden": "true" }),
              " jeremylshepherd@gmail.com"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row col-xs-10 col-xs-offset-1" },
          React.createElement(
            "div",
            { className: "contact-buttons" },
            React.createElement(
              "button",
              null,
              React.createElement(
                "a",
                { href: "https://github.com/jeremylshepherd" },
                React.createElement("i", { className: "fa fa-github" }),
                React.createElement(
                  "span",
                  { className: "conText" },
                  "Github"
                )
              )
            ),
            React.createElement(
              "button",
              null,
              React.createElement(
                "a",
                { href: "https://twitter.com/jeremylshepherd" },
                React.createElement("i", { className: "fa fa-twitter" }),
                React.createElement(
                  "span",
                  { className: "conText" },
                  " Twitter"
                )
              )
            ),
            React.createElement(
              "button",
              null,
              React.createElement(
                "a",
                { href: "http://www.linkedin.com/in/jeremylshepherd" },
                React.createElement("i", { className: "fa fa-linkedin" }),
                React.createElement(
                  "span",
                  { className: "conText" },
                  " LinkedIN"
                )
              )
            ),
            React.createElement(
              "button",
              null,
              React.createElement(
                "a",
                { href: "http://freecodecamp.com/jeremylshepherd" },
                React.createElement("i", { className: "fa fa-free-code-camp" }),
                React.createElement(
                  "span",
                  { className: "conText" },
                  " FreeCodeCamp"
                )
              )
            ),
            React.createElement(
              "button",
              null,
              React.createElement(
                "a",
                { href: "http://codepen.io/jeremylshepherd" },
                React.createElement("i", { className: "fa fa-codepen" }),
                React.createElement(
                  "span",
                  { className: "conText" },
                  " Codepen"
                )
              )
            )
          )
        )
      )
    );
  }
});

var PortfolioFooter = React.createClass({
  displayName: "PortfolioFooter",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "footer",
          null,
          React.createElement(
            "div",
            { className: "col-xs-6" },
            React.createElement(
              "ul",
              { className: "footer-links" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#home" },
                  "Home"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement("i", { className: "fa fa-coffee", "aria-hidden": "true" })
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#about" },
                  "About"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement("i", { className: "fa fa-coffee", "aria-hidden": "true" })
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#portfolio" },
                  "Portfolio"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement("i", { className: "fa fa-coffee", "aria-hidden": "true" })
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "#contact" },
                  "Contact"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6 col-xs-12 copyright" },
            React.createElement(
              "h6",
              null,
              "Copyright \xA9 Jeremy L. Shepherd 2015. All Rights Reserved"
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Portfolio, { url: projectData }), document.getElementById('app'));
//# sourceMappingURL=/Users/jeremylshepherd/Dropbox/Web Dev Work/FreeCodeCamp/API/index.js.map