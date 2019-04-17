import React from 'react';
import BackButtonRouter from './BackButton';

export default class ProjectPage extends React.Component {
    state = {
        project: {}
    };

    getProject = () => {
        const id = this.props.match.params.id;
        const url = 'https://jeremylshepherd.herokuapp.com/api/project';
        fetch(`${url}/${id}`)
            .then(blob => blob.json())
            .then(json => this.setState({ project: json }));
    };

    componentDidMount() {
        this.getProject();
    }

    render() {
        const { project } = this.state;
        const stack = !project.technologies
            ? null
            : project.technologies.map((p, i) => {
                  return <li key={i}>{p}</li>;
              });
        const description = !project.description ? null : (
            <React.Fragment>
                <h3 className="read">Description:</h3>
                <span className="read">{project.description}</span>
            </React.Fragment>
        );
        const back = window.navigator.standalone ? <BackButtonRouter /> : null;
        return (
            <div className="project-page">
                {back}
                <div className="stack">
                    <h3 className="display">{project.title}</h3>
                    <h3 className="read">{`Type: ${project.type}`}</h3>
                    {description}
                    <h3 className="read">Stack:</h3>
                    <ul className="read tech">{stack}</ul>
                </div>
                <div className="screenshot">
                    <h2 className="display">Screenshot</h2>
                    <a href={project.url} target="_blank" rel="noopener" rel="noreferrer">
                        <img src={project.img} alt={project.title} />
                    </a>
                </div>
            </div>
        );
    }
}
