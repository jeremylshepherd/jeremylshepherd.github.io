export default class PortfolioProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
    }

    handleInput(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    }

    clearQuery(e) {
        this.setState({query: ''});
    }

    render() {
        let queryCheck = (r, q) => {
            q = q.toLowerCase();
            let tech = r.technologies.join(', ');
            if(
                r.title.toLowerCase().indexOf(q) !== -1 ||
                tech.toLowerCase().indexOf(q) !== -1 ||
                r.type.toLowerCase().indexOf(q) !== -1
            ) {
                return true;
            }else{
                return false;
            }
        };
        let filtered;
        if(this.state.query) {
            filtered = [];
            this.props.data.map((r) => {
                if(queryCheck(r, this.state.query)) {
                    filtered.push(r);
                }
            });
        }else{
            filtered = this.props.data;
        }
        var ThumbNodes = filtered.map((project) => {
            var technologies = project.technologies.join(', ');
            return (
                <div className="col-sm-4 col-xs-12 frame">
                    <a href={project.url}>
                        <span className="overlay"><p>{project.title + ':'} <br/> { technologies}<br/>{'Project type: ' + project.type}</p></span>
                        <img
                            className="image img-responsive"
                            src={project.img}
                        />
                        <h5>{project.title}</h5>
                    </a>
                </div>
            );
        });
        return (
            <div id="portfolio" className="container-fluid portfolio">
                <div className="constrain row">
                    <h2>Projects</h2>
                    <form className="form-group col-xs-12">
                        <div className="input-group">
                            <input type="text" className="form-control" value={this.state.query} placeholder="Search..." onChange={this.handleInput} name="query"/>
                            <div className="input-group-addon" onClick={this.clearQuery}>Clear</div>
                        </div>
                    </form>
                    {ThumbNodes}
                </div>
            </div>
        );
    }
};
