// Back-end server for creating, deleting, and feeding my potfolio
// The server is a free Heroku app, so it may take moment to wake

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Nav';
import ProjectPage from './Components/ProjectPage';
import RouteError from './Components/RouteError';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Spinner from './Components/Spinner';

const storage = window.localStorage;

const projectData = 'https://api.jeremylshepherd.io/api/jeremylshepherd/projects';

class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: false,
        };
    }

    loadProjects = () => {
        if ('projects' in storage) {
            console.log('projects are in storage');
            let projects = JSON.parse(storage.getItem('projects'));
            this.setState({ data: projects });
        }
        this.setState({ isLoading: true });
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data,
                    isLoading: false,
                });
                storage.setItem('projects', JSON.stringify(data));
            });
    };

    componentDidMount() {
        this.loadProjects();
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="full">
                        <Nav />
                        <div id="content">
                            <Switch>
                                <Route exact path="/" render={() => <Main {...this.state} />} />
                                <Route exact path="/404" component={RouteError} />
                                <Route path="/:id" component={ProjectPage} />
                                <Route component={RouteError} />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Portfolio url={projectData} />, document.getElementById('app'));
