(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var About = function About() {
    var date = function date() {
        var start = new Date(1998, 2, 30).getFullYear();
        var now = new Date(Date.now()).getFullYear();
        return now - start;
    };
    return React.createElement(
        "div",
        { id: "about-container", className: "container-fluid" },
        React.createElement(
            "div",
            { id: "about", className: "about-me container" },
            React.createElement(
                "div",
                { className: "col-sm-6 hidden-xs" },
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
                    "I am a self-taught full-stack developer. In 2014, I began teaching myself front-end development in order to start a new career. I have spent the past " + date() + " years working in law enforcement. I have a passion for building functional and beautiful web applications that enhance people's lives and free them to spend their focus and energy on following their passions.",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement(
                        "span",
                        null,
                        "Compentencies:"
                    ),
                    React.createElement("br", null),
                    " \"MEAN\" stack (MongoDB, ExpressJS, AngularJS, NodeJS)",
                    React.createElement("br", null),
                    " Ruby on Rails, ERB, HAML, SASS, RSPEC,",
                    React.createElement("br", null),
                    " React, d3, Jade, EJS, HTML5, CSS3, Vanilla JS, jQuery, MongooseJS, and Bootstrap"
                )
            )
        )
    );
};

exports.default = About;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Banner = function Banner(props) {
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
};

exports.default = Banner;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Contact = function Contact() {
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
};

exports.default = Contact;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Footer = function Footer() {
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

exports.default = Footer;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Nav = function Nav(props) {
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
                        { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#nav-col", "aria-expanded": "false" },
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
                    { className: "collapse navbar-collapse", id: "nav-col" },
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

exports.default = Nav;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortfolioProjects = function (_React$Component) {
    _inherits(PortfolioProjects, _React$Component);

    function PortfolioProjects(props) {
        _classCallCheck(this, PortfolioProjects);

        var _this = _possibleConstructorReturn(this, (PortfolioProjects.__proto__ || Object.getPrototypeOf(PortfolioProjects)).call(this, props));

        _this.state = {
            query: ''
        };

        _this.handleInput = _this.handleInput.bind(_this);
        _this.clearQuery = _this.clearQuery.bind(_this);
        return _this;
    }

    _createClass(PortfolioProjects, [{
        key: 'handleInput',
        value: function handleInput(e) {
            var target = e.target;
            var name = target.name;
            var value = target.value;
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'clearQuery',
        value: function clearQuery(e) {
            this.setState({ query: '' });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var queryCheck = function queryCheck(r, q) {
                q = q.toLowerCase();
                var tech = r.technologies.join(', ');
                if (r.title.toLowerCase().indexOf(q) !== -1 || tech.toLowerCase().indexOf(q) !== -1 || r.type.toLowerCase().indexOf(q) !== -1) {
                    return true;
                } else {
                    return false;
                }
            };
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
                var technologies = project.technologies.join(', ');
                return React.createElement(
                    'div',
                    { className: 'col-sm-4 col-xs-12 frame' },
                    React.createElement(
                        'a',
                        { href: project.url },
                        React.createElement(
                            'span',
                            { className: 'overlay' },
                            React.createElement(
                                'p',
                                null,
                                project.title + ':',
                                ' ',
                                React.createElement('br', null),
                                ' ',
                                technologies,
                                React.createElement('br', null),
                                'Project type: ' + project.type
                            )
                        ),
                        React.createElement('img', {
                            className: 'image img-responsive',
                            src: project.img
                        }),
                        React.createElement(
                            'h5',
                            null,
                            project.title
                        )
                    )
                );
            });
            return React.createElement(
                'div',
                { id: 'portfolio', className: 'container-fluid portfolio' },
                React.createElement(
                    'div',
                    { className: 'constrain row' },
                    React.createElement(
                        'h2',
                        null,
                        'Projects'
                    ),
                    React.createElement(
                        'form',
                        { className: 'form-group col-xs-12' },
                        React.createElement(
                            'div',
                            { className: 'input-group' },
                            React.createElement('input', { type: 'text', className: 'form-control', value: this.state.query, placeholder: 'Search...', onChange: this.handleInput, name: 'query' }),
                            React.createElement(
                                'div',
                                { className: 'input-group-addon', onClick: this.clearQuery },
                                'Clear'
                            )
                        )
                    ),
                    ThumbNodes
                )
            );
        }
    }]);

    return PortfolioProjects;
}(React.Component);

exports.default = PortfolioProjects;
;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NavBabel = require('./Nav.babel.js');

var _NavBabel2 = _interopRequireDefault(_NavBabel);

var _BannerBabel = require('./Banner.babel.js');

var _BannerBabel2 = _interopRequireDefault(_BannerBabel);

var _AboutBabel = require('./About.babel.js');

var _AboutBabel2 = _interopRequireDefault(_AboutBabel);

var _ProjectsBabel = require('./Projects.babel.js');

var _ProjectsBabel2 = _interopRequireDefault(_ProjectsBabel);

var _ContactBabel = require('./Contact.babel.js');

var _ContactBabel2 = _interopRequireDefault(_ContactBabel);

var _FooterBabel = require('./Footer.babel.js');

var _FooterBabel2 = _interopRequireDefault(_FooterBabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// New api for my portfolio projects, free heroku server so may take a moment to wake up

var projectData = 'https://jeremylshepherd.herokuapp.com/api/jeremylshepherd/projects';

var Portfolio = function (_React$Component) {
    _inherits(Portfolio, _React$Component);

    function Portfolio(props) {
        _classCallCheck(this, Portfolio);

        var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

        _this.state = {
            data: []
        };

        _this.loadProjects = _this.loadProjects.bind(_this);
        return _this;
    }

    _createClass(Portfolio, [{
        key: 'loadProjects',
        value: function loadProjects() {
            var _this2 = this;

            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function success(data) {
                    _this2.setState({
                        data: data
                    });
                },
                error: function error(xhr, status, err) {
                    console.error(_this2.props.url, status, err.toString());
                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadProjects();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_NavBabel2.default, null),
                React.createElement(_BannerBabel2.default, null),
                React.createElement(_AboutBabel2.default, null),
                React.createElement(_ProjectsBabel2.default, { data: this.state.data }),
                React.createElement(_ContactBabel2.default, null),
                React.createElement(_FooterBabel2.default, null)
            );
        }
    }]);

    return Portfolio;
}(React.Component);

exports.default = Portfolio;
;

ReactDOM.render(React.createElement(Portfolio, { url: projectData }), document.getElementById('app'));

},{"./About.babel.js":1,"./Banner.babel.js":2,"./Contact.babel.js":3,"./Footer.babel.js":4,"./Nav.babel.js":5,"./Projects.babel.js":6}]},{},[7]);
