// Back-end server for creating, deleting, and feeding my potfolio
// The server is a free Heroku app, so it may take moment to wake

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Nav';
import About from './Components/About';
import Banner from './Components/Banner';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import RouteError from './Components/RouteError';
import CollapseCont from './Components/CollapseCont';
import Main from './Components/Main';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import $ from 'jquery';

// Better naming conventions

const projectData =
    'https://jeremylshepherd.herokuapp.com/api/jeremylshepherd/projects';

class Portfolio extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoading: false
        };

        this.loadProjects = this.loadProjects.bind(this);
    }

    loadProjects() {
        this.setState({ isLoading: true });
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({
                    data: data,
                    isLoading: false
                });
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadProjects();
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Route exact path="/" render={() => <Main {...this.state} />} />
                    <Route component={RouteError} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

// This is the VSCODE version

ReactDOM.render(
    <Portfolio url={projectData} />,
    document.getElementById('app')
);
