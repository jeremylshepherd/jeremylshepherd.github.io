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
import CollapseCont from './Components/CollapseCont';
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
        console.log(process.env);
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
