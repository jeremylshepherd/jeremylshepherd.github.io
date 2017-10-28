"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Back-end server for creating, deleting, and feeding my potfolio
//The server is a free Heroku app, so it may take moment to wake
var projectData = "https://jeremylshepherd.herokuapp.com/api/jeremylshepherd/projects";

var contStyle = {
  backgroundColor: "#fffff7",
  borderTop: "1px solid #111"
};

var date = function date() {
  var start = new Date(1998, 2, 30).getFullYear();
  var now = new Date(Date.now()).getFullYear();
  return now - start;
};

var queryCheck = function queryCheck(r, q) {
  q = q.toLowerCase();
  var tech = r.technologies.join(", ");
  if (r.title.toLowerCase().indexOf(q) !== -1 || tech.toLowerCase().indexOf(q) !== -1 || r.type.toLowerCase().indexOf(q) !== -1) {
    return true;
  } else {
    return false;
  }
};

var Bullet = function Bullet() {
  return React.createElement("i", { className: "fa fa-hand-o-right" });
};

var Thumb = function Thumb(props) {
  return React.createElement(
    "div",
    { className: "col-lg-4 col-sm-6 col-xs-12" },
    React.createElement(
      "div",
      { className: "frame" },
      React.createElement(
        "a",
        { href: props.url },
        React.createElement(
          "span",
          { className: "overlay" },
          React.createElement(
            "p",
            null,
            props.title + ":",
            " ",
            React.createElement("br", null),
            " ",
            props.technologies,
            React.createElement("br", null),
            "Project type: " + props.type
          )
        ),
        React.createElement("img", { className: "image", src: props.img }),
        React.createElement(
          "h5",
          null,
          props.title
        )
      )
    )
  );
};

var PortfolioNav = function PortfolioNav() {
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
          { className: "navbar-header" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "navbar-toggle collapsed",
              "data-toggle": "collapse",
              "data-target": "#right-nav",
              "aria-expanded": "false"
            },
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
            "span",
            { className: "navbar-brand" },
            "Jeremy L. Shepherd"
          )
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "right-nav" },
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
};

var PortfolioBanner = function PortfolioBanner() {
  return React.createElement(
    "div",
    { className: "container-fluid", id: "jumbo-container" },
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
                { href: "https://www.linkedin.com/in/jeremylshepherd" },
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
                { href: "https://freecodecamp.com/jeremylshepherd" },
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
                { href: "https://codepen.io/jeremylshepherd" },
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
};

var PortfolioAbout = function PortfolioAbout() {
  return React.createElement(
    "div",
    { id: "about-container", className: "container-fluid" },
    React.createElement(
      "div",
      { id: "about", className: "about-me container" },
      React.createElement(
        "div",
        { className: "col-sm-6" },
        React.createElement(
          "div",
          { className: "polaroid" },
          React.createElement("img", {
            id: "self",
            className: "self",
            src: "https://gravatar.com/avatar/28acf74786d34d55ddbba649aab086c5.jpg?s=360&r=pg",
            alt: "Jeremy L. Shepherd"
          }),
          React.createElement(
            "span",
            { className: "gutter" },
            "Jeremy 2017"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "col-xs-12 col-sm-6" },
        React.createElement(
          "p",
          null,
          "My name is Jeremy and I am full-stack web & mobile developer."
        ),
        React.createElement(
          "p",
          null,
          "In 2014, I wanted to build a website to showcase my photography and maybe pick up some side work. I scoured tutorials, built a decent site, and found that I really enjoyed coding."
        ),
        React.createElement(
          "p",
          null,
          "I spent " + date() + " years working in law enforcement. Now, I have a passion for building functional and beautiful web/mobile applications that enhance people's lives and free them to focus time and energy on following their passions.",
          React.createElement("br", null),
          React.createElement("br", null),
          React.createElement(
            "span",
            null,
            "Compentencies:"
          ),
          React.createElement("br", null),
          " ",
          React.createElement(Bullet, null),
          " React, React-Native, Angular, D3",
          React.createElement("br", null),
          " ",
          React.createElement(Bullet, null),
          " Node, Express, Ruby on Rails",
          React.createElement("br", null),
          " ",
          React.createElement(Bullet, null),
          " SQL, MongoDB"
        )
      )
    )
  );
};

var PortfolioProjects = function (_React$Component) {
  _inherits(PortfolioProjects, _React$Component);

  function PortfolioProjects() {
    _classCallCheck(this, PortfolioProjects);

    var _this = _possibleConstructorReturn(this, (PortfolioProjects.__proto__ || Object.getPrototypeOf(PortfolioProjects)).call(this));

    _this.state = { query: "" };

    _this.handleQuery = _this.handleQuery.bind(_this);
    _this.clearQuery = _this.clearQuery.bind(_this);
    return _this;
  }

  _createClass(PortfolioProjects, [{
    key: "handleQuery",
    value: function handleQuery(e) {
      this.setState({ query: e.target.value });
    }
  }, {
    key: "clearQuery",
    value: function clearQuery() {
      this.setState({ query: "" });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filtered = void 0;
      if (this.state.query) {
        filtered = [];
        this.props.data.map(function (r) {
          if (queryCheck(r, _this2.state.query)) {
            filtered.push(r);
          }
        });
      } else {
        filtered = this.props.data;
      }
      var ThumbNodes = filtered.map(function (project) {
        var technologies = project.technologies.join(", ");
        var title = project.title.length < 40 ? project.title : project.title.slice(0, 37) + "...";
        return React.createElement(Thumb, {
          url: project.url,
          title: title,
          technologies: technologies,
          type: project.type,
          img: project.img
        });
      });
      var Loading = this.props.loading ? React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "h1",
          { className: "text-center" },
          React.createElement("i", { className: "fa fa-spinner fa-pulse fa-inverse", "aria-hidden": "true" }),
          "  Projects are loading..."
        )
      ) : null;
      return React.createElement(
        "div",
        { id: "portfolio", className: "container-fluid portfolio" },
        React.createElement(
          "div",
          { className: "constrain row" },
          React.createElement(
            "form",
            { className: "form-group col-xs-12" },
            React.createElement(
              "div",
              { className: "input-group" },
              React.createElement("input", {
                type: "text",
                className: "form-control",
                value: this.state.query,
                placeholder: "Search...",
                onChange: this.handleQuery
              }),
              React.createElement(
                "div",
                { className: "input-group-addon", onClick: this.clearQuery },
                "Clear"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            ThumbNodes
          ),
          React.createElement(
            "div",
            { className: "row" },
            Loading
          )
        )
      );
    }
  }]);

  return PortfolioProjects;
}(React.Component);

var PortfolioContact = function PortfolioContact() {
  return React.createElement(
    "div",
    { className: "container-fluid" },
    React.createElement(
      "div",
      { id: "contact", className: "contact" },
      React.createElement(
        "div",
        { className: "col-xs-10 col-xs-offset-1" },
        React.createElement(
          "h4",
          null,
          React.createElement(
            "a",
            {
              href: "mailto:jeremylshepherd@gmail.com?Subject=Inquiry",
              target: "_top"
            },
            React.createElement("i", { className: "fa fa-envelope", "aria-hidden": "true" }),
            " ",
            "jeremylshepherd@gmail.com"
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
            { id: "github" },
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
            { id: "twitter" },
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
            { id: "linkedin" },
            React.createElement(
              "a",
              { href: "https://www.linkedin.com/in/jeremylshepherd" },
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
            { id: "freecodecamp" },
            React.createElement(
              "a",
              { href: "https://freecodecamp.com/jeremylshepherd" },
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
            { id: "codepen" },
            React.createElement(
              "a",
              { href: "https://codepen.io/jeremylshepherd" },
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
};

var PortfolioFooter = function PortfolioFooter() {
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
            "Copyright \xA9 Jeremy L. Shepherd 2017. All Rights Reserved"
          )
        )
      )
    )
  );
};

var CollapseCont = function (_React$Component2) {
  _inherits(CollapseCont, _React$Component2);

  function CollapseCont(props) {
    _classCallCheck(this, CollapseCont);

    var _this3 = _possibleConstructorReturn(this, (CollapseCont.__proto__ || Object.getPrototypeOf(CollapseCont)).call(this, props));

    _this3.state = {
      show: true
    };

    _this3.toggle = _this3.toggle.bind(_this3);
    return _this3;
  }

  _createClass(CollapseCont, [{
    key: "toggle",
    value: function toggle() {
      this.setState({ show: !this.state.show });
    }
  }, {
    key: "render",
    value: function render() {
      var s = this.state.show;
      var show = s ? "xxx" : "zzz";
      var icon = s ? "fa-plus-square" : "fa-minus-square";
      return React.createElement(
        "div",
        { style: contStyle, className: "colCont" },
        React.createElement(
          "div",
          { className: "container-fluid header-bar" },
          React.createElement(
            "h1",
            { style: { float: "left" } },
            this.props.heading
          ),
          React.createElement("i", {
            className: "fa " + icon + " fa-2x",
            onClick: this.toggle,
            style: { float: "right", marginTop: 30 }
          })
        ),
        React.createElement(
          "div",
          { className: show },
          this.props.children
        )
      );
    }
  }]);

  return CollapseCont;
}(React.Component);

var Portfolio = function (_React$Component3) {
  _inherits(Portfolio, _React$Component3);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    var _this4 = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this));

    _this4.state = {
      data: [],
      isLoading: false
    };

    _this4.loadProjects = _this4.loadProjects.bind(_this4);
    return _this4;
  }

  _createClass(Portfolio, [{
    key: "loadProjects",
    value: function loadProjects() {
      var _this5 = this;

      this.setState({ isLoading: true });
      $.ajax({
        url: this.props.url,
        dataType: "json",
        cache: false,
        success: function success(data) {
          _this5.setState({
            data: data,
            isLoading: false
          });
        },
        error: function error(xhr, status, err) {
          console.error(_this5.props.url, status, err.toString());
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadProjects();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(PortfolioNav, null),
        React.createElement(PortfolioBanner, null),
        React.createElement(
          CollapseCont,
          { heading: "About Me" },
          React.createElement(PortfolioAbout, null)
        ),
        React.createElement(
          CollapseCont,
          { heading: "Projects" },
          React.createElement(PortfolioProjects, {
            data: this.state.data,
            loading: this.state.isLoading
          })
        ),
        React.createElement(
          CollapseCont,
          { heading: "Contact" },
          React.createElement(PortfolioContact, null)
        ),
        React.createElement(PortfolioFooter, null)
      );
    }
  }]);

  return Portfolio;
}(React.Component);

ReactDOM.render(React.createElement(Portfolio, { url: projectData }), document.getElementById("app"));
//# sourceMappingURL=/Users/jeremylshepherd/Dropbox/Web Dev Work/FreeCodeCamp/API/index.js.map