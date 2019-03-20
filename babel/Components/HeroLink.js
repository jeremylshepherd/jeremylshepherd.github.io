import React from 'react';

const HeroLink = ({ name, link, icon }) => (
    <li title={name}>
        <a id="profile-link" href={link} target="_blank">
            <i className={icon} />
            <span className="label">{name}</span>
        </a>
    </li>
);

export default HeroLink;
