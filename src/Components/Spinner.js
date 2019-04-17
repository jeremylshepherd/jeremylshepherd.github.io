import React from 'react';

const Spinner = ({ msg }) => (
    <div className="text-center">
        <h1 className="text-center loading">
            <i className="fa fa-spinner fa-pulse fa-inverse" aria-hidden="true" />
            <span className="pulse">{msg}</span>
        </h1>
    </div>
);

export default Spinner;
