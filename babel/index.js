// Back-end server for creating, deleting, and feeding my potfolio
// The server is a free Heroku app, so it may take moment to wake

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import CollapseCont from './CollapseCont';
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
            <div>
                <Nav />
                <Banner />
                <CollapseCont heading="About Me">
                    <About />
                </CollapseCont>
                <CollapseCont heading="Projects">
                    <Projects
                        data={this.state.data}
                        loading={this.state.isLoading}
                    />
                </CollapseCont>
                <CollapseCont heading="Contact">
                    <Contact />
                </CollapseCont>
                <Footer />
            </div>
        );
    }
}

// This is the VSCODE version

ReactDOM.render(
    <Portfolio url={projectData} />,
    document.getElementById('app')
);
