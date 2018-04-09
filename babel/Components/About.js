import React from 'react';
import Bullet from './Bullet';
import Profile from './Profile';
import { date } from '../../assets/helpers';

export default class About extends React.Component {
    constructor() {
        super();

        this.defaultSRC = this.defaultSRC.bind(this);
    }

    defaultSRC(e) {
        e.target.src =
            'https://raw.githubusercontent.com/jeremylshepherd/jeremylshepherd.github.io/master/assets/Image_not_available.gif';
    }

    render() {
        return (
            <div id="about-container" className="container-fluid">
                <div id="about" className="about-me container">
                    <Profile />
                    <div className="col-sm-6 col-xs-12">
                        <p>
                            {`My name is Jeremy and I am full-stack web & mobile (React Native) developer.`}
                        </p>
                        <p>
                            {`In 2014, I wanted to build a website to showcase my photography and maybe pick up some side work. I scoured tutorials, built a decent site, and found that I really enjoyed coding.`}
                        </p>
                        <p>
                            {`I have spent ${date()} years working in law enforcement. Now, I have a passion for building functional and beautiful web/mobile applications that enhance people's lives and free them to focus time and energy on following their passions.`}

                            <br /><a href='../../assets/resume.pdf' target="_blank">Résumé</a>
                            <br />
                            <br />
                            <span>Technologies:</span>
                            <br /> <Bullet /> React, React-Native, Angular, D3
                            <br /> <Bullet /> Node, Express, Ruby on Rails
                            <br /> <Bullet /> SQL, MongoDB
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
