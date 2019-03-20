import React from 'react';
import HeroLink from './HeroLink';
import { socialData } from '../utils';

const Banner = () => (
    <div id="home" className="hero">
        <div className="content">
            <h1>Jeremy L. Shepherd</h1>
            <h3>Full-Stack Developer</h3>
            <ul className="social">
                {socialData.map(s => (
                    <HeroLink key={`${s.name}-jumbo`} {...s} />
                ))}
            </ul>
        </div>
    </div>
);

export default Banner;
