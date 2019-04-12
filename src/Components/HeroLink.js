import React from 'react';

const HeroLink = ({ name, link, icon }) => (
    <li title={name}>
        <a id="profile-link" href={link} target="_blank" rel="noopener" rel="noreferrer">
            <i className={icon} />
            <span className="label">{name}</span>
        </a>
    </li>
);

export default HeroLink;
