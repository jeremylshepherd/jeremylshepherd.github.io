import React from 'react';
import Banner from './Banner';
import CollapseCont from './CollapseCont';
import BackButtonRouter from './BackButton';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const ProjectPage = props => {
    const stack = props.technologies.map((p, i) => {
        return <li key={i}>{p}</li>;
    });
    const description = !props.description ? null : (
        <React.Fragment>
            <h3 className="read">Description:</h3>
            <span className="read">{props.description}</span>
        </React.Fragment>
    );
    const back = window.navigator.standalone ? <BackButtonRouter /> : null;
    return (
        <div className="project-page">
            {back}
            <div className="stack">
                <h3 className="display">{props.title}</h3>
                <h3 className="read">{`Type: ${props.type}`}</h3>
                {description}
                <h3 className="read">Stack:</h3>
                <ul className="read tech">{stack}</ul>
            </div>
            <div className="screenshot">
                <h2 className="display">Screenshot</h2>
                <a href={props.url} target="_blank">
                    <img src={props.img} alt={props.title} />
                </a>
            </div>
        </div>
    );
};

export default ProjectPage;
