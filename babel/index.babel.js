// New api for my portfolio projects, free heroku server so may take a moment to wake up

const projectData = 'https://jeremylshepherd.herokuapp.com/api/jeremylshepherd/projects';

import Nav from './Nav.babel.js';
import Banner from './Banner.babel.js';
import About from './About.babel.js';
import Projects from './Projects.babel.js';
import Contact from './Contact.babel.js';
import Footer from './Footer.babel.js';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        this.loadProjects = this.loadProjects.bind(this);
    }

    loadProjects() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({
                    data: data
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
        return(
            <div>
                <Nav />
                <Banner />
                <About />
                <Projects data={this.state.data}/>
                <Contact />
                <Footer />
            </div>
        );
    }
};

ReactDOM.render(<Portfolio url={projectData}/>, document.getElementById('app'));
