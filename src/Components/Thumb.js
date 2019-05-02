import React from 'react';
import { Link } from 'react-router-dom';
import { tileClass } from '../utils';

const Thumb = props => (
    <div className={tileClass}>
        <Link to={`/${props._id}`}>
            <div className="frame">
                <span className="overlay">
                    <p>
                        {props.title + ':'} <br />
                        {props.technologies} <br />
                        {'Project type: ' + props.type}
                    </p>
                </span>
                <img
                    className="image"
                    src={`http://${window.location.host}/assets/${props.img.split('/').pop()}`}
                    alt={`${props.title}-screenshot`}
                />
                <h5>{props.title}</h5>
            </div>
        </Link>
    </div>
);

export default Thumb;
