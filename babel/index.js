// Back-end server for creating, deleting, and feeding my potfolio
// The server is a free Heroku app, so it may take moment to wake

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/Nav';
import ProjectPage from './Components/ProjectPage';
import Footer from './Components/Footer';
import RouteError from './Components/RouteError';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Better naming conventions

const storage = window.localStorage;

const projectData = 'https://jeremylshepherd.herokuapp.com/api/jeremylshepherd/projects';

class Portfolio extends React.Component {
    state = {
        data: [],
        isLoading: false
    };

    loadProjects = () => {
        this.setState({ isLoading: true });
        fetch(this.props.url)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    data: data,
                    isLoading: false
                })
            );
    };

    componentDidMount() {
        this.loadProjects();
    }

    render() {
        const projRoutes = this.state.data.map(t => {
            return <Route key={t._id} path={`/${t._id}`} render={() => <ProjectPage {...t} />} />;
        });
        return (
            <Router>
                <div>
                    <div className="full">
                        <Nav />
                        <div id="content">
                            <Switch>
                                <Route exact path="/" render={() => <Main {...this.state} />} />
                                {projRoutes}
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
