import React from 'react';
import { Link } from 'react-router-dom';

const RouteError = ({ location }) => {
    console.log(location);
    return (
        <div className="error">
            <img src="../../assets/RouterError.jpeg" />
            <h1 className="display">Oops! I seemed to have misplaced that route.</h1>
            <Link className="primary-button" to="/">
                Take me home!
            </Link>
        </div>
    );
};

export default RouteError;
