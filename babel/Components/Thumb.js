import React from 'react';
import { Link } from 'react-router-dom';

const Thumb = props => {
    return (
        <div className="col-lg-4 col-sm-6 col-xs-12">
            <Link to={`/${props.id}`}>
                <div className="frame">
                    {/*<a href={props.url}>*/}
                        <span className="overlay">
                            <p>
                                {props.title + ':'} <br /> {props.technologies}
                                <br />
                                {'Project type: ' + props.type}
                            </p>
                        </span>
                        <img className="image" src={props.img} />
                        <h5>{props.title}</h5>
                    {/*</a>*/}
                </div>
            </Link>
        </div>
    );
};

export default Thumb;
