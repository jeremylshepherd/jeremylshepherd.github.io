import React from 'react';
import Banner from './Banner';
import CollapseCont from './CollapseCont';
import BackButtonRouter from './BackButton';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const ProjectPage = props => {
    const stack = props.technologies.map((p, i) => {
        return (
            <li key={i}>{p}</li>
        );
    });
    const back = window.navigator.standalone ? <BackButtonRouter /> : null;
    return (
        <div className="container">
            { back }
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <div className="flexCont flexCol justSA">
                        <h3 className="display">{props.title}</h3>
                        <h3 className="read">{`Type: ${props.type}`}</h3>
                        <h3 className="read">Stack:</h3>
                        <ul className="read tech">
                            {stack}
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-md-8">
                    <h2 className="text-center header-bar">Screenshot</h2>
                    <a href={props.url}><img src={props.img} alt={props.title} className="img-responsive"/></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
